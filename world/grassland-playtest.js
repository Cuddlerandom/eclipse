/* Visual-only integration for the grassland playtest. Never creates gameplay objects. */
(function(root){'use strict';
const trees=['oak-mature','pine','amber-tree','blossom-tree'];
const rocks=['rock-moss','rock-cluster'];
const decor=['bush-lush','bush-berry','grass-tuft','stump','flowers'];
function createWorld(options={}){
 const ground=root.EclipseGrassland.createGrassland({quality:options.quality||'low'});
 const art=root.EclipseGrasslandArt.createRenderer('assets/grassland/');
 function drawGround(ctx,cameraX,cameraY,width,height,time){ground.render(ctx,cameraX,cameraY,width,height,time);}
 function drawTerrain(ctx,obstacles,cameraX,cameraY,width,height,blocked,hash){
  ctx.save();ctx.imageSmoothingEnabled=false;
  for(const o of obstacles){
   const name=o.tree?trees[o.variant%trees.length]:rocks[o.variant%rocks.length];
   // Contact shadow reaches the existing lower collision edge, especially below trunks.
   ctx.fillStyle='#173b2855';ctx.beginPath();ctx.ellipse(Math.round(o.x),Math.round(o.y+o.r*.4),Math.ceil(o.r),Math.ceil(o.r*.6),0,0,Math.PI*2);ctx.fill();
   const footY=o.tree?o.y:o.y+o.r+8*o.scale;
   if(!art.drawAt(ctx,name,o.x,footY,o.scale)){
    // Loading/error fallback: visible pixel marker covering the existing collision footprint.
    const r=Math.ceil(o.r),x=Math.round(o.x),y=Math.round(o.y);
    ctx.fillStyle=o.tree?'#513c2e':'#66796c';ctx.fillRect(x-r,y-r,r*2,r*2);
    ctx.fillStyle=o.tree?'#56824b':'#99ab8c';ctx.fillRect(x-r+3,y-r+3,r*2-6,5);
   }
  }
  // Reuse the original decorative cell density; do not add colliders or use the demo overlay.
  const cell=110;
  for(let gy=Math.floor(cameraY/cell)-1;gy<=Math.ceil((cameraY+height)/cell)+1;gy++){
   for(let gx=Math.floor(cameraX/cell)-1;gx<=Math.ceil((cameraX+width)/cell)+1;gx++){
    if(hash(gx,gy,801)>.075)continue;
    const x=gx*cell+15+hash(gx,gy,802)*80,y=gy*cell+15+hash(gx,gy,803)*80;
    if(blocked(x,y,17))continue;
    const name=decor[Math.min(4,Math.floor(hash(gx*7+13,gy*11-19,805)*5))];
    art.drawAt(ctx,name,x,y,.72+hash(gx,gy,804)*.65);
   }
  }
  ctx.restore();
 }
 return Object.freeze({drawGround,drawTerrain,assets:[...trees,...rocks,...decor]});
}
root.EclipseGrasslandPlaytest=Object.freeze({createWorld});
})(typeof window!=='undefined'?window:globalThis);
