const colors=['#FFB6D9','#A8D8FF','#FFE5B4','#E6E6FA','#DDA0DD','#FFD700'];
const wrap=document.getElementById('confettiWrap');
for(let i=0;i<18;i++){const d=document.createElement('div');d.className='dot';d.style.left=Math.random()*100+'%';d.style.backgroundColor=colors[i%colors.length];d.style.animationDuration=(4+Math.random()*4)+'s';d.style.animationDelay=(Math.random()*5)+'s';wrap.appendChild(d)}
const submitBtn=document.getElementById('submitBtn');
const dayInput=document.getElementById('dayInput');
const monthSel=document.getElementById('monthSelect');
const errorBox=document.getElementById('errorBox');
const successBox=document.getElementById('successBox');
function clearMsg(){errorBox.classList.add('hidden');successBox.classList.add('hidden')}
dayInput.addEventListener('input',clearMsg);
monthSel.addEventListener('change',clearMsg);
submitBtn.addEventListener('click',()=>{
  const day=parseInt(dayInput.value);
  const month=parseInt(monthSel.value);
  if(day===15&&month===6){
    clearMsg();successBox.classList.remove('hidden');submitBtn.style.display='none';
    confetti({particleCount:120,spread:80,origin:{y:.55},colors});
    setTimeout(()=>{confetti({particleCount:60,angle:60,spread:70,origin:{x:0,y:.6},colors});confetti({particleCount:60,angle:120,spread:70,origin:{x:1,y:.6},colors})},400);
    setTimeout(()=>{window.location.href='../2-gift-opening/index.html'},1800);
  }else{
    clearMsg();errorBox.classList.remove('hidden');
    const card=document.getElementById('card');card.style.animation='none';card.offsetHeight;card.style.animation='shake .4s ease';
  }
});
const s=document.createElement('style');s.textContent='@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}';document.head.appendChild(s);
