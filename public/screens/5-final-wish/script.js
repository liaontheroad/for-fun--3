const colors=['#FFB6D9','#A8D8FF','#FFE5B4','#E6E6FA','#DDA0DD','#FFD700'];
const wrap=document.getElementById('confettiWrap');
for(let i=0;i<20;i++){const d=document.createElement('div');d.className='dot';d.style.left=Math.random()*100+'%';d.style.backgroundColor=colors[i%colors.length];d.style.animationDuration=(4+Math.random()*5)+'s';d.style.animationDelay=(Math.random()*6)+'s';wrap.appendChild(d)}
setTimeout(()=>{confetti({particleCount:150,spread:90,origin:{y:.4},colors})},700);
