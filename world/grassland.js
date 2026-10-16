/* ECLIPSE Chapter 1 grassland: visual renderer only, world-space coordinates. */
(function(root){
'use strict';
const CELL=64;
function hash(x,y,s){let h=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(s+1,1274126177);h=Math.imul(h^(h>>>13),1274126177);return (h^(h>>>16)>>>0)/4294967296;}
function createGrassland(options){
const low=options&&options.quality==='low';
function render(ctx,cameraX,cameraY,width,height,time){
if(!ctx||width<=0||height<=0)return;
const x0=Math.floor(cameraX/CELL)-1,x1=Math.ceil((cameraX+width)/CELL)+1;
const y0=Math.floor(cameraY/CELL)-1,y1=Math.ceil((cameraY+height)/CELL)+1;
ctx.save();
for(let gy=y0;gy<=y1;gy++)for(let gx=x0;gx<=x1;gx++){
const x=gx*CELL,y=gy*CELL,seed=hash(gx,gy,2);
const pathY=Math.sin(x/440)*105+Math.sin(x/185+1.2)*38;
const path=Math.abs(y+32-pathY)<38+hash(gx,gy,4)*20;
ctx.fillStyle=path?(seed>.5?'#bbaa7c':'#c9b98b'):seed>.65?'#7ab753':seed<.35?'#589947':'#6eaa4e';
ctx.fillRect(x,y,CELL+1,CELL+1);
const count=low?5:13;
for(let i=0;i<count;i++){
const xx=x+hash(gx,gy,20+i)*CELL,yy=y+hash(gx,gy,50+i)*CELL;
if(path){ctx.fillStyle=i%2?'#a89871':'#e1cc9d';ctx.fillRect(xx,yy,2,1);continue;}
const sway=low?0:Math.sin((time||0)*1.7+xx*.037+yy*.019)*1.3;
ctx.strokeStyle=i%3===0?'#b0d779':i%3===1?'#3d873d':'#92c56c';
ctx.lineWidth=i%4===0?1.5:1;
ctx.beginPath();ctx.moveTo(xx,yy+3);ctx.lineTo(xx+sway-1.4,yy-3-hash(gx,gy,90+i)*4);ctx.stroke();
}
if(!path&&seed>.78){
const fx=x+hash(gx,gy,201)*46+9,fy=y+hash(gx,gy,202)*46+9;
ctx.fillStyle=seed>.9?'#fff0c5':'#e8d4f4';
for(let j=0;j<5;j++){const a=j*Math.PI*2/5;ctx.beginPath();ctx.arc(fx+Math.cos(a)*3,fy+Math.sin(a)*3,1.8,0,Math.PI*2);ctx.fill();}
ctx.fillStyle='#e9bd56';ctx.fillRect(fx-1,fy-1,2,2);
}
if(!path&&seed<.12){
const rx=x+hash(gx,gy,301)*44+10,ry=y+hash(gx,gy,302)*44+10;
ctx.fillStyle='#839187';ctx.beginPath();ctx.ellipse(rx,ry,6,3.5,-.3,0,Math.PI*2);ctx.fill();
}
}
ctx.restore();
}
return Object.freeze({render,cellSize:CELL,quality:low?'low':'high'});
}
root.EclipseGrassland=Object.freeze({createGrassland});
})(typeof window!=='undefined'?window:globalThis);
