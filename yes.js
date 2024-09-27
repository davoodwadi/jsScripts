// internal x,y, and directions
// adding async and wait
// good
// wait
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

function game(){
    let stop = false;
    let stepX = 20;
    let stepY = 5;
    const canvas = document.querySelector('canvas.sketch');
    const startX = canvas.getBoundingClientRect().left;
    const endX = canvas.getBoundingClientRect().right;
    const header = document.getElementsByClassName("main-header")[0].getBoundingClientRect()
    const footer = document.getElementsByClassName("main-footer")[0].getBoundingClientRect()
    const yMin = header.bottom
    const yMax = footer.top

    let directionX = 1; // 1 for right, -1 for left
    let directionY = 1; // 1 for right, -1 for left
    let currentX = startX;
    let currentY = yMin;
    // other touch hand
    let directionX2 = -1; // 1 for right, -1 for left
    let directionY2 = -1; // 1 for right, -1 for left
    let currentX2 = endX;
    let currentY2 = yMax;
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    function getTimeHHMM(){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTime  = `${hours}:${minutes}`;
        return currentTime
    }
    function createMouseEvent(type, x, y) {
        const mouseEvent = new MouseEvent(type, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
        });
        return mouseEvent;
    }
    function getEnergyLevel(){
        // const energyStr = document.getElementsByClassName("progress-value")[0].textContent
        const energyStr = document.getElementsByClassName('coin-pool')[0].textContent
        const energy = parseInt(energyStr)
        return energy
    }
    async function moveInterval () {
        const energy = getEnergyLevel()
        if (energy>10){
            if (directionX === 1 && currentX >= endX) {
                directionX = -1;
            } else if (directionX === -1 && currentX <= startX) {
                directionX = 1;
            }
    
            if (directionY === 1 && currentY >= yMax) {
                directionY = -1;
            } else if (directionY === -1 && currentY <= yMin) {
                directionY = 1;
            }
            currentX += directionX * stepX; // step of 10
            currentY += directionY * stepY;
    
            // the other touch hand
            if (directionX2 === 1 && currentX2 >= endX) {
                directionX2 = -1;
            } else if (directionX2 === -1 && currentX2 <= startX) {
                directionX2 = 1;
            }
    
            if (directionY2 === 1 && currentY2 >= yMax) {
                directionY2 = -1;
            } else if (directionY2 === -1 && currentY2 <= yMin) {
                directionY2 = 1;
            }
            currentX2 += directionX2 * stepX; // step of 10
            currentY2 += directionY2 * stepY;
    
            const mouseMoveEvent21 = createMouseEvent('mousemove', currentX2, currentY2);
    
            const mouseMoveEvent1 = createMouseEvent('mousemove', currentX+2, currentY+2);
            const mouseMoveEvent2 = createMouseEvent('mousemove', currentX+1, currentY+1);
            const mouseMoveEvent3 = createMouseEvent('mousemove', currentX, currentY);
            const mouseMoveEvent4 = createMouseEvent('mousemove', currentX-1, currentY-1);
            const mouseMoveEvent5 = createMouseEvent('mousemove', currentX-2, currentY-2);
            canvas.dispatchEvent(mouseMoveEvent21);
            canvas.dispatchEvent(mouseMoveEvent1);
            canvas.dispatchEvent(mouseMoveEvent2);
            canvas.dispatchEvent(mouseMoveEvent3);
            canvas.dispatchEvent(mouseMoveEvent4);
            canvas.dispatchEvent(mouseMoveEvent5);
        } else {
            // energy less than 10 => wait 4 minutes
            let time = getTimeHHMM()
            console.log(`${time}`)
            console.log('energy less than 10 => wait 8 minutes')
            console.log('*'.repeat(50))
            await wait(8*60000)
            time = getTimeHHMM()
            console.log(`${time}: Let's go!!!`)
            console.log('*'.repeat(50))
        }
        if (!stop){
            
            scheduleNextMovement();
        } else {
            console.log(`******schedule stopped ${stop}******`)
        }
    }
    // Function to schedule the next click with a random interval
    function scheduleNextMovement() {
        setTimeout(moveInterval, 1);
    }
    function play () {    
        setTimeout(scheduleNextMovement, 1000);
        setTimeout(scheduleNextMovement, 1100);
        setTimeout(scheduleNextMovement, 1200);
        setTimeout(scheduleNextMovement, 1300);
        setTimeout(scheduleNextMovement, 1500);
        console.log(`timeout start`)
    };
    play();    
}




