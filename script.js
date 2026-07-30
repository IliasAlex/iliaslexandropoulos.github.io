(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!header || !menuButton || !navigation) {
    return;
  }

  const menuLabel = menuButton.querySelector(".sr-only");
  const mobileBreakpoint = 720;

  const setMenuState = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    document.documentElement.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Close navigation" : "Open navigation";
    }
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > mobileBreakpoint) {
      setMenuState(false);
    }
  });
})();
