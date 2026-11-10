// Distribuidora El Dorado — small progressive enhancements.
(function () {
  "use strict";

  // Add a subtle shadow to the sticky header once the page is scrolled.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 6px 20px rgba(43, 34, 64, 0.10)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
