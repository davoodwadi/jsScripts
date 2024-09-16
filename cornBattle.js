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


let intervalDelay;
let intervalId;

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  return currentTime;
}

function clickButton(button) {
  const delay = 5000 + Math.random() * 2000;
  console.log("delay: ", delay);
  setTimeout(() => {
    button.click();
    console.log(`Clicked ${button.textContent} button`);
    const currentTime = getCurrentTime();
    console.log(currentTime);
  }, delay);
}



function battler() {
  const fightButton = document.getElementsByClassName(
    "rIq5E8Rv9JT2TsqMm8uZ"
  )[0];
  const startButton = document.getElementsByClassName(
    "xCi4i7kqXSqWLw4LySAx"
  )[0];
  const homeFightButton = document.getElementsByClassName(
    "c__Ec6W2GQLbn6MNtFmq"
  )[0];
  const tutorialNextButton = document.getElementsByClassName(
    "Xqjvq9pvIzd2e_Zw1sq3"
  )[0];
  const buttonArray = [
    fightButton,
    startButton,
    homeFightButton,
    tutorialNextButton,
  ];
  for (const button of buttonArray) {
    if (button) {
      clickButton(button);
    }
  }
}

// Store the interval ID
intervalDelay = 6000 + Math.random() * 4000;
intervalId = setInterval(battler, intervalDelay);

// Function to stop the interval
function stopbattler() {
  clearInterval(intervalId);
  console.log("battler stopped");
}

// stopbattler(); // Uncomment this line when you want to stop

//
//
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

let timeoutId; // This will hold the ID of the current timeout

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function clickButton(button) {
  const delay = 2000 + Math.random() * 8000;
  console.log("delay: ", delay);
  await wait(delay);
  return new Promise((resolve) => {
    setTimeout(() => {
      button.click();
      console.log(`Clicked ${button.textContent} button`);
      console.log(`******${getCurrentTime()}********`);
      resolve();
    }, delay);
  });
}

async function battler() {
  const buttons = [
    document.getElementsByClassName("rIq5E8Rv9JT2TsqMm8uZ")[0],
    document.getElementsByClassName("xCi4i7kqXSqWLw4LySAx")[0],
    document.getElementsByClassName("c__Ec6W2GQLbn6MNtFmq")[0],
    document.getElementsByClassName("Xqjvq9pvIzd2e_Zw1sq3")[0],
  ];
  const delay = 2000 + Math.random() * 8000;
  // Check if all buttons are undefined
  const allUndefined = buttons.every((button) => !button);
  if (allUndefined) {
    await wait(delay);
    console.log(`no buttons: waiting ${delay}ms`);
  } else {
    for (const button of buttons) {
      if (button) {
        await clickButton(button);
      }
    }
  }

  // Start the next timeout only after the current one has completed
  const intervalDelay = 2000 + Math.random() * 7000;
  console.log("Next battler in: ", intervalDelay);
  timeoutId = setTimeout(battler, intervalDelay); // Store the timeout ID
}

// Start the first execution
battler();

// Function to stop the battler
function stopbattler() {
  clearTimeout(timeoutId); // Now using timeoutId to clear the timeout
  console.log("battler stopped");
}

//
// END: with timeout to reduce slowdown

homeFight = document.getElementsByClassName("c__Ec6W2GQLbn6MNtFmq")[0];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// <button class="OlxQZrUzTnwC6erQ1sZ_ tVf1wsu3_5PlCcoCKvhW xW4gn8q9qgfRhVXy2Kv6 Xqjvq9pvIzd2e_Zw1sq3">NEXT</button>
async function claim() {
  let delay;
  let claimButton;
  let openBoxButtons;
  let counter;
  let backButton = document.getElementsByClassName("YsV8hbis_L4Npfaf8PCM")[0];

  // go back if in game
  if (backButton) {
    delay = 3000 + Math.random() * 2000;
    console.log("delay: ", delay);
    setTimeout(() => {
      backButton.click();
      console.log("Clicked back button");
    }, delay);
  } else {
    console.log("No back button to click.");
  }

  // claim if it's the time
  delay = 3000 + Math.random() * 2000;
  await wait(delay);
  claimButton = document.getElementsByClassName("CKB3raCvr7fg49ZZGzyn")[0];
  if (claimButton) {
    claimButton.click();
    console.log("claimed coins");
  } else {
    console.log("no claim button");
  }

  //   delay = 3000 + Math.random() * 2000;
  //   await wait(delay);
  //   openBoxButtons = document.getElementsByClassName("MfMcZGpdSy8BZiUpnaFw");
  //   if (openBoxButtons.length > 0) {
  //     counter = 0;
  //     for (const openBoxButton of openBoxButtons) {
  //       delay = 2000 + Math.random() * 2000;
  //       await wait(delay);
  //       counter++;
  //       openBoxButton.click();
  //       console.log(`clicked on box #${counter}`);
  //     }
  //   }

  // claim if it's the time
  delay = 3000 + Math.random() * 2000;
  await wait(delay);
  claimButton = document.getElementsByClassName("CKB3raCvr7fg49ZZGzyn")[0];
  if (claimButton) {
    claimButton.click();
    console.log("claimed coins");
  } else {
    console.log("no claim button");
  }

  // claim if it's the time
  delay = 3000 + Math.random() * 2000;
  await wait(delay);
  claimButton = document.getElementsByClassName("CKB3raCvr7fg49ZZGzyn")[0];
  if (claimButton) {
    claimButton.click();
    console.log("claimed coins");
  } else {
    console.log("no claim button");
  }
}

