// ==UserScript==
// @name         Telegram Ton wallet reload
// @namespace    http://www.google.com/
// @version      2024-09-03
// @description  ton
// @author       You
// @match        https://web.telegram.org/k/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";
  // Timeout to refresh page after 1 hour
  const timeoutAmount = 60 * 60 * 1; // refresh time in seconds

  const startTime = new Date();
  //   console.log("*".repeat(50));
  console.info(`hello Telegram: startTime: ${startTime}`);
  console.info(`TELEGRAM refresh in ${timeoutAmount} seconds`);
  console.info(location);
  //   console.log("*".repeat(50));

  // Function to generate a random delay between min and max milliseconds
  function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  if (location.href === "https://web.telegram.org/k/#@corn") {
    const observer = new MutationObserver((mutationsList, observer) => {
      //   console.log("*".repeat(50));
      const playButton = document.getElementsByClassName(
        "new-message-bot-commands"
      )[0];
      if (playButton) {
        // console.log("*".repeat(50));
        //   console.log(mutation);
        // console.log(playButton);
        // console.log("*".repeat(50));
        console.info("DONE RUN");
        //
        //

        setTimeout(() => {
          //   console.log("WAY BEFORE CLICKED!");

          // Get the bounding rectangle of the playButton
          const rect = playButton.getBoundingClientRect();

          // Calculate the center point
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Create a touchstart event
          const touchStartEvent = new MouseEvent("mousedown", {
            clientX: centerX,
            clientY: centerY,
            bubbles: true,
            cancelable: true,
          });

          // Create a touchend event
          const touchEndEvent = new MouseEvent("mouseup", {
            clientX: centerX,
            clientY: centerY,
            bubbles: true,
            cancelable: true,
          });

          //   console.log("BEFORE TOUCH STARTED!");
          // Dispatch touchstart (mousedown)
          playButton.dispatchEvent(touchStartEvent);
          //   console.log("TOUCH STARTED!");

          // Dispatch touchend (mouseup) after a slight delay
          setTimeout(() => {
            playButton.dispatchEvent(touchEndEvent);
            console.info("TOUCH ENDED!");
          }, 100); // Short delay between mousedown and mouseup
        }, 16000);
        // page refresh timeout
        console.info(`SETTING refresh in ${timeoutAmount} seconds`);
        setTimeout(() => {
          const currentTime = new Date();
          console.info("RELOADED!");
          console.info(`ran from ${startTime} -> ${currentTime}`);
          location.reload();
        }, timeoutAmount * 1000);
        //
        //
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