// adding async and wait
// good
// wait
let stop = false;
let stepX = 20;
let stepY = 5;
const canvas = document.querySelector('canvas.sketch');
const startX = canvas.getBoundingClientRect().left;
const endX = canvas.getBoundingClientRect().right;
const header = document.getElementsByClassName("main-header")[0].getBoundingClientRect()
const footer = document.getElementsByClassName("main-footer")[0].getBoundingClientRect()
const yMin = header.bottom
const yMax = footer.top

let directionX = 1; // 1 for right, -1 for left
let directionY = 1; // 1 for right, -1 for left
let currentX = startX;
let currentY = yMin;
// other touch hand
let directionX2 = -1; // 1 for right, -1 for left
let directionY2 = -1; // 1 for right, -1 for left
let currentX2 = endX;
let currentY2 = yMax;
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function getTimeHHMM(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime  = `${hours}:${minutes}`;
    return currentTime
}
function createMouseEvent(type, x, y) {
    const mouseEvent = new MouseEvent(type, {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
    });
    return mouseEvent;
}
function getEnergyLevel(){
    const energyStr = document.getElementsByClassName("progress-value")[0].textContent
    const energy = parseInt(energyStr)
    return energy
}
async function moveInterval () {
    const energy = getEnergyLevel()
    if (energy>10){
        if (directionX === 1 && currentX >= endX) {
            directionX = -1;
        } else if (directionX === -1 && currentX <= startX) {
            directionX = 1;
        }

        if (directionY === 1 && currentY >= yMax) {
            directionY = -1;
        } else if (directionY === -1 && currentY <= yMin) {
            directionY = 1;
        }
        currentX += directionX * stepX; // step of 10
        currentY += directionY * stepY;

        // the other touch hand
        if (directionX2 === 1 && currentX2 >= endX) {
            directionX2 = -1;
        } else if (directionX2 === -1 && currentX2 <= startX) {
            directionX2 = 1;
        }

        if (directionY2 === 1 && currentY2 >= yMax) {
            directionY2 = -1;
        } else if (directionY2 === -1 && currentY2 <= yMin) {
            directionY2 = 1;
        }
        currentX2 += directionX2 * stepX; // step of 10
        currentY2 += directionY2 * stepY;

        const mouseMoveEvent21 = createMouseEvent('mousemove', currentX2, currentY2);

        const mouseMoveEvent1 = createMouseEvent('mousemove', currentX+2, currentY+2);
        const mouseMoveEvent2 = createMouseEvent('mousemove', currentX+1, currentY+1);
        const mouseMoveEvent3 = createMouseEvent('mousemove', currentX, currentY);
        const mouseMoveEvent4 = createMouseEvent('mousemove', currentX-1, currentY-1);
        const mouseMoveEvent5 = createMouseEvent('mousemove', currentX-2, currentY-2);
        canvas.dispatchEvent(mouseMoveEvent21);
        canvas.dispatchEvent(mouseMoveEvent1);
        canvas.dispatchEvent(mouseMoveEvent2);
        canvas.dispatchEvent(mouseMoveEvent3);
        canvas.dispatchEvent(mouseMoveEvent4);
        canvas.dispatchEvent(mouseMoveEvent5);
    } else {
        // energy less than 10 => wait 4 minutes
        let time = getTimeHHMM()
        console.log(`${time}`)
        console.log('energy less than 10 => wait 18 minutes')
        console.log('*'.repeat(50))
        await wait(18*60000)
        time = getTimeHHMM()
        console.log(`${time}: Let's go!!!`)
        console.log('*'.repeat(50))
    }
    if (!stop){
        
        scheduleNextMovement();
    } else {
        console.log(`******schedule stopped ${stop}******`)
    }
}
// Function to schedule the next click with a random interval
function scheduleNextMovement() {
    setTimeout(moveInterval, 1);
}
function play () {    
    stop = false;
    // need to reset
    directionX = 1; // 1 for right, -1 for left
    directionY = 1; // 1 for right, -1 for left
    currentX = startX;
    currentY = yMin;

    // other touch hand
    directionX2 = -1; // 1 for right, -1 for left
    directionY2 = -1; // 1 for right, -1 for left
    currentX2 = endX;
    currentY2 = yMax;
    setTimeout(scheduleNextMovement, 1000);
    console.log(`timeout start`)
};











