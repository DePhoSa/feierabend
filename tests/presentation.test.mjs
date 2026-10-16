import test from 'node:test';
import assert from 'node:assert/strict';
import {PresentationTrial,PRESENTATION,PRESENTATION_ROUTE,insideSlide,presentationRestAt} from '../public/presentation.js';
import {WORLD} from '../public/core.js';
function advance(g,seconds,input={x:0,y:0}){for(let i=0;i<Math.ceil(seconds/.05);i++)g.tick(.05,input);}
function until(g,predicate,max=1000){for(let i=0;i<max&&!predicate();i++)g.tick(.05);assert.ok(predicate(),'expected phase was never reached');}

test('start and pause freeze both people, story, note and slide clocks',()=>{
 const g=new PresentationTrial();const initial=JSON.stringify(g);advance(g,1);assert.equal(JSON.stringify(g),initial);
 g.start();advance(g,1);assert.ok(g.speaker.moving);g.pause();const paused=JSON.stringify(g);advance(g,2,{x:1,y:1});assert.equal(JSON.stringify(g),paused);
 g.resume();until(g,()=>g.slide!==null);g.pause();const talking=JSON.stringify(g);advance(g,2);assert.equal(JSON.stringify(g),talking);
});
test('Jörg walks continuously, stops to talk, and leaves a note only after the story',()=>{
 const g=new PresentationTrial();g.start();const start={...g.speaker};g.tick(.05);
 assert.ok(Math.hypot(g.speaker.x-start.x,g.speaker.y-start.y)<=PRESENTATION.speakerSpeed*.05+.001);assert.equal(g.note,null);
 until(g,()=>g.slide!==null);const stop={x:g.speaker.x,y:g.speaker.y};assert.deepEqual(stop,PRESENTATION_ROUTE[0]);assert.equal(g.speaker.moving,false);assert.equal(g.note,null);
 advance(g,3);assert.equal(g.note,null);assert.equal(g.speaker.x,stop.x);assert.equal(g.speaker.y,stop.y);
 until(g,()=>g.note!==null);assert.deepEqual(g.note,stop);const note=g.note;advance(g,.5);assert.notEqual(g.speaker.x,stop.x);assert.equal(g.note,note);assert.deepEqual(g.note,stop);
});
test('all planned stops put slides outside Jörg and pending notes, within the yard',()=>{
 for(const stop of PRESENTATION_ROUTE)for(const x of [WORLD.left+24,800,WORLD.right-24])for(const y of [WORLD.top+24,650,WORLD.bottom-24]){
  const g=new PresentationTrial();Object.assign(g.speaker,stop);Object.assign(g.player,{x,y});g.note={x:800,y:650};g.nextPattern();assert.ok(g.slide);
  const s=g.slide;assert.equal(insideSlide(stop,s,45),false);assert.equal(insideSlide(g.note,s,35),false);
  assert.ok(s.x-s.w/2>=WORLD.left&&s.x+s.w/2<=WORLD.right);assert.ok(s.y-s.h/2>=WORLD.top&&s.y+s.h/2<=WORLD.bottom);
 }
});
test('a missed note stays in place across further stories',()=>{
 const g=new PresentationTrial();g.start();until(g,()=>g.note!==null);const note=g.note,coords={...note};advance(g,20);assert.equal(g.note,note);assert.deepEqual(g.note,coords);assert.ok(g.slideCount>=3);
});
test('warning does not hurt and one entire active slide costs at most 14.4 patience',()=>{
 const g=new PresentationTrial();g.start();until(g,()=>g.slide!==null);g.player.x=g.slide.x;g.player.y=g.slide.y;
 advance(g,PRESENTATION.warning-.1);assert.equal(g.player.hp,100);until(g,()=>g.slide===null);
 assert.ok(Math.abs(g.damageTaken-PRESENTATION.active*PRESENTATION.damagePerSecond)<.0001);assert.ok(g.player.hp>85);
});
test('three predictable tempo stages shorten the stop pauses without shortening warnings',()=>{
 assert.equal(presentationRestAt(0),2.4);assert.equal(presentationRestAt(14.99),2.4);assert.equal(presentationRestAt(15),1.8);assert.equal(presentationRestAt(30),1.2);assert.equal(presentationRestAt(45),1.2);
 const g=new PresentationTrial();g.start();g.time=31;g.nextPattern();advance(g,.1);assert.equal(g.player.hp,100);assert.ok(g.slide.age<PRESENTATION.warning);
});
test('following Jörg and collecting his finished notes can complete all 45 seconds',()=>{
 const g=new PresentationTrial();g.start();let maxDistance=0;
 for(let i=0;i<1000&&g.state==='playing';i++){
  const target=g.note||g.speaker,dx=target.x-g.player.x,dy=target.y-g.player.y,d=Math.hypot(dx,dy);maxDistance=Math.max(maxDistance,d);
  g.tick(.05,d>12?{x:dx/d,y:dy/d}:{x:0,y:0});
 }
 assert.equal(g.state,'won');assert.equal(g.time,45);assert.equal(g.points,3);assert.equal(g.damageTaken,0);assert.ok(g.slideCount>=4);assert.ok(maxDistance>150);
});
test('standing still cannot win without resolving the discussion points',()=>{
 const g=new PresentationTrial();g.start();advance(g,46);assert.equal(g.state,'lost');assert.equal(g.reason,'points');assert.ok(g.points<3);
});
test('note pickup counts once; failure and restart leave no lingering state',()=>{
 const g=new PresentationTrial();g.start();until(g,()=>g.note!==null);Object.assign(g.player,g.note);advance(g,.1);assert.equal(g.points,1);assert.equal(g.note,null);
 const fresh=new PresentationTrial();assert.equal(fresh.state,'ready');assert.equal(fresh.points,0);assert.equal(fresh.player.hp,100);assert.equal(fresh.routeIndex,0);assert.equal(fresh.slide,null);assert.equal(fresh.note,null);assert.equal(fresh.time,0);
 g.player.hp=0;g.tick(.05);assert.equal(g.state,'lost');assert.equal(g.reason,'patience');
});
test('fractional touch movement stays normalized and within yard bounds',()=>{
 const g=new PresentationTrial();g.start();const p=g.player,x=p.x,y=p.y;g.tick(.05,{x:.5,y:.5});assert.ok(Math.abs(Math.hypot(p.x-x,p.y-y)-Math.hypot(.5,.5)*p.speed*.05)<.001);
 p.x=WORLD.left+24;g.tick(.05,{x:-1,y:0});assert.equal(p.x,WORLD.left+24);
});
