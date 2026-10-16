/* ECLIPSE Chapter 1 grassland: visual-only world-coordinate ground renderer. */
(function(root){'use strict';
const CELL=64,STEP=8,PALETTE=['#3c713e','#477d40','#568a42','#669849','#76a14d','#86ab55','#a0ae60'];
function hash(x,y,s=0){let z=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(s+1,1274126177);z=Math.imul(z^(z>>>13),1274126177);return(z^(z>>>16)>>>0)/4294967296;}
function noise(x,y,s){let a=Math.floor(x),b=Math.floor(y),u=x-a,v=y-b;u=u*u*(3-2*u);v=v*v*(3-2*v);let p=hash(a,b,s),q=hash(a+1,b,s),r=hash(a,b+1,s),t=hash(a+1,b+1,s);return (p+(q-p)*u)*(1-v)+(r+(t-r)*u)*v;}
function pathDistance(x,y){let center= Math.sin(x/440)*105+Math.sin(x/185+1.2)*38;return Math.abs(y-center);}
function createGrassland(options={}){
const quality=options.quality==='low'?'low':'high', tileCache=new Map(),CACHE_LIMIT=quality==='low'?180:300;let cacheLimit=CACHE_LIMIT;
function tile(gx,gy){const key=gx+','+gy;if(tileCache.has(key)){const t=tileCache.get(key);tileCache.delete(key);tileCache.set(key,t);return t;}
const c=document.createElement('canvas');c.width=c.height=CELL;const ctx=c.getContext('2d',{alpha:false});if(!ctx)return c;const ox=gx*CELL,oy=gy*CELL;
for(let y=0;y<CELL;y+=STEP)for(let x=0;x<CELL;x+=STEP){const wx=ox+x+4,wy=oy+y+4,macro=noise(wx/390,wy/390,3),micro=noise(wx/94,wy/94,4),fleck=noise(wx/26,wy/26,5),val=macro*.55+micro*.32+fleck*.13,edge=noise(wx/85,wy/85,11)*14-7,dist=pathDistance(wx,wy),blend=Math.max(0,Math.min(1,(49+edge-dist)/18));let ci=Math.max(0,Math.min(6,Math.floor(val*7)));ctx.fillStyle=PALETTE[ci];ctx.fillRect(x,y,STEP,STEP);
if(blend>0){let p=noise(wx/34,wy/34,12),color=p>.72?'#dec292':p>.44?'#c6a679':p>.2?'#b18d62':'#9b7955';ctx.globalAlpha=blend;ctx.fillStyle=color;ctx.fillRect(x,y,STEP,STEP);ctx.globalAlpha=1;}
}
const n=quality==='low'?18:42;
for(let i=0;i<n;i++){const px=Math.floor(hash(gx,gy,100+i)*CELL),py=Math.floor(hash(gx,gy,300+i)*CELL),wx=ox+px,wy=oy+py,road=pathDistance(wx,wy)<43+noise(wx/85,wy/85,11)*14-7;const r=hash(gx,gy,500+i);
if(road){ctx.fillStyle=r>.55?'#e0c79a':'#876d54';ctx.fillRect(px,py,r>.8?3:2,r>.75?2:1);}
else if(r>.87){ctx.fillStyle=r>.94?'#efe4d0':'#c2b6a0';ctx.fillRect(px,py,2,2);}
else{ctx.fillStyle=r>.52?'#aec46b':'#2f6d39';ctx.fillRect(px,py,1,3);ctx.fillRect(px+1,py+1,1,1);}
}
if(hash(gx,gy,999)>.67){let x=Math.floor(hash(gx,gy,1000)*48)+8,y=Math.floor(hash(gx,gy,1001)*48)+8;if(pathDistance(ox+x,oy+y)>62){const flower=hash(gx,gy,1002);ctx.fillStyle=flower>.65?'#f5e9cf':flower>.3?'#e7b9c9':'#eac65c';ctx.fillRect(x-2,y,2,2);ctx.fillRect(x+2,y,2,2);ctx.fillRect(x,y-2,2,2);ctx.fillRect(x,y+2,2,2);ctx.fillStyle='#c89a4b';ctx.fillRect(x,y,2,2);}}
tileCache.set(key,c);while(tileCache.size>cacheLimit)tileCache.delete(tileCache.keys().next().value);return c;}
function render(ctx,cameraX,cameraY,width,height,time=0){if(!ctx||width<=0||height<=0)return;const left=Math.floor(cameraX/CELL)-1,right=Math.ceil((cameraX+width)/CELL)+1,top=Math.floor(cameraY/CELL)-1,bottom=Math.ceil((cameraY+height)/CELL)+1;cacheLimit=Math.max(CACHE_LIMIT,(right-left+1)*(bottom-top+1)+2*(right-left+bottom-top+2));while(tileCache.size>cacheLimit)tileCache.delete(tileCache.keys().next().value);ctx.save();ctx.imageSmoothingEnabled=false;for(let gy=top;gy<=bottom;gy++)for(let gx=left;gx<=right;gx++)ctx.drawImage(tile(gx,gy),gx*CELL,gy*CELL);if(quality==='high'){const sx=Math.floor(cameraX/96)-1,ex=Math.ceil((cameraX+width)/96)+1,sy=Math.floor(cameraY/96)-1,ey=Math.ceil((cameraY+height)/96)+1;for(let gy=sy;gy<=ey;gy++)for(let gx=sx;gx<=ex;gx++){const x=gx*96+hash(gx,gy,700)*75,y=gy*96+hash(gx,gy,701)*75;if(pathDistance(x,y)<65)continue;const sway=Math.round(Math.sin(time*1.8+x*.03+y*.02)*2);ctx.fillStyle='#a9c46a';ctx.fillRect(Math.round(x+sway),Math.round(y-6),2,7);ctx.fillStyle='#3d773c';ctx.fillRect(Math.round(x-sway-3),Math.round(y-3),2,5);}}ctx.restore();}
return Object.freeze({render,cellSize:CELL,quality,clearCache(){tileCache.clear();}});
}
root.EclipseGrassland=Object.freeze({createGrassland});
})(typeof window!=='undefined'?window:globalThis);
