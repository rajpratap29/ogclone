document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (nav.classList.contains("active")) {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
      }

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form validation
  const form = document.getElementById("reservation-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset error messages
      document.querySelectorAll(".error-message").forEach((error) => {
        error.style.display = "none";
      });

      let isValid = true;

      // Validate name
      const nameInput = document.getElementById("name");
      if (!nameInput.value.trim()) {
        document.getElementById("name-error").textContent =
          "Please enter your name";
        document.getElementById("name-error").style.display = "block";
        isValid = false;
      }

      // Validate email
      const emailInput = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !emailInput.value.trim() ||
        !emailRegex.test(emailInput.value.trim())
      ) {
        document.getElementById("email-error").textContent =
          "Please enter a valid email address";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
      }

      // Validate purpose
      const purposeSelect = document.getElementById("purpose");
      if (purposeSelect.value === "") {
        document.getElementById("purpose-error").textContent =
          "Please select your purpose";
        document.getElementById("purpose-error").style.display = "block";
        isValid = false;
      }

      // If form is valid, show success message
      if (isValid) {
        form.style.display = "none";
        successMessage.style.display = "block";

        // Scroll to success message
        window.scrollTo({
          top: successMessage.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".feature-card, .fade-in-up, .domain-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        if (element.classList.contains("feature-card")) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        } else if (element.classList.contains("fade-in-up")) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        } else if (element.classList.contains("domain-card")) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      }
    });
  };

  // Initial check for elements in view
  animateOnScroll();

  // Check for elements in view on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Background animation
  const createParticles = () => {
    const backgroundAnimation = document.querySelector(".background-animation");
    if (!backgroundAnimation) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 5px and 15px
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random opacity
      particle.style.opacity = Math.random() * 0.5;

      // Random animation duration
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s infinite ease-in-out`;

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 10}s`;

      // Random background color
      const colors = [
        "rgba(79, 70, 229, 0.2)",
        "rgba(16, 185, 129, 0.2)",
        "rgba(79, 70, 229, 0.1)",
      ];
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Add particle to background
      backgroundAnimation.appendChild(particle);
    }
  };

  // Create particles for background animation
  createParticles();
});

// Add CSS for particles
const style = document.createElement("style");
style.textContent = `
    .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(50px, 50px);
        }
        50% {
            transform: translate(0, 100px);
        }
        75% {
            transform: translate(-50px, 50px);
        }
    }
`;
document.head.appendChild(style);

