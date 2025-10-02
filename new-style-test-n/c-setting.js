window.addEventListener('load', () => {
  document.body.style.background = config.background;
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.background = config.buttonBackground;
  });

  const avatarEl = document.querySelector('.avatar');
  avatarEl.style.backgroundImage = `url('${config.avatar}')`;

  const nameEl = document.querySelector('.name');
  nameEl.textContent = config.name;
  document.querySelector('.subtitle').textContent = config.about;

  document.querySelector('footer span').textContent = config.name;

  if(config.rainbow) {
    const gradient = "red,orange,yellow,green,blue,indigo,violet";
    nameEl.style.background = `linear-gradient(90deg, ${gradient}, red)`;
    nameEl.style.backgroundSize = '400% 100%';
    nameEl.style.webkitBackgroundClip = 'text';
    nameEl.style.webkitTextFillColor = 'transparent';
    nameEl.style.animation = `rainbow ${config.rainbowSpeed}s linear infinite`;
    
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes rainbow {
        0%{background-position:0%}
        50%{background-position:100%}
        100%{background-position:0%}
      }
    `;
    document.head.appendChild(styleEl);
  } else {
    nameEl.style.background = 'none';
    nameEl.style.color = '#333';
  }

  document.getElementById('loading').style.display = 'none';
});
