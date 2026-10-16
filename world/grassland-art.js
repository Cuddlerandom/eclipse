/* ECLIPSE isolated visual asset API */
(function(root){'use strict';
const sizes={'oak-mature':[112,128],pine:[112,128],'amber-tree':[112,128],'blossom-tree':[112,128],'bush-lush':[72,56],'bush-berry':[72,56],'rock-moss':[80,72],'rock-cluster':[80,72],'grass-tuft':[48,48],stump:[64,56],flowers:[48,40]};
function createRenderer(base='assets/grassland/'){
const imgs={};for(const n of Object.keys(sizes)){const im=new Image();im.src=base+n+'.svg';imgs[n]=im;}
function drawAt(ctx,name,x,y,scale=1){const im=imgs[name],d=sizes[name];if(!im||!im.complete||!im.naturalWidth)return false;ctx.drawImage(im,Math.round(x-d[0]*scale/2),Math.round(y-d[1]*scale),Math.round(d[0]*scale),Math.round(d[1]*scale));return true;}
function drawObjects(ctx,objects){ctx.save();ctx.imageSmoothingEnabled=false;for(const o of objects)drawAt(ctx,o.name,o.x,o.y,o.scale||1);ctx.restore();}
return Object.freeze({drawAt,drawObjects,ready:()=>Object.values(imgs).every(im=>im.complete&&im.naturalWidth>0),items:Object.entries(sizes).map(([name,[width,height]])=>({name,width,height,anchorX:width/2,anchorY:height}))});
}
root.EclipseGrasslandArt=Object.freeze({createRenderer});
})(typeof window!=='undefined'?window:globalThis);
