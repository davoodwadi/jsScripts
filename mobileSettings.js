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
