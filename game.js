const W=40,H=30,VW=11,VH=12,T=34;
const UI_ICO={i_staff:'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22w%22%20x1%3D%220%22%20x2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23b9824a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236b4220%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M30%2014%20L34%2014%20L36%2060%20L28%2060z%22%20fill%3D%22url%28%23w%29%22%20stroke%3D%22%233a2210%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M33%2020%20L55%2020%20L60%2026%20L55%2032%20L33%2032z%22%20fill%3D%22%23e9cf8e%22%20stroke%3D%22%235a3a10%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M38%2026%20h14%20M48%2022.5%20l4%203.5%20-4%203.5%22%20fill%3D%22none%22%20stroke%3D%22%23a02a2a%22%20stroke-width%3D%222.4%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%229%22%20r%3D%227%22%20fill%3D%22%237fe0ff%22%20stroke%3D%22%231d5f80%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%2229.5%22%20cy%3D%226.5%22%20r%3D%222.2%22%20fill%3D%22%23fff%22%20opacity%3D%22.85%22%2F%3E%3Cpath%20d%3D%22M26%2016%20h12%20l-2%204%20h-8z%22%20fill%3D%22%23d6a32e%22%20stroke%3D%22%235a3a08%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E',i_ring:'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff0a8%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23e2ac32%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%238a5a12%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2232%22%20cy%3D%2238%22%20rx%3D%2222%22%20ry%3D%2217%22%20fill%3D%22none%22%20stroke%3D%22%235a3a08%22%20stroke-width%3D%2212%22%2F%3E%3Cellipse%20cx%3D%2232%22%20cy%3D%2238%22%20rx%3D%2222%22%20ry%3D%2217%22%20fill%3D%22none%22%20stroke%3D%22url%28%23g%29%22%20stroke-width%3D%229%22%2F%3E%3Cellipse%20cx%3D%2232%22%20cy%3D%2238%22%20rx%3D%2222%22%20ry%3D%2217%22%20fill%3D%22none%22%20stroke%3D%22%23fff6c4%22%20stroke-opacity%3D%22.5%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%2214%2040%22%2F%3E%3Cpath%20d%3D%22M32%208%20l7%208%20-7%209%20-7%20-9z%22%20fill%3D%22%23e0344a%22%20stroke%3D%22%235a0f1a%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M32%2010%20l3.5%206%20-3.5%203%20-3.5%20-3z%22%20fill%3D%22%23ff9aa8%22%2F%3E%3C%2Fsvg%3E',i_charm:'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20d%3D%22M26%206%20q6%20-6%2012%200%20l0%206%20-12%200z%22%20fill%3D%22%23d6a32e%22%20stroke%3D%22%235a3a08%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%2210%22%20width%3D%2236%22%20height%3D%2248%22%20rx%3D%226%22%20fill%3D%22%236a2c91%22%20stroke%3D%22%232c0e44%22%20stroke-width%3D%223%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%2210%22%20width%3D%2236%22%20height%3D%2214%22%20rx%3D%225%22%20fill%3D%22%23d6a32e%22%20stroke%3D%22%235a3a08%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M18%2030%20h28%20M18%2036%20h28%20M18%2042%20h28%20M18%2048%20h28%22%20stroke%3D%22%239a5cc4%22%20stroke-width%3D%222%22%20opacity%3D%22.7%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2238%22%20r%3D%229%22%20fill%3D%22%23fff4cf%22%20stroke%3D%22%23d6a32e%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M32%2031%20v14%20M25%2038%20h14%22%20stroke%3D%22%23c9302c%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E',i_fire:'images/ui_i_fire.png',i_rice:'images/ui_i_rice.png',i_riceL:'images/ui_i_riceL.png',i_herb:'images/ui_i_herb.png',dun:'images/ui_dun.png',fuse:'images/ui_fuse.png',bag:'images/ui_bag.png',dex:'images/ui_dex.png',pt:'images/ui_pt.png'};
const UI_IMG={};Object.keys(UI_ICO).forEach(k=>{const im=new Image();im.src=UI_ICO[k];UI_IMG[k]=im});
const uic=(k,h)=>`<img class="uic" src="${UI_ICO[k]}" style="height:${h}px" alt="">`;
const cv=document.getElementById('c'),g=cv.getContext('2d');
cv.width=VW*T;cv.height=VH*T;
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
/* ===== 和風BGM・SE（WebAudioで合成。外部ファイルなし） ===== */
let VOLB=1,VOLS=1;try{const a=localStorage.getItem('yokaiVolB'),b=localStorage.getItem('yokaiVolS');if(a!==null)VOLB=Math.max(0,Math.min(1,+a));if(b!==null)VOLS=Math.max(0,Math.min(1,+b))}catch(e){}
const AU={ctx:null,m:null,bgm:null,se:null,noise:null,muted:false,scene:null,timer:null,step:0,next:0,drone:null,pat:null};
try{AU.muted=localStorage.getItem('yokaiMute')==='1'}catch(e){}
let PADSWAP=false;try{PADSWAP=localStorage.getItem('yokaiPadSwap')==='1'}catch(e){}
function applySwap(){const c=document.getElementById('ctrl');if(c)c.classList.toggle('swap',PADSWAP);const pv=document.getElementById('setpv');if(pv)pv.classList.toggle('swap',PADSWAP);document.querySelectorAll('#setov [data-sw]').forEach(b=>b.classList.toggle('on',(b.dataset.sw==='1')===PADSWAP))}
function initSettings(){const ov=document.getElementById('setov');document.getElementById('setbtn').onclick=()=>{ov.hidden=false;applySwap()};document.getElementById('setclose').onclick=()=>{ov.hidden=true};ov.onclick=e=>{if(e.target===ov)ov.hidden=true};[['vb','yokaiVolB',v=>{VOLB=v;if(AU.bgm)AU.bgm.gain.value=v}],['vs','yokaiVolS',v=>{VOLS=v;if(AU.se)AU.se.gain.value=0.36*v}]].forEach(([id,k,fn])=>{const r=document.getElementById(id);if(!r)return;r.value=Math.round((id==='vb'?VOLB:VOLS)*100);r.oninput=()=>{const v=r.value/100;fn(v);try{localStorage.setItem(k,String(v))}catch(e){}};if(id==='vs')r.onchange=()=>{if(auInit())sfx('pick')}});ov.querySelectorAll('[data-sw]').forEach(b=>b.onclick=()=>{PADSWAP=b.dataset.sw==='1';try{localStorage.setItem('yokaiPadSwap',PADSWAP?'1':'0')}catch(e){}applySwap()});applySwap()}
setInterval(()=>{try{const gv=document.getElementById('v-game');if(S&&gv&&!gv.hidden&&!document.hidden&&!rafP&&!fxLoop)renderLite()}catch(e){}},50);
window.addEventListener('DOMContentLoaded',initSettings);if(document.readyState!=='loading')initSettings();
const SCALES={yo:[293.66,329.63,392,440,493.88],in:[293.66,311.13,392,440,466.16],sw:[261.63,277.18,369.99,392,415.3],mt:[329.63,392,440,493.88,587.33]};
const STG_P={1:{},2:{bpm:104,sc:'yo'},3:{bpm:50,sc:'sw'},4:{bpm:66,sc:'mt'},5:{bpm:112,sc:'in'}};
const SC_PARAM={
  menu:{bpm:60,sc:'yo'},home:{bpm:52,sc:'yo'},dungeon:{bpm:76,sc:'in'},boss:{bpm:108,sc:'in'}
};
function auInit(){
  if(AU.ctx)return true;
  const C=(typeof window!=='undefined')&&(window.AudioContext||window.webkitAudioContext);if(!C)return false;
  try{
    const c=AU.ctx=new C();
    const comp=c.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=6;comp.connect(c.destination);
    AU.m=c.createGain();AU.m.gain.value=AU.muted?0:0.9;AU.m.connect(comp);
    AU.bgm=c.createGain();AU.bgm.gain.value=VOLB;AU.bgm.connect(AU.m);
    AU.se=c.createGain();AU.se.gain.value=0.36*VOLS;AU.se.connect(AU.m);
    const len=c.sampleRate*2,buf=c.createBuffer(1,len,c.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=Math.random()*2-1;AU.noise=buf;
    return true;
  }catch(e){AU.ctx=null;return false}
}
const aT=()=>AU.ctx.currentTime;
function env(g,t,a,peak,dur,end=0.0001){g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(peak,t+a);g.gain.exponentialRampToValueAtTime(end,t+dur)}
function osc(type,f,t,dur,vol,dest,{a=0.005,f2=null,det=0}={}){
  const c=AU.ctx,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);o.detune.value=det;
  env(g,t,a,vol,dur);o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+0.05);return o;
}
function nz(t,dur,vol,dest,{type='bandpass',f=1000,q=1,f2=null,a=0.003}={}){
  const c=AU.ctx,s=c.createBufferSource(),fl=c.createBiquadFilter(),g=c.createGain();
  s.buffer=AU.noise;s.loop=true;fl.type=type;fl.frequency.setValueAtTime(f,t);if(f2)fl.frequency.exponentialRampToValueAtTime(f2,t+dur);fl.Q.value=q;
  env(g,t,a,vol,dur);s.connect(fl);fl.connect(g);g.connect(dest);s.start(t,Math.random());s.stop(t+dur+0.05);
}
function koto(t,f,vol,dest){ // 琴：撥弦の減衰音
  osc('triangle',f*1.006,t,1.1,vol,dest,{f2:f});
  osc('sine',f*2,t,0.5,vol*0.35,dest);
  osc('square',f*3,t,0.08,vol*0.12,dest);
  nz(t,0.05,vol*0.5,dest,{f:f*4,q:2});
}
function shaku(t,f,dur,vol,dest){ // 尺八：息混じりの笛
  const c=AU.ctx,o=c.createOscillator(),g=c.createGain(),l=c.createOscillator(),lg=c.createGain();
  o.type='sine';o.frequency.setValueAtTime(f*0.985,t);o.frequency.linearRampToValueAtTime(f,t+0.18);
  l.frequency.value=5.2;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(f*0.012,t+dur*0.7);l.connect(lg);lg.connect(o.frequency);
  g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(vol,t+0.16);g.gain.setValueAtTime(vol,t+dur*0.7);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g);g.connect(dest);o.start(t);l.start(t);o.stop(t+dur+0.05);l.stop(t+dur+0.05);
  osc('sine',f*2,t,dur,vol*0.18,dest,{a:0.2});
  nz(t,dur,vol*0.5,dest,{f:f*2.2,q:3,a:0.12});
}
function taiko(t,vol,dest,pitch=1){ // 太鼓
  osc('sine',120*pitch,t,0.42,vol,dest,{f2:48*pitch});
  nz(t,0.09,vol*0.6,dest,{type:'lowpass',f:700,q:0.7});
}
function tsuzumi(t,vol,dest){osc('sine',420,t,0.1,vol,dest,{f2:240});nz(t,0.04,vol*0.5,dest,{f:2400,q:2})}
function bell(t,f,vol,dest,len=1.4){[1,2.76,5.4].forEach((m,i)=>osc('sine',f*m,t,len/(1+i),vol/(1+i*1.4),dest))}
function gong(t,vol,dest){[1,1.51,2.2,3.1].forEach((m,i)=>osc('sine',110*m,t,2.4/(1+i*.4),vol/(1+i),dest,{det:i*3}));nz(t,0.3,vol*0.4,dest,{f:600,q:0.6})}
const SC=(sc,i,oct=1)=>SCALES[sc][((i%5)+5)%5]*Math.pow(2,Math.floor(i/5))*oct;
function auStep(){
  const c=AU.ctx;if(!c||!AU.scene||AU.muted)return;
  const sn=AU.scene.indexOf('dungeon')===0?'dungeon':AU.scene,stg=sn==='dungeon'?(+AU.scene.slice(7)||1):0;
  const P=Object.assign({},SC_PARAM[sn],stg?STG_P[stg]:{}),dur=60/P.bpm/2;
  if(AU.next<c.currentTime-1)AU.next=c.currentTime+0.05;
  while(AU.next<c.currentTime+0.25){
    const t=Math.max(AU.next,c.currentTime+0.02),st=AU.step,bar=st%16,sc=P.sc;
    if(st%16===0)AU.pat=AU.pat||[0,-1,2,-1,3,-1,2,-1];
    if(sn==='menu'){
      if(st%2===0&&Math.random()<0.8){AU.idx=Math.max(-3,Math.min(7,(AU.idx||2)+[-2,-1,-1,0,1,1,2][rnd(0,6)]));koto(t,SC(sc,AU.idx,0.5),0.16,AU.bgm)}
      if(bar===0&&Math.random()<0.7)shaku(t,SC(sc,rnd(2,5),1),dur*7,0.10,AU.bgm);
      if(bar===8&&Math.random()<0.4)shaku(t,SC(sc,rnd(1,4),1),dur*5,0.08,AU.bgm);
    }else if(sn==='home'){
      if(st%4===0&&Math.random()<0.7){AU.idx=Math.max(-3,Math.min(6,(AU.idx||1)+[-2,-1,0,1,2][rnd(0,4)]));koto(t,SC(sc,AU.idx,0.5),0.15,AU.bgm)}
      if(bar===0&&Math.random()<0.45)shaku(t,SC(sc,rnd(1,4),1),dur*8,0.08,AU.bgm);
      if(bar===8&&Math.random()<0.5)bell(t,SC(sc,rnd(5,8),1),0.03,AU.bgm,2.2);
    }else if(sn==='dungeon'&&stg===2){ // 竹林：軽やかな琴のアルペジオ＋鈴
      const ar=[0,2,4,2,5,4,2,3][(st>>1)%8]+(st%32>=16?2:0);
      if(st%2===0)koto(t,SC(sc,ar,0.5),0.17,AU.bgm);
      if(bar%4===2)tsuzumi(t,0.07,AU.bgm);
      if(bar===0)koto(t,SC(sc,0,0.25),0.2,AU.bgm);
      if(bar%8===4&&Math.random()<0.6)bell(t,SC(sc,rnd(5,9),1),0.045,AU.bgm,2);
      if(bar===8&&Math.random()<0.5)shaku(t,SC(sc,rnd(3,6),1),dur*5,0.07,AU.bgm);
    }else if(sn==='dungeon'&&stg===3){ // 沼：低く不気味、まばら
      if(bar===0&&Math.random()<0.8)koto(t,SC(sc,rnd(-5,-2),0.5),0.26,AU.bgm);
      if(bar===6&&Math.random()<0.4)koto(t,SC(sc,rnd(-3,1),0.5),0.2,AU.bgm);
      if(bar===0)nz(t,dur*12,0.05,AU.bgm,{f:220,q:0.5,f2:620,a:1.2});
      if(bar===8&&Math.random()<0.5)shaku(t,SC(sc,rnd(0,2),0.5),dur*6,0.08,AU.bgm);
      if(st%64===0)gong(t,0.1,AU.bgm);
      if(bar%4===0)osc('sine',55,t,dur*3,0.05,AU.bgm,{f2:48});
    }else if(sn==='dungeon'&&stg===4){ // 山頂：澄んだ笛と鈴、広がり
      if(bar===0)shaku(t,SC(sc,rnd(3,5),1),dur*10,0.1,AU.bgm);
      if(bar===8)shaku(t,SC(sc,rnd(1,4),1),dur*6,0.08,AU.bgm);
      if(bar%4===0)bell(t,SC(sc,rnd(2,7),1),0.05,AU.bgm,2.6);
      if(bar%8===0)koto(t,SC(sc,[0,2,4,2][(st>>4)%4],0.5),0.18,AU.bgm);
      if(bar===12&&Math.random()<0.5)taiko(t,0.14,AU.bgm,0.8);
    }else if(sn==='dungeon'&&stg===5){ // 社：重い太鼓と緊迫
      if(bar%4===0)taiko(t,bar===0?0.4:0.28,AU.bgm,bar===0?0.85:1);
      if(bar%8===6)taiko(t,0.18,AU.bgm,1.2);
      if(bar%2===0){const m=[0,-1,2,-1,3,2,0,-1][(bar/2)%8];if(m>=0)koto(t,SC(sc,m,0.5),0.17,AU.bgm)}
      if(bar===0&&st%32===0)gong(t,0.09,AU.bgm);
      if(bar===8&&Math.random()<0.6)shaku(t,SC(sc,rnd(3,6),1),dur*5,0.07,AU.bgm);
    }else if(sn==='dungeon'){
      if(bar===0&&st%32===0&&Math.random()<0.5)AU.pat=AU.pat.map(v=>Math.random()<0.25?(Math.random()<0.4?-1:rnd(-2,4)):v);
      const n=AU.pat[bar%8];
      if(bar%2===0){const k=AU.pat[(bar/2)%8];if(k!==-1)koto(t,SC(sc,k,0.5),0.2,AU.bgm)}
      if(bar===0||bar===8)koto(t,SC(sc,bar?3:0,0.25),0.22,AU.bgm);
      if(bar%8===0)taiko(t,0.3,AU.bgm,0.9);
      if(bar===4||bar===12)tsuzumi(t,0.1,AU.bgm);
      if(bar===6&&Math.random()<0.5)tsuzumi(t,0.07,AU.bgm);
      if(bar===0&&Math.random()<0.7)shaku(t,SC(sc,rnd(2,5),1),dur*7,0.09,AU.bgm);
      if(bar===8&&Math.random()<0.4)shaku(t,SC(sc,rnd(1,4),1),dur*4,0.07,AU.bgm);
      if(stg===2&&bar%8===4&&Math.random()<0.5)bell(t,SC(sc,rnd(6,9),1),0.035,AU.bgm,2);
      if(stg===3&&bar===0)nz(t,dur*10,0.035,AU.bgm,{f:260,q:0.6,f2:700,a:0.8});
      if(stg===4&&bar===4&&Math.random()<0.6)shaku(t,SC(sc,rnd(3,6),1),dur*5,0.06,AU.bgm);
      if(stg===5&&(bar===4||bar===12))taiko(t,0.22,AU.bgm,1.05);
    }else if(sn==='boss'){
      taiko(t,bar%4===0?0.36:0.14,AU.bgm,bar%4===0?0.9:1.15);
      if(bar%2===0){const r=[0,2,3,4,3,2,0,-1][(bar/2)%8];if(r>=0)koto(t,SC(sc,r+(Math.random()<0.3?5:0),0.5),0.15,AU.bgm)}
      if(bar===0&&st%32===0)gong(t,0.07,AU.bgm);
      if(bar===8&&Math.random()<0.5)shaku(t,SC(sc,rnd(3,6),1),dur*4,0.06,AU.bgm);
    }
    AU.next+=dur;AU.step++;
  }
}
function setScene(n){
  if(AU.scene===n)return;AU.scene=n;
  if(!AU.ctx)return;
  AU.step=0;AU.next=aT()+0.1;AU.pat=null;
  if(AU.drone){try{const g=AU.drone.g;g.gain.cancelScheduledValues(aT());g.gain.setValueAtTime(g.gain.value,aT());g.gain.linearRampToValueAtTime(0.0001,aT()+1.2);AU.drone.o.forEach(o=>o.stop(aT()+1.3))}catch(e){}AU.drone=null}
  if(n){
    const c=AU.ctx,g=c.createGain(),DR={dungeon2:[87.31,130.81],dungeon3:[61.74,87.31],dungeon4:[73.42,110],dungeon5:[58.27,87.31]}[n]||[65.41,98.0],o=DR.map((f,i)=>{const x=c.createOscillator();x.type=i?'sine':'triangle';x.frequency.value=f*(n==='boss'?1.06:1);x.connect(g);x.start();return x});
    g.gain.setValueAtTime(0.0001,aT());g.gain.linearRampToValueAtTime(n==='boss'?0.09:0.05,aT()+2);
    const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=400;g.connect(lp);lp.connect(AU.bgm);
    AU.drone={g,o};
  }
  if(!AU.timer)AU.timer=setInterval(auStep,60);
}
function sceneNow(){
  if(typeof S==='undefined'||!S)return curView==='menu'?'menu':null;
  if(curView==='menu')return 'menu';
  if(curView!=='game')return 'home';
  return S.home?'home':S.boss?'boss':'dungeon'+Math.min(5,Math.max(1,S.dun||1));
}
function syncScene(){setScene(sceneNow())}
function sfx(n,v=1){
  if(!AU.ctx||AU.muted||AU.ctx.state==='suspended'&&false)return;
  try{
    const t=aT()+0.005+((n==='hit'||n==='hurt')?0.06:0),d=AU.se,V=0.5*v;
    switch(n){
      case 'swing':nz(t,0.16,0.22*v,d,{type:'bandpass',f:500,q:0.9,f2:2600});break;
      case 'ui':osc('triangle',900,t,0.06,0.18*v,d,{f2:600});break;
      case 'step':nz(t,0.05,0.12*v,d,{f:520+Math.random()*120,q:2.5});osc('sine',170,t,0.05,0.08*v,d);break;
      case 'hit':nz(t,0.12,0.45*v,d,{type:'bandpass',f:1800,q:0.8,f2:500});osc('sine',150,t,0.14,0.4*v,d,{f2:60});break;
      case 'hurt':nz(t,0.18,0.5*v,d,{f:900,q:0.7,f2:300});osc('sawtooth',190,t,0.22,0.22*v,d,{f2:70});break;
      case 'kill':koto(t,392,0.2*v,d);koto(t+0.07,294,0.2*v,d);nz(t,0.08,0.2*v,d,{f:2500,q:1});break;
      case 'pick':koto(t,SC('yo',5,1),0.22*v,d);koto(t+0.07,SC('yo',7,1),0.2*v,d);break;
      case 'heal':[0,2,4,6].forEach((k,i)=>bell(t+i*0.07,SC('yo',k+3,1),0.11*v,d,1.1));break;
      case 'eat':for(let i=0;i<3;i++)nz(t+i*0.11,0.06,0.2*v,d,{f:700,q:1.5});bell(t+0.4,880,0.07*v,d,0.8);break;
      case 'fire':nz(t,0.9,0.5*v,d,{type:'bandpass',f:400,q:0.8,f2:3000});nz(t+0.2,0.7,0.3*v,d,{type:'highpass',f:1500,q:0.5});osc('sawtooth',90,t,0.8,0.15*v,d,{f2:200});break;
      case 'lvup':[0,2,3,5,7].forEach((k,i)=>koto(t+i*0.09,SC('yo',k,1),0.2*v,d));bell(t+0.5,SC('yo',10,1),0.1*v,d,1.6);break;
      case 'recruit':[0,2,4,7,9].forEach((k,i)=>koto(t+i*0.08,SC('yo',k+2,1),0.2*v,d));bell(t+0.45,SC('yo',12,1),0.14*v,d,2);shaku(t+0.1,SC('yo',5,1),0.8,0.07*v,d);break;
      case 'equip':bell(t,1320,0.12*v,d,0.7);nz(t,0.05,0.2*v,d,{f:4000,q:2});break;
      case 'trap':nz(t,0.7,0.5*v,d,{type:'lowpass',f:3200,q:0.5,f2:250});osc('sine',90,t,0.3,0.25*v,d,{f2:50});break;
      case 'snare':nz(t,0.12,0.35*v,d,{f:2500,q:3});osc('triangle',220,t,0.5,0.22*v,d,{f2:140});osc('triangle',185,t+0.05,0.4,0.15*v,d,{f2:120});break;
      case 'growl':osc('sawtooth',62,t,0.9,0.25*v,d,{f2:38});osc('sawtooth',70,t+0.25,0.7,0.18*v,d,{f2:40});nz(t,0.8,0.2*v,d,{type:'lowpass',f:300,q:1});break;
      case 'ambush':taiko(t,0.55*v,d,0.8);taiko(t+0.18,0.45*v,d,0.9);gong(t+0.05,0.18*v,d);break;
      case 'stairs':[0,-2,-4].forEach((k,i)=>koto(t+i*0.13,SC('yo',k+6,1),0.2*v,d));break;
      case 'staff':bell(t,SC('yo',9,1),0.15*v,d,2.2);[0,2,4,6,9].forEach((k,i)=>shaku(t+i*0.1,SC('yo',k+3,1),0.5,0.05*v,d));break;
      case 'revive':gong(t,0.22*v,d);[0,2,4,7].forEach((k,i)=>koto(t+0.15+i*0.07,SC('yo',k+4,1),0.22*v,d));bell(t+0.4,1318,0.16*v,d,2);break;
      case 'die':gong(t,0.3*v,d);osc('sine',220,t,1.6,0.2*v,d,{f2:70});break;
      case 'clear':taiko(t,0.4*v,d);[0,2,4,7,9,11].forEach((k,i)=>koto(t+0.2+i*0.12,SC('yo',k+2,1),0.22*v,d));shaku(t+0.3,SC('yo',9,1),1.6,0.08*v,d);bell(t+1,SC('yo',14,1),0.12*v,d,2.5);break;
      case 'boss':gong(t,0.3*v,d);taiko(t,0.6*v,d,0.7);taiko(t+0.3,0.5*v,d,0.8);taiko(t+0.6,0.6*v,d,0.7);break;
      case 'warp':osc('sine',1400,t,0.35,0.16*v,d,{f2:300});bell(t+0.05,SC('yo',12,1),0.1*v,d,1.2);nz(t,0.3,0.12*v,d,{f:3000,q:1.5,f2:800});break;
      case 'fuse':[0,3,5,3,7].forEach((k,i)=>bell(t+i*0.1,SC('yo',k+4,1),0.12*v,d,1.2));nz(t,0.5,0.15*v,d,{f:800,q:1,f2:3000});break;
    }
  }catch(e){}
}
function auToggle(){
  if(!auInit())return;AU.muted=!AU.muted;
  try{localStorage.setItem('yokaiMute',AU.muted?'1':'0')}catch(e){}
  AU.m.gain.setTargetAtTime(AU.muted?0:0.9,aT(),0.05);
  if(!AU.muted){AU.ctx.resume();AU.next=aT()+0.1;syncScene()}
  auBtn();
}
function auBtn(){document.querySelectorAll('.mutebtn').forEach(b=>{b.innerHTML=AU.muted?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';+(b.dataset.lbl?'<span>音</span>':'');b.setAttribute('aria-label',AU.muted?'音を出す':'音を消す')})}
(function(){
  if(typeof document==='undefined'||!document.addEventListener)return;
  const unlock=()=>{if(auInit()){if(AU.ctx.state!=='running'&&!AU.muted)AU.ctx.resume();if(!AU.timer){AU.scene=null}syncScene()}};
  ['pointerdown','keydown','touchend'].forEach(e=>document.addEventListener(e,unlock,{passive:true}));
  document.addEventListener('pointerdown',e=>{const t=e.target&&e.target.closest&&e.target.closest('.mbtn,#menubar button,#itemact button,.back,#bag button,#again,.card button,#stairq button,#lvq button,#setov button,#setbtn');if(t)sfx('ui')},true);
  document.addEventListener('visibilitychange',()=>{if(!AU.ctx)return;if(document.hidden)AU.ctx.suspend();else if(!AU.muted)AU.ctx.resume()});
  document.querySelectorAll('.mutebtn').forEach(b=>b.onclick=auToggle);auBtn();
})();

const ITEMS={herb:{n:'薬草',ch:'薬'},rice:{n:'おにぎり（小）',s:'飯・小',ch:'飯'},fire:{n:'火炎の巻物',ch:'巻'},bag:{n:'カバン',ch:'鞄'},staff:{n:'道標の杖',s:'道標の杖',ch:'杖'},ring:{n:'飯好きの腕輪',s:'腕輪',ch:'輪',eq:1},charm:{n:'復活の護符',s:'護符',ch:'護',eq:1},riceL:{n:'おにぎり（大）',s:'飯・大',ch:'飯'}};
const TIER=['弱','ちょい弱','中','ちょい強','強'],RATE=[0.2,0.12,0.08,0.05,0.02],MINF=[1,2,3,4,99],WEIGHT=[5,4,3,1,0];
const MON=[
  {n:'鬼',ch:'鬼',hp:10,atk:6,t:0,spd:0.5},
  {n:'河童',ch:'河',hp:7,atk:2,t:0},
  {n:'天狗',ch:'天',hp:8,atk:2,t:1,spd:2},
  {n:'猫又',ch:'猫',hp:7,atk:2,t:1,hits:2,crit:0.15},
  {n:'雪女',ch:'雪',hp:8,atk:3,t:1,freeze:0.3},
  {n:'からかさ小僧',ch:'傘',hp:6,atk:2,t:1,range:3},
  {n:'ぬりかべ',ch:'壁',hp:18,atk:2,t:2,armor:1,wall:true},
  {n:'一つ目小僧',ch:'目',hp:8,atk:1,t:2},
  {n:'鎌鼬',ch:'鎌',hp:9,atk:2,t:2,spd:2,bleed:0.4},
  {n:'座敷童子',ch:'座',hp:8,atk:2,t:2},
  {n:'ぬらりひょん',ch:'ぬ',hp:18,atk:5,t:3,conf:0.3},
  {n:'九尾の狐',ch:'狐',hp:30,atk:8,t:4}
];
const DUNGEONS=[{n:1,floors:4},{n:2,floors:8},{n:3,floors:12},{n:4,floors:15},{n:5,floors:19,boss:true}];
const fuseUnlocked=()=>CLEAR>=1;
let CLEAR=0;try{CLEAR=+localStorage.getItem('yokaiClear')||0}catch(e){}
const DEBUG_UNLOCK_ALL=true; // チェック用：全ステージ・配合を解放。本番ではfalseにする
if(DEBUG_UNLOCK_ALL)CLEAR=Math.max(CLEAR,DUNGEONS.length);
const VAR=[null,{tag:'強',hp:1.5,atk:1.8,exp:1.5,col:'#ff9f1c',k:1.12},{tag:'激',hp:2.2,atk:2.5,exp:2.2,col:'#ff1744',k:1.24},{tag:'BOSS',hp:1,atk:1,exp:8,col:'#ff1744',k:1.35}];
function mkMon(b,floor,x,y){
  let v=0;const r=Math.random();
  if(floor>=10)v=r<0.3?2:r<0.6?1:0;else if(floor>=5)v=r<0.4?1:0;
  const hp0=b.hp+floor-1;
  if(!v)return {...b,x,y,base:b.hp,hp:hp0,atk:b.atk+1,sk:b.n,var:0};
  const V=VAR[v];
  return {...b,n:`${b.n}・${V.tag}`,sk:b.n,var:v,x,y,base:b.hp,hp:Math.ceil(hp0*V.hp),atk:Math.ceil(b.atk*V.atk)+1};
}
const TRAPS={snare:{n:'くくり罠',ch:'罠',col:'#d9b36a'},growl:{n:'腹の音',ch:'腹',col:'#ffd166'},ambush:{n:'奇襲',ch:'襲',col:'#ff6b81'}};
function mkTraps(floor,rooms,free){
  const n=2+(floor>=4?1:0)+(floor>=10?1:0),ks=Object.keys(TRAPS),out=[];
  for(let i=0;i<n;i++){const s=free(rooms[rnd(0,rooms.length-1)]);out.push({x:s.x,y:s.y,k:ks[rnd(0,ks.length-1)],rev:false})}
  return out;
}
const FXD={lvup:900,dmg:950,fire:1100,warp:700,sl:520,slr:520,slc:620};
const LC=document.createElement('canvas');LC.width=VW*T;LC.height=VH*T;const lg=LC.getContext('2d');
function drawLight(p,ox,oy){
  const cor=!S.home&&!!S.rooms&&!S.rooms.some(r=>p.x>=r.x&&p.x<r.x+r.w&&p.y>=r.y&&p.y<r.y+r.h);
  lg.globalCompositeOperation='source-over';lg.clearRect(0,0,LC.width,LC.height);
  lg.fillStyle=`rgba(${THEMES[themeIdx()].dark.join(',')},${S.home?.45:.76})`;lg.fillRect(0,0,LC.width,LC.height);
  lg.globalCompositeOperation='destination-out';
  const spot=(x,y,r,a,e)=>{const sl=e?slide(e):[0,0],cx=(x-ox+.5+sl[0])*T+CAMX,cy=(y-oy+.5+sl[1])*T+CAMY;if(cx<-r||cy<-r||cx>LC.width+r||cy>LC.height+r)return;const gr=lg.createRadialGradient(cx,cy,r*.1,cx,cy,r);gr.addColorStop(0,`rgba(0,0,0,${a})`);gr.addColorStop(.55,`rgba(0,0,0,${a*.72})`);gr.addColorStop(1,'rgba(0,0,0,0)');lg.fillStyle=gr;lg.fillRect(cx-r,cy-r,2*r,2*r)};
  const fl=(b)=>b*(0.96+Math.random()*.08);
  (S.torches||[]).forEach(t=>{if(S.seen[t.y]&&S.seen[t.y][t.x])spot(t.x,t.y,fl(T*3.8),.95)});
  if(S.stairs&&S.stairs.x>=0&&S.seen[S.stairs.y][S.stairs.x])spot(S.stairs.x,S.stairs.y,T*2.4,.75);
  S.allies.forEach(a=>spot(a.x,a.y,T*2.2,.6,a));
  spot(p.x,p.y,fl(T*(cor?3.4:5.2)),1,p);
  lg.globalCompositeOperation='source-over';
  g.drawImage(LC,0,0);
}
const PTC=[
 {c:'200,220,255',n:7,vy:[-5,-1],vx:[-3,3],r:[.8,1.4],a:.18,k:'dust'},
 {c:'255,214,150',n:10,vy:[-4,2],vx:[-5,5],r:[.8,1.5],a:.2,k:'dust'},
 {c:'200,255,120',n:6,vy:[-5,5],vx:[-9,9],r:[1.2,2],a:.55,k:'fly'},
 {c:'200,150,255',n:10,vy:[-16,-6],vx:[-4,4],r:[1,2],a:.28,k:'rise'},
 {c:'236,246,255',n:12,vy:[6,16],vx:[-8,8],r:[.9,1.7],a:.28,k:'snow'},
 {c:'255,120,64',n:12,vy:[-28,-10],vx:[-6,6],r:[.9,1.6],a:.5,k:'ember'}];
let PT=[],PTI=-1,PTL=0;
const VIG=(()=>{const c=document.createElement('canvas');c.width=VW*T;c.height=VH*T;const x=c.getContext('2d');const gr=x.createRadialGradient(c.width/2,c.height/2,c.height*.38,c.width/2,c.height/2,c.height*.82);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,'rgba(0,0,0,.55)');x.fillStyle=gr;x.fillRect(0,0,c.width,c.height);return c})();
function drawParticles(){
  const ti=themeIdx(),cf=PTC[ti],W2=VW*T,H2=VH*T,n=performance.now(),dt=Math.min(.06,PTL?(n-PTL)/1000:.016);PTL=n;
  const rr=(a,b)=>a+Math.random()*(b-a);
  if(PTI!==ti){PTI=ti;PT=[];for(let i=0;i<cf.n;i++)PT.push({x:rr(0,W2),y:rr(0,H2),vx:rr(...cf.vx),vy:rr(...cf.vy),r:rr(...cf.r),ph:rr(0,6.28),sp:rr(.6,1.6)})}
  g.save();g.globalCompositeOperation='lighter';
  for(const q of PT){
    q.ph+=dt*q.sp;
    let ax=0,ay=0;
    if(cf.k==='fly'){q.vx+=Math.sin(q.ph*2.3)*dt*30;q.vy+=Math.cos(q.ph*1.9)*dt*30;q.vx=Math.max(-12,Math.min(12,q.vx));q.vy=Math.max(-10,Math.min(10,q.vy))}
    else ax=Math.sin(q.ph)*6;
    q.x+=(q.vx+ax)*dt;q.y+=(q.vy+ay)*dt;
    if(q.x<-6)q.x=W2+4;else if(q.x>W2+6)q.x=-4;
    if(q.y<-6){q.y=H2+4;q.x=rr(0,W2)}else if(q.y>H2+6){q.y=-4;q.x=rr(0,W2)}
    let al=cf.a;
    if(cf.k==='fly')al*=.35+.65*Math.max(0,Math.sin(q.ph*2.2));
    else if(cf.k==='ember')al*=.5+.5*Math.sin(q.ph*5);
    else al*=.6+.4*Math.sin(q.ph*1.7);
    if(cf.k==='fly'||cf.k==='ember'){const gr=g.createRadialGradient(q.x,q.y,0,q.x,q.y,q.r*4);gr.addColorStop(0,`rgba(${cf.c},${al})`);gr.addColorStop(1,`rgba(${cf.c},0)`);g.fillStyle=gr;g.fillRect(q.x-q.r*4,q.y-q.r*4,q.r*8,q.r*8)}
    else{g.fillStyle=`rgba(${cf.c},${al})`;g.beginPath();g.arc(q.x,q.y,q.r,0,6.283);g.fill()}
  }
  g.restore();
  g.drawImage(VIG,0,0);
}
function screenHit(k){
  const cvs=document.getElementById('c'),fx=document.getElementById('sfx');if(!cvs||!cvs.animate)return;
  k=Math.min(2,Math.max(.6,k));
  cvs.animate([{transform:'translate(0,0)'},{transform:`translate(${-7*k}px,${3*k}px)`},{transform:`translate(${6*k}px,${-3*k}px)`},{transform:`translate(${-4*k}px,${2*k}px)`},{transform:`translate(${2*k}px,0)`},{transform:'translate(0,0)'}],{duration:300,easing:'ease-out'});
  fx.animate([{opacity:Math.min(.95,.35+k*.3)},{opacity:0}],{duration:420,easing:'ease-out'});
}
function floorTitle(kind){
  {const cv0=document.getElementById('c');if(cv0&&cv0.animate&&!S.home)cv0.animate([{opacity:0,filter:'brightness(.2)'},{opacity:1,filter:'brightness(1)'}],{duration:600,easing:'ease-out'})}
  const ft=document.getElementById('ftitle'),inn=ft.querySelector('.ft-in');if(!ft.animate||S.home)return;
  ft.getAnimations().forEach(a=>a.cancel());ft.classList.toggle('boss',kind==='boss');
  if(kind==='boss'){const sp=SPR['九尾母'],im=sp&&sp.d&&sp.d.src?`<img src="${sp.d.src}" alt="">`:'';inn.innerHTML=`${im}<div class="ft-l"></div><div class="ft-2">母なる大妖怪</div><div class="ft-1">九尾の狐</div><div class="ft-l"></div>`}
  else inn.innerHTML=`<div class="ft-l"></div><div class="ft-2">ステージ${S.dun||1}</div><div class="ft-1">${S.floor}F</div><div class="ft-l"></div>`;
  const dur=kind==='boss'?1900:1150;
  ft.animate([{opacity:1},{opacity:1,offset:kind==='boss'?.72:.55},{opacity:0}],{duration:dur,easing:'ease-out'});
  const s0=S;s0.busy=true;setTimeout(()=>{if(S===s0)s0.busy=false},Math.min(dur-300,900));
}
let RLITE=false;function renderLite(){RLITE=true;try{render()}finally{RLITE=false}}
let ANIM_UNTIL=0,rafP=false,CAMX=0,CAMY=0;const MOVE_MS=120,LUNGE_MS=200;
function slideCur(e,n){if(!e._st)return[0,0];const k=(n-e._st)/MOVE_MS;if(k>=1){e._st=0;return[0,0]}const f=(1-k)*(1-k);return[e._sx*f,e._sy*f]}
function slide(e){const n=performance.now();
  if(e._lx===undefined){e._lx=e.x;e._ly=e.y;e._st=0}
  else if(e._lx!==e.x||e._ly!==e.y){const c=slideCur(e,n),d=Math.max(Math.abs(e.x-e._lx),Math.abs(e.y-e._ly));
    if(d<=1){e._sx=Math.max(-1.5,Math.min(1.5,c[0]+e._lx-e.x));e._sy=Math.max(-1.5,Math.min(1.5,c[1]+e._ly-e.y));e._st=n;ANIM_UNTIL=Math.max(ANIM_UNTIL,n+MOVE_MS+30)}else e._st=0;
    e._lx=e.x;e._ly=e.y}
  const c=slideCur(e,n);let dx=c[0],dy=c[1];
  if(e._lg){const k=(n-e._lg.t)/LUNGE_MS;if(k>=1)e._lg=null;else{const ez=u=>1-(1-u)*(1-u);const a=k<.3?ez(k/.3):k<.55?1:1-ez((k-.55)/.45);dx+=e._lg.x*.4*a;dy+=e._lg.y*.4*a}}
  return[dx,dy]}
function lunge(a,t){if(!a||!t)return;const sx=Math.sign(t.x-a.x),sy=Math.sign(t.y-a.y);if(!sx&&!sy)return;const n=performance.now();a._lg={x:sx,y:sy,t:n};sfx('swing',.8);ANIM_UNTIL=Math.max(ANIM_UNTIL,n+LUNGE_MS+40);render()}
const HITDL=60;
function dmg(e,v,tp,dl){dl=dl||0;if(tp==='d'||tp==='p'||tp==='pc'||tp==='c')dl+=HITDL;addFx(e.x,e.y,'dmg',dl,{v,tp});if(tp!=='h'&&tp!=='m')e.hitT=performance.now()+dl;if(e===S.p&&(tp==='p'||tp==='pc'))setTimeout(()=>screenHit(.7+(+v||0)/8+(tp==='pc'?.5:0)),dl)}
function addFx(x,y,k,dl,ex){if(!dl&&(k==='sl'||k==='slr'||k==='slc'))dl=HITDL;S.fx=S.fx||[];S.fx.push({x,y,k,t:performance.now()+(dl||0),...(ex||{})});if(!fxLoop){fxLoop=true;const f=()=>{renderLite();if(S.fx&&S.fx.length)requestAnimationFrame(f);else fxLoop=false};requestAnimationFrame(f)}}
let fxLoop=false;
function drawFx(ox,oy){
  if(!S.fx)return;const now=performance.now();S.fx=S.fx.filter(q=>now-q.t<(FXD[q.k]||900));
  S.fx.forEach(q=>{
    if(now<q.t)return;
    const i=q.x-ox,j=q.y-oy;if(i<-6||j<-6||i>=VW+6||j>=VH+6)return;
    const D=FXD[q.k]||900,u=(now-q.t)/D,cx=i*T+T/2,cy=(j+1)*T-6;
    if(q.k==='fire'){
      const R=u*T*5.2;
      g.save();g.globalAlpha=Math.max(0,(1-u)*.9);
      g.lineWidth=7*(1-u)+2;g.strokeStyle='rgb(255,150,40)';g.beginPath();g.arc(cx,cy-T/2,R,0,Math.PI*2);g.stroke();
      g.lineWidth=3;g.strokeStyle='rgb(255,235,150)';g.beginPath();g.arc(cx,cy-T/2,R*.88,0,Math.PI*2);g.stroke();
      for(let n=0;n<22;n++){
        const a=n*2.399,rr=R*(.55+(n%5)*.1),fx=cx+Math.cos(a)*rr,fy=cy-T/2+Math.sin(a)*rr*.85-u*10;
        const sz=(5+(n%3)*3)*(1-u*.6);
        g.globalAlpha=Math.max(0,(1-u)*.85);
        g.fillStyle=n%3===0?'rgb(255,220,90)':n%3===1?'rgb(255,140,40)':'rgb(230,70,30)';
        g.beginPath();g.moveTo(fx,fy-sz*1.8);g.quadraticCurveTo(fx+sz,fy,fx,fy+sz*.6);g.quadraticCurveTo(fx-sz,fy,fx,fy-sz*1.8);g.fill();
      }
      if(u<.25){g.globalAlpha=(1-u/.25)*.35;g.fillStyle='rgb(255,170,60)';g.fillRect(0,0,VW*T,VH*T)}
      g.restore();return;
    }
    if(q.k==='lvup'){
      const e1=1-Math.pow(1-u,3),R2=e1*T*1.5;g.save();g.globalAlpha=Math.max(0,1-u);g.strokeStyle='#ffd54a';g.lineWidth=3*(1-u)+1;g.beginPath();g.ellipse(cx,cy-T*.4,R2,R2*.45,0,0,Math.PI*2);g.stroke();
      g.fillStyle='#fff3b0';for(let n=0;n<10;n++){const a=n*2.399,rr=T*.3+e1*T*.7;g.beginPath();g.arc(cx+Math.cos(a)*rr*.9,cy-T*.4-e1*T*.9+Math.sin(a)*rr*.35,2.4*(1-u*.6),0,Math.PI*2);g.fill()}
      g.globalAlpha=Math.max(0,(1-u*1.4))*.5;const gr=g.createLinearGradient(0,cy-T*2,0,cy);gr.addColorStop(0,'rgba(255,230,120,0)');gr.addColorStop(1,'rgba(255,230,120,.8)');g.fillStyle=gr;g.fillRect(cx-T*.4,cy-T*2,T*.8,T*2);g.restore();return;
    }
    if(q.k==='dmg'){
      const tp=q.tp,big=tp==='c'||tp==='pc',col={d:'#ffffff',c:'#ffd54a',p:'#ff6b5e',pc:'#ff3b30',h:'#7be0a0',m:'#cfd6e3'}[tp]||'#fff';
      const txt=tp==='h'?'+'+q.v:String(q.v),e2=1-Math.pow(1-Math.min(1,u*2.2),3),sc=1+.55*Math.max(0,1-u/.18),al=u<.6?1:Math.max(0,(1-u)/.4);
      const fx0=cx+((q.x*13+q.y*7)%9-4),fy0=j*T+4-e2*(big?30:24);
      g.save();g.globalAlpha=al;g.textAlign='center';g.textBaseline='middle';g.font=`900 ${Math.round((tp==='m'?13:big?24:18)*sc)}px sans-serif`;g.lineJoin='round';g.lineWidth=4;g.strokeStyle='rgba(10,10,20,.92)';g.strokeText(txt,fx0,fy0);g.fillStyle=col;g.fillText(txt,fx0,fy0);g.restore();return;
    }
    if(q.k==='sl'||q.k==='slr'||q.k==='slc'){
      const big=q.k==='slc',col=q.k==='slr'?[255,90,80]:big?[255,214,80]:[255,255,255],R=(big?T*.7:T*.52),cy2=cy-T/2,e=Math.min(1,u*2.4),fa=u<.5?1:Math.max(0,1-(u-.5)/.5);
      const dir=((q.x*7+q.y*3)%2)?1:-1,rgb=`${col[0]},${col[1]},${col[2]}`;
      g.save();g.lineCap='round';g.lineJoin='round';
      // 筆の一画: 始点から終点へ、太さが 入り(細)→止め(太)→払い(細) と変化する
      const stroke=(ox2,oy2,wmax,alpha,sh)=>{
        const x0=cx-dir*R+ox2,y0=cy2-R+oy2,x1=cx+dir*R+ox2,y1=cy2+R*.9+oy2,bx=cx+dir*R*.35+ox2-dir*R*.5,by=cy2-R*.15+oy2+R*.25;
        const N=14,n=Math.max(2,Math.round(N*e)),L=[],Rr=[];
        for(let i=0;i<=n;i++){const t=i/N,m=1-t;const X=m*m*x0+2*m*t*bx+t*t*x1,Y=m*m*y0+2*m*t*by+t*t*y1;
          const w=wmax*(Math.sin(Math.PI*Math.pow(t,.7))*.9+.1)*(1-u*.5);
          const tx=2*m*(bx-x0)+2*t*(x1-bx),ty=2*m*(by-y0)+2*t*(y1-by),tl=Math.hypot(tx,ty)||1,nx=-ty/tl,ny=tx/tl;
          L.push([X+nx*w/2,Y+ny*w/2]);Rr.push([X-nx*w/2,Y-ny*w/2])}
        g.globalAlpha=fa*alpha;g.fillStyle=sh?'rgb(20,10,10)':`rgb(${rgb})`;
        g.beginPath();g.moveTo(L[0][0],L[0][1]);L.forEach(p=>g.lineTo(p[0],p[1]));for(let i=Rr.length-1;i>=0;i--)g.lineTo(Rr[i][0],Rr[i][1]);g.closePath();g.fill();
      };
      stroke(1.5,2,big?12:8.5,.45,true);   // 墨の影
      stroke(0,0,big?11:7.5,.95,false);
      // かすれ（毛先）
      for(let k=-2;k<=2;k++)if(k)stroke(k*2.2,k*1.3,2,.55,false);
      if(big){stroke(9,5,7,.9,false)}
      // 墨のしぶき
      g.fillStyle=`rgb(${rgb})`;
      for(let n=0;n<(big?10:7);n++){const aa=n*2.399+q.x+q.y,rr=T*.2+u*T*(big?.75:.55);g.globalAlpha=fa*.85;g.beginPath();g.arc(cx+Math.cos(aa)*rr,cy2+Math.sin(aa)*rr,(n%3?1.6:3)*(big?1.3:1)*(1-u*.7),0,Math.PI*2);g.fill()}
      if(u<.15){g.globalAlpha=(1-u/.15)*.4;g.fillStyle='#fff';g.beginPath();g.arc(cx,cy2,T*.34,0,Math.PI*2);g.fill()}
      g.restore();return;
    }
    if(q.k==='flame'){
      g.save();const sz=10+Math.sin(u*9)*2;
      for(let n=0;n<4;n++){
        const fx=cx+(n-1.5)*7,fy=cy-T*.35-u*14-(n%2)*5;
        g.globalAlpha=Math.max(0,(1-u)*.95);g.fillStyle=n%2?'rgb(255,200,70)':'rgb(255,110,30)';
        g.beginPath();g.moveTo(fx,fy-sz*1.5);g.quadraticCurveTo(fx+sz*.7,fy,fx,fy+sz*.5);g.quadraticCurveTo(fx-sz*.7,fy,fx,fy-sz*1.5);g.fill();
      }
      g.restore();return;
    }
    if(q.k==='warp'){
      g.save();const cy2=cy-T/2;
      g.globalAlpha=Math.max(0,(1-u)*.9);
      g.strokeStyle='rgb(190,170,255)';g.lineWidth=3;
      g.beginPath();g.ellipse(cx,cy2,T*.5*(1-u*.5)+4,T*.7*(1-u*.4)+4,0,0,Math.PI*2);g.stroke();
      for(let n=0;n<8;n++){
        const a=n*.785+u*5,r=T*.55*(1-u);
        g.fillStyle=n%2?'rgb(255,240,200)':'rgb(150,200,255)';
        g.beginPath();g.arc(cx+Math.cos(a)*r,cy2+Math.sin(a)*r*1.2-u*12,3.5*(1-u)+1,0,Math.PI*2);g.fill();
      }
      g.restore();return;
    }
    if(i<0||j<0||i>=VW||j>=VH)return;
    const tint=q.k==='ambush'?[170,140,200]:q.k==='growl'?[240,225,170]:[225,225,230];
    for(let n=0;n<9;n++){
      const a=n*2.399+q.x*1.7,r=(4+u*(14+(n%3)*5)),dx=Math.cos(a)*r*1.1,dy=-u*(18+(n%4)*7)+Math.sin(a)*r*.5;
      g.globalAlpha=Math.max(0,(1-u)*.75);g.fillStyle=`rgb(${tint[0]},${tint[1]},${tint[2]})`;
      g.beginPath();g.arc(cx+dx,cy+dy,5+u*9+(n%3)*2,0,Math.PI*2);g.fill();
    }
    g.globalAlpha=1;
  });
}
function springTrap(t){
  const p=S.p;t.rev=true;stopHold();
  addFx(t.x,t.y,t.k);sfx('trap');sfx(t.k==='snare'?'snare':t.k==='growl'?'growl':'ambush');
  if(t.k==='snare'){say('くくり罠にかかった！5ターン動けない…');p.snare=5;autoSnare()}
  else if(t.k==='growl'){p.food=Math.max(0,p.food-15);say('腹の音の罠！お腹が鳴って、満腹度が15下がった。')}
  else{
    const c=[];for(let r=1;r<=3&&c.length<3;r++){c.length=0;for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){const x=p.x+dx,y=p.y+dy;if((dx||dy)&&S.m[y]&&S.m[y][x]&&!occ(x,y)&&!(x===S.stairs.x&&y===S.stairs.y))c.push([x,y])}}
    let n=0;while(n<3&&c.length){const [x,y]=c.splice(rnd(0,c.length-1),1)[0];const e=mkMon(pickYokai(S.floor),S.floor,x,y);S.mon.push(e);addFx(x,y,'ambush');n++}
    say(`奇襲の罠！妖怪が${n}体、周りに現れた！`);
  }
}
function autoSnare(){
  S.lock=true;
  const step=()=>{
    if(S.over||!S.p.snare||S.p.snare<=0){S.lock=false;render();return}
    act(0,0,true);setTimeout(step,300);
  };
  setTimeout(step,450);
}
function newBossFloor(p,floor){
  const m=Array.from({length:H},()=>Array(W).fill(0));
  const X1=13,X2=26,Y1=8,Y2=20;
  for(let y=Y1;y<=Y2;y++)for(let x=X1;x<=X2;x++)m[y][x]=1;
  p.x=19;p.y=19;
  const used=[{x:19,y:19},{x:19,y:10},{x:19,y:12}];
  const free=()=>{let s;do{s={x:rnd(X1,X2),y:rnd(11,17)}}while(used.some(u=>Math.abs(u.x-s.x)<1&&Math.abs(u.y-s.y)<1));used.push(s);return s};
  const kyu=MON.find(q=>q.n==='九尾の狐');
  const mon=[{...kyu,hits:2,atk:10,crit:0.1,x:19,y:12,base:kyu.hp,hp:170,sk:kyu.n,spk:'九尾母',var:3,boss:true}];
  for(let i=0;i<4;i++){const b=pickYokai(12),s=free();const e=mkMon(b,12,s.x,s.y);if(!e.var){const V=VAR[1];e.n=`${b.n}・${V.tag}`;e.var=1;e.hp=Math.ceil(e.hp*V.hp);e.atk=Math.ceil(b.atk*V.atk)+1}mon.push(e)}
  const items=[{...free(),k:'herb'},{...free(),k:'herb'},{...free(),k:'rice'}];
  const torches=[{x:15,y:Y1-1},{x:23,y:Y1-1},{x:X1-1,y:14},{x:X2+1,y:14}];
  const seen=Array.from({length:H},()=>Array(W).fill(false));
  for(let y=Y1-1;y<=Y2+1;y++)for(let x=X1-1;x<=X2+1;x++)seen[y][x]=true;
  return {m,stairs:{x:-1,y:-1},bossStairs:{x:19,y:9},boss:true,mon,items,walls:[],torches,seen,traps:[],rooms:[{x:X1,y:Y1,w:X2-X1+1,h:Y2-Y1+1}],walk:null,_vk:null};
}
function pickYokai(floor){
  const pool=MON.filter(m=>MINF[m.t]<=floor&&WEIGHT[m.t]>0);
  let r=Math.random()*pool.reduce((a,m)=>a+WEIGHT[m.t],0);
  for(const m of pool){r-=WEIGHT[m.t];if(r<0)return m}
  return pool[0];
}
let S;

function newFloor(floor,p,tries=0){
  const m=Array.from({length:H},()=>Array(W).fill(0)),rooms=[];
  for(let i=0;i<80&&rooms.length<9;i++){
    const w=rnd(4,8),h=rnd(3,6),x=rnd(1,W-w-2),y=rnd(1,H-h-2);
    if(rooms.some(r=>x<r.x+r.w+2&&x+w+2>r.x&&y<r.y+r.h+2&&y+h+2>r.y))continue;
    rooms.push({x,y,w,h});
    for(let j=y;j<y+h;j++)for(let k=x;k<x+w;k++)m[j][k]=1;
  }
  if(rooms.length<3)return newFloor(floor,p);
  const mid=r=>[r.x+(r.w>>1),r.y+(r.h>>1)];
  for(let i=1;i<rooms.length;i++){
    let [ax,ay]=mid(rooms[i-1]);const [bx,by]=mid(rooms[i]);
    while(ax!==bx){m[ay][ax]=1;ax+=Math.sign(bx-ax)}
    while(ay!==by){m[ay][ax]=1;ay+=Math.sign(by-ay)}
    m[ay][ax]=1;
  }
  if(tries<80){
    const inR=(x,y)=>rooms.some(r=>x>=r.x&&x<r.x+r.w&&y>=r.y&&y<r.y+r.h);
    for(let y=0;y<H-1;y++)for(let x=0;x<W-1;x++)
      if(m[y][x]&&m[y][x+1]&&m[y+1][x]&&m[y+1][x+1]&&!(inR(x,y)&&inR(x+1,y)&&inR(x,y+1)&&inR(x+1,y+1)))return newFloor(floor,p,tries+1);
  }
  const spot=r=>({x:rnd(r.x,r.x+r.w-1),y:rnd(r.y,r.y+r.h-1)});
  const used=[];
  const free=r=>{let s;do{s=spot(r)}while(used.some(u=>u.x===s.x&&u.y===s.y));used.push(s);return s};
  const [px,py]=mid(rooms[0]);
  p.x=px;p.y=py;used.push({x:px,y:py});
  const stairs=free(rooms[rooms.length-1]);
  const mon=[],items=[];
  for(let i=0;i<Math.min(3+floor,12);i++){
    const b=pickYokai(floor),s=free(rooms[rnd(1,rooms.length-1)]);
    mon.push(mkMon(b,floor,s.x,s.y));
  }
  const kinds=Object.keys(ITEMS);
  for(let i=0;i<4+(floor>=6?1:0)+(S&&S.allies&&S.allies.some(a=>a.n==='座敷童子')?2:0);i++){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:kinds[rnd(0,2)]})}
  if(Math.random()<0.15){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:'riceL'})}
  if(Math.random()<0.07){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:'staff'})}
  if(Math.random()<0.05){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:'ring'})}
  if(Math.random()<0.05){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:'charm'})}
  if(!(S&&S.gotBag)&&Math.random()<0.4){const s=free(rooms[rnd(0,rooms.length-1)]);items.push({...s,k:'bag'})}
  const cand=[];for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++)if(!m[y][x]&&m[y+1][x])cand.push({x,y});
  const torches=[];for(let i=0;i<5&&cand.length;i++)torches.push(cand.splice(rnd(0,cand.length-1),1)[0]);
  const traps=mkTraps(floor,rooms,free);
  return {m,stairs,mon,items,walls:[],torches,traps,rooms,walk:null,_vk:null,seen:Array.from({length:H},()=>Array(W).fill(false))};
}

