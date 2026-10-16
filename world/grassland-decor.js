/* Isolated decorative overlay. No collisions, spawns or gameplay. */
(function(root){'use strict';
const items=[['oak',96,112],['bush',64,48],['rock',64,56],['flowers',48,40]];
function h(x,y,s){let z=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(s+1,1274126177);z=Math.imul(z^(z>>>13),1274126177);return(z^(z>>>16)>>>0)/4294967296;}
function createDecor(options={}){
const base=options.assetBase||'assets/grassland/';
const sprites=Object.create(null);
for(const [name] of items){const im=new Image();im.src=base+name+'.svg';sprites[name]=im;}
function render(ctx,cameraX,cameraY,width,height){
const size=192,loX=Math.floor(cameraX/size)-1,hiX=Math.ceil((cameraX+width)/size)+1,loY=Math.floor(cameraY/size)-1,hiY=Math.ceil((cameraY+height)/size)+1;
ctx.save();ctx.imageSmoothingEnabled=false;
for(let gy=loY;gy<=hiY;gy++)for(let gx=loX;gx<=hiX;gx++){
const seed=h(gx,gy,5);if(seed<.19)continue;
const index=seed>.83?0:seed>.59?1:seed>.38?2:3;
const [name,w,ht]=items[index],img=sprites[name];
if(!img.complete||!img.naturalWidth)continue;
const x=gx*size+24+h(gx,gy,9)*140,y=gy*size+24+h(gx,gy,10)*140;
ctx.drawImage(img,Math.round(x-w/2),Math.round(y-ht),w,ht);
}
ctx.restore();
}
return Object.freeze({render,items:items.map(([name,width,height])=>({name,width,height,anchorX:width/2,anchorY:height}))});
}
root.EclipseGrasslandDecor=Object.freeze({createDecor});
})(typeof window!=='undefined'?window:globalThis);
