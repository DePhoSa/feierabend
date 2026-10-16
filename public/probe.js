import {PresentationTrial,PRESENTATION,insideSlide} from './presentation.js';
import {WORLD} from './core.js';
const $=id=>document.getElementById(id),canvas=$('probe-world'),ctx=canvas.getContext('2d',{alpha:false});
const images={},keys=new Set(),stick={x:0,y:0,id:null};
let trial=new PresentationTrial(),loaded=false,last=performance.now(),view={w:1000,h:700,scale:1},dialogKind='intro',soundOn=false,audio=null,messageUntil=0,pointFlash=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function say(text){$('probe-announcer').textContent=text;}
function sound(freq,length=.1){if(!soundOn)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume();const t=audio.currentTime,o=audio.createOscillator(),g=audio.createGain();o.type='triangle';o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.035,t);g.gain.exponentialRampToValueAtTime(.001,t+length);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+length);}catch{}}
$('probe-sound').onclick=()=>{soundOn=!soundOn;$('probe-sound').textContent=soundOn?'Ton an':'Ton aus';$('probe-sound').setAttribute('aria-pressed',String(soundOn));sound(620);};
function resetStick(){stick.x=0;stick.y=0;stick.id=null;$('probe-knob').style.transform='';}
function lockBackground(value){$('probe-play').inert=value;document.querySelector('.topbar').inert=value;}
function showDialog(kind,html){dialogKind=kind;keys.clear();resetStick();$('probe-dialog').innerHTML=html;$('probe-overlay').hidden=false;lockBackground(true);$('probe-dialog').focus();}
function hideDialog(){dialogKind='';$('probe-overlay').hidden=true;lockBackground(false);canvas.focus();}
function restart(){trial=new PresentationTrial();trial.start();messageUntil=0;pointFlash=0;hideDialog();$('probe-quote').textContent='„Dennis, hast du noch ganz kurz?“';last=performance.now();resize();hud();say('Drei grüne Notizen sammeln und den Folien ausweichen.');}
$('probe-start').onclick=restart;
function pause(){if(trial.state!=='playing')return;trial.pause();showDialog('pause',`<h2 id="probe-title">Sogar PowerPoint pausiert.</h2><p>Geduld, Notizen und Folien warten auf dich.</p><div class="dialog-actions"><button id="probe-resume" class="primary">Gespräch fortsetzen</button><button id="probe-restart" class="secondary">Probe neu starten</button><a class="secondary" href="./">Zum Hauptspiel</a></div>`);$('probe-resume').onclick=()=>{hideDialog();trial.resume();};$('probe-restart').onclick=restart;}
$('probe-pause').onclick=pause;
function finish(won){const patience=trial.reason==='patience';showDialog('end',`<h2 id="probe-title">${won?'Auf den Punkt gebracht.':patience?'Erst mal durchatmen.':'Das dauert wohl noch kurz …'}</h2><p class="lead">${won?'Jörg ist zufrieden. Dennis hat Feierabend.':patience?'Die Folien haben deine Geduld aufgebraucht.':'Du bist durchgekommen, aber es fehlen noch Gesprächspunkte.'}</p><div class="speech">${won?'„Alles klar. Ihr habt das im Griff. Schönen Feierabend!“':'„Eine Folie hab ich noch.“'}</div><div class="end-stats"><div><strong>${trial.points} / ${trial.target}</strong><span>Punkte geklärt</span></div><div><strong>${trial.avoided}</strong><span>Folien ausgewichen</span></div><div><strong>${Math.ceil(trial.player.hp)} %</strong><span>Geduld übrig</span></div></div><p>${won?'War die Vorwarnung gut verständlich? Und fühlt sich der Folien-Plausch nach Jörg an?':'Tipp: Folge den grünen Notizen. Sie liegen außerhalb der nächsten Folie. Du hast vor jeder Folie Zeit, dich zu bewegen.'}</p><p class="smallprint">Dies ist ein erster Mechaniktest. Jörgs eigene Pixelgrafik, KI-Idee und weitere Phasen kommen erst nach unserer Bewertung.</p><div class="dialog-actions"><button id="probe-retry" class="primary">Noch mal ganz kurz</button><a href="./" class="secondary">Zum Hauptspiel</a></div>`);$('probe-retry').onclick=restart;sound(won?820:240,.3);say(won?'Gespräch abgeschlossen. Feierabend!':'Die Besprechung geht weiter. Du kannst die Probe neu starten.');}
function hud(){
 const hp=Math.ceil(trial.player.hp);$('probe-hp').textContent=`${hp} %`;$('probe-hp-fill').style.width=`${hp}%`;$('probe-hp-fill').style.background=hp<30?'#ff9b78':'#94e3b3';$('probe-meter').setAttribute('aria-valuenow',String(hp));
 $('probe-time').textContent=`00:${String(Math.max(0,Math.ceil(trial.duration-trial.time))).padStart(2,'0')}`;$('probe-points').textContent=`${trial.points} / ${trial.target} Punkte geklärt`;
 $('probe-objective').textContent=trial.points>=trial.target?'Alle Punkte geklärt. Halte bis zum Gesprächsende durch.':'Grüne Notizen sammeln. Außerhalb der Folien bleiben.';
 const s=trial.slide,signal=$('probe-signal');
 if(s){const active=s.age>=PRESENTATION.warning;signal.className=`probe-signal${active?' active':''}`;signal.textContent=active?'Folie aktiv · draußen bleiben':`Nächste Folie in ${Math.max(0,PRESENTATION.warning-s.age).toFixed(1).replace('.',',')} Sek.`;}
 else{signal.className='probe-signal calm';signal.textContent=trial.points>=trial.target?'Gut geklärt. Gleich Feierabend.':trial.time<3?'Grüne Notiz holen. Dann kommt die erste Folie.':'Kurze Folienpause. Nächster Punkt …';}
}
function events(){for(const e of trial.drain()){
 if(e.type==='warning'){$('probe-quote').textContent=e.number%2?'„Eine Folie hab ich noch.“':'„Nur noch dieser eine Punkt.“';sound(470);say('Die nächste Folie ist angekündigt. Folge der grünen Notiz.');}
 else if(e.type==='active')sound(240,.08);
 else if(e.type==='hit'){sound(150,.13);say('Die aktive Folie kostet Geduld. Geh aus der Fläche heraus.');}
 else if(e.type==='point'){pointFlash=performance.now()+600;sound(760);say(`${e.points} von ${trial.target} Punkten geklärt.`);}
 else if(e.type==='end')finish(e.won);
}}
function resize(){const r=canvas.getBoundingClientRect();view.w=r.width;view.h=r.height;view.scale=Math.max(.72,Math.min(1.2,r.width/1150,r.height/720));const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);ctx.imageSmoothingEnabled=false;}
window.addEventListener('resize',resize);
function label(text,x,y,size=18,color='#f8eed8'){ctx.font=`700 ${size}px Pixel, monospace`;ctx.textAlign='center';ctx.fillStyle='#071624';ctx.fillText(text,x+1,y+2);ctx.fillStyle=color;ctx.fillText(text,x,y);}
function person(index,x,y,size,flip=1){const w=images.characters.width/3,h=images.characters.height/2;ctx.save();ctx.translate(Math.round(x),Math.round(y));ctx.scale(flip,1);ctx.drawImage(images.characters,(index%3)*w,Math.floor(index/3)*h,w,h,-size/2,-size+8,size,size);ctx.restore();}
function draw(now){if(!loaded)return;const p=trial.player,s=view.scale,halfW=view.w/s/2,halfH=view.h/s/2,cx=WORLD.w<halfW*2?WORLD.w/2:clamp(p.x,halfW,WORLD.w-halfW),cy=WORLD.h<halfH*2?WORLD.h/2:clamp(p.y-30,halfH,WORLD.h-halfH);
 ctx.fillStyle='#091a2b';ctx.fillRect(0,0,view.w,view.h);ctx.save();ctx.translate(view.w/2,view.h/2);ctx.scale(s,s);ctx.translate(-cx,-cy);ctx.drawImage(images.yard,0,0,WORLD.w,WORLD.h);
 if(trial.slide){const f=trial.slide,active=f.age>=PRESENTATION.warning,left=f.x-f.w/2,top=f.y-f.h/2;
  ctx.fillStyle=active?'#e08c345e':'#ffad4b14';ctx.fillRect(left,top,f.w,f.h);ctx.strokeStyle=active?'#ffc496':'#ffca79';ctx.lineWidth=active?5:3;ctx.setLineDash(active?[]:[13,9]);ctx.strokeRect(left,top,f.w,f.h);ctx.setLineDash([]);
  ctx.fillStyle='#092034e8';ctx.fillRect(f.x-145,top+20,290,39);label(active?'EINE FOLIE HAB ICH NOCH':'HIER KOMMT DIE FOLIE',f.x,top+46,19,active?'#ffc496':'#ffcf8d');
  if(!active){const percent=f.age/PRESENTATION.warning;ctx.fillStyle='#0c2338';ctx.fillRect(f.x-100,top+72,200,6);ctx.fillStyle='#ffd292';ctx.fillRect(f.x-100,top+72,200*percent,6);}
  else{ctx.fillStyle='#ffcca0';for(let i=0;i<3;i++)ctx.fillRect(left+55,top+84+i*24,f.w-110-i*36,3);}
 }
 if(trial.note){const n=trial.note,bob=reduced?0:Math.sin(now*.005)*3;ctx.save();ctx.translate(n.x,n.y+bob);ctx.fillStyle='#0a2d2b';ctx.strokeStyle='#a3f7be';ctx.lineWidth=3;ctx.fillRect(-21,-23,42,42);ctx.strokeRect(-21,-23,42,42);ctx.fillStyle='#d1ffda';ctx.fillRect(-10,-15,20,26);ctx.fillStyle='#28684d';ctx.fillRect(-6,-9,12,3);ctx.fillRect(-6,-2,12,3);ctx.fillRect(-6,5,8,3);label('NOTIZ',0,-34,18,'#b3ffd0');ctx.restore();}
 const actors=[{...trial.speaker,index:4,size:118},{...p,index:0,size:112}].sort((a,b)=>a.y-b.y);
 for(const a of actors){ctx.fillStyle='#030d1e60';ctx.beginPath();ctx.ellipse(a.x,a.y,25,8,0,0,Math.PI*2);ctx.fill();const player=a.index===0;
  if(player){ctx.strokeStyle=pointFlash>now?'#a0ffbe':'#ffd07a';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(a.x,a.y,28,10,0,0,Math.PI*2);ctx.stroke();}
  const bob=player&&p.moving&&!reduced?Math.sin(now*.012)*2:0;person(a.index,a.x,a.y+bob,a.size,player?p.facing:1);label(player?'DENNIS':'JÖRG · PLATZHALTER',a.x,a.y-a.size-5,player?16:14,player?'#ffd07a':'#bce0ef');
 }
 ctx.restore();
}
function frame(now){const dt=Math.min(.05,(now-last)/1000);last=now;
 trial.tick(dt,{x:(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0)+stick.x,y:(keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('w')||keys.has('arrowup')?1:0)+stick.y});events();hud();draw(now);requestAnimationFrame(frame);
}
window.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(dialogKind){if(e.key==='Tab'){const buttons=[...$('probe-dialog').querySelectorAll('button:not(:disabled),a[href]')],first=buttons[0],last=buttons.at(-1);if(e.shiftKey&&(document.activeElement===first||document.activeElement===$('probe-dialog'))){e.preventDefault();last?.focus();}else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===$('probe-dialog'))){e.preventDefault();first?.focus();}}if(k==='escape'&&dialogKind==='pause')$('probe-resume').click();return;}
 if(['w','a','s','d','arrowleft','arrowright','arrowup','arrowdown','p','escape'].includes(k))e.preventDefault();if(k==='p'||k==='escape'){if(!e.repeat)pause();return;}keys.add(k);
});
window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));
const joystick=$('probe-joystick');function moveStick(e){if(e.pointerId!==stick.id)return;const r=joystick.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,d=Math.hypot(dx,dy)||1,m=Math.min(d,36);stick.x=dx/d*m/36;stick.y=dy/d*m/36;$('probe-knob').style.transform=`translate(${stick.x*32}px,${stick.y*32}px)`;}
joystick.addEventListener('pointerdown',e=>{stick.id=e.pointerId;joystick.setPointerCapture(e.pointerId);moveStick(e);});joystick.addEventListener('pointermove',moveStick);for(const event of ['pointerup','pointercancel','lostpointercapture'])joystick.addEventListener(event,resetStick);
window.addEventListener('blur',()=>{keys.clear();resetStick();pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();resetStick();pause();}});
lockBackground(true);$('probe-dialog').focus();resize();
Promise.all(Object.entries({yard:'yard.png',characters:'characters-clean.png'}).map(([name,file])=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>{images[name]=im;resolve();};im.onerror=reject;im.src=`./assets/${file}`;}))).then(()=>{loaded=true;$('probe-start').disabled=false;$('probe-load').textContent='Bereit. Drei Notizen, 45 Sekunden.';}).catch(()=>{$('probe-load').textContent='Die Spielgrafiken fehlen. Bitte die Seite neu laden.';});
requestAnimationFrame(frame);
