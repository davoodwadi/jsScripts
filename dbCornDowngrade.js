// ==UserScript==
// @name         dbLog Ton wallet down TURSO
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
  const formation = "singer98-berg80-blacklady90-scare100-batman80";
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
    fetch("http://localhost:3000/add-battle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameInfo), // Send the collected messages
    });
  }

  let lastTouchTime = new Date();
  // const cardNumbers = [24, 31, 25, 35, 33];
  // let started = false;
  // let addedNode;
  // Set up a MutationObserver to monitor changes in the body
  const observer = new MutationObserver(async (mutationsList, observer) => {
    tooLongRefresh();

    const fightButton = document.getElementsByClassName(
      "rIq5E8Rv9JT2TsqMm8uZ"
    )[0]; // 'FIGHT!'
    if (fightButton) {
      //   logState("F");
      //   logState(fightButton.textContent);
      const gameInfo = getGameInfo();

      fightButton.click();
    }
    // check for missing soldiers
    // <div id="unitCard25" class="CbIaO4pHH1atHblss2AG"> card not added
    // <div id="unitCard25" class="CbIaO4pHH1atHblss2AG dKUc0VNyMFss8wxlxggh"> card added
    // to add a card top to bottom
    // currently added: [24,31,25,35,33]
    // start from top to bottom

    // <button id="unit1" class="VY1lF2QFgXoqcqfLXcNr wr4M7nfiVh6l9GmbKFiC"><div class="s5LnCEnt6ARco53vzyNf"></div></button>
    // <button id="unit1" class="VY1lF2QFgXoqcqfLXcNr wr4M7nfiVh6l9GmbKFiC"><div class="s5LnCEnt6ARco53vzyNf"></div></button>

    // to remove a card:
    // <button id="unit1" class="VY1lF2QFgXoqcqfLXcNr wr4M7nfiVh6l9GmbKFiC"><div class="s5LnCEnt6ARco53vzyNf"></div></button>
    // const unit1Button = document.querySelector('#unit1')
    // unit1Button.click() removes the top left card
    // removes all cards
    // const clearSoldiersButton = document.getElementsByClassName('kxSUayiOfLzaVHwUbmLg')[0]
    //

    //
    const startButtons = document.getElementsByClassName(
      "xCi4i7kqXSqWLw4LySAx"
    ); // "START"
    const actualStartButton = Array.from(startButtons).filter(
      (b) => b.textContent === "START"
    )[0];
    if (actualStartButton) {
      //   logState("S");
      //   logState(actualStartButton);
      //   logState(actualStartButton.textContent);
      // check to see cards are on the board. if not add them
      //   await addCards(cardNumbers);
      //
      // No check; just click!
      await wait(500);
      actualStartButton.click();

      lastTouchTime = new Date();
    }
    const homeFightButton = document.getElementsByClassName(
      "c__Ec6W2GQLbn6MNtFmq"
    )[0]; // 'FIGHT!More $CORNIO'
    if (homeFightButton) {
      // check if all content is loaded
      //   logState("HF");
      //   logState(homeFightButton.textContent);
      homeFightButton.click();
    }
    const nextButton = document.getElementsByClassName(
      "Xqjvq9pvIzd2e_Zw1sq3"
    )[0]; // next button
    if (nextButton) {
      //   logState("N");
      //   logState(nextButton.textContent);
      nextButton.click();
    }
  });

  // Start observing the body for child changes
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    tooLongRefreshInterval();
  }, intervalAmount * 1000);
  console.warn("Internal TIMEOUT set for every: ", intervalAmount, " seconds");
})();