const spdOf=n=>(MON.find(m=>m.n===n)||{}).spd||1;
const armorOf=e=>e.armor||((MON.find(m=>m.n===e.n)||{}).armor)||0;
const spdTag=n=>{const m=MON.find(x=>x.n===n)||{};return ({0.5:'・鈍足',2:'・高速'}[spdOf(n)]||'')+(m.hits>1?'・2回攻撃':'')+(m.freeze?'・凍結':'')+(m.bleed?'・出血':'')+(m.range?'・遠距離':'')+(m.conf?'・混乱':'')+(m.armor?'・硬い':'')+(m.wall?'・壁立て':'')};
const ROLE={'鬼':'物理アタッカー','河童':'水・補助','天狗':'風・高速型','猫又':'クリティカル型','雪女':'氷・魔法型','からかさ小僧':'道具・トリッキー','ぬりかべ':'タンク','一つ目小僧':'探索・索敵','鎌鼬':'斬撃・高速型','座敷童子':'幸運・支援','ぬらりひょん':'妨害・特殊','九尾の狐':'最終級・万能型'};
let DEX={seen:{},ally:{}};
try{DEX=JSON.parse(localStorage.getItem('yokaiDex'))||DEX}catch(e){}
DEX.seen=DEX.seen||{};DEX.ally=DEX.ally||{};
function mark(kind,n){
  if(DEX[kind][n])return;
  DEX[kind][n]=1;if(kind==='ally')DEX.seen[n]=1;
  try{localStorage.setItem('yokaiDex',JSON.stringify(DEX))}catch(e){}
  renderDex();
}
const DEX_OPEN_ALL=true; // チェック用：図鑑を常に完成表示。本番ではfalseにする
function renderDex(){
  const dx=m=>DEX_OPEN_ALL||DEX.seen[m.n],da=m=>DEX_OPEN_ALL||DEX.ally[m.n];
  const got=MON.filter(da).length,seen=MON.filter(dx).length;
  document.getElementById('dexsum').textContent=`図鑑 ${seen}/${MON.length}（仲間にした ${got}）`;
  document.getElementById('dexlist').innerHTML=MON.map(m=>dx(m)
    ?`<div class="card${da(m)?' got':''}"><b>${m.ch}</b><span>${m.n}</span><small>${TIER[m.t]}・${ROLE[m.n]}${spdTag(m.n)}</small>${da(m)?'<i>仲間</i>':''}</div>`
    :`<div class="card unk"><b>？</b><span>？？？</span></div>`).join('');
}
let ROSTER=[];
try{ROSTER=JSON.parse(localStorage.getItem('yokaiRoster'))||[]}catch(e){}
ROSTER.forEach(r=>{r.lv=r.lv||1;r.exp=r.exp||0});
const DEBUG_ALL_ROSTER=true; // チェック用：全妖怪を1体ずつ仲間に。本番ではfalseにする
const dn=e=>(e&&(e.dn||e.n))||'';
function nameRoster(){const used=new Set(ROSTER.map(r=>r.dn).filter(Boolean)),cnt={};ROSTER.forEach(r=>{cnt[r.n]=(cnt[r.n]||0)+1;if(cnt[r.n]>1&&!r.dn){let k=2;while(used.has(r.n+k))k++;r.dn=r.n+k;used.add(r.dn)}})}
if(DEBUG_ALL_ROSTER)MON.forEach((m,i)=>{if(!ROSTER.some(r=>r.n===m.n))ROSTER.push({id:Date.now()+i,n:m.n,ch:m.ch,t:m.t,atk:m.atk,max:m.hp,lv:1,exp:0,go:false})});
nameRoster();
const saveRoster=()=>{try{localStorage.setItem('yokaiRoster',JSON.stringify(ROSTER))}catch(e){}};
let fuseSel=[],fuseMsg='',fuseResult=null;
const fuseTier=(a,b)=>a===b?Math.min(4,a+1):Math.max(a,b);
const baseHp=n=>MON.find(m=>m.n===n).hp;
const inRun=()=>!!S&&!S.home&&!S.over&&!(S.floor===1&&S.turn===0);
const fuseOk=r=>!r.wf&&(!inRun()||S.allies.some(q=>q.id===r.id));
function placeOne(a){
  const p=S.p;
  for(let r=1;r<=3;r++){
    const c=[];
    for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){const x=p.x+dx,y=p.y+dy;if(S.m[y]&&S.m[y][x]&&!occ(x,y))c.push([x,y])}
    if(c.length){const [x,y]=c[rnd(0,c.length-1)];a.x=x;a.y=y;return}
  }
}
function doFuse(){
  const [a,b]=fuseSel.map(id=>ROSTER.find(r=>r.id===id));
  if(!a||!b||!fuseOk(a)||!fuseOk(b))return;
  const run=inRun();
  const pool=MON.filter(m=>m.t===fuseTier(a.t,b.t)),m=pool[rnd(0,pool.length-1)];
  const fb=n=>n.max-baseHp(n.n)-3*(n.lv-1),L=Math.floor((a.lv+b.lv)/2),bonus=Math.max(0,Math.round((fb(a)+fb(b))/2));
  ROSTER=ROSTER.filter(r=>r!==a&&r!==b);
  const nr={id:Date.now()+rnd(0,999),n:m.n,ch:m.ch,t:m.t,atk:m.atk+Math.floor(L/2),max:m.hp+3*(L-1)+bonus,lv:L,exp:0,go:run};
  if(m.n==='九尾の狐'&&CLEAR>=5&&!whiteFoxGot()){nr.wf=true;try{localStorage.setItem('yokaiWhiteFox','1')}catch(e){}}
  ROSTER.push(nr);nameRoster();
  if(S)S.allies=S.allies.filter(q=>q.id!==a.id&&q.id!==b.id);
  if(run){const al={...nr,hp:nr.max,x:-9,y:-9};S.allies.push(al);placeOne(al)}
  if(run)(S.pending=S.pending||[]).push(m.n);else mark('ally',m.n);
  sfx('fuse');fuseMsg=`${dn(a)}と${dn(b)}を配合して、${dn(nr)}（Lv${L}）が生まれた！`;fuseResult=nr;fuseSel=[];
  saveRoster();
  if(S&&!S.home&&!S.over&&!run)start(S.p.bag,S.dun||1);
  renderRoster();if(S)render();
}
const whiteFoxGot=()=>{try{return localStorage.getItem('yokaiWhiteFox')==='1'}catch(e){return true}};
const skey=r=>r&&r.wf?'白狐':r.n;
function ico(n,ch,h){const sp=SPR[n];return sp&&sp.d&&sp.d.src?`<img class="ico" src="${sp.d.src}" style="height:${h}px" alt="${n}">`:`<b>${ch}</b>`}
function card(r,extra){
  const d=document.createElement('div');d.className='card'+(r.go?' got':'')+(extra||'');
  d.innerHTML=`${ico(skey(r),r.ch,44)}<span>${dn(r)}</span><small>${TIER[r.t]}・Lv${r.lv} 攻${r.atk} HP${r.max}${spdTag(r.n)}</small>`;
  return d;
}
function renderFuse(){
  const box=document.getElementById('fusebox');
  fuseSel=fuseSel.filter(id=>{const r=ROSTER.find(q=>q.id===id);return r&&fuseOk(r)});
  const sel=fuseSel.map(id=>ROSTER.find(r=>r.id===id));
  box.innerHTML='';
  const info=document.createElement('div');info.className='note2';
  info.textContent=inRun()?'ダンジョン内では、パーティ（同行中）の仲間だけ配合できます。':'いまは、すべての仲間から選べます。';
  box.appendChild(info);
  const slots=document.createElement('div');slots.className='slots';
  const slot=r=>`<div class="slot">${r?`${ico(skey(r),r.ch,48)}${dn(r)}<small>${TIER[r.t]}・Lv${r.lv}</small>`:'＋ 素材を選ぶ'}</div>`;
  slots.innerHTML=slot(sel[0])+'<span>＋</span>'+slot(sel[1]);
  box.appendChild(slots);
  const res=document.createElement('div');res.className='note2';res.style.textAlign='center';
  let h='';
  if(fuseResult)h+=`<div class="big">${ico(skey(fuseResult),fuseResult.ch,72)}</div><b>${fuseMsg}</b><br>`;
  if(sel.length===2)h+=`結果：${TIER[fuseTier(sel[0].t,sel[1].t)]}ランクの妖怪（ランダム）`;
  else if(ROSTER.length<2)h+='配合には仲間が2匹以上必要です。';
  else h+=`素材を2匹選んでください（${sel.length}/2）`;
  res.innerHTML=h;
  if(sel.length===2){const fb=document.createElement('button');fb.textContent='配合する';fb.style.cssText='display:block;margin:8px auto 0;padding:10px 24px';fb.onclick=doFuse;res.appendChild(fb)}
  box.appendChild(res);
  const grid=document.createElement('div');grid.className='grid2';grid.style.marginTop='10px';
  ROSTER.forEach(r=>{
    const ok=fuseOk(r),on=fuseSel.includes(r.id),d=card(r,on?' sel':'');
    if(!ok)d.style.opacity='.4';
    const b=document.createElement('button');b.style.cssText='margin-top:6px;padding:4px 6px;font-size:12px';
    b.textContent=r.wf?'素材にできません':!ok?'ダンジョン内では選べません':on?'選択を外す':'素材にする';b.disabled=!ok;
    b.onclick=()=>{const k=fuseSel.indexOf(r.id);if(k>=0)fuseSel.splice(k,1);else if(fuseSel.length<2)fuseSel.push(r.id);fuseMsg='';fuseResult=null;renderFuse()};
    d.appendChild(b);grid.appendChild(d);
  });
  box.appendChild(grid);
}
function renderRoster(){
  {const tf=document.getElementById('tofuse'),ok=fuseUnlocked();tf.innerHTML=ok?'配合する':'🔒 配合（ステージ1クリアで解放）';tf.disabled=!ok;tf.onclick=()=>{fuseFromRoster=true;show('fuse')}}
  const go=ROSTER.filter(r=>r.go).length,box=document.getElementById('rosterlist');
  document.getElementById('rostersum').textContent=`仲間一覧 ${ROSTER.length}/20（次の冒険に同行 ${go}/3）`;
  box.innerHTML=ROSTER.length?'':'<div class="note">まだ仲間がいません。妖怪を倒すと、確率で仲間になります。</div>';
  ROSTER.forEach(r=>{
    const d=card(r);
    const b=document.createElement('button');b.textContent=r.go?'同行する（外す）':'同行させる';
    b.onclick=()=>{if(!r.go&&ROSTER.filter(q=>q.go).length>=3)return;r.go=!r.go;saveRoster();renderRoster()};
    d.appendChild(b);box.appendChild(d);
  });
  renderFuse();
}

