/* ECLIPSE / Mercenary B animation controller.
 * Standalone ES module. No game.js side effects; integration by main technical chat.
 * The original character art is never sliced, warped or replaced here.
 */
export const MERCENARY_STATES=Object.freeze(["idle","run","attack","dodge","hit","death"]);
export const MERCENARY_CLIPS=Object.freeze({
  idle:{frames:8,fps:8,loop:true},
  run:{frames:8,fps:12,loop:true},
  attack:{frames:8,fps:24,loop:false},
  dodge:{frames:8,fps:24,loop:false},
  hit:{frames:4,fps:16,loop:false},
  death:{frames:12,fps:12,loop:false}
});
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export class MercenaryAnimator {
  constructor(clips=MERCENARY_CLIPS){this.clips=clips;this.state="idle";this.elapsed=0;this.facing=1;}
  setState(next,{restart=false}={}){
    if(!this.clips[next])throw new Error("Unknown mercenary animation: "+next);
    if(next!==this.state||restart){this.state=next;this.elapsed=0;}
    return this;
  }
  face(x){if(Number.isFinite(x)&&Math.abs(x)>.01)this.facing=x<0?-1:1;return this;}
  update(dt){if(Number.isFinite(dt)&&dt>0)this.elapsed+=dt;return this;}
  sample(){
    const clip=this.clips[this.state],total=clip.frames/clip.fps;
    const time=clip.loop?this.elapsed%total:clamp(this.elapsed,0,total);
    const index=clip.loop?Math.floor(time*clip.fps)%clip.frames:Math.min(clip.frames-1,Math.floor(time*clip.fps));
    return {state:this.state,index,frames:clip.frames,facing:this.facing,done:!clip.loop&&this.elapsed>=total,normalized:clip.loop?time/total:clamp(time/total,0,1)};
  }
}
/* Atlas contract: each state has one horizontal row of equally sized transparent
 * frames; anchorX/Y is the shared ground anchor within each cell.
 * The renderer draws the sprite unmodified. No fake rotations, strip slicing,
 * stretching or duplicate frames.
 */
export function drawMercenaryFrame(ctx,atlas,frame,{x,y,frameWidth,frameHeight,anchorX=frameWidth/2,anchorY=frameHeight,scale=1}){
  if(!ctx||!atlas||!frame||!Number.isFinite(scale)||scale<=0)return false;
  const row=MERCENARY_STATES.indexOf(frame.state);
  if(row<0||!Number.isInteger(frame.index)||frame.index<0||frame.index>=MERCENARY_CLIPS[frame.state].frames||!Number.isFinite(frameWidth)||!Number.isFinite(frameHeight)||frameWidth<=0||frameHeight<=0)return false;
  ctx.save();ctx.translate(x,y);ctx.scale(frame.facing<0?-scale:scale,scale);
  ctx.drawImage(atlas,frame.index*frameWidth,row*frameHeight,frameWidth,frameHeight,-anchorX,-anchorY,frameWidth,frameHeight);
  ctx.restore();return true;
}