scheduleNextMovement = ()=>{timeoutId = setTimeout(moveInterval, 8);}



// adding async and wait
// good
// wait
let scheduleNextMovement
const step = 5;
const canvas = document.querySelector('canvas.sketch');
const startX = canvas.getBoundingClientRect().left;
const endX = canvas.getBoundingClientRect().right;
const header = document.getElementsByClassName("main-header")[0].getBoundingClientRect()
const footer = document.getElementsByClassName("main-footer")[0].getBoundingClientRect()
const yMin = header.bottom
const yMax = footer.top

let directionX = 1; // 1 for right, -1 for left
let directionY = 1; // 1 for right, -1 for left
let currentX = startX;
let currentY = yMin;
(function() {
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    function getTimeHHMM(){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTime  = `${hours}:${minutes}`;
        return currentTime
    }

    function createMouseEvent(type, x, y) {
        const mouseEvent = new MouseEvent(type, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
        });
        return mouseEvent;
    }

    function getEnergyLevel(){
        const energyStr = document.getElementsByClassName("progress-value")[0].textContent
        const energy = parseInt(energyStr)
        return energy
    }

    async function moveInterval () {
        const energy = getEnergyLevel()
        if (energy>10){
            if (directionX === 1 && currentX >= endX) {
                directionX = -1;
            } else if (directionX === -1 && currentX <= startX) {
                directionX = 1;
            }

            if (directionY === 1 && currentY >= yMax) {
                directionY = -1;
            } else if (directionY === -1 && currentY <= yMin) {
                directionY = 1;
            }
            currentX += directionX * step*2; // step of 10
            
            currentY += directionY * step;

            const mouseMoveEvent = createMouseEvent('mousemove', currentX, currentY);
            canvas.dispatchEvent(mouseMoveEvent);
        } else {
            // energy less than 10 => wait 4 minutes
            let time = getTimeHHMM()
            console.log(`${time}`)
            console.log('energy less than 10 => wait 4 minutes')
            console.log('*'.repeat(50))
            await wait(4*60000)
        }
        scheduleNextMovement();
    }

            // Function to schedule the next click with a random interval
    function scheduleNextMovement() {
        timeoutId = setTimeout(moveInterval, 8);
    }
    
    setTimeout(scheduleNextMovement, 2000);
    
})();


