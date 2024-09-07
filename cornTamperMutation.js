// ==UserScript==
// @name         Ton wallet state checks
// @namespace    http://www.google.com/
// @version      2024-09-03
// @description  ton
// @author       You
// @match        https://corn.apps-tonbox.me/index.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

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
  const startTime = new Date();
  console.log("*".repeat(100));
  console.log(`hello: startTime: ${startTime}`);
  console.log(location);
  console.log("*".repeat(100));

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
    console.log("------------ lastTouchTime took: ", diff, " seconds");
    if (diff > 240) {
      // if more than three minutes, reload the page
      console.log("*".repeat(50));
      console.log(`too long refresh: ${lastTouchTime} -> ${now}`);
      console.log("*".repeat(50));
      lastTouchTime = new Date();
      location.reload();
    }
  }

  // Function to log the current state
  function logState(state) {
    console.log(state);
  }

  let lastTouchTime = new Date();
  let addedNode;
  // Set up a MutationObserver to monitor changes in the body
  const observer = new MutationObserver((mutationsList, observer) => {
    tooLongRefresh(lastTouchTime);
    // Log when changes are detected
    // console.log("*".repeat(50));
    // console.log("*".repeat(50));
    const fightButton = document.getElementsByClassName(
      "rIq5E8Rv9JT2TsqMm8uZ"
    )[0]; // 'FIGHT!'
    if (fightButton) {
      logState("F");
      logState(fightButton.textContent);
      fightButton.click();
    }
    const startButton = document.getElementsByClassName(
      "xCi4i7kqXSqWLw4LySAx"
    )[0]; // "START"
    if (startButton) {
      logState("S");
      logState(startButton);
      logState(startButton.textContent);

      startButton.click();
      lastTouchTime = new Date();
    }
    const homeFightButton = document.getElementsByClassName(
      "c__Ec6W2GQLbn6MNtFmq"
    )[0]; // 'FIGHT!More $CORNIO'
    if (homeFightButton) {
      // check if all content is loaded
      logState("HF");
      logState(homeFightButton.textContent);
      homeFightButton.click();
      //   if (addedNode.classList.contains("WCHJrmKN8mi_eUZSzY0U")) {
      //     // popup indicator for number of new cards
      //     logState("-----------all content loaded---------");
      //     homeFightButton.click();
      //   }
    }
    const nextButton = document.getElementsByClassName(
      "Xqjvq9pvIzd2e_Zw1sq3"
    )[0]; // next button
    if (nextButton) {
      logState("N");
      logState(nextButton.textContent);
      nextButton.click();
    }
    // }
    // console.log("*".repeat(50));
    // console.log("*".repeat(50));
  });

  // Start observing the body for child changes
  observer.observe(document.body, { childList: true, subtree: true });
})();
