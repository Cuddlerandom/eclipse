/* ECLIPSE — Chapter 1: Grassland. Isolated Canvas renderer; no gameplay mutation. */
(function(root){
'use strict';
const CELL=64;
function hash(x,y,s=0){let h=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(s+1,1274126177);h=Math.imul(h^(h>>>13),1274126177);return (h^(h>>>16)>>>0)/4294967296;}
function noise(x,y,s){const a=Math.floor(x),b=Math.floor(y),u=(x-a)**2*(3-2*(x-a)),v=(y-b)**2*(3-2*(y-b));const p=hash(a,b,s),q=hash(a+1,b,s),r=hash(a,b+1,s),t=hash(a+1,b+1,s);return (p+(q-p)*u)*(1-v)+(r+(t-r)*u)*v;}
function createGrassland(options={}){
const quality=options.quality==='low'?'low':'high';
function render(ctx,cameraX,cameraY,width,height,time=0){
if(!ctx||width<=0||height<=0)return;
const left=Math.floor(cameraX/CELL)-1,right=Math.ceil((cameraX+width)/CELL)+1,top=Math.floor(cameraY/CELL)-1,bottom=Math.ceil((cameraY+height)/CELL)+1;
ctx.save();
for(let gy=top;gy<=bottom;gy++)for(let gx=left;gx<=right;gx++){
const x=gx*CELL,y=gy*CELL,seed=hash(gx,gy,2),lush=noise(gx/5,gy/5,3),path=Math.abs(y+32-(Math.sin(x/440)*105+Math.sin(x/185+1.2)*38))<38+noise(gx/3,gy/3,4)*20;
ctx.fillStyle=path?(seed>.5?'#bbaa7c':'#c9b98b'):lush>.61?'#7ab753':lush<.37?'#589947':'#6eaa4e';
ctx.fillRect(x,y,CELL+1,CELL+1);
const count=quality==='low'?5:13;
for(let i=0;i<count;i++){
const xx=x+hash(gx,gy,20+i)*CELL,yy=y+hash(gx,gy,50+i)*CELL;
if(path){ctx.fillStyle=i%2?'#a89871':'#e1cc9d';ctx.fillRect(xx,yy,2,1);continue;}
const sway=quality==='low'?0:Math.sin(time*1.7+xx*.037+yy*.019)*1.3;
ctx.strokeStyle=i%3===0?'#b0d779':i%3===1?'#3d873d':'#92c56c';ctx.lineWidth=i%4===0?1.5:1;
ctx.beginPath();ctx.moveTo(xx,yy+3);ctx.lineTo(xx+sway-1.4,yy-3-hash(gx,gy,90+i)*4);ctx.stroke();
}
if(!path&&seed>.78){
const fx=x+hash(gx,gy,201)*46+9,fy=y+hash(gx,gy,202)*46+9;
ctx.fillStyle=seed>.9?'#fff0c5':'#e8d4f4';
for(let j=0;j<5;j++){const a=j*Math.PI*2/5;ctx.beginPath();ctx.arc(fx+Math.cos(a)*3,fy+Math.sin(a)*3,1.8,0,Math.PI*2);ctx.fill();}
ctx.fillStyle='#e9bd56';ctx.fillRect(fx-1,fy-1,2,2);
}
if(!path&&seed<.12){const rx=x+hash(gx,gy,301)*44+10,ry=y+hash(gx,gy,302)*44+10;ctx.fillStyle='#839187';ctx.beginPath();ctx.ellipse(rx,ry,6,3.5,-.3,0,Math.PI*2);ctx.fill();ctx.fillStyle='#b5beb0';ctx.fillRect(rx-3,ry-2,4,1);}
}
ctx.restore();
}
return Object.freeze({render,cellSize:CELL,quality});
}
root.EclipseGrassland=Object.freeze({createGrassland});
})(typeof window!=='undefined'?window:globalThis);
