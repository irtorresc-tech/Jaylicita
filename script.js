const noBtn = document.getElementById('noBtn');

function escaparNoBtn(e){
  e.preventDefault();
  const x = (Math.random() - 0.5) * 160;
  const y = 40 + Math.random() * 30; // siempre hacia abajo, lejos del botón Sí
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener('mouseover', escaparNoBtn);
noBtn.addEventListener('touchstart', escaparNoBtn, { passive: false });

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
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