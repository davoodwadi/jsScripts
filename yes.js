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
    let stop = false;
    // need to reset
    let directionX = 1; // 1 for right, -1 for left
    let directionY = 1; // 1 for right, -1 for left
    let currentX = startX;
    let currentY = yMin;
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
