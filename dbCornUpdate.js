// ==UserScript==
// @name         dbLog Ton wallet update
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
  //   const formation = "singer98-berg80-dr91-scare100-thorn100";
  const formation = "1-1-1";
  const theirRatingTolerance = 1200;
  const tooLongTolerance = 240; // seconds
  const intervalAmount = 240; // seconds
  const warnAmount = 80; // seconds

  // disable logs and warn
  window.console.log = () => {};
  window.console.info = () => {};
  window.console.debug = () => {};

  const is_windows = navigator.userAgentData.platform === "Windows";
  // with timeout to reduce slowdown
  if (is_windows) {
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
  }

  const startTime = new Date();

  console.warn(`hello: startTime: ${startTime}`);

  // Function to generate a random delay between min and max milliseconds
  function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function addCard(num) {
    const card = document.querySelector(`#unitCard${num}`);
    if (!card.classList.contains("dKUc0VNyMFss8wxlxggh")) {
      // check to see on the board. true means not there
      await wait(50);
      card.click();
      await wait(50);
      console.warn(`ADDED: ${card.id}`);
    } else {
      console.warn(`OK: ${card.id}`);
    }
  }
  async function addCards(numbers) {
    for (const num of numbers) {
      await addCard(num);
    }
  }
  function countCards() {
    let count = 0;
    for (let num = 0; num <= 50; num++) {
      const card = document.querySelector(`#unitCard${num}`);
      if (!card) {
        continue;
      }
      if (card.classList.contains("dKUc0VNyMFss8wxlxggh")) {
        count++;
      }
    }
    return count;
  }

  function tooLongRefresh() {
    const now = new Date();
    const diff = (now - lastTouchTime) / 1000;
    // console.log("------------ lastTouchTime took: ", diff, " seconds");
    if (diff > tooLongTolerance) {
      // if more than tooLongTolerance, reload the page

      console.warn(`***too long refresh: ${lastTouchTime} -> ${now}`);

      lastTouchTime = new Date();
      location.reload();
    } else if (diff > warnAmount) {
      // warn long battle or other issues
      console.warn(`******Long battle: ${diff}: ${lastTouchTime} -> ${now}`);
    }
  }
  function tooLongRefreshInterval() {
    const now = new Date();
    const diff = (now - lastTouchTime) / 1000;
    // console.log("------------ lastTouchTime took: ", diff, " seconds");
    if (diff > tooLongTolerance) {
      // if more than three minutes, reload the page
      //   console.log("*".repeat(50));
      console.warn(
        `*******INTERVAL: TOO LONG REFRESH : ${lastTouchTime} -> ${now}`
      );
      //   console.log("*".repeat(50));
      lastTouchTime = new Date();
      location.reload();
    } else if (diff > warnAmount) {
      // warn long battle or other issues
      console.warn(
        `******INTERVAL Long battle: ${diff}: ${lastTouchTime} -> ${now}`
      );
    }
  }
  function getTheirRating() {
    // <div class="EgyVCeoCstAi1uJ3x7yP"><img src="/icons/cup-border.png" alt=""><div>1635</div></div>
    return parseInt(
      document.querySelectorAll(".EgyVCeoCstAi1uJ3x7yP")[1].textContent,
      10
    );
  }
  function getMyRating() {
    // <div class="EgyVCeoCstAi1uJ3x7yP"><img src="/icons/cup-border.png" alt=""><div>1056</div></div>
    return parseInt(
      document.querySelectorAll(".EgyVCeoCstAi1uJ3x7yP")[0].textContent,
      10
    );
  }
  function getGameInfo() {
    const url = "https://cornbattles-davoodwadi.turso.io/v2/pipeline";
    const authToken = "<token>";
    const table = "battles";

    const now = new Date();
    const duration = (now - lastTouchTime) / 1000;
    const bottomBox = document.querySelectorAll(".elR3vGHDWoL2X5qzN71w");
    const result = document.querySelector(
      ".X5eEAJqYJsGJOBKLuE9j span"
    ).textContent; // DEFEAT! or VICTORY!
    const myRating = parseInt(
      document.querySelector(".irvDPo1HyZwDFZGmLsSI .b3EnjXPtsgdI3kotdZM9 span")
        .textContent,
      10
    );
    const theirRating = parseInt(
      document.querySelector(".wXXdrg_EEPzrST69dIFf .b3EnjXPtsgdI3kotdZM9 span")
        .textContent,
      10
    );
    const theirName = document.querySelector(
      ".wXXdrg_EEPzrST69dIFf .ilQ7yHtcqhQhxhAQhDTw span"
    ).textContent;
    const myRatingChange = parseInt(
      bottomBox[bottomBox.length - 1].textContent.replace(" ", ""),
      10
    );
    const query = `INSERT INTO ${table} (duration, result, myRating, theirRating, myRatingChange, theirName, date, formation)
  VALUES (${duration}, '${result}', ${myRating}, ${theirRating}, ${myRatingChange}, '${theirName}', '${now.toISOString()}', '${formation}');`;

    const gameInfo = {
      duration: duration, // float
      result: result,
      myRating: myRating,
      theirRating: theirRating,
      myRatingChange: myRatingChange,
      theirName: theirName,
      date: now.toISOString(),
      formation: formation,
    };
    console.warn(JSON.stringify(gameInfo));
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          { type: "execute", stmt: { sql: query } },
          { type: "close" },
        ],
      }),
    });
  }

  //   let lastTouchTime = new Date();
  // const cardNumbers = [24, 31, 25, 35, 33];
  // let started = false;
  // let addedNode;
  // Set up a MutationObserver to monitor changes in the body
  //   const observer = new MutationObserver(async (mutationsList, observer) => {
  // tooLongRefresh();
  async function checkStatus() {
    console.warn("CHECKING");
    // check for continue
    const keepOnButtons = document.getElementsByClassName(
      "OlxQZrUzTnwC6erQ1sZ_"
    );
    const keepOnButton = Array.from(keepOnButtons).filter(
      (button) => button.textContent === "FIGHT!"
    )[0];
    if (keepOnButton) {
      keepOnButton.click();
    }

    const fightButton = document.getElementsByClassName(
      "rIq5E8Rv9JT2TsqMm8uZ"
    )[0]; // 'FIGHT!'
    if (fightButton) {
      try {
        const gameInfo = getGameInfo();
      } catch {
        console.warn("noGameInfo");
      }

      fightButton.click();
    }

    //
    const startButton = document.getElementsByClassName(
      "xCi4i7kqXSqWLw4LySAx"
    )[0]; // "Ranked battle"

    if (startButton) {
      // on start page
      // get the text
      const startText = startButton.textContent;
      if (startText.includes("Ranked battle")) {
        // battle!
        console.warn("battle");
        await wait(500);
        startButton.click();
      } else {
        // no games left

        // get the time left
        // '2700:43:04Ranked battle'.match(/(\d+):(\d+):(\d+)(.*)/)[4].slice(-2)
        const now = new Date();
        const regex = /(\d+):(\d+):(\d+)(.*)/;
        const matches = startText.match(regex);
        const currentGamesLeft = matches[1].slice(0, -2);
        const hour = matches[1].slice(-2);
        const minute = matches[2];
        const second = matches[3];

        console.warn(`no games left: ${currentGamesLeft}`);
        // startText
        const timeLeftForNext = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          hour,
          minute,
          second
        );
        console.warn(`timeLeftForNext: ${timeLeftForNext}`);
        // get current opp's rank
        const theirRating = getTheirRating();
        const myRating = getMyRating();
        console.warn(`theirRating: ${theirRating}; myRating: ${myRating}`);
        if (theirRating > theirRatingTolerance) {
          // condition to fair the playing ground
          console.warn("fair the ground");
          // play it
          await wait(500);
          startButton.click();
        } else {
          console.warn("let us wait");
        }
      }

      //   lastTouchTime = new Date();
    }
    const homeFightButton = document.getElementsByClassName(
      "c__Ec6W2GQLbn6MNtFmq"
    )[0]; // 'FIGHT!More $CORNIO'
    if (homeFightButton) {
      // check if all content is loaded
      homeFightButton.click();
    }
    const nextButton = document.getElementsByClassName(
      "Xqjvq9pvIzd2e_Zw1sq3"
    )[0]; // next button
    if (nextButton) {
      nextButton.click();
    }
  }
  setInterval(async () => {
    await checkStatus(); // Await the asynchronous function
  }, 2000);

  // Start observing the body for child changes
  //   observer.observe(document.body, { childList: true, subtree: true });

  //   setInterval(() => {
  //     tooLongRefreshInterval();
  //   }, intervalAmount * 1000);
  //   console.warn("Internal TIMEOUT set for every: ", intervalAmount, " seconds");
})();