const STORY_BG="images/story_bg.jpg";
const HERO={"kyubi3":"images/hero_kyubi3.png","kyubi2":"images/hero_kyubi2.png","kyubi":"images/hero_kyubi.png","old":"images/hero_old.png","full": "images/hero_full.png", "smile": "images/hero_smile.jpg", "worry": "images/hero_worry.jpg", "shock": "images/hero_shock.jpg"};
const STORY_BG2="images/story_bg2.jpg";
const INTRO=[
"深い山々に囲まれた、ひとつの小さな村。",
"そこでは、人と妖怪が手を取り合い、長い年月を共に暮らしていた。",
"畑を耕す者。\n店を営む者。\n人々の暮らしを陰から支える、ちょっと不思議な妖怪たち。",
"姿かたちは違っても、互いを恐れることなく、穏やかな日々を送っていた。",
"そして、この村にはもうひとつ、古くから伝わる言い伝えがあった。",
"「山の奥には、すべての妖怪を見守る母なる大妖怪が眠っている」",
"人々はその妖怪を、九尾と呼んでいた。",
"これは、そんな不思議な村で起こった事件の物語です。"
];
const STORY_BG3="images/story_bg3.jpg";
const CH2=[
"不思議なダンジョンへと足を踏み入れた主人公。\n\nそこには、見たこともない妖怪たちが潜んでいた。",
"しかし、何かがおかしい。",
"本来なら人を避けるはずの妖怪までもが、主人公の姿を見るなり襲いかかってくる。",
"「どうして、いきなり襲ってくるんだ……？」|t|worry",
"妖怪たちは、まるで理性を失ってしまったかのように、ただ目の前のものを攻撃し続けていた。",
"主人公は襲いかかる妖怪たちを退けながら、ダンジョンの奥へと進んでいく。",
"この異変には、何か理由がある。\n\nその確信だけを胸に、主人公は歩みを止めなかった。",
"幾多の妖怪たちを退け、ダンジョンを抜けた先。\n\nそこには、木々に囲まれた静かな開け地が広がっていた。",
"中央にひっそりと佇む、小さな祠。\n\n長い年月、誰にも触れられていないようだったが、不思議と荒れた様子はなかった。",
"「……こんな場所に、祠が？」|t|shock",
"主人公は何かに導かれるように祠の前へ進み、そっと手を合わせた。",
"その瞬間、祠が淡い光を放ち始めた。\n\n温かな光が主人公を包み込み、身体の奥底から、不思議な力が湧き上がってくる。",
"「これは……一体……？」|t|shock",
"やがて光は静かに消え、辺りには再び静寂が戻った。\n\n何が起きたのか、主人公には分からない。",
"ただひとつ、はっきりと感じていた。\n\nこの力は、妖怪たちと自分をつなぐ、何か特別なものなのだと。",
"主人公はまだ知らなかった。\n\nこの祠との出会いが、やがて村を救うための大きな鍵になることを。"
];
const STORY_BG4="images/story_bg4.jpg";
const CH3=[
"祠で不思議な力に目覚めた主人公は、再びダンジョンの奥へと歩みを進めた。",
"行く手を阻む妖怪たちは、相変わらず我を忘れたように襲いかかってくる。",
"やがて、長い道のりを抜けた先で、主人公は一人の老人と出会った。",
"「……おぬし、あの祠に立ち寄ったのか」|o",
"老人は主人公を見つめ、何かを察したように目を細めた。",
"「ならば、知っておかねばならぬことがある」|o",
"「この山で起きている異変は、ただの妖怪の暴走ではない」|o",
"老人は、静かに語り始めた。",
"「人の心には、悪意や憎しみが生まれることがある。それらが積もり、形を持ったもの……わしらはそれを『穢れ』と呼んでおる」|o",
"「穢れは、心あるものを蝕む。妖怪とて例外ではない」|o",
"「本来は穏やかな妖怪であっても、穢れに侵されれば理性を失い、己の心さえ見失ってしまうのじゃ」|o",
"主人公は、これまで襲いかかってきた妖怪たちの姿を思い返した。\n\nもし、彼らが自分の意思で暴れていたのではないのなら。",
"救う方法が、どこかにあるのかもしれない。",
"「……それなら、九尾も？」|t|worry",
"主人公の問いに、老人はしばらく黙り込んだ。",
"「…それは、己が目で確認するのだ。」|o",
"その言葉に、主人公の胸に不安が広がった。",
"すべての妖怪を見守るという、母なる大妖怪・九尾。\n\nもし九尾までもが穢れに侵されていたら、この異変を止められる者はいなくなってしまうのだろうか。",
"「確かめるには、進むしかないか…。」|t|worry",
"主人公は決意を胸に、さらに深い闇の中へと足を踏み入れた。"
];
const STORY_BG5="images/story_bg5.jpg";
const CH4=[
"老人と別れしばらく経ち、さらに山奥へと進む主人公。",
"進めば進むほど、周囲の景色は不気味なものへと変わっていった。",
"木々は枯れ、地面には黒い靄が立ち込めている。",
"そして、行く手を阻む妖怪たちも、これまでとは比べものにならないほど凶暴になっていた。",
"「くっ……！　奥に進むほど、穢れが濃くなっているのか……？」|t|worry",
"妖怪たちを退けながら、主人公は山頂を見上げた。",
"この先に、すべての妖怪を見守る母なる大妖怪・九尾がいる。",
"もし、あの九尾までもが穢れに侵されているのなら……。",
"胸に不安を抱きながらも、主人公は歩みを止めなかった。",
"その時だった。",
"――グルルルル……。",
"山の奥から、地を震わせるような低い唸り声が響いた。\n\n主人公は思わず足を止める。",
"「……今の声は？」|t|shock",
"風が吹き抜け、木々がざわめく。\n\n山頂の方角から、ただならぬ気配が伝わってくる。",
"間違いない。\n\nこの先に、何かがいる。",
"主人公は一度深く息を吸い、握った拳に力を込めた。",
"「……さぁ、もう一踏ん張りだ！」|t|smile",
"決意を胸に、主人公は山頂へと続く道を駆け出した。"
];
const CH5=[
"険しい山道を越え、主人公はついに山頂へと続く最後の道へたどり着いた。",
"その先からは、これまでにないほど強い穢れの気配が漂っている。",
"「……この奥に、九尾がいるのか」|t|worry",
"主人公は、これまで出会った妖怪たちの姿を思い返した。",
"穢れに侵され、理性を失ってしまった妖怪たち。",
"そして、その穢れが九尾にまで及んでいるのだとしたら……。",
"不安が胸をよぎる。",
"それでも、ここまで来た理由は変わらない。",
"「絶対に、みんなを助けるんだ！」|t|smile",
"主人公は拳を握りしめ、山頂の奥へと歩みを進めた。",
"その先に待ち受けるものが何であろうと、もう引き返すつもりはなかった。"
];
const STORY_BG6="images/story_bg6.jpg";
const STORY_BG7="images/story_bg7.jpg";
const CH6=[
"洞穴の最奥。",
"そこには、九本の尾を揺らし、黒い穢れに包まれた巨大な妖狐の姿があった。|k",
"「……あれが、九尾……！」|t|shock",
"かつて、すべての妖怪を見守っていたという母なる大妖怪。|k",
"しかし、今のその姿からは、優しさも理性も感じられない。|k",
"九尾は主人公を見据えると、低く唸り、凄まじい咆哮を上げた。|k",
"「くっ……！　やっぱり、九尾まで穢れに……！」|t|worry",
"九尾は容赦なく襲いかかってくる。|k",
"それでも、主人公は退かなかった。",
"「絶対に、お前を救ってみせる！」|t|smile",
"主人公は覚悟を決め、狂乱した九尾との戦いに挑んだ。"
];
const CH7=[
"激しい戦いの末、ついに九尾はその場に崩れ落ちた。|f",
"身体を覆っていた黒い穢れが、ゆっくりと剥がれ落ちていく。|f",
"やがて、九尾の瞳に穏やかな光が戻った。",
"「……わしは、一体……」|k",
"九尾は自らの姿を見つめ、静かに目を閉じた。",
"「すまなかった……。おぬしにも、妖怪たちにも、つらい思いをさせてしまった」|k",
"九尾の声には、深い悔恨がにじんでいた。",
"「村の妖怪たちは、もう正気を取り戻しておる。おぬしが戦ってくれたおかげじゃ」|k",
"主人公は、ほっと胸をなで下ろした。",
"しかし、九尾の表情は晴れなかった。",
"「じゃが……穢れに抗い続けたわしは、あまりにも力を失いすぎた」|k",
"「すべてを元通りにするには、もはや力が足りぬ。このままでは、いつか再び穢れが広がるやもしれぬ……」|k",
"九尾は主人公を見つめ、そっと一つの宝玉を差し出した。",
"「……おぬしなら、気づいておると思うが」|k",
"九尾は、主人公の内に宿る不思議な力を見つめた。",
"「おぬしの持つ融合の力。それを使い、新たな九尾を召喚するのじゃ」|k",
"「この宝玉には、わしの魂の欠片が宿っておる」|k",
"「これを使えば、真なる九尾を呼び覚ますことができるはずじゃ」|k",
"主人公は、手渡された宝玉を強く握りしめた。",
"九尾を救うことはできた。\n\nけれど、まだすべてが終わったわけではない。",
"「……分かりました。必ず、新たな九尾を召喚してみせます！」|t|smile",
"九尾は静かにうなずいた。",
"「頼んだぞ、調教師よ……」|k",
"その言葉を最後に、九尾は深い眠りについた。",
"主人公は宝玉を大切にしまい、決意を新たにする。\n\n妖怪たちを救い、この世界を本当の平穏へと導くために。",
"新たな冒険が、ここから始まるのだった。"
];
const STORY_BG8="images/story_bg8.jpg";
const CH8=[
"九尾から託された宝玉を手に、主人公は配合の儀に臨んだ。",
"これまで仲間にしてきた妖怪たちの力を重ね合わせ、宝玉に秘められた魂の欠片へと祈りを捧げる。",
"すると、宝玉がまばゆい光を放ち始めた。",
"光は次第に大きくなり、あたり一面を優しく包み込んでいく。\n\nそして――。",
"光の中から、小さな白い狐の妖怪が姿を現した。|w",
"「キュ！　キュ！」|w",
"白い狐は、つぶらな瞳で主人公を見上げ、嬉しそうに鳴いた。|w",
"その姿には、かつての九尾のような威厳はない。|w",
"ただ純真無垢で、こちらを疑うことも知らないような、小さな命だった。|w",
"「ははっ……お前が、新しい九尾なのか？」|t|smile",
"主人公がそっと手を差し伸べると、白い狐は嬉しそうに駆け寄り、その手に頬をすり寄せた。|w",
"「キュ！」|w",
"その愛らしい姿に、主人公の頬も自然と緩んだ。",
"かつて、穢れに苦しんだ母なる大妖怪。\n\nその魂の欠片から生まれた、新たな命。",
"この小さな狐が、いつか再び九尾として大きく成長する日が来るのだろうか。",
"今はまだ、誰にも分からない。",
"主人公は、白い狐をそっと抱き上げた。",
"山里には、少しずつ穏やかな日々が戻り始めている。",
"けれど、世界から穢れが完全に消えたわけではない。",
"これから先も、妖怪たちを救うために、幾度となく困難が待ち受けているだろう。",
"それでも、もう不安はなかった。",
"隣には、共に歩む仲間たちがいる。\n\nそして腕の中には、新たな未来を感じさせる小さな命がいる。",
"「さあ、行こう。これからも、みんなを守るために！」|t|smile",
"「キュ！　キュ！」|w",
"白い狐は元気よく鳴き、主人公の腕の中で尻尾を揺らした。|w",
"こうして、調教師と小さな白狐の新たな旅が始まった。",
"その小さな命が、いつか再び母なる大妖怪・九尾となる日を夢見て。",
"――物語は、ここでひとつの結末を迎える。",
"けれど、冒険はまだ終わらない。"
];
const STORY_BG9="images/story_bg9.jpg";
const SHRINE=[
"祠に触れると、懐かしい光があたりを包み込んだ。",
"光の中から現れたのは、母なる大妖怪・九尾。",
"九尾は主人公の姿を見ると、穏やかに微笑んだ。",
"「また会いに来てくれたのじゃな」|k",
"「ふふ……おぬしの成長ぶり、楽しみにしておったぞ」|k",
"九尾は静かに身構える。",
"「さあ、今のおぬしの力を、わしに見せてみるがよい！」|k"
];
const SHRINE2=[
"「むむむ……！　やるではないか！」|k|pop",
"戦いを終えた九尾は、目を輝かせながら主人公を見つめた。||pop",
"「すごい！　すごいぞ、おぬし！」|k|hop",
"九尾は嬉しそうにぴょんと跳ね、九本の尻尾をぶんぶんと振った。||hop",
"「初めて会った頃とは大違いじゃ！　仲間たちも、みーんな立派に成長しておるのう！」|k|wag",
"「いやぁ、これはわしもうかうかしておれぬな！　次に会うときは、もっともっと強くなっておるのじゃろう？」|k|wag",
"九尾は満面の笑みを浮かべ、主人公に向かって胸を張った。||proud",
"「よーし！　わしも楽しみにしておるぞ！」|k|hop",
"「いつでも挑みに来るがよい！　わしとおぬしの勝負、まだまだ終わらぬからの！」|k|proud",
"九尾は最後に、いたずらっぽくウインクした。||wink",
"「次こそは、わしの勝ちじゃからなー！」|k|hop"
];
const STORY_BGK="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000'/%3E%3C/svg%3E";
const STORY=[
"ある日のこと。\n\n村に暮らす妖怪たちが、突如として暴れ始めた。",
"いつも笑顔で挨拶をしてくれる妖怪が、人々に牙をむく。\n\n仲良く暮らしていたはずの妖怪同士も、互いを傷つけ合っていた。",
"まるで、何かに心を支配されてしまったかのように。",
"「どうして……みんな、急に……！」|v",
"村人たちには、何が起きているのか分からなかった。\n\nただひとつ、誰もが感じていた。\nこの異変は、普通の出来事ではない。",
"そんな村に、一人の調教師がいた。\n\n妖怪と心を通わせ、仲間として共に歩むことのできる者。",
"主人公は、暴れる妖怪たちを前にしても、彼らを倒すことだけは望まなかった。",
"「きっと、何か理由があるはずだ……」|t|worry",
"このままでは、大切な村が壊れてしまう。\n\n原因を突き止めるため、主人公は村に伝わる言い伝えを頼りにすることにした。",
"すべての妖怪を見守るという、母なる大妖怪・九尾。\n\n九尾ならば、この異変の理由を知っているかもしれない。",
"「九尾に会いに行こう。みんなを、元に戻すために」|t|worry",
"こうして調教師は、妖怪たちが待ち受ける不思議なダンジョンへと足を踏み入れるのだった。"
];
let storyDone=null,storyI=0,storyCur=null;
function storyPlayed(){try{return localStorage.getItem('yokaiPrologue')==='1'}catch(e){return false}}
function playStory(cb,k){
  k=k||'pro';const SC={intro:{pg:INTRO,bg:STORY_BG2,ti:'回想',key:'yokaiIntro'},pro:{pg:STORY,bg:STORY_BG,ti:'一章「山里に訪れた異変」',key:'yokaiPrologue'},ch2:{pg:CH2,bg:STORY_BG3,ti:'二章',key:'yokaiCh2'},ch3:{pg:CH3,bg:STORY_BG4,ti:'三章「穢れの気配」',key:'yokaiCh3'},ch4:{pg:CH4,bg:STORY_BG5,ti:'四章「山頂に響く声」',key:'yokaiCh4'},ch5:{pg:CH5,bg:STORY_BG6,ti:'五章「決戦！母なる大妖怪九尾」',key:'yokaiCh5'},ch6:{pg:CH6,bg:STORY_BG7,ti:'六章',key:'yokaiCh6'},ch7:{pg:CH7,bg:STORY_BG8,ti:'七章',key:'yokaiCh7'},ch8:{pg:CH8,bg:STORY_BG9,ti:'最終章',key:'yokaiCh8'},shrine:{pg:SHRINE,bg:STORY_BGK,ti:'隠された祠',key:'yokaiShrine'},shrine2:{pg:SHRINE2,bg:STORY_BGK,ti:'隠された祠',key:'yokaiShrine2'}}[k];storyCur=SC;document.querySelector('#story .st-title').textContent=SC.ti;
  const el=document.getElementById('story'),bx=document.getElementById('stbox');
  storyI=0;storyDone=cb;el.style.backgroundImage=`url("${SC.bg}")`;el.hidden=false;
  const hero=document.getElementById('sthero');hero.src=HERO.full;
  const draw=()=>{let [t,f,fc]=SC.pg[storyI].split('|');const per=SC.key==='yokaiShrine'||SC.key==='yokaiShrine2';if(per&&!f)f='k';bx.textContent='';bx.classList.toggle('talk',f==='t'||f==='v'||f==='o');
    if(f==='t'){const im=document.createElement('img');im.className='st-face';im.src=HERO[fc||'smile'];bx.appendChild(im)}
    const tx=document.createElement('div');tx.className='st-tx';if(f==='t'||f==='v'||f==='o'){const nm=document.createElement('span');nm.className='st-nm';nm.textContent=f==='t'?'主人公':f==='o'?'老人':'村人';tx.appendChild(nm)}
    tx.appendChild(document.createTextNode(t));bx.appendChild(tx);
    const n=document.createElement('span');n.className='st-nx';n.textContent='▼';bx.appendChild(n);if(f==='o'&&hero.getAttribute('src')!==HERO.old)hero.src=HERO.old;if(f==='t'&&hero.getAttribute('src')!==HERO.full)hero.src=HERO.full;if(f==='o'||f==='t')hero.classList.toggle('lf',f==='o');if(f==='k'||f==='f'||f==='w'){hero.classList.remove('lf');{const kk=f==='w'?HERO.kyubi3:f==='f'?HERO.kyubi:storyCur&&(storyCur.key==='yokaiCh7'||storyCur.key==='yokaiShrine'||storyCur.key==='yokaiShrine2')?HERO.kyubi2:HERO.kyubi;if(hero.getAttribute('src')!==kk)hero.src=kk;hero.classList.toggle('kt',kk===HERO.kyubi2||kk===HERO.kyubi3);hero.classList.toggle('kw',kk===HERO.kyubi3)}hero.classList.add('kc')}else if(f==='t'||f==='o')hero.classList.remove('kc');hero.classList.toggle('on',f==='t'||f==='o'||f==='k'||f==='f'||f==='w');hero.classList.remove('m-hop','m-wag','m-pop','m-wink','m-proud');if(per&&fc){void hero.offsetWidth;hero.classList.add('m-'+fc)}};
  const end=()=>{el.onclick=null;el.style.transition='opacity .9s ease';el.style.opacity='0';el.style.pointerEvents='none';setTimeout(()=>{el.hidden=true;el.style.transition='';el.style.opacity='';el.style.pointerEvents=''},950);try{localStorage.setItem(SC.key,'1')}catch(e){};const f=storyDone;storyDone=null;if(f)f()};
  el.onclick=e=>{if(e.target.classList.contains('st-skip')){end();return}sfx('ui',.6);storyI++;if(storyI>=SC.pg.length)end();else draw()};
  draw();
}
function introPlayed(){try{return localStorage.getItem('yokaiIntro')==='1'}catch(e){return true}}
let menuSel=false,memSel=false;
const MEMS=[{k:'intro',n:'回想',key:'yokaiIntro'},{k:'pro',n:'一章「山里に訪れた異変」',key:'yokaiPrologue'},{k:'ch2',n:'二章',key:'yokaiCh2'},{k:'ch3',n:'三章「穢れの気配」',key:'yokaiCh3'},{k:'ch4',n:'四章「山頂に響く声」',key:'yokaiCh4'},{k:'ch5',n:'五章「決戦！母なる大妖怪九尾」',key:'yokaiCh5'},{k:'ch6',n:'六章',key:'yokaiCh6'},{k:'ch7',n:'七章',key:'yokaiCh7'},{k:'ch8',n:'最終章',key:'yokaiCh8'}];
const MEM_OPEN_ALL=true; // チェック用：物語の記憶を全て開放。本番ではfalseにする
function memSeen(key){try{return localStorage.getItem(key)==='1'}catch(e){return false}}
function renderMenu(){
  const box=document.getElementById('menubox');box.innerHTML='';
  if(memSel){
    MEMS.forEach(m=>{const ok=MEM_OPEN_ALL||memSeen(m.key),b=document.createElement('button');b.className='mbtn sel';b.innerHTML=`<span class="ic">${ok?'📖':'🔒'}</span>${ok?m.n:'？？？　未読'}`;if(ok)b.onclick=()=>playStory(null,m.k);else{b.disabled=true;b.style.opacity='.55'}box.appendChild(b)});
    const bk=document.createElement('button');bk.className='mbtn';bk.innerHTML='<span class="ic"></span>戻る';bk.onclick=()=>{memSel=false;renderMenu()};box.appendChild(bk);
    return;
  }
  if(menuSel){
    DUNGEONS.forEach(d=>{
      const ok=d.n===1||CLEAR>=d.n-1,b=document.createElement('button');b.className='mbtn sel'+(d.n===1?' primary':'');
      b.innerHTML=`<span class="ic">${ok?uic('dun',d.n===1?30:26):'🔒'}</span>ステージ${d.n}${ok?'':'　未解放'}`;
      if(ok)b.onclick=()=>guardRun(()=>{const go=()=>{menuSel=false;start(BAG.slice(),d.n);BAG=[];show('game')};const ck={1:'pro',2:'ch2',3:'ch3',4:'ch4',5:'ch5'}[d.n],kk={pro:'yokaiPrologue',ch2:'yokaiCh2',ch3:'yokaiCh3',ch4:'yokaiCh4',ch5:'yokaiCh5'}[ck];if(ck&&!memSeen(kk))playStory(go,ck);else go()});else{b.disabled=true;b.style.opacity='.55'}
      box.appendChild(b);
    });
    const bk=document.createElement('button');bk.className='mbtn';bk.innerHTML='<span class="ic"></span>戻る';bk.onclick=()=>{menuSel=false;renderMenu()};box.appendChild(bk);
    return;
  }
  const run=peekRun();
  const list=[
    ...(run?[['▶','<span class="cont">つづきから<small>'+runLabel(run)+'</small></span>',()=>{if(!loadRun())renderMenu()},true]]:[]),
    ['<dun>','ダンジョンに潜る',()=>{menuSel=true;renderMenu()},!run],
    ['<fuse>','倉庫',()=>{goHome(BAG,'storage');show('game')}],
    ['<dex>','妖怪図鑑',()=>{goHome(BAG,'dex');show('game')}],
    ['<pt>','仲間一覧',()=>show('roster')],
    ['📜','物語の記憶',()=>{memSel=true;renderMenu()}]
  ];
  list.forEach(([ic,t,f,pr])=>{const b=document.createElement('button');b.className='mbtn'+(pr?' primary':'');b.innerHTML=`<span class="ic">${ic[0]==='<'?uic(ic.slice(1,-1),ic==='<dun>'?28:24):ic}</span>${t}`;b.onclick=f;box.appendChild(b)});
}
let curView='menu',lastView='menu',allyOpen=false;
function renderAllyPanel(){
  const el=document.getElementById('allypanel');
  el.hidden=!allyOpen;
  document.getElementById('allybtn').classList.toggle('on',allyOpen);
  if(!allyOpen||!S)return;
  el.innerHTML='';
  const list=S.home?ROSTER.filter(r=>r.go):S.allies;
  const grid=document.createElement('div');grid.className='allygrid';
  for(let i=0;i<3;i++){
    const a=list[i],d=document.createElement('div');
    if(a){
      const hp=S.home?a.max:a.hp,r=hp/a.max;
      d.className='slot2 ally '+(hp>=a.max?'hp-full':r<=0.34?'hp-low':'hp-mid');
      d.innerHTML=`${ico(skey(a),a.ch,38)}<small>${dn(a)}</small>`;
      d.setAttribute('aria-label',`${dn(a)} HP ${hp}/${a.max}`);
    }else d.className='slot2 empty';
    grid.appendChild(d);
  }
  el.appendChild(grid);
  if(S.home){const b=document.createElement('button');b.textContent='仲間一覧を開く（同行の選択）';b.onclick=()=>show('roster');el.appendChild(b)}
}
function show(v){
  setTimeout(syncScene,0);
  if(v==='fuse'&&!fuseUnlocked()){if(S&&curView==='game'){say('配合は、ステージ1をクリアすると解放される。');render()}return}
  stopHold();
  const sub=['roster','fuse','dex'];
  if(sub.includes(v)&&!sub.includes(curView))lastView=curView;
  if(v!=='fuse')fuseFromRoster=v==='roster'?fuseFromRoster:false;
  curView=v;
  ['menu','game','roster','fuse','dex'].forEach(k=>{document.getElementById('v-'+k).hidden=k!==v});
  if(v==='menu')renderMenu();
  if(v==='game'&&S)render();
  if(v==='roster')renderRoster();
  if(v==='fuse')renderFuse();
  if(v==='dex')renderDex();
}
document.querySelectorAll('#menubar i[data-ic]').forEach(i=>{i.outerHTML=uic(i.dataset.ic,22)});
document.querySelectorAll('#menubar button[data-v]').forEach(b=>b.onclick=()=>show(b.dataset.v));
document.getElementById('allybtn').onclick=()=>{allyOpen=!allyOpen;renderAllyPanel()};
document.querySelectorAll('.back').forEach(b=>b.onclick=()=>show(b.closest('#v-fuse')&&fuseFromRoster?'roster':lastView));
let fuseFromRoster=false;

