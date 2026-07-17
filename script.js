// El botón "No" se escapa del cursor, es solo un jueguito tierno
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
  const x = (Math.random() - 0.5) * 220;
  const y = (Math.random() - 0.5) * 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // si logra hacer click, igual la respuesta es dulce
  noBtn.innerText = 'No puedes decir que no 🥹💗';
});

function showCafes(){
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
  launchConfetti(18);
}

function chooseCafe(name, emoji){
  document.getElementById('cafeName').innerText = name;
  document.getElementById('cafeEmoji').innerText = emoji;
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');
  launchConfetti(35);
}

function launchConfetti(amount){
  const emojis = ['💕','✨','🎉','☕','🍪','💗'];
  for(let i=0; i<amount; i++){
    const el = document.createElement('div');
    el.className = 'confetti';
    el.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left = Math.random()*100 + 'vw';
    el.style.animationDuration = (2.5 + Math.random()*2) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}