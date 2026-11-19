(()=>{const S=window.SITE,$=s=>document.querySelector(s);
let L=localStorage.getItem('lang')||(navigator.language.startsWith('en')?'en':'es');
const t=o=>o?(o[L]||o.es):'',u=k=>S.ui[L][k];
const img=(f,a,e='')=>`<img src="img/${f}" alt="${a}" loading="lazy" decoding="async"${e}>`;
const fig=f=>f;
function chrome(){document.documentElement.lang=L;$('#lang').textContent=L==='es'?'EN':'ES';
 document.querySelectorAll('[data-k]').forEach(e=>e.textContent=u(e.dataset.k));
 $('#nav').innerHTML=S.nav.map((k,i)=>`<a href="#${k}"><span>${S.num[k]}</span>${u(k)}</a>`).join('');
 S.nav.forEach((k,i)=>$('#'+k+' h2').innerHTML=`<span>${S.num[k]}</span>${u(k)}`);}
function home(){
 $('#grid').innerHTML=S.projects.map(p=>`<a class="pcard" href="#/p/${p.id}">${img(p.cover,p.title)}<h3>${p.title}</h3><div class="meta">${p.year}, ${t(p.type)}</div><p>${t(p.statement)}</p></a>`).join('');
 const r=S.research;
 $('#research-body').innerHTML=`<p class="lead">${t(r.lead)}</p><div class="steps">${r.steps.map(s=>`<div><b>${t(s.h)}</b>${t(s.p)}</div>`).join('')}</div><div class="strip">${r.imgs.map(f=>img(f,u('research'))).join('')}</div><p class="tag">${t(r.efele)} <a href="https://instagram.com/efele.arq">EFELE.ARQ</a></p>`;
 const k=S.technical;
 $('#tech-body').innerHTML=`<p class="lead">${t(k.lead)}</p><div class="strip">${k.imgs.map(f=>img(f,t(k.lead))).join('')}</div><p class="tag">${t(k.note)}</p>`;
 $('#about-body').innerHTML=`<div class="ph">${img('foto-facundo.jpg','Facundo Luna')}</div><p class="tx">${t(S.about)}</p>`;
 const c=S.contact;
 $('#contact-body').innerHTML=`<dl><dt>Email</dt><dd><a href="mailto:${c.email}">${c.email}</a></dd><dt>Behance</dt><dd><a href="${c.behance}">behance.net/facundoluna182</a></dd><dt>Instagram</dt><dd><a href="${c.instagram}">@efele.arq</a></dd><dt>${u('location')}</dt><dd>Buenos Aires, Argentina</dd></dl>`;}
function caseHTML(p,i){const P=S.projects,n=P[(i+1)%P.length],v=P[(i+P.length-1)%P.length];
 return `<a class="back" href="#work">&larr; ${u('back')}</a>
 <div class="chead"><h1 tabindex="-1">${p.title}</h1><dl><dt>${u('year')}</dt><dd>${p.year}</dd><dt>${u('type')}</dt><dd>${t(p.type)}</dd><dt>${u('tools')}</dt><dd>${p.tools}</dd><dt>${u('studio')}</dt><dd>FADU UBA</dd></dl></div>
 ${img(p.cover,p.title,' class="hero" loading="eager"')}
 ${p.sections.map(([k,o])=>`<section class="cs"><h2>${u(k)}</h2><p>${t(o)}</p></section>`).join('')}
 <section class="plates"><h2>${u('plates')}</h2>${p.plates.map(f=>img(f,p.title)).join('')}</section>
 <nav class="pn" aria-label="Proyectos"><a href="#/p/${v.id}">&larr; ${v.title}</a><a href="#/p/${n.id}">${n.title} &rarr;</a></nav>`;}
function route(){const m=location.hash.match(/^#\/p\/([\w-]+)/),i=m?S.projects.findIndex(x=>x.id===m[1]):-1,p=S.projects[i];
 $('#home').hidden=!!p;$('#case').hidden=!p;
 if(p){$('#case').innerHTML=caseHTML(p,i);document.title=p.title+' — Facundo Luna';scrollTo(0,0);$('#case h1').focus({preventScroll:true})}
 else{document.title='Facundo Luna — '+u('doc');const e=document.getElementById(location.hash.slice(1));if(e)e.scrollIntoView()}}
function spy(){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('#nav a').forEach(a=>a.toggleAttribute('aria-current',a.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55%'});
 S.nav.forEach(k=>o.observe($('#'+k)))}
$('#lang').onclick=()=>{L=L==='es'?'en':'es';localStorage.setItem('lang',L);chrome();home();route();};
addEventListener('hashchange',route);chrome();home();route();spy();})();