let BAG=[];
const ROOMS={
  storage:{name:'倉庫部屋',x1:15,x2:23,y1:12,y2:17,spawn:[19,16],door:[19,17],tip:'アイテムを預けたり取り出したりできる。配合は「仲間一覧」から。「出」の扉でメニューへ。'},
  dex:{name:'図鑑部屋',x1:12,x2:26,y1:10,y2:17,spawn:[19,16],door:[19,17],tip:'仲間にした妖怪の像が並ぶ。像に触れると詳細が見られる。'}
};
const STATUE_SLOTS=[[13,11],[15,11],[17,11],[19,11],[21,11],[23,11],[25,11],[15,14],[17,14],[19,14],[21,14],[23,14]];
function roomMap(R){
  const m=Array.from({length:H},()=>Array(W).fill(0));
  for(let y=R.y1;y<=R.y2;y++)for(let x=R.x1;x<=R.x2;x++)m[y][x]=1;
  return m;
}
function roomObjs(room){
  if(room==='dex'){const L=MON.map((m,i)=>{
    const [x,y]=STATUE_SLOTS[i],got=DEX_OPEN_ALL||!!DEX.ally[m.n];
    return {x,y,ch:got?m.ch:'台',col:got?'--ally':'--floor',dim:!got,kind:got?'statue':'pedestal',m:got?m:null};
  });
  const wg=DEX_OPEN_ALL||whiteFoxGot(),km=MON.find(q=>q.n==='九尾の狐');
  L.push({x:25,y:14,ch:wg?'狐':'台',col:wg?'--ally':'--floor',dim:!wg,kind:wg?'statue':'pedestal',m:wg?{...km,sk:'白狐',wf:true}:null});
  return L}
  if(room==='storage'&&CLEAR>=5){const R=ROOMS.storage;return [{x:R.x1,y:R.y1,ch:'祠',col:'--stair',kind:'boss'}]}
  return [];
}
const stashCount=()=>{try{const r=localStorage.getItem('yokaiHome');return r?JSON.parse(r).length:3}catch(e){return 0}};
function saveHome(){if(S.room!=='storage')return;try{localStorage.setItem('yokaiHome',JSON.stringify(S.items.filter(q=>!q.inf)))}catch(e){}}
function interact(ob){
  if(ob.kind==='table'){show('fuse');return}
  if(ob.kind==='boss'){askBoss();return}
  if(ob.kind==='statue')say(`${ob.m.n}${ob.m.wf?'（白狐）':''}の像（${TIER[ob.m.t]}・${ROLE[ob.m.n]}）`);
  else say('空の台座。仲間にした妖怪の像が飾られる。');
  render();
}
function syncDex(){if(typeof ROSTER!=='undefined')ROSTER.forEach(r=>mark('ally',r.n))}
function goHome(bag,room='storage'){
  syncDex();
  const R=ROOMS[room];
  let items=[];
  if(room==='storage'){
    items=[{x:17,y:12,k:'herb'},{x:18,y:12,k:'herb'},{x:20,y:12,k:'rice'}];
    try{const raw=localStorage.getItem('yokaiHome');if(raw)items=JSON.parse(raw)}catch(e){}
  }
  const objs=roomObjs(room);
  const infs=[];
  if(room==='storage'&&CLEAR>=5)['herb','rice','riceL','fire','staff','ring','charm'].forEach((k,i)=>infs.push({x:R.x1+2+i,y:R.y1,k,inf:true}));
  items=items.filter(q=>!q.inf);
  {const blocked=(x,y)=>objs.some(o=>o.x===x&&o.y===y)||infs.some(o=>o.x===x&&o.y===y)||(x===R.door[0]&&y===R.door[1])||(x===R.spawn[0]&&y===R.spawn[1]);
   const out=it=>it.x<R.x1||it.x>R.x2||it.y<R.y1||it.y>R.y2||blocked(it.x,it.y);
   const taken=(x,y)=>blocked(x,y)||items.some(q=>!out(q)&&q.x===x&&q.y===y);
   items.filter(out).forEach(it=>{for(let y=R.y1;y<=R.y2;y++)for(let x=R.x1;x<=R.x2;x++)if(!taken(x,y)){it.x=x;it.y=y;return}})}
  items=items.concat(infs);
  const seen=Array.from({length:H},()=>Array(W).fill(false));
  for(let y=R.y1-1;y<=R.y2+1;y++)for(let x=R.x1-1;x<=R.x2+1;x++)seen[y][x]=true;
  let head=`${R.name}に来た。`+(bag.length?'持ち物を持って来た。':'');
  if(room==='dex')head+=` 像 ${objs.filter(o=>o.kind==='statue').length}/${MON.length+1}`;
  S={home:true,room,floor:0,turn:0,over:false,allies:[],mon:[],walls:[],m:roomMap(R),stairs:{x:R.door[0],y:R.door[1]},seen,items,objs,torches:[{x:R.x1+2,y:R.y1-1},{x:R.x2-2,y:R.y1-1}],
     log:[head,R.tip],
     p:{x:R.spawn[0],y:R.spawn[1],hp:30,max:30,lv:1,exp:0,food:100,bag:bag.slice()}};
  document.getElementById('again').style.display='none';
  render();
}
function backToMenu(){
  const reg=[...new Set(S.pending||[])].filter(n=>!DEX.ally[n]);
  BAG=(S.cleared||S.escaped)?S.p.bag.slice():[];
  reg.forEach(n=>mark('ally',n));
  goHome(BAG);
  if(reg.length){say(`図鑑に登録した：${reg.join('、')}`);render()}
  show('menu');
}
function start(bag=[],dun=1){
  clearRun();
  S={dun,maxF:DUNGEONS[dun-1].floors,floor:1,turn:0,over:false,allies:ROSTER.filter(r=>r.go).slice(0,3).map(r=>({...r,hp:r.max,x:0,y:0})),log:['ダンジョンに足を踏み入れた。'],
     p:{x:0,y:0,hp:30,max:30,lv:1,exp:0,food:100,bag:bag.slice()}};
  Object.assign(S,newFloor(1,S.p));placeAllies();
  document.getElementById('again').style.display='none';
  render();floorTitle('floor');
}
const say=t=>{S.log.push(t);if(S.log.length>2)S.log.shift()};
const canMove=(e,dx,dy)=>{
  const nx=e.x+dx,ny=e.y+dy;
  if(!S.m[ny]||!S.m[ny][nx])return false;
  if(S.walls&&S.walls.length&&S.mon.includes(e)&&S.walls.some(w=>w.x===nx&&w.y===ny))return false;
  if(dx&&dy&&(!S.m[e.y][nx]||!S.m[ny][e.x]))return false;
  return true;
};
const bagMax=()=>6+(S.allies.some(a=>a.n==='からかさ小僧')?2:0)+(S.bagUp||0);
function losClear(x0,y0,x1,y1){
  let dx=Math.abs(x1-x0),dy=Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,e=dx-dy,x=x0,y=y0;
  while(!(x===x1&&y===y1)){
    const e2=2*e;if(e2>-dy){e-=dy;x+=sx}if(e2<dx){e+=dx;y+=sy}
    if(x===x1&&y===y1)break;
    if(!S.m[y]||!S.m[y][x])return false;
  }
  return true;
}
function visUpd(){
  const p=S.p,k=p.x+','+p.y;if(S._vk===k&&S._vm===S.m&&S._vis)return;
  S._vk=k;S._vm=S.m;const v=Array.from({length:H},()=>Array(W).fill(false));
  const cor=!!S.rooms&&!S.rooms.some(r=>p.x>=r.x&&p.x<r.x+r.w&&p.y>=r.y&&p.y<r.y+r.h),R=cor?1.5:6.5;
  for(let y=Math.max(0,p.y-7);y<=Math.min(H-1,p.y+7);y++)for(let x=Math.max(0,p.x-7);x<=Math.min(W-1,p.x+7);x++)
    if(Math.hypot(x-p.x,y-p.y)<=R&&losClear(p.x,p.y,x,y))v[y][x]=true;
  S._vis=v;
}
const seeing=(x,y)=>{if(!S||!S.p||!S.m)return false;visUpd();return !!(S._vis[y]&&S._vis[y][x])};
const seeMon=o=>seeing(o.x,o.y)||(S.allies.some(a=>a.n==='一つ目小僧')&&Math.hypot(o.x-S.p.x,o.y-S.p.y)<=12);

