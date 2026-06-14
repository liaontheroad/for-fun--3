const colors=['#FFB6D9','#A8D8FF','#FFE5B4','#E6E6FA','#DDA0DD','#FFD700'];
const wrap=document.getElementById('confettiWrap');
for(let i=0;i<16;i++){const d=document.createElement('div');d.className='dot';d.style.left=Math.random()*100+'%';d.style.backgroundColor=colors[i%colors.length];d.style.animationDuration=(4+Math.random()*4)+'s';d.style.animationDelay=(Math.random()*5)+'s';wrap.appendChild(d)}
document.getElementById('openBtn').addEventListener('click',()=>{
  document.getElementById('openBtn').style.display='none';
  document.getElementById('giftClosed').classList.add('hidden');
  document.getElementById('giftOpen').classList.remove('hidden');
  confetti({particleCount:200,spread:100,origin:{y:.5},colors});
  setTimeout(()=>{confetti({particleCount:80,angle:60,spread:70,origin:{x:0,y:.55},colors});confetti({particleCount:80,angle:120,spread:70,origin:{x:1,y:.55},colors})},350);
  setTimeout(()=>{document.getElementById('revealMsg').classList.remove('hidden')},600);
});
