function setWaveAnimation() {
  const wave = [
    { transform: "rotate(10deg)" },
    { transform: "rotate(-10deg)" },
    { transform: "rotate(10deg)" },
    { transform: "rotate(-10deg)" }
  ]

  const timing = {
    duration: 800,
    iterations: 1,
  }

  document.querySelector('h1').addEventListener('mouseenter', () => {
    document.querySelector('.wave').animate(wave, timing);
  });

  document.querySelector('.wave').animate(wave, timing);
}

setWaveAnimation()
