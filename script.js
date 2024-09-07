function pressElementCenter(element) {
  // Get the element's position
  if (element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Adjust x for the center of the element
    const y = rect.top + rect.height / 2; // Adjust y for the center of the element

    // Create a Touch object
    const touch = new Touch({
      identifier: Date.now(), // Unique identifier
      target: element, // The target element
      clientX: x, // X coordinate
      clientY: y, // Y coordinate
    });

    // Create touchstart event
    const touchStartEvent = new TouchEvent("touchstart", {
      bubbles: true,
      cancelable: true,
      touches: [touch],
      targetTouches: [touch],
      changedTouches: [touch],
    });

    // Dispatch the touchstart event
    element.dispatchEvent(touchStartEvent);

    // Wait briefly before dispatching touchend
    setTimeout(() => {
      // Create touchend event
      const touchEndEvent = new TouchEvent("touchend", {
        bubbles: true,
        cancelable: true,
        touches: [],
        targetTouches: [],
        changedTouches: [touch],
      });

      // Dispatch the touchend event
      element.dispatchEvent(touchEndEvent);

      // Optionally, simulate a click event
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      });

      element.dispatchEvent(clickEvent);
    }, 100); // Wait 100ms before firing touchend
  }
}

function runC() {
  console.log("hi");
  const close = document.getElementsByClassName("daily-close")[0];
  pressElementCenter(close);
  const earn = document.getElementsByClassName("tab-btn")[0];
  pressElementCenter(earn);

  console.log(location);
  location.reload();
}
// setInterval(() => {
//   runC();
// }, 10000);
setTimeout(() => {
  runC();
}, 5000);
