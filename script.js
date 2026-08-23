// ARTISTRY ALCHEMY — replace this with the artist's WhatsApp number before publishing.
// Example: 919876543210 (country code, no +, spaces, or dashes)
const WHATSAPP_NUMBER = '919134499623';
const EMAIL = 'ajeet700169@gmail.com';
const works = {
  unspoken:{title:'Unspoken',category:'Figurative Art — Realism',medium:'Graphite & charcoal on paper',size:'A3 — 29.7 × 42 cm',year:'2025',image:'assets/IMG-20260823-WA0007.jpg',description:'Unspoken is a figurative study exploring introspection, vulnerability, and the quiet weight of emotion. The concealed face and folded posture create a feeling of withdrawal, while the relaxed placement of the hands and flowing fabric offer a delicate contrast between tension and stillness. Rendered in graphite and charcoal, the work uses subtle tonal transitions, carefully observed anatomy, and expressive linework to convey emotion without revealing a fixed narrative. Rather than depicting one specific moment or feeling, Unspoken leaves space for interpretation—a quiet reflection of experiences that are felt deeply but can remain difficult to articulate.'},
  quiet:{title:'Quiet Strength',category:'Wildlife & Animal Portraits — Realism',medium:'Graphite & charcoal on paper',size:'A3 — 29.7 × 42 cm',year:'2025',image:'assets/IMG-20260823-WA0005.jpg',description:'A detailed graphite and charcoal study of an elephant, created with careful attention to texture, expression, and natural form. The interplay of deep shadows and delicate pencil marks captures the animal’s quiet presence while keeping the composition simple and understated. Quiet Strength reflects a form of power that needs no display—steady, grounded, and quietly enduring.'},
  untamed:{title:'Untamed',category:'Wildlife & Animal Portraits — Realism',medium:'Graphite & charcoal on paper',size:'A3 — 29.7 × 42 cm',year:'2025',image:'assets/IMG-20260823-WA0006.jpg',description:'Untamed is a detailed graphite and charcoal study portraying the raw intensity and commanding presence of a tiger in motion. The artwork focuses on the intricate patterns of its coat, the strength of its form, and the piercing expression that conveys instinct and authority. Through layered graphite work, controlled tonal contrasts, and meticulous attention to texture, the piece explores the relationship between movement and stillness. The monochromatic palette lets the tiger’s natural markings and expression remain the central focus. The work is an exploration of wildness in its most unrestrained form—powerful, instinctive, and unapologetically free.'},
  'coiled-silence':{title:'Coiled Silence',category:'Wildlife Study — Realism',medium:'Graphite & charcoal on paper',size:'Details on request',year:'2025',image:'assets/IMG-20260823-WA0012.jpg',description:'Coiled Silence is a close graphite and charcoal study of a snake at rest. Its looping form creates a quiet rhythm across the page, while concentrated shadows and textured marks bring attention to the scales, weight, and alert stillness of the animal. The work considers the beauty in what is often misunderstood: a presence that is calm, watchful, and entirely self-contained.'},
  'portrait-study':{title:'In Focus',category:'Portrait Realism',medium:'Graphite & charcoal on paper',size:'Details on request',year:'2025',image:'assets/IMG-20260823-WA0011.jpg',description:'In Focus is a portrait study built around directness and detail. Against a deep charcoal field, the face emerges through controlled highlights, carefully layered tones, and close observation of skin, hair, and expression. The work holds a quiet intensity—an encounter with a gaze that feels immediate, human, and impossible to look away from.'},
  einstein:{title:'In Thought',category:'Portrait Realism',medium:'Graphite & charcoal on paper',size:'Details on request',year:'2025',image:'assets/IMG-20260823-WA0009.jpg',description:'In Thought is a detailed graphite and charcoal portrait study of Albert Einstein. The work is shaped through fine tonal shifts, textured marks, and careful attention to the character carried in the eyes, hands, and weathered features. More than a likeness, it is an observation of curiosity, reflection, and a life visibly lived through ideas.'}
};
function waLink(title='a custom artwork'){const message=`Hello Nandini, I am interested in ${title}. Please share the details, availability, and delivery information.`; return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : `mailto:${EMAIL}?subject=${encodeURIComponent('Artistry Alchemy Enquiry')}&body=${encodeURIComponent(message)}`;}
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('whatsappLink').href=waLink('an artwork or commission');
document.querySelectorAll('.whatsapp').forEach(el=>{if(el.id!=='whatsappLink')el.href=waLink('a custom artwork')});
const modal=document.getElementById('artModal');
function openWork(key){const w=works[key]; modal.classList.toggle('snake-mode', key === 'coiled-silence'); document.querySelectorAll('.snake-sculpture,.shards').forEach(el=>el.remove()); if(key === 'coiled-silence'){ const snake=document.createElement('div'); snake.className='snake-sculpture'; snake.innerHTML='<span></span>'.repeat(12); document.querySelector('.modal-image').appendChild(snake); const shards=document.createElement('div'); shards.className='shards'; shards.innerHTML=Array.from({length:22},(_,i)=>`<i style="--x:${(i*37)%100}%;--y:${(i*61)%95}%;--tx:${(i%2?1:-1)*(20+i*6)}px;--ty:${-40-(i*9)}px;--d:-${i*.16}s"></i>`).join(''); modal.appendChild(shards); }document.getElementById('modalImg').src=w.image;document.getElementById('modalImg').alt=w.title;document.getElementById('modalTitle').textContent=w.title;document.getElementById('modalCategory').textContent=w.category;document.getElementById('modalMedium').textContent=w.medium;document.getElementById('modalSize').textContent=w.size;document.getElementById('modalYear').textContent=w.year;document.getElementById('modalDescription').textContent=w.description;document.getElementById('modalWhatsapp').href=waLink(`the artwork “${w.title}”`);document.getElementById('modalEmail').href=`mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry: '+w.title)}&body=${encodeURIComponent('Hello Nandini,\n\nI am interested in the artwork “'+w.title+'”. Please share its availability and delivery details.\n\nThank you.')}`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
document.querySelectorAll('.art-card').forEach(card=>card.querySelector('button').addEventListener('click',()=>openWork(card.dataset.art)));
function closeModal(){modal.classList.remove('open','snake-mode');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}document.querySelector('.modal-close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// Small ambient graphite-dust effect. It is deliberately light and does not load external assets.
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let dots=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;dots=Array.from({length:Math.min(45,Math.floor(innerWidth/28))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.2+.25,v:Math.random()*.14+.03}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(230,228,222,.22)';dots.forEach(d=>{d.y-=d.v;if(d.y<0){d.y=canvas.height;d.x=Math.random()*canvas.width}ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}resize();draw();addEventListener('resize',resize);

// Cinematic cursor parallax for the opening scene.
const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');
hero.addEventListener('pointermove', e => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (e.clientX / innerWidth - .5) * 10, y = (e.clientY / innerHeight - .5) * 8;
  heroImage.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
});
hero.addEventListener('pointerleave', () => heroImage.style.transform = '');

// Gallery entrance: intentionally short, so visitors are never held on a loading screen.
const loader = document.getElementById('loader');
const pct = document.getElementById('loaderPct');
const enter = document.getElementById('enterSite');
let progress = 0;
const loading = setInterval(() => { progress = Math.min(100, progress + Math.ceil(Math.random()*14)); pct.textContent = String(progress).padStart(2,'0') + '%'; if(progress === 100){ clearInterval(loading); enter.disabled=false; enter.classList.add('ready'); enterText.textContent='HOLD TO ENTER'; } }, 95);
function leaveLoader(){loader.classList.add('leave');document.body.classList.remove('loading');setTimeout(()=>loader.remove(),1000)}

// Do not trap a returning visitor: Enter works immediately once visuals are ready.
// Public gallery sync: artworks published through admin.html appear here automatically.
async function loadPublishedArtworks(){
  const configured = window.SUPABASE_URL && !window.SUPABASE_URL.startsWith('PASTE_');
  if(!configured || !window.supabase) return;
  const client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  const {data, error} = await client.from('artworks').select('*').order('created_at',{ascending:false});
  if(error || !data) return;
  const grid = document.querySelector('.art-grid');
  data.forEach((item,index)=>{
    const key='remote-'+item.id;
    works[key]={title:item.title,category:item.category,medium:item.medium||'Graphite & charcoal on paper',size:item.dimensions||'Details on request',year:item.year||'',image:item.image_url,description:item.description||''};
    const card=document.createElement('article');card.className='art-card reveal';card.dataset.art=key;
    card.innerHTML=`<button class="art-open"><img src="${item.image_url}" alt="${item.title}"><span class="art-overlay"></span><span class="art-label"><small>${String(index+4).padStart(2,'0')} / ${item.category}</small><b>${item.title}</b><i>View artwork ↗</i></span></button>`;
    card.querySelector('button').addEventListener('click',()=>openWork(key));
    grid.appendChild(card); observer.observe(card);
  });
}
loadPublishedArtworks();
// Deliberate press-and-hold entrance for the immersive landing screen.
const enterText = document.getElementById('enterText');
let holdTimer;
function beginHold(){if(!enter.classList.contains('ready'))return;enter.classList.add('holding');enterText.textContent='ENTERING…';holdTimer=setTimeout(leaveLoader,900)}
function cancelHold(){clearTimeout(holdTimer);if(!loader.classList.contains('leave')){enter.classList.remove('holding');if(enter.classList.contains('ready'))enterText.textContent='HOLD TO ENTER';}}
enter.addEventListener('pointerdown',e=>{e.preventDefault();beginHold()});
enter.addEventListener('pointerup',cancelHold);enter.addEventListener('pointerleave',cancelHold);enter.addEventListener('pointercancel',cancelHold);
// On a phone, long-press opens the browser's copy/download menu. Use one deliberate tap instead.
loader.addEventListener('contextmenu', e => e.preventDefault());
enter.addEventListener('pointerdown', e => {
  if (e.pointerType === 'touch' && enter.classList.contains('ready')) { e.preventDefault(); leaveLoader(); }
});
// Scroll-responsive 3D gallery depth. Only a small transform is used to keep scrolling smooth.
let cardTick = false;
function animateCardsOnScroll(){
  cardTick=false;
  const mid=innerHeight/2;
  document.querySelectorAll('.art-card.visible .art-open').forEach((card,i)=>{
    const r=card.getBoundingClientRect(); const distance=(r.top+r.height/2-mid)/innerHeight;
    const tilt=Math.max(-5,Math.min(5,distance*-7 + (i%2?.7:-.7)));
    // A restrained, smooth gallery tilt: enough depth without turning the art away from the viewer.
    const spin=Math.max(-4,Math.min(4,distance * -5));
    card.style.setProperty('--tilt',tilt+'deg');
    card.style.setProperty('--spin',spin+'deg');
    card.style.setProperty('--lift',Math.max(-10,Math.min(10,-distance*12))+'px');
  });
}
addEventListener('scroll',()=>{if(!cardTick){cardTick=true;requestAnimationFrame(animateCardsOnScroll)}},{passive:true});
animateCardsOnScroll();