function descend(){
  const p=S.p;
        if(S.floor>=S.maxF){
          S.over=true;clearRun();sfx('clear');say(S.boss?`九尾の狐を倒した！ステージ${S.dun}クリア！`:`最深部の階段を降りた！ステージ${S.dun}クリア！`);
          if(S.dun>CLEAR){CLEAR=S.dun;try{localStorage.setItem('yokaiClear',String(CLEAR))}catch(e){}if(S.dun===1)say('配合システムが解放された！');if(S.dun<DUNGEONS.length)say(`ステージ${S.dun+1}が解放された！`);else say('すべてのステージをクリアした！')}
          say(`Lv${p.lv}・仲間${S.allies.length}匹・${S.turn}ターン`);
          if(S.pending&&S.pending.length)say('新しく仲間にした妖怪は、メニューに戻ると図鑑に登録される。');
          S.cleared=true;const ag=document.getElementById('again');ag.textContent='メニューに戻る（持ち物を持ち帰る）';ag.style.display='block';render();if(S.shrine)playStory(null,'shrine2');else if(S.boss&&!memSeen('yokaiCh7'))playStory(null,'ch7');else if(CLEAR>=5&&memSeen('yokaiCh7')&&whiteFoxGot()&&!memSeen('yokaiCh8'))playStory(null,'ch8');return;
        }
        S.floor++;sfx('stairs');
        if(S.dun&&DUNGEONS[S.dun-1].boss&&S.floor===S.maxF){Object.assign(S,newBossFloor(p,S.floor));placeAllies();say('ボス部屋に降りた… 九尾の狐が待ち構えている！');render();floorTitle('boss');if(!memSeen('yokaiCh6'))playStory(()=>sfx('boss'),'ch6');else sfx('boss');return}
        Object.assign(S,newFloor(S.floor,p));S.boss=false;placeAllies();
        say(`${S.floor}階に降りた。`);render();floorTitle('floor');return;
}
function askStairs(){
  S.ask='stairs';render();
  document.querySelector('#stairq .sq-t').innerHTML='階段を見つけた。<br>降りますか？';
  document.getElementById('stairYes').textContent='降りる';document.getElementById('stairNo').textContent='降りない';
  const q=document.getElementById('stairq');q.hidden=false;
}
function askBoss(){
  S.ask='boss';render();
  document.getElementById('lvq').hidden=false;
}
function startBossRematch(lv){
  const bag=S.p.bag.slice();
  start(bag,5);
  S.p.lv=lv;S.p.max=30+5*(lv-1);S.p.hp=S.p.max;S.shrine=true;
  S.floor=S.maxF;Object.assign(S,newBossFloor(S.p,S.floor));placeAllies();
  S.log=[`祠の奥で、九尾の狐が待ち構えている！（Lv${lv}）`];sfx('boss');render();floorTitle('boss');
}
(function(){const lq=document.getElementById('lvq');
  lq.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{lq.hidden=true;const lv=+b.dataset.lv;guardRun(()=>playStory(()=>{S.ask=false;startBossRematch(lv)},'shrine'),()=>{S.ask=false;render()})});
  document.getElementById('lvNo').onclick=()=>{lq.hidden=true;S.ask=false;render()};
})();
(function(){const q=document.getElementById('stairq');
  document.getElementById('stairYes').onclick=()=>{q.hidden=true;const m=S.ask;S.ask=false;descend()};
  document.getElementById('stairNo').onclick=()=>{q.hidden=true;const m=S.ask;S.ask=false;endTurn()};
})();
function act(dx,dy,auto,rep){
  if(S.over||S.busy||S.ask)return;
  if(performance.now()<(S._lockUntil||0))return;
  if(S.lock&&!auto)return;
  const p=S.p;
  if(p.snare>0){p.snare--;say(p.snare>0?`くくり罠で動けない…（あと${p.snare}ターン）`:'くくり罠から抜け出した！');endTurn();return}
  if(p.freeze>0){p.freeze--;say('体が凍って動けない…');endTurn();return}
  if(p.conf>0&&(dx||dy)){
    p.conf--;
    const ds=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    [dx,dy]=ds[rnd(0,7)];say('足がもつれて、思わぬ方向へ…');
  }
  if(dx||dy){
    p.dir=dx>0?'r':dx<0?'l':dy<0?'u':'d';
    if(!canMove(p,dx,dy))return;
    const nx=p.x+dx,ny=p.y+dy,o=S.mon.find(q=>q.x===nx&&q.y===ny);
    if(o){
      if(rep)return;{const _n=performance.now();if(_n-(S._atkT||0)<500)return;S._atkT=_n}
      lunge(p,o);const d=Math.max(1,2+p.lv+rnd(0,2)-armorOf(o));o.hp-=d;dmg(o,d,'d');sfx('hit');addFx(o.x,o.y,'sl');say(`${o.n}に${d}のダメージ！`);
      if(o.hp<=0)kill(o);
    }else{
      const ob=(S.objs||[]).find(q=>q.x===nx&&q.y===ny);
      if(ob){interact(ob);return}
      const al=S.allies.find(q=>q.x===nx&&q.y===ny);if(al){al.x=p.x;al.y=p.y}
      p.x=nx;p.y=ny;p.flip=!p.flip;sfx('step');
      const i=S.items.findIndex(q=>q.x===nx&&q.y===ny);
      if(i>=0){
        if(S.items[i].k==='bag'){S.items.splice(i,1);S.bagUp=(S.bagUp||0)+2;S.gotBag=true;say('カバンを手に入れた！持ち物の枠が2つ増えた。');sfx('pick')}
        else if(p.bag.length<bagMax()){const it=S.items[i].inf?S.items[i]:S.items.splice(i,1)[0];p.bag.push(it.k);sfx('pick');say(`${ITEMS[it.k].n}を拾った。`)}
        else say('持ち物がいっぱいだ。');
      }
      const tr=(S.traps||[]).find(q=>q.x===nx&&q.y===ny);if(tr)springTrap(tr);
      if(nx===S.stairs.x&&ny===S.stairs.y){
        if(S.home){const R=ROOMS[S.room];BAG=p.bag.slice();p.x=R.door[0];p.y=R.door[1]-1;saveHome();show('menu');return}
        if(!auto){askStairs();return}
        descend();return;
      }
    }
  }else if(!auto&&!S.home&&S.stairs&&p.x===S.stairs.x&&p.y===S.stairs.y){askStairs();return}
  endTurn();
}
const occ=(x,y)=>(S.p.x===x&&S.p.y===y)||S.mon.some(q=>q.x===x&&q.y===y)||S.allies.some(q=>q.x===x&&q.y===y);
const adj=(a,b)=>Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y))===1&&canMove(a,Math.sign(b.x-a.x),Math.sign(b.y-a.y));
function stepToward(e,tx,ty){
  const sx=Math.sign(tx-e.x),sy=Math.sign(ty-e.y);
  for(const [mx,my] of [[sx,sy],[sx,0],[0,sy]]){
    if(!(mx||my)||!canMove(e,mx,my)||occ(e.x+mx,e.y+my))continue;
    e.x+=mx;e.y+=my;face(e,mx,my);e.flip=!e.flip;return true;
  }
  return false;
}
function chase(e,tx,ty){return bfsStep(e,tx,ty)||stepToward(e,tx,ty)}
function bfsStep(e,tx,ty){
  const key=(x,y)=>y*W+x,prev=new Map([[key(e.x,e.y),null]]),q=[[e.x,e.y]];
  const ds=[[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,-1],[-1,1],[1,1]];let goal=null;
  for(let h=0;h<q.length&&h<1300&&!goal;h++){
    const [x,y]=q[h];
    for(const [dx,dy] of ds){
      const nx=x+dx,ny=y+dy,k=key(nx,ny);
      if(prev.has(k)||Math.max(Math.abs(nx-e.x),Math.abs(ny-e.y))>45||!S.m[ny]||!S.m[ny][nx])continue;
      if(dx&&dy&&(!S.m[y][nx]||!S.m[ny][x]))continue;
      if(S.walls&&S.walls.some(w=>w.x===nx&&w.y===ny))continue;
      if(nx===tx&&ny===ty){prev.set(k,[x,y]);goal=[nx,ny];break}
      if(occ(nx,ny))continue;
      prev.set(k,[x,y]);q.push([nx,ny]);
    }
  }
  if(!goal)return false;
  let c=goal;while(prev.get(key(c[0],c[1]))&&(prev.get(key(c[0],c[1]))[0]!==e.x||prev.get(key(c[0],c[1]))[1]!==e.y))c=prev.get(key(c[0],c[1]));
  const mx=c[0]-e.x,my=c[1]-e.y;if(!(mx||my)||occ(c[0],c[1]))return false;
  e.x=c[0];e.y=c[1];face(e,mx,my);e.flip=!e.flip;return true;
}
function placeAllies(){
  const p=S.p;
  S.allies.forEach(a=>{a.x=a.y=-9});
  S.allies.forEach(a=>{
    for(let r=1;r<=3;r++){
      const c=[];
      for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){const x=p.x+dx,y=p.y+dy;if(S.m[y]&&S.m[y][x]&&!occ(x,y))c.push([x,y])}
      if(c.length){const [x,y]=c[rnd(0,c.length-1)];a.x=x;a.y=y;return}
    }
  });
}
function giveExp(e,amt,isP){
  e.exp=(e.exp||0)+amt;
  const need=()=>e.lv*(isP?13:10);
  while(e.exp>=need()){
    e.exp-=need();e.lv++;
    if(isP){e.max+=5;e.hp=Math.min(e.max,e.hp+5);sfx('lvup');addFx(e.x,e.y,'lvup');addFx(e.x,e.y,'dmg',120,{v:'LEVEL UP!',tp:'c'});say(`レベル${e.lv}に上がった！`)}
    else{e.max+=3;e.hp=Math.min(e.max,e.hp+3);if(e.lv%2===0)e.atk++;say(`${dn(e)}がレベル${e.lv}に上がった！`)}
  }
  if(!isP){
    const r=ROSTER.find(q=>q.id===e.id);
    if(r){r.lv=e.lv;r.exp=e.exp;r.atk=e.atk;r.max=e.max;saveRoster();renderRoster()}
  }
}
function kill(o,killer=null){
  S.mon=S.mon.filter(q=>q!==o);sfx('kill');
  if(o.boss&&S.bossStairs){S.stairs=S.bossStairs;say('九尾の狐を倒した！奥に階段が現れた。')}
  if(eqOn('ring')&&Math.random()<0.1&&!S.items.some(q=>q.x===o.x&&q.y===o.y)&&!(o.x===S.stairs.x&&o.y===S.stairs.y)){S.items.push({x:o.x,y:o.y,k:'rice'});say(`${o.n}はおにぎりを落とした！`)}
  const base=5*(o.t+1)*(o.var?VAR[o.var].exp:1);say(`${o.n}を倒した！`);
  giveExp(S.p,killer?base/2:base,true);
  S.allies.forEach(a=>giveExp(a,a===killer?base:base/2,false));
  if(!o.boss&&!killer&&S.allies.length<3&&Math.random()<RATE[o.t]*(S.allies.some(a=>a.n==='座敷童子')?1.5:1)){
    if(ROSTER.length>=20)say('仲間の枠がいっぱいで、仲間にできなかった…');
    else{
      const bm=MON.find(m=>m.n===(o.sk||o.n)),mx=bm.hp,r={id:Date.now()+Math.floor(Math.random()*1000),n:bm.n,ch:bm.ch,t:bm.t,atk:bm.atk,max:mx,lv:1,exp:0,go:true};
      ROSTER.push(r);nameRoster();saveRoster();renderRoster();
      S.allies.push({...r,hp:mx,x:o.x,y:o.y});
      sfx('recruit');say(`${dn(r)}が仲間になった！`);(S.pending=S.pending||[]).push(bm.n);
    }
  }
}
const eqOn=k=>!!(S&&S.p&&S.p.eq&&S.p.eq[k]&&S.p.bag.includes(k));
function toggleEquip(i){
  const p=S.p,k=p.bag[i];S.selIdx=null;if(!k||!ITEMS[k].eq)return;
  p.eq=p.eq||{};sfx('equip');
  if(p.eq[k]){p.eq[k]=false;say(`${ITEMS[k].n}を外した。`)}
  else{p.eq[k]=true;say(`${ITEMS[k].n}を装備した。`+(k==='ring'?'敵がおにぎりを落とすことがある。':'倒れても一度だけ復活する。'))}
  endTurn();
}
function dropItem(i){
  const p=S.p,k=p.bag[i];S.selIdx=null;
  if(S.over||S.busy||!k)return;
  if(S.home&&S.room!=='storage'){say('ここには置けない。物は倉庫で扱おう。');render();return}
  if(S.items.some(q=>q.x===p.x&&q.y===p.y)){say('ここにはすでに物が置いてある。');render();return}
  p.bag.splice(i,1);if(p.eq&&!p.bag.includes(k))p.eq[k]=false;S.items.push({x:p.x,y:p.y,k});say(`${ITEMS[k].n}を置いた。`);endTurn();
}
function useItem(i){
  if(S.over||S.busy||S.ask)return;
  const p=S.p,k=p.bag[i];S.selIdx=null;
  if(ITEMS[k]&&ITEMS[k].eq)return;
  if(k==='staff'){
    p.bag.splice(i,1);S.over=true;S.escaped=true;
    if(S.home){S.over=false;S.escaped=false;p.bag.splice(i,0,k);say('ここでは使えない。ダンジョンの中で使おう。');render();return}
    clearRun();sfx('staff');say('道標の杖を掲げた！光に導かれて、ダンジョンを脱出した。持ち物は無事だ。');
    if(S.pending&&S.pending.length)say('新しく仲間にした妖怪は、メニューに戻ると図鑑に登録される。');
    const ag=document.getElementById('again');ag.textContent='メニューに戻る（持ち物を持ち帰る）';ag.style.display='block';render();return;
  }
  if(k==='herb'){{const b0=p.hp;p.hp=Math.min(p.max,p.hp+25);if(p.hp>b0)dmg(p,p.hp-b0,'h')}p.food=Math.min(100,p.food+5);sfx('heal');say('薬草を食べた。HPが回復して、満腹度も5回復した。')}
  if(k==='rice'){p.food=Math.min(100,p.food+60);sfx('eat');say('おにぎり（小）を食べた。満腹度が回復した。')}
  if(k==='riceL'){p.food=100;sfx('eat');say('おにぎり（大）を食べた。満腹度が全回復した！')}
  if(k==='fire'){
    sfx('fire');say('巻物から炎が広がった！');addFx(p.x,p.y,'fire');
    S.mon.filter(o=>seeing(o.x,o.y)).forEach(o=>{addFx(o.x,o.y,'flame',150);o.hp-=8;dmg(o,8,'d',150);if(o.hp<=0)kill(o)});
  }
  p.bag.splice(i,1);endTurn();
}
function lineClear(a,b,range){
  const dx=b.x-a.x,dy=b.y-a.y,d=Math.max(Math.abs(dx),Math.abs(dy));
  if(d<2||d>range||!(dx===0||dy===0||Math.abs(dx)===Math.abs(dy)))return false;
  const sx=Math.sign(dx),sy=Math.sign(dy);
  for(let k=1;k<d;k++){const x=a.x+sx*k,y=a.y+sy*k;if(!S.m[y]||!S.m[y][x]||occ(x,y)||S.walls.some(w=>w.x===x&&w.y===y))return false}
  return true;
}
function wander(e){
  const ds=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],[dx,dy]=ds[rnd(0,7)];
  if(canMove(e,dx,dy)&&!occ(e.x+dx,e.y+dy)){e.x+=dx;e.y+=dy;face(e,dx,dy);e.flip=!e.flip}
}
function inflict(src,tgt,name){
  if(src.conf&&Math.random()<src.conf&&!(tgt.conf>0)){tgt.conf=2;say(`${name}は混乱した！`)}
  if(src.freeze&&Math.random()<src.freeze&&!(tgt.freeze>0)){tgt.freeze=2;say(`${name}は凍りついた！`)}
  if(src.bleed&&Math.random()<src.bleed&&!(tgt.bleed>0)){tgt.bleed=3;tgt.bleedBy=src.src||null;say(`${name}は出血した！`)}
}
function allyDie(a){
  S.allies=S.allies.filter(q=>q!==a);ROSTER=ROSTER.filter(r=>r.id!==a.id);saveRoster();renderRoster();
  say(`仲間の${dn(a)}がやられた…`);
}
function tick(){
  const p=S.p;
  S.walls.forEach(w=>w.t--);S.walls=S.walls.filter(w=>w.t>0);
  if(p.bleed>0){p.bleed--;p.hp--;dmg(p,1,'p');say('出血で1のダメージ。')}
  for(const a of [...S.allies])if(a.bleed>0){a.bleed--;a.hp--;if(a.hp<=0)allyDie(a)}
  for(const o of [...S.mon])if(o.bleed>0){o.bleed--;o.hp--;if(o.hp<=0)kill(o,o.bleedBy||null)}
}
function allyAct(a){
  const p=S.p;
  if(a.n==='九尾の狐'){
    if(a.warpCd>0)a.warpCd--;
    const engaged=S.mon.some(o=>Math.max(Math.abs(o.x-a.x),Math.abs(o.y-a.y))<=5);
    if(!(a.warpCd>0)&&!engaged&&Math.max(Math.abs(p.x-a.x),Math.abs(p.y-a.y))>=10){
      let c=[];
      for(let r=1;r<=3&&!c.length;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!==r)continue;const x=p.x+dx,y=p.y+dy;if(S.m[y]&&S.m[y][x]&&!occ(x,y)&&!(x===S.stairs.x&&y===S.stairs.y)&&!S.walls.some(w=>w.x===x&&w.y===y))c.push([x,y])}
      if(c.length){const [x,y]=c[rnd(0,c.length-1)];addFx(a.x,a.y,'warp');a.x=x;a.y=y;addFx(x,y,'warp');sfx('warp');a.warpCd=10;say('九尾の狐が主人公のそばへワープした！');return}
    }
  }
  const spw=MON.find(m=>m.n===a.n)||{};
  if(spw.wall){
    if(a.cd>0)a.cd--;
    else{
      const m=S.mon.filter(o=>{const d=Math.max(Math.abs(o.x-p.x),Math.abs(o.y-p.y));return d>=2&&d<=5}).sort((u,v)=>Math.hypot(u.x-p.x,u.y-p.y)-Math.hypot(v.x-p.x,v.y-p.y))[0];
      if(m){
        const sx=Math.sign(p.x-m.x),sy=Math.sign(p.y-m.y);
        for(const [mx,my] of [[sx,sy],[sx,0],[0,sy]]){
          const x=m.x+mx,y=m.y+my;
          if(!(mx||my)||!S.m[y]||!S.m[y][x]||occ(x,y)||(x===S.stairs.x&&y===S.stairs.y))continue;
          S.walls.push({x,y,t:4});a.cd=6;say('ぬりかべが敵の前に立ちはだかった！');return;
        }
      }
    }
  }
  const roomIdx=(x,y)=>S.rooms?S.rooms.findIndex(r=>x>=r.x&&x<r.x+r.w&&y>=r.y&&y<r.y+r.h):-1;
  const foe=S.mon.map(o=>({o,d:Math.max(Math.abs(o.x-a.x),Math.abs(o.y-a.y)),h:Math.max(Math.abs(o.x-p.x),Math.abs(o.y-p.y))})).filter(r=>{
    if(r.d<=1)return true;
    if(r.h>6)return false;
    if(!S.rooms)return r.h<=5;
    const rp=roomIdx(p.x,p.y);return (rp>=0&&rp===roomIdx(r.o.x,r.o.y))||r.h<=3;
  }).sort((u,v)=>u.d-v.d)[0];
  if(foe&&adj(a,foe.o)){
    face(a,Math.sign(foe.o.x-a.x),Math.sign(foe.o.y-a.y));
    const sp=MON.find(m=>m.n===a.n)||{};
    for(let k=0;k<(sp.hits||1)&&foe.o.hp>0;k++){
      let d=a.atk+rnd(0,1);const c=Math.random()<(sp.crit||0);if(c)d*=2;d=Math.max(1,d-armorOf(foe.o));
      lunge(a,foe.o);foe.o.hp-=d;dmg(foe.o,d,c?'c':'d');sfx('hit',0.5);addFx(foe.o.x,foe.o.y,c?'slc':'sl');say(`${dn(a)}が${foe.o.n}に${c?'急所で':''}${d}のダメージ！`);inflict({...sp,src:a},foe.o,foe.o.n);
    }
    if(foe.o.hp<=0)kill(foe.o,a);
  }else if(foe&&(MON.find(m=>m.n===a.n)||{}).range&&lineClear(a,foe.o,MON.find(m=>m.n===a.n).range)){
    const d=Math.max(1,a.atk+rnd(0,1)-armorOf(foe.o));lunge(a,foe.o);foe.o.hp-=d;dmg(foe.o,d,'d');addFx(foe.o.x,foe.o.y,'sl');say(`${dn(a)}の傘が${foe.o.n}に${d}のダメージ！`);
    if(foe.o.hp<=0)kill(foe.o,a);
  }else if(foe)chase(a,foe.o.x,foe.o.y);
  else if(Math.max(Math.abs(p.x-a.x),Math.abs(p.y-a.y))>2)chase(a,p.x,p.y);
}
function monAct(o){
  const p=S.p,d=Math.max(Math.abs(p.x-o.x),Math.abs(p.y-o.y)),ta=S.allies.find(a=>adj(o,a));
  if(adj(o,p)){
    face(o,Math.sign(p.x-o.x),Math.sign(p.y-o.y));
    for(let k=0;k<(o.hits||1)&&p.hp>0;k++){
      if(Math.random()<0.75){lunge(o,p);let v=Math.max(1,o.atk+rnd(-1,1));const c=Math.random()<(o.crit||0);if(c)v*=2;p.hp-=v;dmg(p,v,c?'pc':'p');sfx('hurt');addFx(p.x,p.y,c?'slc':'slr');say(`${o.n}の攻撃！${c?'急所に当たった！':''}${v}のダメージ。`);inflict(o,p,'あなた')}
      else{dmg(p,'MISS','m');say(`${o.n}の攻撃は外れた。`)}
    }
  }else if(o.boss&&d<=6&&losClear(o.x,o.y,p.x,p.y)&&Math.random()<0.45){
    face(o,Math.sign(p.x-o.x),Math.sign(p.y-o.y));
    for(let i=1;i<=d;i++)addFx(Math.round(o.x+(p.x-o.x)*i/d),Math.round(o.y+(p.y-o.y)*i/d),'flame',i*55);
    if(Math.random()<0.85){const v=Math.max(1,Math.round(o.atk*0.8)+rnd(-1,1));p.hp-=v;dmg(p,v,'p',d*55);sfx('hurt');addFx(p.x,p.y,'flame',d*55);say(`${o.n}の狐火！${v}のダメージ。`)}
    else{dmg(p,'MISS','m',d*55);say(`${o.n}の狐火は外れた。`)}
  }else if(o.range&&lineClear(o,p,o.range)){
    if(Math.random()<0.75){const v=Math.max(1,o.atk+rnd(-1,1));p.hp-=v;dmg(p,v,'p');sfx('hurt');addFx(p.x,p.y,'slr');say(`${o.n}の傘が飛んできた！${v}のダメージ。`);inflict(o,p,'あなた')}
    else{dmg(p,'MISS','m');say(`${o.n}の傘は外れた。`)}
  }else if(ta){
    lunge(o,ta);addFx(ta.x,ta.y,'slr');{const v=Math.max(1,o.atk-1-armorOf(ta));ta.hp-=v;dmg(ta,v,'p')}inflict(o,ta,dn(ta));
    if(ta.hp<=0)allyDie(ta);
  }else if(d<=10)chase(o,p.x,p.y);
}
function endTurn(){
  if(S.home){saveHome();render();return}
  const p=S.p;S.turn++;
  for(const a of [...S.allies]){
    a.acc=(a.acc||0)+spdOf(a.n);
    while(a.acc>=1&&S.allies.includes(a)){a.acc--;if(a.freeze>0){a.freeze--;continue}if(a.conf>0){a.conf--;wander(a);continue}allyAct(a)}
  }
  const hasFx=S.fx&&S.fx.some(q=>performance.now()-q.t<260);
  if(hasFx&&!S.over){S.busy=true;render();setTimeout(()=>{S.busy=false;if(!S.over)endTurn2()},420)}else endTurn2();
}
function endTurn2(){const _h=S.p.hp;endTurn2b();if(S.p.hp<_h||S.mon.some(m=>m._lg&&performance.now()-m._lg.t<LUNGE_MS))S._lockUntil=performance.now()+460}
function endTurn2b(){
  const p=S.p;
  if(S.allies.some(a=>a.n==='ぬらりひょん'))for(const o of S.mon)if(!(o.conf>0)&&Math.hypot(o.x-p.x,o.y-p.y)<=7&&Math.random()<0.25)o.conf=1;
  for(const o of [...S.mon]){
    o.acc=(o.acc||0)+(o.spd||1);
    while(o.acc>=1&&S.mon.includes(o)&&p.hp>0){o.acc--;if(o.freeze>0){o.freeze--;continue}if(o.conf>0){o.conf--;wander(o);continue}monAct(o)}
  }
  tick();
  p.fc=(p.fc||0)+1;if(p.fc>=3){p.fc-=3;p.food=Math.max(0,p.food-1);if(p.food===20)say('お腹が空いてきた…')}

  if(p.food===0)p.hp--;
  else if(S.turn%4===0&&p.hp<p.max)p.hp++;
  if(S.turn%4===0)S.allies.forEach(a=>{if(a.hp<a.max)a.hp++});
  if(p.hp<=0&&eqOn('charm')){const ci=p.bag.indexOf('charm');p.bag.splice(ci,1);if(!p.bag.includes('charm'))p.eq.charm=false;p.hp=p.max;sfx('revive');p.food=Math.max(p.food,20);p.bleed=0;p.freeze=0;p.conf=0;say('復活の護符が光った！HPが全快した！護符は砕け散った。')}
  if(p.hp<=0){S.over=true;clearRun();sfx('die');p.hp=0;say(`力尽きた… ${S.floor}階で倒れた。`);const ag=document.getElementById('again');ag.textContent='メニューに戻る（持ち物は失われる）';ag.style.display='block'}
  render();
}