// document.querySelector('#portals > div:nth-child(2) > div > div > div.modal-dialog > div.modal-header > div.DropdownMenu.web-app-more-menu.with-menu-transitions > div > div > div:nth-child(1)').click()
let app = document.querySelector("#portals > div:nth-child(2) > div > div > div.modal-dialog > div.modal-content.custom-scroll > iframe")
app.getElementsByClassName("progress-value")
// good
// wait
const step = 5;
(function() {
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function createMouseEvent(type, x, y) {
        const mouseEvent = new MouseEvent(type, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
        });
        return mouseEvent;
    }

    function getEnergyLevel(){
        const energyStr = document.getElementsByClassName("progress-value")[0].textContent
        const energy = parseInt(energyStr)
        return energy
    }

    async function simulateMouseMovement() {
        const canvas = document.querySelector('canvas.sketch');
        const startX = canvas.getBoundingClientRect().left;
        const endX = canvas.getBoundingClientRect().right;
        const header = document.getElementsByClassName("main-header")[0].getBoundingClientRect()
        const footer = document.getElementsByClassName("main-footer")[0].getBoundingClientRect()
        // const yMin = (height/3) + 20
        const yMin = header.bottom
        const yMax = footer.top
        // const yMax = (height*2/3) - 20
        // const baseY = height / 2;

        let directionX = 1; // 1 for right, -1 for left
        let directionY = 1; // 1 for right, -1 for left
        let currentX = startX;
        let currentY = height;

        const moveInterval = setInterval(() => {
            const energy = getEnergyLevel()
            if (energy>10){
                if (directionX === 1 && currentX >= endX) {
                    directionX = -1;
                } else if (directionX === -1 && currentX <= startX) {
                    directionX = 1;
                }

                if (directionY === 1 && currentY >= yMax) {
                    directionY = -1;
                } else if (directionY === -1 && currentY <= yMin) {
                    directionY = 1;
                }
                currentX += directionX * step*2; // step of 10
                
                currentY += directionY * step;
                // Add variance to the y position
                // const variance = Math.random() * 300 - 150; // Random value between -50 and 50
                // const currentY = baseY + variance;
    
                const mouseMoveEvent = createMouseEvent('mousemove', currentX, currentY);
                canvas.dispatchEvent(mouseMoveEvent);
            } else {
                // energy less than 10 => wait 4 minutes
                console.log('energy less than 10 => wait 4 minutes')
                await wait(4*60000)
            }
            
        }, 8);
    }
    simulateMouseMovement();
})();





const width = 480;
const height = 591;

(function() {
    function createMouseEvent(type, x, y) {
        const mouseEvent = new MouseEvent(type, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
        });

        return mouseEvent;
    }

    function simulateMouseMovement() {
        const canvas = document.querySelector('canvas.sketch');
        const startX = 5;
        const endX = width - 5;
        const baseY = height / 2;

        let direction = 1; // 1 for right, -1 for left
        let currentX = startX;

        const moveInterval = setInterval(() => {
            if (direction === 1 && currentX >= endX) {
                direction = -1;
            } else if (direction === -1 && currentX <= startX) {
                direction = 1;
            }
            currentX += direction * 10; // step of 10

            // Add variance to the y position
            const variance = Math.random() * 300 - 150; // Random value between -50 and 50
            const currentY = baseY + variance;

            const mouseMoveEvent = createMouseEvent('mousemove', currentX, currentY);
            canvas.dispatchEvent(mouseMoveEvent);
        }, 80);
    }

    // Run simulateMouseMovement in an infinite loop
    function startInfiniteMouseMovement() {
        setInterval(simulateMouseMovement, 3500); // Adjust the interval as needed
    }

    startInfiniteMouseMovement();
})();







const width = 480;
const height = 591;

(function() {
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    function createMouseEvent(type, x, y) {
        const mouseEvent = new MouseEvent(type, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
        });

        return mouseEvent;
    }

    let moveInterval;
    let mainInterval;

    async function simulateMouseMovement() {
        const canvas = document.querySelector('canvas.sketch');
        const startX = 5;
        const endX = width;
        const baseY = height / 2;

        let direction = 1; // 1 for right, -1 for left
        let currentX = startX;

        moveInterval = setInterval(() => {
            if (direction === 1 && currentX >= endX) {
                direction = -1;
            } else if (direction === -1 && currentX <= startX) {
                direction = 1;
            }
            currentX += direction * 5;

            // Add variance to the y position
            const variance = Math.random() * 300 - 150; // Random value between -50 and 50
            const currentY = baseY + variance;

            const mouseMoveEvent = createMouseEvent('mousemove', currentX, currentY);
            canvas.dispatchEvent(mouseMoveEvent);
        }, 80);
    }

    function startInfiniteMouseMovement() {
        mainInterval = setInterval(simulateMouseMovement, 1500); // Adjust the interval as needed
    }

    function stopInfiniteMouseMovement() {
        clearInterval(mainInterval);
        clearInterval(moveInterval);
    }

    // Start the simulation
    startInfiniteMouseMovement();

    // Add event listeners to start and stop the simulation for testing
    document.addEventListener('keydown', (e) => {
        if (e.key === 's') {
            startInfiniteMouseMovement();
        } else if (e.key === 'x') {
            stopInfiniteMouseMovement();
        }
    });
})();