let close;
close = document.getElementsByClassName("OlxQZrUzTnwC6erQ1sZ_")[0];

async function openBox() {
  let openBoxButton;
  let openButton;
  let delay;
  openBoxButton = document.getElementsByClassName("MfMcZGpdSy8BZiUpnaFw")[0];
  openBoxButton.click();

  delay = 3000 + Math.random() * 2000;
  await wait(delay);

  openButton = document.getElementsByClassName("gRZ7p1UdFjmbkHGaZAwV")[0];
  openButton.click();
}

// back
// <button class="I_W23hJIPANNir82Kq5H YsV8hbis_L4Npfaf8PCM"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="41" height="41" rx="6" fill="#9F5300"></rect><rect x="1" y="1" width="43" height="43" rx="7" stroke="#000926" stroke-opacity="0.7" stroke-width="2"></rect><rect x="2" y="2" width="41" height="37" rx="6" fill="#FFA000"></rect><rect x="2" y="3" width="34" height="31" rx="6" fill="#4B7EAC"></rect><g filter="url(#filter0_i_775_7896)"><rect x="2" y="3" width="41" height="37" rx="6" fill="#C36E18"></rect></g><rect x="5" y="5" width="35" height="32" rx="5" fill="url(#paint0_linear_775_7896)"></rect><ellipse cx="7.24452" cy="7.47365" rx="2.71188" ry="1.20894" transform="rotate(-47.6529 7.24452 7.47365)" fill="white" fill-opacity="0.6"></ellipse><g filter="url(#filter1_di_775_7896)"><path d="M35 29.7033C35 30.7504 34.8768 31.7973 34.6498 32.827C34.5997 33.0557 34.5414 33.2889 34.396 33.4873C34.0943 33.8985 33.5183 34.0785 32.9594 33.9681C32.3166 33.8411 31.9637 33.4321 31.8777 32.8999C31.8239 32.5661 31.8653 32.2278 31.8827 31.8914C32.02 29.2286 30.5799 26.6851 28.154 24.9654C26.9315 24.0989 25.5004 23.4434 23.9844 23.0035C23.1949 22.7743 22.381 22.603 21.5559 22.4888C21.4197 22.4699 20.3932 22.3755 19.6942 22.3296V29.6288L9 18.8144L19.6942 8V14.4373C28.3084 15.3137 35 21.8125 35 29.7033Z" fill="url(#paint1_linear_775_7896)"></path></g><defs><filter id="filter0_i_775_7896" x="2" y="3" width="41" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.47451 0 0 0 0 0.12549 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_775_7896"></feBlend></filter><filter id="filter1_di_775_7896" x="9" y="8" width="26" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_775_7896"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_775_7896" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow_775_7896"></feBlend></filter><linearGradient id="paint0_linear_775_7896" x1="22.5" y1="5" x2="22.5" y2="37" gradientUnits="userSpaceOnUse"><stop stop-color="#F79A02"></stop><stop offset="1" stop-color="#DC7C18"></stop></linearGradient><linearGradient id="paint1_linear_775_7896" x1="9" y1="34.8667" x2="9" y2="7.13333" gradientUnits="userSpaceOnUse"><stop stop-color="#E6DEC9"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg></button>
document.getElementsByClassName("YsV8hbis_L4Npfaf8PCM")[0];