const HERO_IMG={d:'images/sprite_hero_d.png',r:'images/sprite_hero_r.png',u:'images/sprite_hero_u.png'};
const ONI_IMG={d:'images/sprite_oni_d.png',r:'images/sprite_oni_r.png',u:'images/sprite_oni_u.png'};
const KAPPA_IMG={d:'images/sprite_kappa_d.png',r:'images/sprite_kappa_r.png',u:'images/sprite_kappa_u.png'};
const TENGU_IMG={d:'images/sprite_tengu_d.png',r:'images/sprite_tengu_r.png',u:'images/sprite_tengu_u.png'};
const NEKO_IMG={d:'images/sprite_neko_d.png',r:'images/sprite_neko_r.png',u:'images/sprite_neko_u.png'};
const YUKI_IMG={d:'images/sprite_yuki_d.png',r:'images/sprite_yuki_r.png',u:'images/sprite_yuki_u.png'};
const KASA_IMG={d:'images/sprite_kasa_d.png',r:'images/sprite_kasa_r.png',u:'images/sprite_kasa_u.png'};
const KABE_IMG={d:'images/sprite_kabe_d.png',r:'images/sprite_kabe_r.png',u:'images/sprite_kabe_u.png'};
const KAMA_IMG={d:'images/sprite_kama_d.png',r:'images/sprite_kama_r.png',u:'images/sprite_kama_u.png'};
const ZASHIKI_IMG={d:'images/sprite_zashiki_d.png',r:'images/sprite_zashiki_r.png',u:'images/sprite_zashiki_u.png'};
const NURA_IMG={d:'images/sprite_nura_d.png',r:'images/sprite_nura_r.png',u:'images/sprite_nura_u.png'};
const KYUBI_IMG={d:'images/sprite_kyubi_d.png',r:'images/sprite_kyubi_r.png',u:'images/sprite_kyubi_u.png'};
const HITO_IMG={d:'images/sprite_hito_d.png',r:'images/sprite_hito_r.png',u:'images/sprite_hito_u.png'};
const SPR={};
function loadSpr(key,imgs,left){
  const o={left};
  Object.keys(imgs).forEach(k=>{const im=new Image();im.onload=()=>{if(typeof S!=='undefined'&&S)render()};im.src=imgs[k];o[k]=im});
  SPR[key]=o;
}
loadSpr('hero',HERO_IMG,false);
loadSpr('鬼',ONI_IMG,true);
loadSpr('河童',KAPPA_IMG,true);
loadSpr('天狗',TENGU_IMG,true);
loadSpr('猫又',NEKO_IMG,true);
loadSpr('雪女',YUKI_IMG,true);
loadSpr('からかさ小僧',KASA_IMG,true);
loadSpr('ぬりかべ',KABE_IMG,true);
loadSpr('鎌鼬',KAMA_IMG,true);
loadSpr('座敷童子',ZASHIKI_IMG,true);
loadSpr('ぬらりひょん',NURA_IMG,true);
loadSpr('九尾の狐',KYUBI_IMG,true);
loadSpr('九尾母',{d:'images/sprite_kyubi_mother_d.png',r:'images/sprite_kyubi_mother_r.png',u:'images/sprite_kyubi_mother_u.png'},true);
loadSpr('白狐',{d:'images/sprite_white_fox_d.png',r:'images/sprite_white_fox_r.png',u:'images/sprite_white_fox_u.png'},true);
loadSpr('一つ目小僧',HITO_IMG,true);
function face(e,dx,dy){e.dir=dx>0?'r':dx<0?'l':dy<0?'u':'d'}
function base(e,ox,oy,col){
  const i=e.x-ox,j=e.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;
  const sl=slide(e),cx=i*T+T/2+sl[0]*T,cy=(j+1)*T-4+sl[1]*T;
  g.save();
  g.globalAlpha=.3;g.fillStyle=col;g.beginPath();g.ellipse(cx,cy,14,6.5,0,0,Math.PI*2);g.fill();
  g.globalAlpha=1;g.strokeStyle=col;g.lineWidth=1.5;g.beginPath();g.ellipse(cx,cy,14,6.5,0,0,Math.PI*2);g.stroke();
  if(e.var===2){g.lineWidth=1;g.beginPath();g.ellipse(cx,cy,18,8.5,0,0,Math.PI*2);g.stroke()}
  g.restore();
}
function drawSpr(e,key,ox,oy,tag){
  const i=e.x-ox,j=e.y-oy;if(i<-1||j<-1||i>VW||j>VH)return true;
  const sp=SPR[key],d=e.dir||'d',im=sp&&sp[d==='l'?'r':d];
  if(!(im&&im.complete&&im.naturalWidth))return false;
  const _h=e.hitT?performance.now()-e.hitT:-1,hs=(_h>=0&&_h<300)?Math.sin(_h*.13)*4*(1-_h/300):0;
  const sl=slide(e),cx=i*T+T/2+hs+sl[0]*T,by=(j+1)*T-1+sl[1]*T;
  const st=e.freeze>0?'#6ec6ff':e.bleed>0?'#ef6b5e':e.conf>0?'#f5a623':null;
  if(st){g.strokeStyle=st;g.lineWidth=2;g.beginPath();g.ellipse(cx,by-4,18,9,0,0,Math.PI*2);g.stroke()}
  const K=T/44*(e.var?VAR[e.var].k:1)*(key==='白狐'?0.78:key==='九尾母'?1.25:1),w=im.naturalWidth*K,h=im.naturalHeight*K,side=d==='l'||d==='r';
  const mirror=side?((d==='l')!==!!sp.left):((d==='d'||d==='u')&&e.flip);
  const hop=side&&e.flip?-2:0;
  g.save();g.imageSmoothingEnabled=true;
  if(mirror){g.translate(cx,0);g.scale(-1,1);g.drawImage(im,-w/2,by-h+hop,w,h)}else g.drawImage(im,cx-w/2,by-h+hop,w,h);
  g.restore();
  if(e.var){const V=VAR[e.var];g.save();g.font='bold 12px sans-serif';g.textAlign='center';g.textBaseline='middle';g.lineWidth=3;g.strokeStyle='rgba(0,0,0,.85)';g.fillStyle=V.col;g.strokeText(V.tag,cx,by-h-3);g.fillText(V.tag,cx,by-h-3);g.restore()}
  return true;
}
function drawHero(p,ox,oy){
  if(!drawSpr(p,'hero',ox,oy)){const i=p.x-ox,j=p.y-oy;g.fillStyle='#f2c14e';g.fillText('@',i*T+T/2,(j+.5)*T)}
}
function makeTex(th){
  th=th||THEMES[0];let seed=th.seed;const rn=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  const ri=(a,b)=>a+Math.floor(rn()*(b-a+1));
  const shade=(c,d)=>'#'+[1,3,5].map(k=>Math.max(0,Math.min(255,parseInt(c.substr(k,2),16)+d)).toString(16).padStart(2,'0')).join('');
  const mk=(base,joint,lift,rows,chunk)=>{
    const c=document.createElement('canvas');c.width=c.height=T;const x=c.getContext('2d');
    x.fillStyle=joint;x.fillRect(0,0,T,T);
    let y0=0;
    for(let r=0;r<rows;r++){
      const h=r===rows-1?T-y0:Math.round(T/rows)+ri(-2,2);
      let x0=-ri(0,6);
      while(x0<T){
        const w=ri(chunk[0],chunk[1]),sx=Math.max(0,x0),ex=Math.min(T,x0+w);
        if(ex-sx>3&&h>3){
          const col=shade(base,ri(-9,9));
          x.fillStyle=col;x.fillRect(sx+1,y0+1,ex-sx-1,h-2);
          x.fillStyle=shade(col,lift);x.fillRect(sx+1,y0+1,ex-sx-1,2);
          x.fillStyle=shade(col,-lift);x.fillRect(sx+1,y0+h-2,ex-sx-1,1);
          for(let k=0;k<3;k++){x.fillStyle=shade(col,ri(-16,16));x.fillRect(sx+ri(2,Math.max(2,ex-sx-2)),y0+ri(3,Math.max(3,h-3)),1,1)}
        }
        x0+=w;
      }
      y0+=h;
    }
    return c;
  };
  const rgba=(c,a)=>{const n=parseInt(c.slice(1),16);return `rgba(${n>>16},${(n>>8)&255},${n&255},${a})`};
  const deco=(c)=>{
    const x=c.getContext('2d'),k=th.deco;
    if(k==='pebble'){for(let i=0;i<ri(2,4);i++){const px=ri(3,T-5),py=ri(3,T-5),r=ri(1,3);x.fillStyle=rgba(th.fl[1],.8);x.beginPath();x.ellipse(px,py+1,r+1,r,0,0,7);x.fill();x.fillStyle=rgba(th.fl[0],.9);x.beginPath();x.ellipse(px,py,r,r*.8,0,0,7);x.fill()}if(rn()<.5){x.strokeStyle=rgba(th.fl[1],.8);x.lineWidth=1;x.beginPath();let cx=ri(4,T-4),cy=0;x.moveTo(cx,cy);for(let i=0;i<4;i++){cx+=ri(-4,4);cy+=ri(5,10);x.lineTo(cx,cy)}x.stroke()}}
    else if(k==='moss'){for(let i=0;i<ri(2,4);i++){const px=ri(0,T),py=ri(0,T),r=ri(4,9);const gr=x.createRadialGradient(px,py,1,px,py,r);gr.addColorStop(0,'rgba(96,150,70,.75)');gr.addColorStop(1,'rgba(96,150,70,0)');x.fillStyle=gr;x.fillRect(px-r,py-r,r*2,r*2)}for(let i=0;i<5;i++){x.fillStyle='rgba(150,200,110,.7)';x.fillRect(ri(0,T-2),ri(0,T-2),1,2)}}
    else if(k==='puddle'){const px=ri(8,T-8),py=ri(10,T-8),rx=ri(6,12),ry=ri(3,6);const gr=x.createRadialGradient(px,py,1,px,py,rx);gr.addColorStop(0,'rgba(150,120,220,.55)');gr.addColorStop(.7,'rgba(90,70,160,.4)');gr.addColorStop(1,'rgba(60,40,120,0)');x.save();x.translate(px,py);x.scale(1,ry/rx);x.translate(-px,-py);x.fillStyle=gr;x.beginPath();x.arc(px,py,rx,0,7);x.fill();x.restore();x.fillStyle='rgba(235,225,255,.55)';x.fillRect(px-rx*.4,py-1,rx*.5,1)}
    else if(k==='crack'){x.strokeStyle=rgba(th.fl[1],.9);x.lineWidth=1;for(let n=0;n<ri(1,2);n++){x.beginPath();let cx=ri(2,T-2),cy=ri(0,6);x.moveTo(cx,cy);for(let i=0;i<4;i++){cx+=ri(-6,6);cy+=ri(5,9);x.lineTo(cx,cy)}x.stroke()}if(rn()<.4){x.fillStyle='rgba(200,210,225,.35)';x.fillRect(ri(2,T-4),ri(2,T-4),3,1)}}
    else if(k==='vein'){x.lineWidth=2;x.strokeStyle='rgba(255,50,60,.28)';x.beginPath();let cx=ri(0,T),cy=0;x.moveTo(cx,cy);for(let i=0;i<4;i++){cx+=ri(-7,7);cy+=ri(6,10);x.lineTo(cx,cy)}x.stroke();x.lineWidth=1;x.strokeStyle='rgba(255,140,120,.55)';x.stroke()}
  };
  const floor=[],wall=[];
  for(let i=0;i<8;i++){const f=mk(th.fl[0],th.fl[1],9,2,[8,14]);if(i%2===0||th.deco==='moss')deco(f);floor.push(f);wall.push(mk(th.wl[0],th.wl[1],20,2,[7,12]))}
  return {floor,wall};
}
const THEMES=[
  {seed:20261008,fl:['#42607f','#25384f'],wl:['#4a566e','#1a2130'],dark:[4,7,18],deco:'crack',bg:['#0d1422','#18233a']},
  {seed:11,fl:['#66543f','#2f2519'],wl:['#4d3f31','#1d160f'],dark:[14,8,3],deco:'pebble',bg:['#120d08','#2a2016']},
  {seed:22,fl:['#41603b','#1d2c1b'],wl:['#35462d','#111a0f'],dark:[3,12,5],deco:'moss',bg:['#08120a','#16281a']},
  {seed:33,fl:['#4d4268','#251c37'],wl:['#3c3158','#150f25'],dark:[10,4,20],deco:'puddle',bg:['#0e0818','#221534']},
  {seed:44,fl:['#6e7684','#343b47'],wl:['#566070','#202632'],dark:[5,8,17],deco:'crack',bg:['#0a0f1a','#1c2638']},
  {seed:55,fl:['#5e303c','#2c131b'],wl:['#5a2b36','#1d0a10'],dark:[20,3,7],deco:'vein',bg:['#16060b','#33101a']}
];
const TEXS=THEMES.map(t=>makeTex(t));
const TEX=TEXS[0];
const themeIdx=()=>S&&!S.home?Math.min(5,Math.max(1,S.dun||1)):0;
const BGC=THEMES.map(t=>{const c=document.createElement('canvas');c.width=VW*T*2;c.height=VH*T*2;const x=c.getContext('2d');
  let sd=t.seed*7+3;const r=()=>{sd=(sd*1664525+1013904223)>>>0;return sd/4294967296};
  const gr=x.createLinearGradient(0,0,0,c.height);gr.addColorStop(0,t.bg[0]);gr.addColorStop(.5,t.bg[1]);gr.addColorStop(1,t.bg[0]);x.fillStyle=gr;x.fillRect(0,0,c.width,c.height);
  for(let n=0;n<46;n++){const cx=r()*c.width,cy=r()*c.height,rad=18+r()*60,a=.06+r()*.12;x.fillStyle=`rgba(255,255,255,${a*.35})`;x.beginPath();for(let k=0;k<9;k++){const an=k/9*6.283,rr=rad*(.55+r()*.6);x.lineTo(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr*.7)}x.closePath();x.fill();x.fillStyle=`rgba(0,0,0,${a*2.2})`;x.beginPath();for(let k=0;k<9;k++){const an=k/9*6.283,rr=rad*(.45+r()*.5);x.lineTo(cx+8+Math.cos(an)*rr,cy+10+Math.sin(an)*rr*.7)}x.closePath();x.fill()}
  for(let n=0;n<14;n++){const bx=r()*c.width,h=20+r()*60,w=8+r()*18;x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.moveTo(bx-w,0);x.lineTo(bx+w,0);x.lineTo(bx,h);x.closePath();x.fill()}
  return c});
