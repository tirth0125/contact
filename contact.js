/* ---- Smooth accordion ------------------------------------------- */
document.querySelectorAll('details').forEach(d=>{
  const box=d.querySelector('.faq-content');
  box.style.maxHeight='0px';

  d.addEventListener('toggle',()=>{
    if(d.open){
      box.style.maxHeight=box.scrollHeight+'px';
      box.addEventListener('transitionend',()=>{
        if(d.open) box.style.maxHeight='none';
      },{once:true});
    }else{
      box.style.maxHeight=box.scrollHeight+'px';
      requestAnimationFrame(()=>box.style.maxHeight='0px');
    }
  });
});

/* ---- Mouse-tracking spotlight ------------------------------------ */
const root=document.documentElement;
window.addEventListener('mousemove',e=>{
  root.style.setProperty('--spot-x', (e.clientX/window.innerWidth*100)+'%');
  root.style.setProperty('--spot-y', (e.clientY/window.innerHeight*100)+'%');
});
