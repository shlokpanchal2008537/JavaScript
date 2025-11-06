let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      let userGuess = parseInt(document.getElementById("guessInput").value);
      attempts++;

      // if-else conditionals
      if (userGuess === randomNumber) {
        document.getElementById("result").innerText = "🎉 Correct! You guessed the number!";
      } else if (userGuess > randomNumber) {
        document.getElementById("result").innerText = "📉 Too high! Try again.";
      } else if (userGuess < randomNumber) {
        document.getElementById("result").innerText = "📈 Too low! Try again.";
      } else {
        document.getElementById("result").innerText = "❌ Please enter a valid number.";
      }

      document.getElementById("attempts").innerText = "Attempts: " + attempts;

      // switch example
      switch (attempts) {
        case 5:
          alert("⚠️ Hint: You're on attempt 5. Keep trying!");
          break;
        case 10:
          alert("😮 10 attempts! Don't give up.");
          break;
      }
    }

    // Restart function
    function restartGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById("guessInput").value = "";
      document.getElementById("result").innerText = "";
      document.getElementById("attempts").innerText = "";
    }

    // Example loops
    console.log("For loop: printing numbers 1 to 5");
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }

    console.log("While loop: printing numbers 1 to 5");
    let j = 1;
    while (j <= 5) {
      console.log(j);
      j++;
    }

    console.log("Do...while loop: printing numbers 1 to 5");
    let k = 1;
    do {
      console.log(k);
      k++;
    } while (k <= 5);