const STAIR_IMG=new Image();STAIR_IMG.onload=()=>{if(typeof S!=='undefined'&&S)render()};STAIR_IMG.src='images/stair.png';
let fitBusy=false;
function fitStage(){
  if(fitBusy||typeof document==='undefined')return;
  const vg=document.getElementById('v-game');if(!vg||vg.hidden)return;
  fitBusy=true;
  try{
    const mw=document.querySelector('main').clientWidth-24;if(!(mw>0)){return}
    cv.style.width=mw+'px';cv.style.height=(mw*VH/VW)+'px';
    const nat=mw*VH/VW,other=document.body.scrollHeight-nat;
    const vh=window.innerHeight||0;
    let h=nat;if(vh>200)h=Math.max(Math.min(nat,vh-other-4),Math.min(nat,200));
    cv.style.height=h+'px';cv.style.width=(h*VW/VH)+'px';
  }finally{fitBusy=false}
}
window.addEventListener('resize',fitStage);
function markWalk(){
  const p=S.p;if(!S.walk)S.walk=Array.from({length:H},()=>Array(W).fill(false));
  S.walk[p.y][p.x]=true;
  const r=(S.rooms||[]).find(r=>p.x>=r.x&&p.x<r.x+r.w&&p.y>=r.y&&p.y<r.y+r.h);
  if(r)for(let y=r.y-1;y<=r.y+r.h;y++)for(let x=r.x-1;x<=r.x+r.w;x++)if(S.walk[y]&&x>=0&&x<W)S.walk[y][x]=true;
}
function drawMap(mini){
  const cvm=document.getElementById(mini?'minic':'mapc'),st=document.getElementById('stage');
  const cell=mini?Math.max(2,Math.min(4,Math.floor(st.clientWidth*.36/W))):Math.max(4,Math.floor(Math.min((st.clientWidth-16)/W,(st.clientHeight-16)/H)));
  cvm.width=W*cell;cvm.height=H*cell;const q=cvm.getContext('2d');
  q.fillStyle='#0b1019';q.fillRect(0,0,cvm.width,cvm.height);
  const w=S.walk||[],known=(x,y)=>w[y]&&w[y][x];
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){
    if(!known(x,y)&&!S.seen[y][x])continue;
    if(S.m[y][x]){q.fillStyle=known(x,y)?'#4a6288':'#2f4262';q.fillRect(x*cell,y*cell,cell,cell)}
    else if([-1,0,1].some(b=>[-1,0,1].some(a=>S.m[y+b]&&S.m[y+b][x+a]&&known(x+a,y+b)))){q.fillStyle='#1b2536';q.fillRect(x*cell,y*cell,cell,cell)}
  }
  if(S.stairs&&S.stairs.x>=0&&S.seen[S.stairs.y][S.stairs.x]){q.fillStyle='#8ab4f8';q.fillRect(S.stairs.x*cell,S.stairs.y*cell,cell,cell)}
  S.allies.forEach(a=>{q.fillStyle='#c792ea';q.fillRect(a.x*cell+1,a.y*cell+1,cell-2,cell-2)});
  q.fillStyle='#f2c14e';q.beginPath();q.arc(S.p.x*cell+cell/2,S.p.y*cell+cell/2,cell*(mini?1.1:.7),0,Math.PI*2);q.fill();
}
(function(){const b=document.getElementById('mapbtn'),ov=document.getElementById('mapov');
  b.onclick=()=>{if(!S||S.home)return;if(ov.hidden){markWalk();drawMap();ov.hidden=false}else ov.hidden=true};
  ov.onclick=()=>{ov.hidden=true}})();
