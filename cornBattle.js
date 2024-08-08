function autoClicker() {
    const fightButton = document.getElementsByClassName("rIq5E8Rv9JT2TsqMm8uZ")[0];
    const startButton = document.getElementsByClassName("xCi4i7kqXSqWLw4LySAx")[0];

    if (fightButton) {
        const delay = 2000 + Math.random() * 2000;
        console.log('delay: ', delay);
        setTimeout(() => {
            fightButton.click();
            console.log('Clicked fight button');
        }, delay);
    }
    if (startButton) {
        const delay = 2000 + Math.random() * 2000;
        console.log('delay: ', delay);
        setTimeout(() => {
            startButton.click();
            console.log('Clicked start button');
        }, delay);
    }
}

// Store the interval ID
const intervalDelay = 2000 + Math.random() * 4000;
const intervalId = setInterval(autoClicker, intervalDelay);

// Function to stop the interval
function stopAutoClicker() {
    clearInterval(intervalId);
    console.log('AutoClicker stopped');
}

// Call this function to stop the autoClicker
// stopAutoClicker(); // Uncomment this line when you want to stop