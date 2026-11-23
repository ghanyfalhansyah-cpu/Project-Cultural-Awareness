/* =====================================================
   SCRIPT.JS  =  what the website DOES
   (menu clicks, changing pages, music, photo upload)
   The hero texts are in PART 1. Be careful: keep the quotes " " and commas.
   ===================================================== */

/* ===================================================
   PART 1: HERO DATA
   Names, birth/death and background texts. Edit the words inside the quotes only.
   =================================================== */
const H=[
{n:"Bung Tomo",full:"Sutomo",born:"3 Oct 1920, Surabaya",died:"7 Oct 1981, Arafah (during the Hajj)",role:"Radio orator and revolutionary leader",
 bio:["Sutomo, known as Bung Tomo, was born in Surabaya and worked as a journalist before the Japanese occupation ended. After Indonesia declared independence in 1945, he founded the Barisan Pemberontakan Rakyat Indonesia (BPRI), a people’s uprising group.","Through Radio Pemberontakan, he broadcast fiery speeches that urged ordinary people to resist the returning Allied and Dutch forces. His cries of “Merdeka atau mati” (freedom or death) became the emotional voice of the Battle of Surabaya.","He passed away in 1981 while performing the Hajj and is buried in Ngagel, Surabaya. He is officially recognized as a National Hero of Indonesia."]},
{n:"R.M.T. Ario Soerjo",full:"Raden Mas Tumenggung Ario Soerjo",born:"9 Jul 1898, Magetan",died:"10 Sep 1948, Ngawi area",role:"First Governor of East Java",
 bio:["Ario Soerjo came from a Javanese aristocratic family and had served in the colonial civil service, including as a regent, before independence. He became the first Governor of East Java in 1945.","On the eve of the battle, he rejected the British ultimatum that ordered Indonesians in Surabaya to surrender their weapons. That refusal helped set the course for the fighting of 10 November.","He was killed in September 1948 during the turmoil of the Madiun Affair. He was named a National Hero in 1964."]},
{n:"K.H. Hasyim Asy’ari",full:"Kiai Haji Muhammad Hasyim Asy’ari",born:"10 Feb 1871, Jombang",died:"25 Jul 1947",role:"Islamic scholar, founder of Nahdlatul Ulama",
 bio:["Hasyim Asy’ari was one of Indonesia’s most respected Islamic scholars. He founded the Tebuireng pesantren (Islamic boarding school) in Jombang in 1899 and co-founded Nahdlatul Ulama (NU) in 1926, which grew into one of the world’s largest Muslim organizations.","In October 1945 he issued the Resolution of Jihad, which declared that defending the newly independent republic was a religious duty. It energized thousands of santri and villagers and added moral force to the resistance in Surabaya.","He is recognized as a National Hero of Indonesia."]},
{n:"Mayjen Sungkono",full:"Major General Sungkono",born:"1911",died:"1977, Surabaya",role:"Commander of the Surabaya defense forces (BKR)",
 bio:["Sungkono was a military officer who became commander of the Badan Keamanan Rakyat (BKR), the people’s security force in Surabaya, after independence.","During the battle he coordinated the city’s defense against better-armed Allied troops. Bung Tomo later wrote that Sungkono calmly stayed at his headquarters until the last moments of the defense.","He later rose to the rank of major general and is remembered as a steady, disciplined commander."]},
{n:"Mayjen Moestopo",full:"Major General Prof. Dr. Moestopo",born:"13 Jun 1913, Kediri",died:"29 Sep 1986, Jakarta",role:"Dentist, military commander and educator",
 bio:["Moestopo trained as a dentist and served in the Japanese-sponsored PETA army. In Surabaya in 1945 he was among the commanders who confronted the arriving British forces, and he was known for a defiant, hardline stance toward them.","After the war he turned to education, founding a university in Jakarta that carries his name today.","He was named a National Hero in 2007, remembered both as a soldier and as an academic."]},
{n:"H.R. Mohammad Mangoendiprodjo",full:"Haji Raden Mohammad Mangoendiprodjo",born:"Not widely documented",died:"13 Dec 1988, Bandar Lampung",role:"Surabaya resistance leader and negotiator",
 bio:["Mangoendiprodjo was a leading Indonesian figure in Surabaya during the revolution. Accounts connect him to the tense talks with British forces in late October 1945.","He is described as being held hostage at the International Building during the incident in which British Brigadier Mallaby was killed, an event that triggered the major battle weeks later.","He survived the war and passed away in Bandar Lampung in 1988. Sources on his early life are limited, so details differ between accounts."]},
{n:"Abdul Wahab Saleh",full:"Abdul Wahab Saleh",born:"Not widely documented",died:"Not widely documented",role:"Photographer at Antara News Agency",
 bio:["Abdul Wahab Saleh was a photographer for the Antara news agency. He did not fight with weapons, but his camera preserved the visual record of the revolution in Surabaya.","He captured the flag-tearing incident at Hotel Yamato in September 1945, widely seen as a spark for the conflict, and photographed many scenes of the people’s resistance during the battle.","His images remain some of the most important historical evidence of how ordinary Surabaya residents stood up in 1945."]}
];

/* ===================================================
   PART 2: PHOTOS AND HIGHLIGHTS
   =================================================== */
/* PHOTOS: put image files in the same folder as this page and write each file name below, e.g. photo:"bungtomo.jpg". You can also use the Add photo button on each hero page. */
const P=[
{photo:"Bung_Tomo.jpg",key:["Founded the people’s uprising group BPRI","Rallied Surabaya through radio broadcasts","Became the voice of the 10 November battle"],legacy:"The fiery voice of Heroes’ Day."},
{photo:"Tumenggung ario suryo.png",key:["Served as the first Governor of East Java","Rejected the British ultimatum before the battle","Gave political backing to the resistance"],legacy:"Governor Suryo, a steadfast civilian leader."},
{photo:"Hasyim_Asy'ari.jpg",key:["Founded Tebuireng pesantren in 1899","Co-founded Nahdlatul Ulama in 1926","Issued the Resolution of Jihad in 1945"],legacy:"A scholar who united faith and nationhood."},
{photo:"mayjen sungkono.jpg",key:["Commanded the BKR forces in Surabaya","Coordinated the city’s defense","Stayed calm at headquarters to the end"],legacy:"A disciplined and steady commander."},
{photo:"Laksamana_Muda_Moestopo.jpg",key:["Confronted British forces in Surabaya","Served as a PETA-trained officer and dentist","Founded a university in Jakarta"],legacy:"Both a soldier and an educator."},
{photo:"hr_muhammad.jpg",key:["Took part in talks with British forces","Was held hostage in the Mallaby incident, per accounts","Survived the revolution"],legacy:"A resistance leader in Surabaya."},
{photo:"pahlawan.webp",key:["Worked as an Antara news photographer","Captured the Hotel Yamato flag incident","Documented the people’s resistance on camera"],legacy:"The eyes that preserved the story."}
];

/* ===================================================
   PART 3: TIMELINE (The battle page)
   =================================================== */
const TL=[["19 Sep 1945","Flag incident at Hotel Yamato","Residents tear the blue stripe off the Dutch flag, leaving the red and white. Photographer Abdul Wahab Saleh records the scene."],["22 Oct 1945","Resolution of Jihad","K.H. Hasyim Asy’ari and NU scholars declare that defending the republic is a religious duty."],["30 Oct 1945","Brigadier Mallaby is killed","The British commander dies in the fighting near the International Building, sharply raising tensions."],["9 Nov 1945","The ultimatum","Britain orders Indonesians to surrender their weapons. Governor Ario Soerjo rejects it."],["10 Nov 1945","The battle begins","Fighters and civilians, rallied by Bung Tomo’s broadcasts, resist for weeks. Indonesia now marks this day as Heroes’ Day."]];

/* ===================================================
   PART 4: SOURCES (links)
   =================================================== */
