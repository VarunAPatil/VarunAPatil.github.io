(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const colorMeta = document.querySelector('meta[name="theme-color"]');

  const updateTheme = (theme) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    if (colorMeta) colorMeta.setAttribute("content", isDark ? "#1c1d1b" : "#faf9f6");
    if (button) {
      button.setAttribute("aria-checked", String(isDark));
    }
  };

  updateTheme(root.dataset.theme === "dark" ? "dark" : "light");
  button?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    updateTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (_) {
      // The selected theme still applies for this page if storage is unavailable.
    }
  });
})();
