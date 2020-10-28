// Wrap hvert ord i en span
var textWrapper = document.querySelector('.h1-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.h1-text .line',
    scaleY: [0,1], // Hviklen akse den scalere i
    opacity: [0.5,1], 
    easing: "easeOutExpo",
    duration: 700 // Varighed af visning
  })

  .add({ // linjen der følger bogstaverne
    targets: '.h1-text .line',
    translateX: [0, document.querySelector('.h1-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
  })
  
  .add({ // bogstaverne der fader ind og ud
    targets: '.h1-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1) // delay fra bogstav til bogstav
  })
  
  .add({
    targets: '.h1-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });