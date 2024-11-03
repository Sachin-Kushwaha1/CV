document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Set initial theme based on saved preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
