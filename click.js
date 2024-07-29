(function () {
    const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
    const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});
    setInterval((function fn() {
        const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
        if (energy > 25) {
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
        }
        return fn;
    })(), 50);
})();


(function () {
    const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
    const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});
    const intervalId = setInterval((function fn() {
        // const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
        // if (energy > 25) {
        //     document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
        //     document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
        // }
        
        const clock = document.querySelector("#root > div > div > div > section.GridItemClock--1908i7x.bhiCpz > div > div.StyledWidget--1djokeg.BqNIh > div > span")
        console.log(clock)
        clock.dispatchEvent(evt1)
        clock.dispatchEvent(evt2)
        console.log('time clicked')
        return fn;
    })(), 1000);

    // clear clicker
    // Add a function to clear the interval
    window.clearMyInterval = function() {
        clearInterval(intervalId);
        console.log('Interval cleared');
    };
})();



(function () {
    const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
    const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Define the main function to simulate the clicks
    function simulateClick() {
        const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
        if (energy > 25) {
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
            document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
        }
        scheduleNextClick();
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(200, 1000); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Start the process
    let timeoutId = setTimeout(simulateClick, getRandomInterval(200, 1000));

    // Add a function to clear the timeout
    window.clearMyTimeout = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
})();



const min = 1500;
const max = 2500;
(function () {
    const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
    const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Define the main function to simulate the clicks
    function simulateClick() {
        const clock = document.querySelector("#root > div > div > div > section.GridItemClock--1908i7x.bhiCpz > div > div.StyledWidget--1djokeg.BqNIh > div > span")
        console.log(clock)
        clock.dispatchEvent(evt1)
        clock.dispatchEvent(evt2)
        console.log('time clicked')
        scheduleNextClick();
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(min, max); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Start the process
    let timeoutId = setTimeout(simulateClick, getRandomInterval(min, max));

    // Add a function to clear the timeout
    window.clearMyTimeout = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
})();





let min = 1500;
let max = 2500;
// error handling
(function () {
    const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
    const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Define the main function to simulate the clicks
    function simulateClick() {
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");

            if (energy > 25) {
                const buttonElement = document.getElementsByClassName('user-tap-button')[0];
                if (!buttonElement) throw new Error("Button element not found");

                buttonElement.dispatchEvent(evt1);
                buttonElement.dispatchEvent(evt2);
            }
        } catch (error) {
            console.warn("An error occurred: ", error.message);
        } finally {
            scheduleNextClick();
        }
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(min, max); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Start the process
    let timeoutId = setTimeout(simulateClick, getRandomInterval(min, max));

    // Add a function to clear the timeout
    window.clearMyTimeout = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
})();






let min = 10;
let max = 100;
// with random coordinates
(function () {
    // Function to generate random coordinates around a base value
    function getRandomCoordinate(base, variance) {
        return base + Math.floor(Math.random() * (2 * variance + 1)) - variance;
    }

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Define the main function to simulate the clicks
    function simulateClick() {
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");

            if (energy > 25) {
                const buttonElement = document.getElementsByClassName('user-tap-button')[0];
                if (!buttonElement) throw new Error("Button element not found");

                // Randomize the click coordinates around the base values
                const clickX = getRandomCoordinate(150, 10); // 150 +/- 10
                const clickY = getRandomCoordinate(300, 10); // 300 +/- 10

                // Create pointer events with randomized coordinates
                const evt1 = new PointerEvent('pointerdown', { clientX: clickX, clientY: clickY });
                const evt2 = new PointerEvent('pointerup', { clientX: clickX, clientY: clickY });

                // Dispatch the events to simulate a click
                buttonElement.dispatchEvent(evt1);
                buttonElement.dispatchEvent(evt2);
            }
        } catch (error) {
            console.warn("An error occurred: ", error.message);
        } finally {
            scheduleNextClick();
        }
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(min, max); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Start the process
    let timeoutId = setTimeout(simulateClick, getRandomInterval(min, max));

    // Add a function to clear the timeout
    window.clearMyTimeout = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
})();


// great
// set startTimeout
const amountToWait = 10 // s
let min = 20;
let max = 300;
let noise = 20;
let timeoutId
let insufficientTimeoutId
let stopit
// with random coordinates
async function start () {
    // Function that returns a Promise that resolves after a delay
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Function to generate random coordinates around a base value
    function getRandomCoordinate(base, variance) {
        return base + Math.floor(Math.random() * (2 * variance + 1)) - variance;
    }

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getEnergyLevels(){
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");
            
            if (energy>1000){
                clearTimeout(insufficientTimeoutId)
                scheduleNextClick();
            } else {
                console.log(`${energy} level is low. waiting`)
            }
        }
        catch (error) {
            console.warn("Error getting energy level: ", error.message);
            return 0
        }}
    
    // Define the main function to simulate the clicks
    async function simulateClick() {
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");

            if (energy > 32) {
                const buttonElement = document.getElementsByClassName('user-tap-button')[0];
                if (!buttonElement) throw new Error("Button element not found");

                // Randomize the click coordinates around the base values
                const clickX = getRandomCoordinate(150, noise); // 150 +/- 10
                const clickY = getRandomCoordinate(300, noise); // 300 +/- 10

                // Create pointer events with randomized coordinates
                const evt1 = new PointerEvent('pointerdown', { clientX: clickX, clientY: clickY });
                const evt2 = new PointerEvent('pointerup', { clientX: clickX, clientY: clickY });

                // Dispatch the events to simulate a click
                buttonElement.dispatchEvent(evt1);
                buttonElement.dispatchEvent(evt2);
            }

        } catch (error) {
            console.warn("An error occurred: ", error.message);
            // Wait for 2 seconds
            await wait(20000);
            console.log('waited 2s')
        } finally {
            scheduleNextClick();
        }
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(min, max); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Wait for 4 seconds
    await wait(4000);
    console.log('waited 4s')

    // Start the process
    timeoutId = setTimeout(simulateClick, getRandomInterval(min, max));
    console.log(timeoutId)

    // Add a function to clear the timeout
    window.stop = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
    stopit = window.stop
};




// if energy<35: wait a minute
// set startTimeout
const amountToWait = 10 // s
let min = 20;
let max = 300;
let noise = 20;
let timeoutId
let insufficientTimeoutId
let stopit
// with random coordinates
async function start () {
    // Function that returns a Promise that resolves after a delay
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Function to generate random coordinates around a base value
    function getRandomCoordinate(base, variance) {
        return base + Math.floor(Math.random() * (2 * variance + 1)) - variance;
    }

    // Function to generate a random interval between min and max milliseconds
    function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getEnergyLevels(){
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");
            
            if (energy>1000){
                clearTimeout(insufficientTimeoutId)
                scheduleNextClick();
            } else {
                console.log(`${energy} level is low. waiting`)
            }
        }
        catch (error) {
            console.warn("Error getting energy level: ", error.message);
            return 0
        }}
    
    // Define the main function to simulate the clicks
    async function simulateClick() {
        try {
            const energyElement = document.getElementsByClassName("user-tap-energy")[0];
            if (!energyElement) throw new Error("Energy element not found");

            const energyText = energyElement.getElementsByTagName("p")[0].textContent;
            const energy = parseInt(energyText.split(" / ")[0]);

            if (isNaN(energy)) throw new Error("Failed to parse energy value");

            if (energy > 32) {
                const buttonElement = document.getElementsByClassName('user-tap-button')[0];
                if (!buttonElement) throw new Error("Button element not found");

                // Randomize the click coordinates around the base values
                const clickX = getRandomCoordinate(150, noise); // 150 +/- 10
                const clickY = getRandomCoordinate(300, noise); // 300 +/- 10

                // Create pointer events with randomized coordinates
                const evt1 = new PointerEvent('pointerdown', { clientX: clickX, clientY: clickY });
                const evt2 = new PointerEvent('pointerup', { clientX: clickX, clientY: clickY });

                // Dispatch the events to simulate a click
                buttonElement.dispatchEvent(evt1);
                buttonElement.dispatchEvent(evt2);
            } else {
                console.log('energy less than 32; waiting 2 minutes...')
                await wait(120000)
            }

        } catch (error) {
            console.warn("An error occurred: ", error.message);
            // Wait for 2 seconds
            await wait(20000);
            console.log('waited 2s')
        } finally {
            scheduleNextClick();
        }
    }

    // Function to schedule the next click with a random interval
    function scheduleNextClick() {
        const randomInterval = getRandomInterval(min, max); // Random interval between 200ms and 1000ms
        timeoutId = setTimeout(simulateClick, randomInterval);
    }

    // Wait for 4 seconds
    await wait(4000);
    console.log('waited 4s')

    // Start the process
    timeoutId = setTimeout(simulateClick, getRandomInterval(min, max));
    console.log(timeoutId)

    // Add a function to clear the timeout
    window.stop = function() {
        clearTimeout(timeoutId);
        console.log('Timeout cleared');
    };
    stopit = window.stop
};
