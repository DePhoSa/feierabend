import {WORLD} from './core.js';

export const PRESENTATION={duration:45,points:3,warning:3.2,active:1.2,damagePerSecond:12,width:320,height:140,speakerSpeed:132,rests:[2.4,1.8,1.2]};
export const PRESENTATION_ROUTE=[{x:980,y:540},{x:940,y:740},{x:730,y:760},{x:650,y:550},{x:800,y:425}];
const STORIES=['„Frag doch mal die KI.“','„Eine Folie hab ich noch.“','„Nur noch dieser eine Punkt.“'];
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
export function insideSlide(point,slide,margin=0){return Math.abs(point.x-slide.x)<slide.w/2+margin&&Math.abs(point.y-slide.y)<slide.h/2+margin;}
export function presentationRestAt(time){return PRESENTATION.rests[Math.min(2,Math.floor(Math.max(0,time)/15))];}

/** Isolated walk-and-talk experiment, not the final chapter boss. */
export class PresentationTrial {
 constructor(){
  this.state='ready';this.time=0;this.duration=PRESENTATION.duration;
  this.player={x:800,y:650,hp:100,maxHp:100,speed:174,facing:1,moving:false};
  this.speaker={x:800,y:425,moving:false,facing:1};
  this.routeIndex=0;this.rest=presentationRestAt(0);this.story='„Dennis, hast du noch ganz kurz?“';
  this.points=0;this.target=PRESENTATION.points;
  this.slide=null;this.slideCount=0;this.avoided=0;
  this.note=null;this.events=[];this.reason=null;this.damageTaken=0;
 }
 emit(type,data={}){this.events.push({type,...data});}
 drain(){const events=this.events;this.events=[];return events;}
 start(){if(this.state==='ready'){this.state='playing';this.emit('start');}}
 pause(){if(this.state==='playing'){this.state='paused';this.player.moving=false;this.speaker.moving=false;}}
 resume(){if(this.state==='paused')this.state='playing';}
 nextPattern(){
  const p=this.player,j=this.speaker,w=PRESENTATION.width,h=PRESENTATION.height;
  const positions=[{x:p.x,y:p.y},{x:j.x-w/2-75,y:j.y},{x:j.x+w/2+75,y:j.y},{x:j.x,y:j.y-h/2-75},{x:j.x,y:j.y+h/2+75}]
   .map(n=>({x:clamp(n.x,WORLD.left+w/2+24,WORLD.right-w/2-24),y:clamp(n.y,WORLD.top+h/2+24,WORLD.bottom-h/2-24),w,h}))
   .filter(s=>!insideSlide(j,s,45)&&(!this.note||!insideSlide(this.note,s,35)));
  // Pick a visible footprint near Dennis, never on Jörg or a pending note.
  positions.sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y));
  if(!positions.length){this.rest=.2;return;}
  this.slide={...positions[0],age:0,hit:false};this.slideCount++;
  this.story=STORIES[(this.slideCount-1)%STORIES.length];
  this.emit('warning',{number:this.slideCount,story:this.story});
 }
 walk(dt){
  const j=this.speaker,target=PRESENTATION_ROUTE[this.routeIndex],dx=target.x-j.x,dy=target.y-j.y,d=Math.hypot(dx,dy),step=PRESENTATION.speakerSpeed*dt;
  j.moving=d>.01;if(Math.abs(dx)>.01)j.facing=dx<0?-1:1;
  if(d>step){j.x+=dx/d*step;j.y+=dy/d*step;return;}
  j.x=target.x;j.y=target.y;j.moving=false;
  this.rest=Math.max(0,this.rest-dt);
  if(this.rest<=0)this.nextPattern();
 }
 finishStory(){
  if(!this.slide.hit)this.avoided++;
  this.slide=null;
  // The note marks the place where Jörg just finished speaking, and never jumps.
  if(!this.note&&this.points<this.target){this.note={x:this.speaker.x,y:this.speaker.y};this.emit('note',{...this.note});}
  this.routeIndex=(this.routeIndex+1)%PRESENTATION_ROUTE.length;
  this.rest=presentationRestAt(this.time);this.emit('walk');
 }
 tick(dt,input={x:0,y:0}){
  if(this.state!=='playing')return;
  dt=clamp(dt,0,.05);this.time=Math.min(this.duration,this.time+dt);
  const p=this.player,length=Math.hypot(input.x,input.y);p.moving=length>.05;
  if(length){const mul=Math.min(1,length)/length;p.x=clamp(p.x+input.x*mul*p.speed*dt,WORLD.left+24,WORLD.right-24);p.y=clamp(p.y+input.y*mul*p.speed*dt,WORLD.top+24,WORLD.bottom-24);if(Math.abs(input.x)>.05)p.facing=input.x<0?-1:1;}
  if(this.slide){
   const s=this.slide,previous=s.age,end=PRESENTATION.warning+PRESENTATION.active;s.age+=dt;
   if(previous<PRESENTATION.warning&&s.age>=PRESENTATION.warning)this.emit('active');
   const activeTime=Math.max(0,Math.min(s.age,end)-Math.max(previous,PRESENTATION.warning));
   if(activeTime>0&&insideSlide(p,s,14)){
    const damage=PRESENTATION.damagePerSecond*activeTime;p.hp=Math.max(0,p.hp-damage);this.damageTaken+=damage;
    if(!s.hit){s.hit=true;this.emit('hit');}
   }
   if(s.age>=end)this.finishStory();
  }else this.walk(dt);
  if(this.note&&Math.hypot(this.note.x-p.x,this.note.y-p.y)<32){
   this.points=Math.min(this.target,this.points+1);this.note=null;p.hp=Math.min(p.maxHp,p.hp+7);this.emit('point',{points:this.points});
  }
  if(p.hp<=0){this.state='lost';this.reason='patience';this.emit('end',{won:false});return;}
  if(this.time>=this.duration){this.state=this.points>=this.target?'won':'lost';this.reason=this.state==='lost'?'points':null;this.emit('end',{won:this.state==='won'});}
 }
}
