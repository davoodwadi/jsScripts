// ==UserScript==
// @name         Ton wallet verify everyone
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
  const tooLongTolerance = 240; // seconds
  const intervalAmount = 240; // seconds
  const warnAmount = 80; // seconds

  // disable logs and warn
  window.console.log = () => {};
  window.console.info = () => {};
  window.console.debug = () => {};
  // with timeout to reduce slowdown

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

  let lastTouchTime = new Date();
  const cardNumbers = [24, 31, 25, 35, 33];
  let started = false;
  let addedNode;
  // Set up a MutationObserver to monitor changes in the body
  const observer = new MutationObserver(async (mutationsList, observer) => {
    tooLongRefresh();

    const fightButton = document.getElementsByClassName(
      "rIq5E8Rv9JT2TsqMm8uZ"
    )[0]; // 'FIGHT!'
    if (fightButton) {
      //   logState("F");
      //   logState(fightButton.textContent);
      fightButton.click();
    }
    // check for missing soldiers
    // <div id="unitCard25" class="CbIaO4pHH1atHblss2AG"> card not added
    // <div id="unitCard25" class="CbIaO4pHH1atHblss2AG dKUc0VNyMFss8wxlxggh"> card added
    // to add a card top to bottom
    // currently added: [24,31,25,35,33]
    // start from top to bottom

    //

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
      await wait(500);
      if (countCards() === 5) {
        actualStartButton.click();
      } else {
        await wait(20000);
        console.warn("WAITING 20 seconds more...");
        if (countCards() === 5) {
          actualStartButton.click();
        } else {
          const currentCards = countCards();
          const innerstartButtons = document.getElementsByClassName(
            "xCi4i7kqXSqWLw4LySAx"
          ); // "START"
          const inneractualStartButton = Array.from(innerstartButtons).filter(
            (b) => b.textContent === "START"
          )[0];
          if (inneractualStartButton && currentCards !== 5) {
            console.warn("INSUFFICIENT CARDS PRESENT: ", currentCards);
            location.reload();
          }
        }
      }

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