function render(){
  markWalk();{const mb=document.getElementById('mapbtn');mb.hidden=!!S.home;if(S.home)document.getElementById('mapov').hidden=true;else drawMap(true)}
  const p=S.p,C={me:'#f2c14e',foe:'#ef6b5e',item:'#6fcf97',stair:'#8ab4f8',ally:'#c792ea'},OBJCOL={'--stair':'#8ab4f8','--ally':'#c792ea','--floor':'#6b7f99'};
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(seeing(x,y))S.seen[y][x]=true;
  const ox=Math.max(0,Math.min(W-VW,p.x-(VW>>1))),oy=Math.max(0,Math.min(H-VH,p.y-(VH>>1)));
  const TX=TEXS[themeIdx()]||TEX,BG=BGC[themeIdx()];
  const _n=performance.now();let CM=S._cam;if(!CM)CM=S._cam={ox,oy,sx:0,sy:0,t:0};
  const camCur=()=>{if(!CM.t)return[0,0];const k=(_n-CM.t)/MOVE_MS;if(k>=1){CM.t=0;return[0,0]}const f=(1-k)*(1-k);return[CM.sx*f,CM.sy*f]};
  if(CM.ox!==ox||CM.oy!==oy){const c=camCur(),d=Math.max(Math.abs(ox-CM.ox),Math.abs(oy-CM.oy));if(d<=1){CM.sx=c[0]+(ox-CM.ox)*T;CM.sy=c[1]+(oy-CM.oy)*T;CM.t=_n;ANIM_UNTIL=Math.max(ANIM_UNTIL,_n+MOVE_MS+30)}else CM.t=0;CM.ox=ox;CM.oy=oy}
  const _cc=camCur();CAMX=_cc[0];CAMY=_cc[1];
  {const bw=BG.width,bh=BG.height,px=-((ox*T*.45)%bw+bw)%bw,py=-((oy*T*.45)%bh+bh)%bh;for(let a=0;a<2;a++)for(let b2=0;b2<2;b2++)g.drawImage(BG,px+a*bw,py+b2*bh)}
  g.save();g.translate(CAMX,CAMY);
  g.textAlign='center';g.textBaseline='middle';g.font='bold 22px sans-serif';
  const near=(x,y)=>[-1,0,1].some(a=>[-1,0,1].some(b=>S.m[y+b]&&S.m[y+b][x+a]));
  for(let j=-1;j<=VH;j++)for(let i=-1;i<=VW;i++){
    const x=ox+i,y=oy+j;if(x<0||y<0||x>=W||y>=H||!S.seen[y][x])continue;
    g.globalAlpha=seeing(x,y)?1:0.6;
    if(S.m[y][x]){g.drawImage(TX.floor[(x*7+y*13)%TX.floor.length],i*T,j*T);
      const up=!(S.m[y-1]&&S.m[y-1][x]),lf=!(S.m[y][x-1]),rt=!(S.m[y][x+1]);
      if(up){const sg=g.createLinearGradient(0,j*T,0,j*T+11);sg.addColorStop(0,'rgba(0,0,0,.5)');sg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=sg;g.fillRect(i*T,j*T,T,11)}
      if(lf){const sg=g.createLinearGradient(i*T,0,i*T+7,0);sg.addColorStop(0,'rgba(0,0,0,.32)');sg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=sg;g.fillRect(i*T,j*T,7,T)}
      if(rt){const sg=g.createLinearGradient(i*T+T,0,i*T+T-7,0);sg.addColorStop(0,'rgba(0,0,0,.32)');sg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=sg;g.fillRect(i*T+T-7,j*T,7,T)}
    }else if(near(x,y)){g.drawImage(TX.wall[(x*11+y*5)%TX.wall.length],i*T,j*T);
      if(S.m[y+1]&&S.m[y+1][x]){const sg=g.createLinearGradient(0,j*T,0,j*T+T);sg.addColorStop(0,'rgba(0,0,0,.28)');sg.addColorStop(.55,'rgba(0,0,0,.1)');sg.addColorStop(1,'rgba(0,0,0,.5)');g.fillStyle=sg;g.fillRect(i*T,j*T,T,T);g.fillStyle='rgba(0,0,0,.6)';g.fillRect(i*T,j*T+T-3,T,3);g.fillStyle='rgba(255,255,255,.14)';g.fillRect(i*T,j*T+T-4,T,1)}
      else{g.fillStyle='rgba(6,8,16,.5)';g.fillRect(i*T,j*T,T,T)}}
    if(x===S.stairs.x&&y===S.stairs.y){if(!S.home&&STAIR_IMG.complete&&STAIR_IMG.naturalWidth)g.drawImage(STAIR_IMG,i*T,j*T,T,T);else{g.fillStyle=C.stair;g.fillText(S.home?'出':'階',i*T+T/2,j*T+T/2)}}
  }
  g.globalAlpha=1;
  (S.torches||[]).forEach(t=>{
    const i=t.x-ox,j=t.y-oy;if(i<-1||j<-1||i>VW||j>VH||!S.seen[t.y][t.x])return;
    const cx=i*T+T/2,cy=j*T+T/2+2,gr=g.createRadialGradient(cx,cy,2,cx,cy,T*2.2);
    gr.addColorStop(0,'rgba(255,170,60,.42)');gr.addColorStop(1,'rgba(255,170,60,0)');
    g.fillStyle=gr;g.fillRect(cx-T*2.2,cy-T*2.2,T*4.4,T*4.4);
    g.fillStyle='#6b3b1a';g.fillRect(cx-1.5,cy,3,7);
    g.fillStyle='#ff9a2e';g.beginPath();g.ellipse(cx,cy-1,3.5,5,0,0,Math.PI*2);g.fill();
    g.fillStyle='#ffe28a';g.beginPath();g.ellipse(cx,cy,1.8,3,0,0,Math.PI*2);g.fill();
  });
  (S.traps||[]).filter(t=>t.rev&&S.seen[t.y][t.x]).forEach(t=>{const i=t.x-ox,j=t.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;const D=TRAPS[t.k];g.globalAlpha=seeing(t.x,t.y)?.95:.55;g.fillStyle='rgba(0,0,0,.45)';g.beginPath();g.arc(i*T+T/2,j*T+T/2,11,0,Math.PI*2);g.fill();g.strokeStyle=D.col;g.lineWidth=1.5;g.stroke();g.fillStyle=D.col;g.font='bold 14px sans-serif';g.fillText(D.ch,i*T+T/2,j*T+T/2+1);g.font='bold 22px sans-serif';g.globalAlpha=1});
  const put=(x,y,ch,c)=>{const i=x-ox,j=y-oy;if(i<-1||j<-1||i>VW||j>VH)return;g.fillStyle=c;g.fillText(ch,i*T+T/2,j*T+T/2)};
  S.walls.filter(w=>seeing(w.x,w.y)).forEach(w=>{const i=w.x-ox,j=w.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;g.fillStyle='#3a4658';g.fillRect(i*T,j*T,T,T);put(w.x,w.y,'壁',C.ally)});
  (S.objs||[]).forEach(o=>{const i=o.x-ox,j=o.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;g.globalAlpha=o.dim?0.45:1;g.fillStyle='#3a4658';g.fillRect(i*T,j*T,T,T);g.fillStyle=(OBJCOL[o.col]||'#8a97ab');if(!(o.kind==='statue'&&o.m&&drawSpr({x:o.x,y:o.y,dir:'d'},o.m.sk||o.m.n,ox,oy)))g.fillText(o.ch,i*T+T/2,j*T+T/2);g.globalAlpha=1});
  S.items.filter(q=>seeing(q.x,q.y)).forEach(q=>{const im=UI_IMG[q.k==='bag'?'bag':'i_'+q.k];if(im&&im.complete&&im.naturalWidth){const i=q.x-ox,j=q.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;const sc=Math.min(T*.736/im.naturalWidth,T*.736/im.naturalHeight),w=im.naturalWidth*sc,h=im.naturalHeight*sc;g.save();g.shadowColor='rgba(0,0,0,.95)';g.shadowBlur=5;g.shadowOffsetX=0;g.shadowOffsetY=3;g.drawImage(im,i*T+(T-w)/2,j*T+(T-h)/2+1,w,h);g.shadowBlur=2;g.shadowOffsetY=1;g.drawImage(im,i*T+(T-w)/2,j*T+(T-h)/2+1,w,h);g.restore()}else put(q.x,q.y,ITEMS[q.k].ch,C.item)});
  S.items.filter(q=>q.inf&&seeing(q.x,q.y)).forEach(q=>{const i=q.x-ox,j=q.y-oy;if(i<-1||j<-1||i>VW||j>VH)return;g.save();g.font='bold 11px sans-serif';g.textAlign='right';g.textBaseline='alphabetic';g.lineWidth=3;g.strokeStyle='rgba(0,0,0,.85)';g.fillStyle='#ffe08a';g.strokeText('∞',(i+1)*T-2,(j+1)*T-2);g.fillText('∞',(i+1)*T-2,(j+1)*T-2);g.restore()});
  S.mon.filter(seeMon).forEach(o=>base(o,ox,oy,o.var?VAR[o.var].col:'#ef6b5e'));
  S.allies.forEach(a=>base(a,ox,oy,'#c792ea'));
  base(p,ox,oy,'#ffffff');
  S.mon.filter(seeMon).forEach(o=>{mark('seen',o.sk||o.n);if(!drawSpr(o,o.spk||o.sk||o.n,ox,oy))put(o.x,o.y,o.ch,o.freeze>0?'#6ec6ff':o.conf>0?'#f5a623':C.foe)});
  S.allies.forEach(a=>{if(!drawSpr(a,skey(a),ox,oy,C.ally))put(a.x,a.y,a.ch,a.freeze>0?'#6ec6ff':a.conf>0?'#f5a623':C.ally)});
  g.restore();
  drawLight(p,ox,oy);
  drawParticles();
  g.save();g.translate(CAMX,CAMY);
  drawHero(p,ox,oy);
  drawFx(ox,oy);
  g.restore();
  if(performance.now()<ANIM_UNTIL&&!rafP){rafP=true;requestAnimationFrame(()=>{rafP=false;renderLite()})}
  if(RLITE)return;
  document.getElementById('hud').innerHTML=
    `<img class="hf" alt="" src="${(()=>{const q=p.hp/p.max;return q>0.6?HERO.smile:q>0.3?HERO.worry:HERO.shock})()}"><div class="hm"><div class="r"><b>${S.home?ROOMS[S.room].name:`ステージ${S.dun||1} ${S.boss?'ボス部屋':S.floor+'F'}`}</b><span class="sp"></span><span>Lv ${p.lv}</span><span class="sp"></span><span>HP ${p.hp}/${p.max}</span><span class="bar hb"><i style="width:${p.hp/p.max*100}%;background:var(--foe)"></i></span></div><div class="r"><span>満腹 ${p.food}%</span><span class="bar hb"><i style="width:${p.food}%;background:var(--item)"></i></span>${p.freeze>0?'<span class="st">凍結</span>':''}${p.bleed>0?'<span class="st">出血</span>':''}${p.conf>0?'<span class="st">混乱</span>':''}</div></div>`;
  const lg=S.log.slice(-2);document.getElementById('log').innerHTML=lg.map((t,i)=>`<div style="color:${i===lg.length-1?'#ffffff':'#b4bbc6'}">${t}</div>`).join('');
  renderAllyPanel();
  const fb=document.querySelector('#menubar [data-v="fuse"]');if(fb)fb.classList.toggle('lock',!fuseUnlocked());
  const stg=document.getElementById('stage'),hv=p.food>20?0:0.3+0.5*(1-p.food/20);
  stg.style.setProperty('--hv',hv.toFixed(2));fitStage();stg.classList.toggle('starving',p.food<=0);syncScene();
  const bag=document.getElementById('bag');bag.innerHTML='';
  document.getElementById('baglabel').innerHTML=`${uic('bag',16)} 持ち物 ${p.bag.length}/${bagMax()}`;
  for(let i=0;i<Math.max(bagMax(),p.bag.length);i++){
    const k=p.bag[i],b=document.createElement('button');
    b.className='slot2'+(k?'':' empty')+(k&&S.selIdx===i?' sel':'');
    if(k){
      b.innerHTML=`${UI_ICO['i_'+k]?uic('i_'+k,32):`<b>${ITEMS[k].ch}</b>`}<small>${ITEMS[k].s||ITEMS[k].n}</small>`;
      b.setAttribute('aria-label',ITEMS[k].n);if(ITEMS[k].eq&&eqOn(k)){b.classList.add('eqd');b.insertAdjacentHTML('beforeend','<i class="eqm">装備中</i>')}
      b.onclick=()=>{S.selIdx=S.selIdx===i?null:i;render()};
    }else{b.disabled=true;b.setAttribute('aria-label','空きスロット')}
    bag.appendChild(b);
  }
  const ia=document.getElementById('itemact');ia.innerHTML='';
  const mkb=(t,f)=>{const b=document.createElement('button');b.textContent=t;b.onclick=f;ia.appendChild(b)};
  if(S.selIdx!=null&&p.bag[S.selIdx]){
    const i=S.selIdx;ia.append(ITEMS[p.bag[i]].n+'：');
    const kk=p.bag[i];
    if(ITEMS[kk].eq)mkb(eqOn(kk)?'外す':'装備する',()=>toggleEquip(i));else mkb('使う',()=>useItem(i));
    mkb('置く',()=>dropItem(i));
  }
}

document.addEventListener('pointerdown',e=>{
  if(typeof S==='undefined'||!S||S.selIdx==null)return;
  if(e.target.closest&&e.target.closest('#bag,#itemact'))return;
  S.selIdx=null;render();
},true);
const pad=document.getElementById('pad');
let hold=null;
const stopHold=()=>{clearTimeout(hold);clearInterval(hold);hold=null};
addEventListener('blur',stopHold);
[['↖',-1,-1],['↑',0,-1],['↗',1,-1],['←',-1,0],['待',0,0],['→',1,0],['↙',-1,1],['↓',0,1],['↘',1,1]].forEach(([t,dx,dy])=>{
  const b=document.createElement('button');const AR={'↖':-45,'↑':0,'↗':45,'←':-90,'→':90,'↙':-135,'↓':180,'↘':135};if(AR[t]!==undefined)b.innerHTML='<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style="transform:rotate('+AR[t]+'deg)"><path d="M5 15.5l7-7.5 7 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';b.setAttribute('aria-label',t);if(t==='待')b.innerHTML='<svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true"><g transform="rotate(-12 10 16)"><ellipse cx="10" cy="19" rx="4.2" ry="6"/><ellipse cx="6.6" cy="10.2" rx="1.5" ry="1.9"/><ellipse cx="9.4" cy="8.4" rx="1.5" ry="2"/><ellipse cx="12.6" cy="8.6" rx="1.4" ry="1.8"/><ellipse cx="15" cy="10.6" rx="1.3" ry="1.6"/></g><g transform="rotate(12 22 12)"><ellipse cx="22" cy="14" rx="4.2" ry="6"/><ellipse cx="18.6" cy="5.4" rx="1.4" ry="1.7"/><ellipse cx="21.2" cy="3.6" rx="1.5" ry="2"/><ellipse cx="24.4" cy="3.8" rx="1.5" ry="2"/><ellipse cx="27" cy="5.8" rx="1.4" ry="1.8"/></g></svg>';else if(AR[t]===undefined)b.textContent=t;b.setAttribute('aria-label',t==='待'?'待機':t);b.onclick=e=>{if(e.detail===0)act(dx,dy)};
  b.onpointerdown=e=>{
    e.preventDefault();b.classList.add('pr');stopHold();act(dx,dy);
    if(!(dx||dy))return;
    hold=setTimeout(()=>{hold=setInterval(()=>S.over?stopHold():act(dx,dy,false,true),110)},280);
  };
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>{b.classList.remove('pr');stopHold()}));
  b.oncontextmenu=e=>e.preventDefault();
  pad.appendChild(b);
});
document.getElementById('again').onclick=backToMenu;
const KEYS={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0],y:[-1,-1],u:[1,-1],b:[-1,1],n:[1,1],' ':[0,0],'.':[0,0]};
addEventListener('keydown',e=>{const k=KEYS[e.key];if(k&&!document.getElementById('v-game').hidden){e.preventDefault();act(k[0],k[1],false,e.repeat)}});

/* ===== 中断セーブ（ダンジョン攻略の途中経過を自動保存） =====
   ・1秒ごと／アプリを閉じる・裏に回る時に自動保存。死亡・クリア・脱出で自動削除。
   ・保存形式は {v:バージョン, t:保存時刻, S:状態}。仕様を変えたら RUN_VER を上げる。 */
const RUN_KEY='yokaiRun',RUN_VER=1;
let runSig='',RESETTING=false;
const RUN_SKIP=k=>k[0]==='_'||k==='busy'||k==='fx'||k==='ask'||k==='lock'||k==='hitT';
const inRunNow=()=>!!S&&!S.home&&!S.over;
function validRun(s){
  return !!s&&typeof s==='object'&&!s.home&&!s.over&&!!s.p&&Array.isArray(s.m)&&s.m.length===H&&Array.isArray(s.m[0])&&s.m[0].length===W
    &&Array.isArray(s.mon)&&Array.isArray(s.items)&&Array.isArray(s.allies)&&!!s.stairs&&Array.isArray(s.p.bag)
    &&Number.isFinite(s.p.x)&&Number.isFinite(s.p.y)&&Number.isFinite(s.p.hp)&&Number.isFinite(s.p.max)
    &&Number.isInteger(s.dun)&&s.dun>=1&&s.dun<=DUNGEONS.length&&Number.isInteger(s.floor)&&s.floor>=1&&s.floor<=DUNGEONS[s.dun-1].floors;
}
function saveRun(force){
  if(RESETTING||!inRunNow())return false;
  const sig=[S.dun,S.floor,S.turn,S.p.hp,S.p.food,S.p.lv,S.p.bag.join(),S.allies.length,S.mon.length].join('|');
  if(!force&&sig===runSig)return true;
  try{localStorage.setItem(RUN_KEY,JSON.stringify({v:RUN_VER,t:Date.now(),S},(k,v)=>RUN_SKIP(k)?undefined:v));runSig=sig;return true}
  catch(e){return false}
}
function clearRun(){try{localStorage.removeItem(RUN_KEY)}catch(e){}runSig=''}
function peekRun(){
  let raw=null;try{raw=localStorage.getItem(RUN_KEY)}catch(e){return null}
  if(!raw)return null;
  try{const o=JSON.parse(raw);return(o&&o.v===RUN_VER&&validRun(o.S))?o:null}
  catch(e){clearRun();return null}   // 壊れたデータは捨てる
}
const runLabel=o=>`ステージ${o.S.dun}・${o.S.boss?'ボス部屋':o.S.floor+'F'}・Lv${o.S.p.lv}`;
function loadRun(){
  const o=peekRun();if(!o)return false;
  S=o.S;S.fx=[];S.busy=false;S.ask=false;S.lock=false;
  document.getElementById('stairq').hidden=true;document.getElementById('lvq').hidden=true;
  document.getElementById('again').style.display='none';
  allyOpen=false;runSig='';
  S.log=['冒険を再開した。'];
  show('game');
  if(S.p.snare>0)autoSnare();
  syncScene();
  return true;
}
/* 確認ダイアログ */
function confirmDlg(msg,yes,yl,nl,no){
  stopHold();
  const o=document.getElementById('cfm'),y=document.getElementById('cfmYes'),n=document.getElementById('cfmNo');
  document.getElementById('cfmt').innerHTML=msg;y.textContent=yl||'OK';n.textContent=nl||'やめる';
  const close=()=>{o.hidden=true;y.onclick=n.onclick=null};
  y.onclick=()=>{close();if(yes)yes()};n.onclick=()=>{close();if(no)no()};o.hidden=false;
}
/* 途中データがあるときに「新しく始める」前に確認する */
function guardRun(go,cancel){
  if(peekRun())confirmDlg('冒険の途中データがあります。<br>新しく始めると、その続きは遊べなくなります。',()=>go(),'新しく始める','やめる',cancel);
  else go();
}
/* マップ左上のメニューボタン：冒険中なら保存して中断、倉庫なら戻るだけ */
document.getElementById('menubtn').onclick=()=>{
  stopHold();
  if(!S)return;
  if(S.home){show('menu');return}
  if(S.over){backToMenu();return}
  confirmDlg('冒険を中断してメニューに戻りますか？<br><small>ここまでの状態は自動で保存され、<br>「つづきから」で再開できます。</small>',()=>{
    if(saveRun(true))show('menu');
    else confirmDlg('保存できませんでした。<br><small>ブラウザの保存機能が無効かもしれません。<br>このまま戻ると続きから遊べません。</small>',()=>show('menu'),'それでも戻る','やめる');
  },'中断する','続ける');
};
/* 自動保存 */
setInterval(()=>{try{
  if(!S||S.home)return;
  if(S.over){clearRun();return}
  if(!S.busy&&!S.ask)saveRun();
}catch(e){}},1000);
['pagehide','visibilitychange'].forEach(ev=>addEventListener(ev,()=>{try{if(ev==='pagehide'||document.hidden)saveRun(true)}catch(e){}}));
/* 設定画面：全データ初期化 */
(function(){const b=document.getElementById('setreset');if(!b)return;
  b.onclick=()=>confirmDlg('すべてのセーブデータ<br><small>（進行状況・仲間・図鑑・倉庫・冒険の途中データ）</small><br>を消します。元に戻せません。',()=>{
    RESETTING=true;   // 閉じる時の自動保存で復活させない
    try{Object.keys(localStorage).filter(k=>k.indexOf('yokai')===0).forEach(k=>localStorage.removeItem(k))}catch(e){}
    location.reload();
  },'消す','やめる');
})();

/* ===== スマホ専用まわり ===== */
addEventListener('gesturestart',e=>e.preventDefault());            // iOSのピンチ拡大を止める
addEventListener('contextmenu',e=>e.preventDefault());             // 長押しメニューを出さない
document.addEventListener('pointerdown',function f(){document.removeEventListener('pointerdown',f);
  try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('portrait').catch(()=>{})}catch(e){}},{once:true});
(function(){const u=document.getElementById('gateurl'),c=document.getElementById('gatecopy');if(!u)return;
  const url=location.origin==='null'||location.protocol==='file:'?location.href.split('?')[0]:location.origin+location.pathname;
  u.textContent=url;
  if(c)c.onclick=()=>{try{navigator.clipboard.writeText(url).then(()=>{c.textContent='コピーしました'})}catch(e){}};
})();

goHome(BAG);renderDex();renderRoster();show('menu');
if(!introPlayed())playStory(null,'intro');
