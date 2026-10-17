export const WORLD={w:1600,h:1000,left:180,right:1420,top:300,bottom:910};
export const EXIT={x:800,y:310,r:65};
export const TYPES=[
 {name:'Maßfrage',hp:24,speed:44,sprite:1,color:'#d5a675'},
 {name:'Nur ganz kurz',hp:20,speed:63,sprite:2,color:'#cc9fc9'},
 {name:'Ersatzteil gesucht',hp:43,speed:36,sprite:3,color:'#f7bf57'},
 {name:'Konfigurator-Frage',hp:34,speed:52,sprite:1,color:'#87bcdc'},
];
export const UPGRADES={
 tacker:{name:'Angebots-Tacker',tag:'Automatische Beratung',desc:'Mehr Wirkung, kürzere Pause. Ein Angebot, das sitzt.',detail:'+35 % Wirkung · schneller tackern',max:5},
 paper:{name:'Seite-2-Bumerang',tag:'Preislisten-Power',desc:'Eine kreisende Preisliste klärt mehrere Fragen auf einmal.',detail:'In Euro. Nicht in Dollar oder Wong.',max:4},
 shield:{name:'ThermoSafe-Ruhezone',tag:'Geduld bewahren',desc:'Eine schützende Haustür-Aura berät Kunden in deiner Nähe.',detail:'Weniger Stress · Beratung im Umkreis',max:4},
 gate:{name:'LPU-42-Lamellenwelle',tag:'Flächendeckend kompetent',desc:'Eine breite Welle Produktwissen erreicht ganze Kundengruppen.',detail:'Alle 5 Sekunden · große Reichweite',max:4},
 swing:{name:'N80/F80-Pendelschwung',tag:'Platz für gute Antworten',desc:'Ein Schwingtor schiebt die Warteschlange freundlich zurück.',detail:'Berät und schafft Abstand',max:3},
 experience:{name:'25 Jahre Erfahrung',tag:'Beschlagfertig',desc:'Danke-Punkte finden dich leichter. Du bewegst dich souveräner.',detail:'+Sammelradius · +Tempo · Geduld auffüllen',max:3},
 coffee:{name:'Erst mal einen Kaffee',tag:'Durchatmen',desc:'Füllt deine Geduld vollständig auf. Danach geht’s weiter.',detail:'100 % Geduld · +10 maximale Geduld',max:99}
};
export const QUOTES=[
 'Sie bekommen nicht das, was Sie wollen, sondern das, was wir haben.',
 'Ich weiß nicht, was Sie da machen. Aber ich weiß: Sie machen das falsch!',
 'Das ist, als würde ich bei Deichmann meine Hand fotografieren und einen Schuh bestellen.',
 'Das ist hier ein Haus voller intransparenter Fragen.',
 'Ich werd hier noch bekloppt!',
 'Die Groove ist nicht lagermäßig. Standard viereckig. Ein Stück Holz. In Weiß.',
 'Das steht direkt auf Seite 2. In Euro. Nicht in Dollar oder Wong.',
 'Ich hör nur zu. Im Moment haben Sie nämlich noch keine einzige Frage gestellt.',
 'Wenn ich das wüsste, wäre ich Arzt geworden.',
 'Derselbe IHAAS-Konfigurator. Dieselbe Glühbirne. … Der ist da!',
 'Sie können aus dem Tor auch ein Floß bauen. Das ist uns egal.',
 'Das Eis im Hörnchen geht schnell. Aber vorher standen Sie 20 Minuten in der Schlange.',
 'Und da ist der Fehler. Nicht ich bin der Fehler, sondern da.',
 'Das reicht sogar für Dirk Nowitzki. Das ist hoch genug.',
 'Das ist nur geraten. Ich kann auch sagen: Morgen regnet es. Bringt Ihnen genauso viel.',
 'Hörmann ist ein Containerschiff und kein Rennboot.'
];
export const PRESENTATION_ROUTE=[{x:980,y:540},{x:940,y:740},{x:730,y:760},{x:650,y:550},{x:800,y:425}];
export function insideSlide(point,slide,margin=0){return Math.abs(point.x-slide.x)<slide.w/2+margin&&Math.abs(point.y-slide.y)<slide.h/2+margin;}
export function seeded(seed=42){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);

