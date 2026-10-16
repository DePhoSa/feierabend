import {WORLD} from './core.js';

export const PRESENTATION={duration:45,points:3,warning:2.4,active:3,interval:6.8,damagePerSecond:24,width:440,height:190};
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
export function insideSlide(point,slide,margin=0){return Math.abs(point.x-slide.x)<slide.w/2+margin&&Math.abs(point.y-slide.y)<slide.h/2+margin;}

/** A deliberately isolated, one-pattern experiment, not the final chapter boss. */
export class PresentationTrial {
 constructor(){
  this.state='ready';this.time=0;this.duration=PRESENTATION.duration;
  this.player={x:800,y:650,hp:100,maxHp:100,speed:174,facing:1,moving:false};
  this.speaker={x:800,y:425};this.points=0;this.target=PRESENTATION.points;
  this.slide=null;this.slideCount=0;this.avoided=0;this.nextSlide=3;
  this.note={x:985,y:650};this.events=[];this.reason=null;this.damageTaken=0;
 }
 emit(type,data={}){this.events.push({type,...data});}
 drain(){const events=this.events;this.events=[];return events;}
 start(){if(this.state==='ready'){this.state='playing';this.emit('start');}}
 pause(){if(this.state==='playing'){this.state='paused';this.player.moving=false;}}
 resume(){if(this.state==='paused')this.state='playing';}
 nextPattern(){
  const p=this.player,w=PRESENTATION.width,h=PRESENTATION.height;
  this.slide={x:clamp(p.x,WORLD.left+w/2+24,WORLD.right-w/2-24),y:clamp(p.y,WORLD.top+h/2+24,WORLD.bottom-h/2-24),w,h,age:0,hit:false};
  this.slideCount++;
  if(this.points<this.target){
   const s=this.slide,vertical=this.slideCount%2?1:-1;
   const candidates=[{x:p.x,y:s.y+vertical*(h/2+64)},{x:p.x,y:s.y-vertical*(h/2+64)},{x:s.x-w/2-64,y:p.y},{x:s.x+w/2+64,y:p.y}]
    .map(n=>({x:clamp(n.x,WORLD.left+28,WORLD.right-28),y:clamp(n.y,WORLD.top+28,WORLD.bottom-28)}))
    .filter(n=>!insideSlide(n,s,35));
   candidates.sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y));
   this.note=candidates[0]||null;
  }
  this.emit('warning',{number:this.slideCount});
 }
 tick(dt,input={x:0,y:0}){
  if(this.state!=='playing')return;
  dt=clamp(dt,0,.05);this.time=Math.min(this.duration,this.time+dt);
  const p=this.player,length=Math.hypot(input.x,input.y);p.moving=length>.05;
  if(length){const mul=Math.min(1,length)/length;p.x=clamp(p.x+input.x*mul*p.speed*dt,WORLD.left+24,WORLD.right-24);p.y=clamp(p.y+input.y*mul*p.speed*dt,WORLD.top+24,WORLD.bottom-24);if(Math.abs(input.x)>.05)p.facing=input.x<0?-1:1;}
  this.nextSlide-=dt;
  if(this.nextSlide<=0){this.nextPattern();this.nextSlide=PRESENTATION.interval;}
  if(this.slide){const s=this.slide,previous=s.age;s.age+=dt;
   if(previous<PRESENTATION.warning&&s.age>=PRESENTATION.warning)this.emit('active');
   if(s.age>=PRESENTATION.warning&&insideSlide(p,s,14)){
    p.hp=Math.max(0,p.hp-PRESENTATION.damagePerSecond*dt);this.damageTaken+=PRESENTATION.damagePerSecond*dt;
    if(!s.hit){s.hit=true;this.emit('hit');}
   }
   if(s.age>=PRESENTATION.warning+PRESENTATION.active){if(!s.hit)this.avoided++;this.slide=null;}
  }
  if(this.note&&Math.hypot(this.note.x-p.x,this.note.y-p.y)<32){
   this.points=Math.min(this.target,this.points+1);this.note=null;p.hp=Math.min(p.maxHp,p.hp+7);this.emit('point',{points:this.points});
  }
  if(p.hp<=0){this.state='lost';this.reason='patience';this.emit('end',{won:false});return;}
  if(this.time>=this.duration){this.state=this.points>=this.target?'won':'lost';this.reason=this.state==='lost'?'points':null;this.emit('end',{won:this.state==='won'});}
 }
}
