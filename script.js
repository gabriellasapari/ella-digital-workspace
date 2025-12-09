// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  // Close nav when link clicked (mobile)
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
    });
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple helper for contact form button – copy message template
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  const button = contactForm.querySelector("button[type='submit']");
  const messageField = document.getElementById("message");

  if (button && messageField) {
    button.addEventListener("click", () => {
      if (!messageField.value.trim()) {
        messageField.value =
          "Hi Ella, I would like to work with you on a new landing page.\n\n" +
          "Who I am:\n" +
          "My project / business:\n" +
          "What I need (landing page / website / digital product page):\n" +
          "Preferred language(s):\n" +
          "Deadline:\n" +
          "Budget range:\n";
      }
      messageField.focus();
      messageField.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        // ignore if copy is blocked
      }
    });
  }
}

