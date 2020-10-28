function rollDice() {
    const terninger = [...document.querySelectorAll(".t-list")];
    terninger.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min); // Om det er større eller lige med det mindste nummer
    max = Math.floor(max); // Om det er mindre eller lige med det største nummer
    return Math.floor(Math.random() * (max - min + 1)) + min; // her giver den mig udkommet af der randomized nummer
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);



  // Spiller navne 
  const spiller1 = "Spiller 1"; 
  const spiller2 = "Spiller 2"; 

  // Function til ændring af navne 
  function editNames() { 
      Spiller1 = prompt("Skift Spiller1 navn"); 
      Spiller2 = prompt("Skift Spiller2 navn"); 

      document.querySelector("p.Spiller1") .innerHTML = Spiller1; 
      document.querySelector("p.Spiller2") .innerHTML = Spiller2; 

  } 