const SRC=[["Liputan6: 7 tokoh penting dalam Pertempuran Surabaya 10 November","https://www.liputan6.com/regional/read/5777909/7-tokoh-penting-dalam-pertempuran-surabaya-10-november"],["Metro TV News: 7 Tokoh Penting Pertempuran Surabaya 10 November 1945","https://www.metrotvnews.com/play/NA0CEmAa-7-tokoh-penting-pertempuran-surabaya-10-november-1945"],["detikJatim: 17 Pahlawan Indonesia Asal Jawa Timur","https://www.detik.com/jatim/budaya/d-7015777/17-pahlawan-indonesia-asal-jawa-timur"],["detikJatim: 4 Pahlawan Nasional yang Makamnya di Surabaya","https://www.detik.com/jatim/berita/d-7030353/4-pahlawan-nasional-yang-makamnya-di-surabaya"],["Wikipedia: Moestopo","https://en.wikipedia.org/wiki/Moestopo"],["UPN Veteran Jawa Timur repository: study on Colonel Sungkono","https://repository.upnjatim.ac.id/47559/2/BAB%201.pdf"],["Wikipedia: National Hero of Indonesia","https://en.wikipedia.org/wiki/National_hero_of_Indonesia"],
["Radar Surabaya: Mengenal Abdul Wahab Saleh, Wartawan dan Fotografer Peristiwa Perobekan Bendera Belanda di Hotel Yamato Surabaya","https://radarsurabaya.jawapos.com/surabayapedia/2504080024/mengenal-abdul-wahab-saleh-wartawan-dan-fotografer-peristiwa-perobekan-bendera-belanda-di-hotel-yamato-surabaya"],
["Ensiklopedia Sejarah Indonesia (Kemenbud): Sungkono","https://esi.kemenbud.go.id/wiki/Sungkono"],
["JPNN: Pimpinan Pertempuran 10 November Raih Gelar Pahlawan Nasional","https://m.jpnn.com/news/pimpinan-pertempuran-10-november-raih-gelar-pahlawan-nasional"]];
/* Photo credits: index order = hero order. Use null when there is no credit yet. */
const PC=[
["Alex Mendur (also Alex Mendoer); uploaded by fr:Utilisateur:Inconnu. Public domain, via Wikimedia Commons","https://commons.wikimedia.org/wiki/File:Bung_Tomo.jpg"],
["Wikimedia Commons file Ario_Soerjo.jpg (see the file page for author and license)","https://commons.wikimedia.org/wiki/File:Ario_Soerjo.jpg"],
["National Information and Communication Agency, Republic of Indonesia. Public domain, via Wikimedia Commons","https://commons.wikimedia.org/wiki/File:Hasyim_Asy%27ari.jpg"],
null,
["Komandan Komando Pembinaan Doktrin, Pendidikan dan Latihan Angkatan Laut. Public domain, via Wikimedia Commons","https://commons.wikimedia.org/wiki/File:Laksamana_Muda_Moestopo.jpg"],
null,
null
];;
const HS=[[0,3],[0,2],[0,1,6],[0,5,8,9],[0,4],[0,1],[0,1,7]];
const $=id=>document.getElementById(id);
const mem={};for(let i=0;i<7;i++){try{const u=localStorage.getItem("ph"+i);if(u)mem[i]=u}catch(e){}}

/* ===================================================
   PART 5: PAGES
   Each function below builds one page: home, heroes, battle, detail, sources.
   =================================================== */
