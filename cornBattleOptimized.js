// with timeout to reduce slowdown
Object.defineProperty(navigator, "userAgent", {
  get: function () {
    return "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";
  },
});
Object.defineProperty(navigator, "platform", {
  get: function () {
    return "iPhone";
  },
});
Object.defineProperty(navigator, "vendor", {
  get: function () {
    return "Apple Computer, Inc.";
  },
});
Object.defineProperty(navigator, "appVersion", {
  get: function () {
    return "5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";
  },
});
Object.defineProperty(navigator, "maxTouchPoints", {
  get: function () {
    return 5;
  },
});
Object.defineProperty(navigator, "language", {
  get: function () {
    return "en-US";
  },
});

// Function to generate a random delay between min and max milliseconds
function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function tooLongRefresh(lastTouchTime) {
  const now = new Date();
  const diff = (now - lastTouchTime) / 1000;
  console.log(`${diff} ms`);
  if (diff > 180) {
    // if more than three minutes, reload the page
    console.log("*".repeat(50));
    console.log(`too long refresh: ${lastTouchTime} -> ${now}`);
    console.log("*".repeat(50));
    lastTouchTime = new Date();
    location.reload();
  }
}
// Variable to track if the function is currently running
let isRunning = false;
let lastTouchTime = new Date();

// Function to check for the button and click it
async function checkAndClickButton() {
  // If this function is already running, exit to avoid stack overflow
  if (isRunning) return;

  isRunning = true; // Set the flag to indicate the function is running

  // Select the button using a suitable selector
  const buttons = [
    document.getElementsByClassName("rIq5E8Rv9JT2TsqMm8uZ")[0],
    document.getElementsByClassName("xCi4i7kqXSqWLw4LySAx")[0],
    document.getElementsByClassName("c__Ec6W2GQLbn6MNtFmq")[0],
    document.getElementsByClassName("Xqjvq9pvIzd2e_Zw1sq3")[0],
  ];
  //
  const allUndefined = buttons.every((button) => !button);
  if (allUndefined) {
    pressElementCenter(document.body);
    console.log("**************center**********");
  }
  //
  for (const button of buttons) {
    if (button) {
      //   button.click();
      pressElementCenter(button);
      lastTouchTime = new Date();
    }
  }
  // Schedule the next check with a random delay
  const randomDelay = getRandomDelay(0, 500); // random delay between 500ms and 2000ms

  // Use setTimeout to schedule the next execution, resetting the flag when done
  setTimeout(() => {
    isRunning = false; // Allow the function to run again
    checkAndClickButton(); // Schedule the next check
  }, randomDelay);
  tooLongRefresh(lastTouchTime);
}

// Start the checking process with an initial call
checkAndClickButton(); // Initial call to start the process