export class Shift {
 constructor({duration=360,random=Math.random}={}){
  this.random=random;this.duration=duration;this.state='playing';this.time=0;this.solved=0;this.level=1;this.xp=0;this.needed=6;this.totalXP=0;
  this.player={x:800,y:610,hp:100,maxHp:100,speed:174,facing:1,moving:false};
  this.skills={tacker:1,paper:0,shield:0,gate:0,swing:0,experience:0,coffee:0};
  this.enemies=[];this.pickups=[];this.shots=[];this.events=[];this.nextId=1;this.spawnClock=1;this.fireClock=.3;this.gateClock=3;this.swingClock=4;this.auraClock=1;this.paperClock=1.5;this.coffeeClock=15;this.quoteClock=8;
  this.bossSpawned=false;this.bossSolved=false;this.exitOpen=false;this.phase=-1;this.choices=[];this.pausedFrom=null;
  this.bossNotes=[];this.bossNear=false;
 }
 emit(type,data={}){this.events.push({type,...data});}
 drain(){const events=this.events;this.events=[];return events;}
 get progress(){return Math.min(1,this.time/this.duration);}
 get magnet(){return 95+this.skills.experience*45;}
 get boss(){return this.enemies.find(e=>e.boss);}
 spawn(boss=false){
  let x,y;for(let i=0;i<20;i++){const edge=Math.floor(this.random()*4);x=edge===0?WORLD.left:edge===1?WORLD.right:WORLD.left+this.random()*(WORLD.right-WORLD.left);y=edge===2?WORLD.top:edge===3?WORLD.bottom:WORLD.top+this.random()*(WORLD.bottom-WORLD.top);if(Math.hypot(x-this.player.x,y-this.player.y)>320)break;}
  const type=TYPES[Math.min(3,Math.floor(this.random()*(1+this.progress*4)))];
  const hp=boss?360+this.level*20:type.hp*(1+this.progress*.7);
  const e={...type,id:this.nextId++,x:boss?800:x,y:boss?425:y,hp,maxHp:hp,flash:0,boss,r:boss?30:18,hitPause:0};
  if(boss){
   e.name='Jörg';e.title='„Nur ganz kurz, Dennis …“';e.speed=130;e.sprite=4;e.facing=1;e.moving=false;
   e.routeIndex=0;e.rest=2.4;e.nearTime=0;e.slide=null;e.slideCount=0;e.points=0;e.target=3;
   this.bossSpawned=true;this.emit('boss',{name:e.name,title:e.title});
  }
  this.enemies.push(e);return e;
 }
 help(e,amount,push=0){
  if(e.hp<=0)return;e.hp-=amount;e.flash=.16;
  if(push&&!e.boss){let d=dist(e,this.player)||1;e.x=clamp(e.x+(e.x-this.player.x)/d*push,WORLD.left,WORLD.right);e.y=clamp(e.y+(e.y-this.player.y)/d*push,WORLD.top,WORLD.bottom);e.hitPause=.4;}
  this.emit('hit',{x:e.x,y:e.y,amount:Math.round(amount),boss:e.boss});
  if(e.hp<=0){
   this.solved++;if(e.boss){this.bossSolved=true;this.bossNotes=[];this.bossNear=false;this.emit('bossSolved');}
   this.pickups.push({x:e.x,y:e.y,type:'xp',amount:e.boss?25:1,id:this.nextId++});
   this.emit('solved',{x:e.x,y:e.y,sprite:e.sprite,boss:e.boss});
  }
 }
 addXP(n){this.xp+=n;this.totalXP+=n;}
 offerUpgrade(){
  this.state='upgrade';this.level++;this.xp-=this.needed;this.needed=5+this.level*3;
  const available=Object.keys(UPGRADES).filter(k=>k!=='coffee'&&this.skills[k]<UPGRADES[k].max);
  for(let i=available.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[available[i],available[j]]=[available[j],available[i]];}
  this.choices=available.slice(0,3);if(this.player.hp<this.player.maxHp*.5)this.choices[2]='coffee';
  if(!this.choices.length)this.choices=['coffee'];this.emit('upgrade',{choices:this.choices});
 }
 choose(key){
  if(this.state!=='upgrade'||!this.choices.includes(key))return false;
  this.skills[key]++;
  if(key==='coffee')this.player.maxHp+=10;
  if(key==='coffee'||key==='experience')this.player.hp=this.player.maxHp;
  else this.player.hp=Math.min(this.player.maxHp,this.player.hp+12);
  this.player.speed=174+this.skills.experience*14;this.state='playing';this.choices=[];
  this.emit('equipped',{key});return true;
 }
 pause(){if(this.state==='playing'){this.state='paused';this.emit('pause');}}
 resume(){if(this.state==='paused')this.state='playing';}
 tick(dt,input={x:0,y:0}){
  if(this.state!=='playing')return;
  dt=clamp(dt,0,.05);this.time+=dt;const p=this.player;
  const phase=Math.min(4,Math.floor(this.progress*5));if(phase!==this.phase){this.phase=phase;this.emit('phase',{phase});}
  const length=Math.hypot(input.x,input.y);p.moving=length>.05;
  if(length){const mul=Math.min(1,length)/length;p.x=clamp(p.x+input.x*mul*p.speed*dt,WORLD.left+24,WORLD.right-24);p.y=clamp(p.y+input.y*mul*p.speed*dt,WORLD.top+24,WORLD.bottom-24);if(Math.abs(input.x)>.05)p.facing=input.x<0?-1:1;}
  this.spawnClock-=dt;
  const enemyCap=this.bossSpawned?28:65;
  if(this.spawnClock<=0&&this.progress<1){if(this.enemies.length<enemyCap)this.spawn();this.spawnClock=1.65-this.progress*1.03;}
  if(this.progress>=.8&&!this.bossSpawned)this.spawn(true);
  this.quoteClock-=dt;if(this.quoteClock<0){this.quoteClock=16;this.emit('quote',{index:Math.floor(this.random()*QUOTES.length)});}
  this.coffeeClock-=dt;if(this.coffeeClock<=0){this.coffeeClock=22;this.pickups.push({id:this.nextId++,type:'coffee',x:WORLD.left+100+this.random()*(WORLD.right-WORLD.left-200),y:WORLD.top+75+this.random()*(WORLD.bottom-WORLD.top-150),amount:30});}
  let touching=0;
  for(const e of this.enemies){
   e.flash=Math.max(0,e.flash-dt);e.hitPause=Math.max(0,e.hitPause-dt);
   if(e.boss){
    const dToDennis=dist(e,p);
    if(dToDennis<62){
     this.bossNear=true;e.nearTime=(e.nearTime||0)+dt;
     const exposed=Math.max(0,e.nearTime-.5);
     if(exposed>0){p.hp=Math.max(0,p.hp-dt*10*(1-this.skills.shield*.13));if(!e.nearHit){e.nearHit=true;this.emit('bossNear');}}
    }else{this.bossNear=false;e.nearTime=0;e.nearHit=false;}
    if(e.slide){
     const s=e.slide,prevAge=s.age;s.age+=dt;
     if(prevAge<3.2&&s.age>=3.2)this.emit('bossActive');
     const end=3.2+1.2;
     const activeTime=Math.max(0,Math.min(s.age,end)-Math.max(prevAge,3.2));
     if(activeTime>0&&insideSlide(p,s,14)){
      p.hp=Math.max(0,p.hp-dt*12*(1-this.skills.shield*.13));
      if(!s.hit){s.hit=true;this.emit('bossSlideHit');}
     }
     if(s.age>=end){
      e.slide=null;
      const hasNote=this.bossNotes.some(n=>dist(n,e)<50);
      if(!hasNote&&e.points<e.target){
       const note={id:this.nextId++,x:e.x,y:e.y};
       this.bossNotes.push(note);
       this.emit('bossNote',{x:note.x,y:note.y});
      }
      e.routeIndex=(e.routeIndex+1)%PRESENTATION_ROUTE.length;
      e.rest=2.0;
     }
    }else{
     const target=PRESENTATION_ROUTE[e.routeIndex];
     const dx=target.x-e.x,dy=target.y-e.y,d=Math.hypot(dx,dy),step=e.speed*dt;
     e.moving=d>.01;if(Math.abs(dx)>.01)e.facing=dx<0?-1:1;
     if(d>step){e.x+=dx/d*step;e.y+=dy/d*step;}
     else{
      e.x=target.x;e.y=target.y;e.moving=false;
      e.rest=Math.max(0,e.rest-dt);
      if(e.rest<=0){
       const w=320,h=140;
       const positions=[{x:p.x,y:p.y},{x:e.x-w/2-75,y:e.y},{x:e.x+w/2+75,y:e.y},{x:e.x,y:e.y-h/2-75},{x:e.x,y:e.y+h/2+75}]
        .map(n=>({x:clamp(n.x,WORLD.left+w/2+24,WORLD.right-w/2-24),y:clamp(n.y,WORLD.top+h/2+24,WORLD.bottom-h/2-24),w,h}))
        .filter(s=>!insideSlide(e,s,45)&&!this.bossNotes.some(n=>insideSlide(n,s,35)));
       positions.sort((a,b)=>dist(a,p)-dist(b,p));
       if(positions.length){
        e.slide={...positions[0],age:0,hit:false};
        e.slideCount++;
        this.emit('bossSlide',{slide:e.slide,count:e.slideCount});
       }else e.rest=.5;
      }
     }
    }
   }else{
    let d=dist(e,p)||1;
    if(d>e.r+16&&!e.hitPause){e.x+=(p.x-e.x)/d*e.speed*dt;e.y+=(p.y-e.y)/d*e.speed*dt;}
    if(d<e.r+24)touching+=1;
   }
  }
  // Separation keeps each customer's silhouette readable in a crowd.
  for(let i=0;i<this.enemies.length;i++)for(let j=i+1;j<this.enemies.length;j++){
   const a=this.enemies[i],b=this.enemies[j],d=dist(a,b),r=a.r+b.r;
   if(d>0&&d<r){const s=(r-d)*.25;const dx=(a.x-b.x)/d*s,dy=(a.y-b.y)/d*s;a.x+=dx;a.y+=dy;b.x-=dx;b.y-=dy;}
  }
  if(touching)p.hp-=Math.min(15,touching*5.5)*dt*(1-this.skills.shield*.13);
  else if(!this.bossNear)p.hp=Math.min(p.maxHp,p.hp+dt*1.5);
  this.bossNotes=this.bossNotes.filter(n=>{
   if(dist(n,p)<36){
    const boss=this.boss;
    if(boss){
     boss.points++;
     p.hp=Math.min(p.maxHp,p.hp+12);
     this.emit('bossPoint',{points:boss.points,target:boss.target,x:n.x,y:n.y});
     this.help(boss,boss.maxHp/boss.target+1);
    }
    return false;
   }
   return true;
  });
  let nearest=null,nearestDist=Infinity;for(const e of this.enemies){const d=dist(e,p);if(e.hp>0&&d<nearestDist){nearest=e;nearestDist=d;}}
  this.fireClock-=dt;
  if(this.fireClock<=0&&nearest&&nearestDist<620){
   this.fireClock=Math.max(.22,.74-this.skills.tacker*.07);const a=Math.atan2(nearest.y-p.y,nearest.x-p.x);
   const count=this.skills.tacker>=5?3:this.skills.tacker>=3?2:1;
   const angles=count===3?[a-.16,a,a+.16]:count===2?[a-.11,a+.11]:[a];
   for(const ang of angles){this.shots.push({x:p.x,y:p.y-10,vx:Math.cos(ang)*540,vy:Math.sin(ang)*540,life:1.4,damage:15*(1+.35*(this.skills.tacker-1)),kind:'tacker',hits:new Set()});}
   this.emit('fire');
  }
  this.paperClock-=dt;
  if(this.skills.paper&&this.paperClock<=0&&nearest){
   this.paperClock=Math.max(2.2,3.8-this.skills.paper*.35);const a=Math.atan2(nearest.y-p.y,nearest.x-p.x);
   const count=this.skills.paper>=4?3:this.skills.paper>=2?2:1;
   const angles=count===3?[a,a+2.09,a-2.09]:count===2?[a,a+Math.PI]:[a];
   for(const ang of angles){this.shots.push({x:p.x,y:p.y-10,vx:Math.cos(ang)*240,vy:Math.sin(ang)*240,life:2.8,age:0,damage:18+this.skills.paper*8,kind:'paper',hits:new Set()});}
   this.emit('paper');
  }
  this.auraClock-=dt;
  if(this.skills.shield&&this.auraClock<=0){this.auraClock=.75;for(const e of this.enemies)if(dist(e,p)<105+this.skills.shield*15)this.help(e,3+this.skills.shield*3);}
  this.gateClock-=dt;
  if(this.skills.gate&&this.gateClock<=0){this.gateClock=5;for(const e of this.enemies)if(dist(e,p)<310)this.help(e,20+this.skills.gate*12,20);this.emit('gate',{x:p.x,y:p.y});}
  this.swingClock-=dt;
  if(this.skills.swing&&this.swingClock<=0){this.swingClock=4.2;for(const e of this.enemies)if(dist(e,p)<175)this.help(e,18+this.skills.swing*14,110);this.emit('swing',{x:p.x,y:p.y});}
  for(const shot of this.shots){
   shot.life-=dt;shot.age=(shot.age||0)+dt;
   if(shot.kind==='paper'&&shot.age>1.15){const d=dist(shot,p)||1;shot.vx=(p.x-shot.x)/d*310;shot.vy=(p.y-shot.y)/d*310;}
   shot.x+=shot.vx*dt;shot.y+=shot.vy*dt;
   for(const e of this.enemies){if(e.hp>0&&!shot.hits.has(e.id)&&dist(shot,e)<e.r+15){this.help(e,shot.damage,shot.kind==='tacker'?8:0);shot.hits.add(e.id);if(shot.kind==='tacker'){shot.life=0;break;}}}
  }
  this.shots=this.shots.filter(s=>s.life>0);this.enemies=this.enemies.filter(e=>e.hp>0);
  this.pickups=this.pickups.filter(item=>{
   const d=dist(item,p);if(d<(item.type==='xp'?this.magnet:55)&&d>20){const speed=item.type==='xp'?330:180;item.x+=(p.x-item.x)/d*speed*dt;item.y+=(p.y-item.y)/d*speed*dt;}
   if(d<25){if(item.type==='xp'){this.addXP(item.amount);this.emit('xp');}else{p.hp=Math.min(p.maxHp,p.hp+item.amount);this.emit('coffee');}return false;}return true;
  });
  if(p.hp<=0){p.hp=0;this.state='lost';this.emit('end',{won:false});return;}
  if(this.progress>=1&&this.bossSolved&&!this.exitOpen){this.exitOpen=true;this.emit('exit');}
  if(this.exitOpen&&dist(p,EXIT)<EXIT.r){this.state='won';this.emit('end',{won:true});return;}
  if(this.xp>=this.needed)this.offerUpgrade();
 }
}
