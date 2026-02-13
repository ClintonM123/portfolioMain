// Interactive portfolio greeting
const title = document.getElementById("title");

if (title) {
  title.style.cursor = "pointer";
  title.addEventListener("click", () => {
    const userName = prompt("Welcome! What's your name?");
    if (userName && userName.trim() !== "") {
      title.textContent = `Welcome, ${userName}! 👋 to Meshack Clinton's Portfolio`;
      // Reset after 5 seconds
      setTimeout(() => {
        title.textContent = "Welcome to My Portfolio";
      }, 5000);
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.boxShadow = "0 10px 30px rgba(30, 64, 175, 0.3)";
  } else {
    nav.style.boxShadow = "0 10px 30px rgba(30, 64, 175, 0.2)";
  }
});
