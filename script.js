const WHATSAPP_NUMBER = "923051040666"; 
const baseMessage = "Hello Beausion.pk! I would like to ask about your beauty products.";
function waUrl(product=""){
  const msg = product ? `Hello Beausion.pk! I am interested in: ${product}. Please share price and availability.` : baseMessage;
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
}
['headerWhatsApp','heroWhatsApp','contactWhatsApp'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=waUrl();});
document.querySelectorAll('.order').forEach(btn=>btn.addEventListener('click',()=>{const product=btn.dataset.product;document.getElementById('toast').classList.add('show');setTimeout(()=>document.getElementById('toast').classList.remove('show'),1400);window.open(waUrl(product),'_blank');}));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.product-card').forEach(card=>{card.style.display=filter==='all'||card.dataset.cat===filter?'block':'none';});}));
const menuBtn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
