import test from 'node:test';
import assert from 'node:assert/strict';
import {PresentationTrial,PRESENTATION,insideSlide} from '../public/presentation.js';
import {WORLD} from '../public/core.js';
function advance(g,seconds,input={x:0,y:0}){for(let t=0;t<seconds;t+=.05)g.tick(.05,input);}
test('presentation waits for start and freezes entirely when paused',()=>{const g=new PresentationTrial();g.tick(.05,{x:1,y:0});assert.equal(g.time,0);g.start();advance(g,4);g.pause();const before=JSON.stringify(g);advance(g,2,{x:1,y:0});assert.equal(JSON.stringify(g),before);g.resume();g.tick(.05);assert.ok(g.time>4);});
test('a slide warns before it can drain patience; standing inside then causes failure',()=>{const g=new PresentationTrial();g.start();advance(g,5);assert.ok(g.slide);assert.equal(g.player.hp,100);advance(g,1);assert.ok(g.player.hp<100);advance(g,20);assert.equal(g.state,'lost');assert.equal(g.reason,'patience');assert.equal(g.player.hp,0);});
test('a note is reachable outside the upcoming slide at every boundary',()=>{for(const x of [WORLD.left+24,800,WORLD.right-24])for(const y of [WORLD.top+24,650,WORLD.bottom-24]){const g=new PresentationTrial();g.player.x=x;g.player.y=y;g.nextPattern();assert.ok(g.note);assert.equal(insideSlide(g.note,g.slide,30),false);assert.ok(g.note.x>=WORLD.left&&g.note.x<=WORLD.right);assert.ok(g.note.y>=WORLD.top&&g.note.y<=WORLD.bottom);const travel=Math.hypot(g.note.x-x,g.note.y-y)/g.player.speed;assert.ok(travel<PRESENTATION.warning,`warning too short at ${x},${y}: ${travel}`);}});
test('moving to safe notes can complete the whole trial with normal movement',()=>{const g=new PresentationTrial();g.start();for(let i=0;i<1100&&g.state==='playing';i++){
 const p=g.player;let target=g.note;
 if(!target&&g.slide&&insideSlide(p,g.slide,30)){const s=g.slide;target={x:p.x,y:s.y>600?s.y-s.h/2-60:s.y+s.h/2+60};}
 let input={x:0,y:0};if(target){const dx=target.x-p.x,dy=target.y-p.y,d=Math.hypot(dx,dy);if(d>5)input={x:dx/d,y:dy/d};}g.tick(.05,input);
 }assert.equal(g.state,'won');assert.equal(g.time,45);assert.equal(g.points,3);assert.equal(g.damageTaken,0);assert.ok(g.avoided>=5);
});
test('surviving alone does not resolve the three discussion points',()=>{const g=new PresentationTrial();g.start();g.time=44.98;g.note=null;g.tick(.05);assert.equal(g.state,'lost');assert.equal(g.reason,'points');});
test('each note is counted once and a fresh trial has no lingering state',()=>{const g=new PresentationTrial();g.start();g.player.x=g.note.x;g.player.y=g.note.y;advance(g,.1);assert.equal(g.points,1);const fresh=new PresentationTrial();assert.equal(fresh.points,0);assert.equal(fresh.player.hp,100);assert.equal(fresh.state,'ready');assert.equal(fresh.slide,null);assert.equal(fresh.time,0);});
test('touch-like fractional input is normalized and cannot cross the yard bounds',()=>{const g=new PresentationTrial();g.start();const p=g.player,x=p.x,y=p.y;g.tick(.05,{x:.5,y:.5});assert.ok(Math.abs(Math.hypot(p.x-x,p.y-y)-Math.hypot(.5,.5)*p.speed*.05)<.001);p.x=WORLD.left+24;g.tick(.05,{x:-1,y:0});assert.equal(p.x,WORLD.left+24);});
