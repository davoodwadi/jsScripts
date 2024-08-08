// set telegram
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
//

function coinTouch(element) {
    const bb = element.getBoundingClientRect();
    const noiseX = Math.random()*0.5 + 0.25;
    const noiseY = Math.random()*0.5 + 0.25;
    const X = bb.left + bb.width * noiseX;
    const Y = bb.top + bb.height * noiseY;
    
    const touchObj = new Touch({
        identifier: Date.now(), // Unique identifier for the touch
        target: element,
        clientX: X, // X position
        clientY: Y // Y position
    });

    const touchEventStart = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [touchObj],   // Array of touches
        targetTouches: [touchObj],
        changedTouches: [touchObj]
    });

    const touchEventEnd = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true,
        touches: [],           // No active touches
        targetTouches: [],     // No target touches
        changedTouches: [touchObj]
    });

    // Dispatch the events
    element.dispatchEvent(touchEventStart);
    element.dispatchEvent(touchEventEnd);
}

function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// version 2 - fixing stack overflow
function touchElementWithRandomIntervals(element) {
    const energyLeft = parseFloat(document.getElementsByClassName('IconText--content')[2].textContent.split(' / ')[0].replace(',', ''));

    if (energyLeft > 11 && !isBlocked) {
        if (energyLeft % 1000 === 0) {
            console.log(`I have energy ${energyLeft}`); // Use backticks for template literals
        }
        
        const delay = randomInterval(5, 100); // Random delay between 50ms and 1000ms
        setTimeout(() => {
            coinTouch(element); // Call coinTouch after the delay
            // Call the function again only if not blocked
            touchElementWithRandomIntervals(element);
        }, delay);
    } else if (energyLeft <= 11 && !isBlocked) {
        if (energyLeft % 1000 === 0) {
            console.log(`I have NO energy ${energyLeft}`);
        }
        isBlocked = true; // Set the block flag to true
        // Block further touches for 1 minute (60000 milliseconds)
        setTimeout(() => {
            isBlocked = false; // Reset the block flag after 1 minute
            console.log("Energy can be used again.");
            touchElementWithRandomIntervals(element); // Call again to check energy after blocking
        }, 60000);
    }
}

let isBlocked = false; // Flag to indicate if touches should be blocked
const elem = document.getElementsByClassName("CoinButton--content")[0]