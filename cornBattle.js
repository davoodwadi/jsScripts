Object.defineProperty(navigator, 'userAgent', {
    get: function () { return 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'; }
});
Object.defineProperty(navigator, 'platform', {
    get: function () { return 'iPhone'; }
});
Object.defineProperty(navigator, 'vendor', {
    get: function () { return 'Apple Computer, Inc.'; }
});
Object.defineProperty(navigator, 'appVersion', {
    get: function () { return '5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'; }
});
Object.defineProperty(navigator, 'maxTouchPoints', {
    get: function () { return 5; }
});
Object.defineProperty(navigator, 'language', {
    get: function () { return 'en-US'; }
});


Object.defineProperty(navigator, 'userAgentData', {
    get: function () {
        return {
            brands: [
                { brand: 'Google Chrome', version: '107' },
                { brand: 'Chromium', version: '107' },
                { brand: 'Mobile Safari', version: '16.6' }
            ],
            mobile: true,
            platform: 'iOS',
            getHighEntropyValues: async function () {
                return {
                    platform: 'iOS',
                    model: 'iPhone',
                    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
                };
            }
        };
    }
});

function battler() {
    const fightButton = document.getElementsByClassName("rIq5E8Rv9JT2TsqMm8uZ")[0];
    const startButton = document.getElementsByClassName("xCi4i7kqXSqWLw4LySAx")[0];

    if (fightButton) {
        const delay = 3000 + Math.random() * 2000;
        console.log('delay: ', delay);
        setTimeout(() => {
            fightButton.click();
            console.log('Clicked fight button');
        }, delay);
    }
    if (startButton) {
        const delay = 3000 + Math.random() * 2000;
        console.log('delay: ', delay);
        setTimeout(() => {
            startButton.click();
            console.log('Clicked start button');
        }, delay);
    }
}

// Store the interval ID
const intervalDelay = 4000 + Math.random() * 4000;
const intervalId = setInterval(battler, intervalDelay);

// Function to stop the interval
function stopbattler() {
    clearInterval(intervalId);
    console.log('battler stopped');
}

// Call this function to stop the battler
// stopbattler(); // Uncomment this line when you want to stop


// main screen battle
// const mainBattle = document.getElementsByClassName('ant-row pTCf9jgOTECbE5v8Q5cq css-zg0ahe')[3]

