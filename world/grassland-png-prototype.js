/* ECLIPSE – PNG-only grassland prototype; visual-only. */
(function(root){'use strict';
const names=['grass_a','grass_b','grass_c','path','edge_left','edge_right'];
function createRenderer(base='assets/grassland/ground/'){
const images={};for(const name of names){const im=new Image();im.src=base+name+'.png';images[name]=im;}
function hash(x,y){let z=Math.imul(x,374761393)^Math.imul(y,668265263);z=Math.imul(z^(z>>>13),1274126177);return(z^(z>>>16)>>>0)/4294967296;}
function render(ctx,cx,cy,w,h){ctx.save();ctx.imageSmoothingEnabled=false;const size=128;for(let gy=Math.floor(cy/size)-1;gy<=Math.ceil((cy+h)/size);gy++)for(let gx=Math.floor(cx/size)-1;gx<=Math.ceil((cx+w)/size);gx++){let name=['grass_a','grass_b','grass_c'][Math.floor(hash(gx,gy)*3)];const road=Math.sin(gx*.22)*2+Math.sin(gx*.09)*2;const delta=gy-road;if(Math.abs(delta)<.5)name='path';else if(delta>=.5&&delta<1.5)name='edge_left';else if(delta<=-.5&&delta> -1.5)name='edge_right';const im=images[name];if(im.complete&&im.naturalWidth)ctx.drawImage(im,gx*size,gy*size,size,size);}ctx.restore();}
return Object.freeze({render,ready:()=>names.every(n=>images[n].complete&&images[n].naturalWidth>0)});
}
root.EclipseGrasslandPNG=Object.freeze({createRenderer});
})(typeof window!=='undefined'?window:globalThis);