function media(i){const s=mem[i]||P[i].photo;if(s)return `<img class="m" src="${s}" alt="${H[i].n}">`;
const hu=i*47+5;return `<svg class="m" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${H[i].n}, photo not added yet"><rect width="100" height="125" fill="hsl(${hu} 40% 84%)"/><circle cx="50" cy="48" r="19" fill="hsl(${hu} 30% 64%)"/><path d="M8 125c0-34 19-50 42-50s42 16 42 50z" fill="hsl(${hu} 30% 64%)"/></svg>`}
const areas=["a","b","c","d","e","f","g"];
function home(){return `<section class="hero"><p>Surabaya, 10 November 1945</p><h1 class="disp">Seven voices of the battle</h1><p class="s">A leader, a cleric, commanders, an orator and a photographer. Together, they carried a city through its hardest days.</p><button class="cta" data-go="heroes">Meet the heroes</button></section>
<div class="mos">${H.map((h,i)=>`<button class="t" style="grid-area:${areas[i]}" data-go="h${i+1}" aria-label="${h.n}">${media(i)}<span class="nm">${h.n.replace(/^(Mayjen|R\.M\.T\.|K\.H\.|H\.R\.) /,"")}</span></button>`).join("")}</div>
<div class="wrap"><h2 class="disp">Why Heroes’ Day</h2><p class="lead">Every 10 November, Indonesia remembers the Battle of Surabaya. The seven people here came from very different walks of life, yet each added something the city needed: leadership, faith, command, a voice, or a witness.</p><button class="up" data-go="battle">See how the battle unfolded</button></div>`}
function heroes(){return `<div class="wrap"><h2 class="disp">The heroes</h2><div class="gr">${H.map((h,i)=>`<button class="c" data-go="h${i+1}"><div class="ph">${media(i)}</div><h3>${h.n}</h3><p>${h.role}</p></button>`).join("")}</div></div>`}
function battle(){return `<div class="wrap"><h2 class="disp">The battle</h2><p class="lead">Five moments that led to 10 November 1945.</p><ol class="tl">${TL.map(t=>`<li><b>${t[0]}</b><strong>${t[1]}</strong><br>${t[2]}</li>`).join("")}</ol></div>`}
function detail(i){const h=H[i],p=P[i];return `<div class="wrap"><div class="d"><div><div class="ph">${media(i)}</div>${P[i].photo&&PC[i]?`<p class="cap">Photo: <a href="${PC[i][1]}" target="_blank" rel="noopener noreferrer">${PC[i][0]}</a></p>`:""}<button class="up" data-up="${i}">${mem[i]?"Change photo":"Add photo"}</button>${mem[i]?` <button class="up" data-rm="${i}">Remove</button>`:""}</div>
<div><h2 class="disp">${h.n}</h2><p class="full">${h.full}</p><span class="role">${h.role}</span>
<div class="vit"><div><span>Born</span>${h.born}</div><div><span>Died</span>${h.died}</div></div>
<h4>What defined them</h4><ul class="kp">${p.key.map(k=>`<li>${k}</li>`).join("")}</ul>
<h4>Background</h4><div class="bio">${h.bio.map(t=>`<p>${t}</p>`).join("")}</div><div class="leg">${p.legacy}</div>
<h4>Sources</h4><div class="srcs">${HS[i].map(k=>`<a href="${SRC[k][1]}" target="_blank" rel="noopener noreferrer">${SRC[k][0].split(":")[0]}</a>`).join("")}</div>
<div class="quiz" id="qz"></div><div class="pn"><button data-go="h${(i+6)%7+1}">Previous</button><button data-go="h${(i+1)%7+1}">Next</button></div></div></div></div>`}
function sources(){return `<div class="wrap"><h2 class="disp">Sources</h2><p class="lead">Profiles and the timeline draw on these Indonesian press reports and references.</p><ul class="sl">${SRC.map(x=>`<li>${x[0].split(": ")[1]||x[0]}<small>${x[0].split(": ")[0]}</small><a href="${x[1]}" target="_blank" rel="noopener noreferrer">${x[1]}</a></li>`).join("")}</ul><h4>Photo credits</h4><ul class="sl">${PC.map((c,i)=>c?`<li>${H[i].n}<small>${c[0]}</small><a href="${c[1]}" target="_blank" rel="noopener noreferrer">${c[1]}</a></li>`:"").join("")}</ul><p class="lead">Some dates, such as those for K.H. Hasyim Asy’ari, and some background details come from general historical references rather than the pages above. Please check official biographies before using them for schoolwork or publication.</p></div>`}

/* ===================================================
   PART 8: QUIZ + CONFETTI
   One question per hero. In "a", the FIRST answer is the correct one
   (the page shuffles them). "why" is the explanation shown after a correct answer.
   =================================================== */
const Q=[
{q:"How did Bung Tomo rally the people of Surabaya?",a:["Through radio broadcasts","Through postal letters","Through theatre plays","Through mountain drums"],why:"Through Radio Pemberontakan, his fiery speeches urged ordinary people to resist."},
{q:"Which office did Ario Soerjo hold in 1945?",a:["First Governor of East Java","Mayor of Surabaya","Commander of the BKR","Minister of Defense"],why:"He became the first Governor of East Java and rejected the British ultimatum."},
{q:"What did K.H. Hasyim Asy’ari issue in October 1945?",a:["The Resolution of Jihad","The Youth Pledge","The Jakarta Charter","The Proclamation of Independence"],why:"The Resolution of Jihad declared that defending the republic was a religious duty."},
{q:"Which force did Sungkono command in Surabaya?",a:["The BKR, the people’s security force","The Dutch KNIL army","The Japanese Kempeitai","The British Allied army"],why:"Sungkono commanded the BKR and coordinated the city’s defense."},
{q:"What was Moestopo trained as?",a:["A dentist","An architect","A radio engineer","A ship captain"],why:"He trained as a dentist, served in PETA, and later founded a university in Jakarta."},
{q:"In which incident is Mangoendiprodjo said to have been held hostage?",a:["The incident in which Brigadier Mallaby was killed","The Madiun Affair","The Bandung Sea of Fire","The reading of the Proclamation"],why:"Accounts say he was held at the International Building during that incident."},
{q:"What did Abdul Wahab Saleh photograph in September 1945?",a:["The flag-tearing at Hotel Yamato","The signing of a peace treaty","The arrival of British warships","The opening of a university"],why:"His camera recorded the flag-tearing at Hotel Yamato on 19 September 1945."}
];
function initQuiz(i){const d=Q[i],box=$("qz");if(!box)return;
const opts=d.a.map((t,j)=>({t,ok:j===0})).sort(()=>Math.random()-.5);
box.innerHTML=`<h4>Quick quiz</h4><p class="qq">${d.q}</p><div class="qo">${opts.map(o=>`<button class="qb" data-ok="${o.ok?1:0}">${o.t}</button>`).join("")}</div><p class="qf" id="qf" aria-live="polite"></p>`;
box.querySelectorAll(".qb").forEach(b=>b.onclick=()=>{
if(box.dataset.done)return;
if(b.dataset.ok==="1"){box.dataset.done="1";b.classList.add("ok");box.querySelectorAll(".qb").forEach(x=>x.disabled=true);$("qf").textContent="Correct! "+d.why;confetti()}
else{b.classList.add("no");b.disabled=true;$("qf").textContent="Not quite. Try another answer."}})}
function confetti(){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const c=document.createElement("canvas");c.className="cf";c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);
const x=c.getContext("2d"),cols=["#c9574d","#cfa75e","#fff3b0","#e8a598","#7aa874","#5b8fb9"];
const ps=Array.from({length:140},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.4,w:6+Math.random()*6,h:8+Math.random()*8,vx:-2+Math.random()*4,vy:2+Math.random()*4,r:Math.random()*6,vr:-.2+Math.random()*.4,c:cols[Math.random()*cols.length|0]}));
let t=0;(function f(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.05;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.w/2,-p.h/2,p.w,p.h);x.restore()});if(++t<200)requestAnimationFrame(f);else c.remove()})()}

