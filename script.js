document.getElementById("toggle-style").addEventListener("click", function() {
  let theme = document.getElementById("theme-style");
  let button = document.getElementById("toggle-style");
  let body = document.body;

  if (theme.getAttribute("href") === "style.css") {
    theme.setAttribute("href", "sunshine.css");
    body.classList.remove("cyber");
    body.classList.add("sunshine");
    button.textContent = "Cyber";
  } else {
    theme.setAttribute("href", "style.css");
    body.classList.remove("sunshine");
    body.classList.add("cyber");
    button.textContent = "Sunshine";
  }
});