/* ===================================================
   PART 6: PAGE SWITCHING AND BUTTONS
   =================================================== */
function route(){const r=(location.hash||"#home").slice(1);const m=/^h([1-7])$/.exec(r);
$("v").innerHTML=m?detail(+m[1]-1):r==="heroes"?heroes():r==="battle"?battle():r==="sources"?sources():home();
if(m)initQuiz(+m[1]-1);const k=m?"heroes":r;document.querySelectorAll(".menu button").forEach(b=>b.classList.toggle("on",b.dataset.go===k));
$("mn").classList.remove("open");$("bg").setAttribute("aria-expanded","false");window.scrollTo(0,0);
$("v").style.animation="none";void $("v").offsetWidth;$("v").style.animation=""}
let tgt=0;
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){location.hash=g.dataset.go;return}
const u=e.target.closest("[data-up]");if(u){tgt=+u.dataset.up;$("fi").click();return}
const x=e.target.closest("[data-rm]");if(x){const i=+x.dataset.rm;delete mem[i];try{localStorage.removeItem("ph"+i)}catch(er){}route()}});
$("bg").onclick=()=>{const o=$("mn").classList.toggle("open");$("bg").setAttribute("aria-expanded",o)};
$("fi").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,700/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);const u=c.toDataURL("image/jpeg",.82);mem[tgt]=u;try{localStorage.setItem("ph"+tgt,u)}catch(er){}route()};im.src=r.result};r.readAsDataURL(f);e.target.value=""};

/* ===================================================
   PART 7: BACKGROUND MUSIC
   =================================================== */
/* MUSIC: leave MUSIC_FILE empty to play the built-in soft melody. To use your own song, put the file in the same folder and write its name, e.g. const MUSIC_FILE="musik.mp3"; */
const MUSIC_FILE="";
let au=null,ctx=null,timer=null,on=false,step=0;
const NOTES=[261.63,293.66,329.63,392,440,523.25,440,392,329.63,293.66];
function tone(f,t,d,v){const o=ctx.createOscillator(),g=ctx.createGain();o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.4);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+d+.05)}
function tick(){const t=ctx.currentTime+.05;tone(NOTES[step%NOTES.length],t,2.6,.06);if(step%4===0)tone(130.81,t,4,.05);step++}
function startMusic(){if(MUSIC_FILE){if(!au){au=new Audio(MUSIC_FILE);au.loop=true;au.volume=.5}au.play().catch(()=>{});return}const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;if(!ctx)ctx=new AC();ctx.resume();tick();timer=setInterval(tick,1800)}
function stopMusic(){if(au)au.pause();clearInterval(timer);timer=null;if(ctx)ctx.suspend()}
$("mu").onclick=()=>{on=!on;if(on)startMusic();else stopMusic();$("mu").setAttribute("aria-pressed",on);$("mu").textContent=on?"❚❚ Music":"♪ Music"};
window.addEventListener("hashchange",route);route();


