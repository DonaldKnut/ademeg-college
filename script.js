// ===== ADEMEG COLLEGE WEBSITE - ADVANCED JAVASCRIPT =====

class AdemegCollegeWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.loadingScreen();
    this.navigation();
    this.smoothScrolling();
    this.animations();
    this.statistics();
    this.contactForm();
    this.backToTop();
    this.intersectionObserver();
    this.parallaxEffects();
    this.cursorEffects();
    this.imageSlider();
    this.contactFormHandler();
  }

  // ===== LOADING SCREEN =====
  loadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");

    // Simulate loading time
    setTimeout(() => {
      loadingScreen.classList.add("hidden");

      // Remove from DOM after animation
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 2000);
  }

  // ===== NAVIGATION =====
  navigation() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Mobile menu toggle
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("nav-open");
    });

    // Close mobile menu when clicking on links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("nav-open");
      });
    });

    // Active navigation highlighting
    this.updateActiveNav();
    window.addEventListener("scroll", () => this.updateActiveNav());
  }

  updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  }

  // ===== SMOOTH SCROLLING =====
  smoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // ===== ANIMATIONS =====
  animations() {
    // Hero title animation
    this.animateHeroTitle();

    // Floating shapes animation
    this.animateFloatingShapes();

    // Button hover effects
    this.buttonHoverEffects();

    // Card hover animations
    this.cardHoverAnimations();
  }

  animateHeroTitle() {
    const titleLines = document.querySelectorAll(".title-line");
    titleLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = "slideInUp 0.8s ease forwards";
      }, index * 200);
    });
  }

  animateFloatingShapes() {
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape, index) => {
      shape.style.animationDelay = `${index * 0.5}s`;
    });
  }

  buttonHoverEffects() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        this.createRippleEffect(e, button);
      });
    });
  }

  createRippleEffect(event, button) {
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  cardHoverAnimations() {
    const cards = document.querySelectorAll(
      ".feature-card, .program-card, .facility-card"
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
      });
    });
  }

  // ===== STATISTICS COUNTER =====
  statistics() {
    const statNumbers = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    statNumbers.forEach((stat) => observer.observe(stat));
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + "+";
    }, 16);
  }

  // ===== CONTACT FORM =====
  contactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmission(form);
    });

    // Form field animations
    this.setupFormAnimations();
  }

  setupFormAnimations() {
    const formGroups = document.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      const input = group.querySelector("input, textarea, select");
      const label = group.querySelector("label");

      if (input && label) {
        input.addEventListener("focus", () => {
          label.classList.add("active");
        });

        input.addEventListener("blur", () => {
          if (!input.value) {
            label.classList.remove("active");
          }
        });
      }
    });
  }

  async handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      this.showNotification("Message sent successfully!", "success");
      form.reset();
    } catch (error) {
      this.showNotification(
        "Failed to send message. Please try again.",
        "error"
      );
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  // ===== CONTACT FORM HANDLER =====
  contactFormHandler() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    // Initialize EmailJS (you'll need to add EmailJS script to HTML)
    if (typeof emailjs !== "undefined") {
      emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    }

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        // For now, we'll just show success message
        // To enable email sending, set up EmailJS:
        // 1. Go to https://emailjs.com and create account
        // 2. Create email service (Gmail recommended)
        // 3. Create email template
        // 4. Replace the placeholders below with your actual IDs

        console.log("Contact form submitted:", data);

        // TODO: Replace with actual EmailJS configuration
        // if (typeof emailjs !== "undefined") {
        //   await emailjs.send(
        //     "YOUR_SERVICE_ID", // Your EmailJS service ID
        //     "YOUR_TEMPLATE_ID", // Your EmailJS template ID
        //     {
        //       to_email: "Ademegcollege@gmail.com",
        //       from_name: data.name,
        //       from_email: data.email,
        //       phone: data.phone,
        //       subject: data.subject,
        //       message: data.message,
        //     }
        //   );
        // }

        this.showNotification(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        contactForm.reset();
      } catch (error) {
        console.error("Error sending email:", error);
        this.showNotification(
          "Failed to send message. Please try again or contact us directly.",
          "error"
        );
      } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // ===== NOTIFICATION SYSTEM =====
  showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => notification.remove());

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
            <i class="fas fa-${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "exclamation-circle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
        `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add("show"), 100);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });
  }

  // ===== BACK TO TOP =====
  backToTop() {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===== INTERSECTION OBSERVER =====
  intersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll("[data-aos]");
    animatedElements.forEach((el) => observer.observe(el));
  }

  // ===== PARALLAX EFFECTS =====
  parallaxEffects() {
    const parallaxElements = document.querySelectorAll(".hero-shapes .shape");

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${rate * speed}px)`;
      });
    });
  }

  // ===== CURSOR EFFECTS =====
  cursorEffects() {
    // Create custom cursor
    this.createCustomCursor();

    // Magnetic effect on buttons
    this.magneticEffect();
  }

  createCustomCursor() {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement("div");
    cursorFollower.className = "cursor-follower";
    document.body.appendChild(cursorFollower);

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let followerX = 0,
      followerY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      followerX += (mouseX - followerX) * 0.05;
      followerY += (mouseY - followerY) * 0.05;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

      requestAnimationFrame(animate);
    };
    animate();

    // Hide cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .nav-link"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(1.5)";
        cursorFollower.style.transform += " scale(1.2)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = cursor.style.transform.replace(
          " scale(1.5)",
          ""
        );
        cursorFollower.style.transform = cursorFollower.style.transform.replace(
          " scale(1.2)",
          ""
        );
      });
    });
  }

  magneticEffect() {
    const magneticElements = document.querySelectorAll(
      ".btn, .feature-card, .program-card"
    );

    magneticElements.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "translate(0, 0)";
      });
    });
  }

  // ===== IMAGE SLIDER =====
  imageSlider() {
    const sliderWrapper = document.getElementById("sliderWrapper");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    const dotsContainer = document.getElementById("sliderDots");

    if (!sliderWrapper || !slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    let isAutoPlaying = true;

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dot");

    function updateSlider() {
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
      });
    }

    function goToSlide(index) {
      currentSlide = index;
      updateSlider();
      resetAutoPlay();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function startAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(nextSlide, 4000);
      isAutoPlaying = true;
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
      isAutoPlaying = false;
    }

    function resetAutoPlay() {
      if (isAutoPlaying) {
        startAutoPlay();
      }
    }

    function toggleAutoPlay() {
      if (isAutoPlaying) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });

    // Pause auto-play on hover
    sliderWrapper.addEventListener("mouseenter", stopAutoPlay);
    sliderWrapper.addEventListener("mouseleave", startAutoPlay);

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    sliderWrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      stopAutoPlay();
    });

    sliderWrapper.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
      setTimeout(startAutoPlay, 2000); // Resume after 2 seconds
    });

    function handleSwipe() {
      const threshold = 50;
      if (endX - startX > threshold) {
        prevSlide();
      } else if (startX - endX > threshold) {
        nextSlide();
      }
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      // Don't interfere with form inputs
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
        resetAutoPlay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        resetAutoPlay();
      } else if (e.key === " ") {
        e.preventDefault();
        toggleAutoPlay();
      }
    });

    // Start auto-play
    startAutoPlay();

    // Add play/pause button to slider
    const playPauseBtn = document.createElement("button");
    playPauseBtn.className = "slider-play-pause";
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playPauseBtn.addEventListener("click", toggleAutoPlay);
    sliderWrapper.parentElement.appendChild(playPauseBtn);

    // Update play/pause button icon
    setInterval(() => {
      if (isAutoPlaying) {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseBtn.title = "Pause slideshow";
      } else {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playPauseBtn.title = "Play slideshow";
      }
    }, 100);
  }

  // ===== CONTACT FORM HANDLER =====
  contactFormHandler() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    // Initialize EmailJS (you'll need to add EmailJS script to HTML)
    if (typeof emailjs !== "undefined") {
      emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    }

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        // Send email using EmailJS
        if (typeof emailjs !== "undefined") {
          await emailjs.send(
            "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            {
              to_email: "your-email@gmail.com", // Replace with your Gmail
              from_name: data.name,
              from_email: data.email,
              phone: data.phone,
              subject: data.subject,
              message: data.message,
            }
          );

          this.showNotification(
            "Message sent successfully! We'll get back to you soon.",
            "success"
          );
          contactForm.reset();
        } else {
          // Fallback: Send to your own email service or show instructions
          this.showNotification(
            "Please email us directly at info@ademegcollege.com",
            "info"
          );
        }
      } catch (error) {
        console.error("Error sending email:", error);
        this.showNotification(
          "Failed to send message. Please try again or contact us directly.",
          "error"
        );
      } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // ===== NOTIFICATION SYSTEM =====
  showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => notification.remove());

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${
          type === "success"
            ? "check-circle"
            : type === "error"
            ? "exclamation-circle"
            : "info-circle"
        }"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add("show"), 100);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });
  }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Smooth easing functions
const easing = {
  easeInOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
};

// ===== INITIALIZATION =====

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the website
  new AdemegCollegeWebsite();

  // Add some additional global event listeners
  setupGlobalEventListeners();
});

function setupGlobalEventListeners() {
  // Preload images for better performance
  preloadImages();

  // Add keyboard navigation support
  setupKeyboardNavigation();

  // Add touch gesture support for mobile
  setupTouchGestures();
}

function preloadImages() {
  // Add any critical images that need to be preloaded
  const imageUrls = [
    // Add your Cloudinary image URLs here when ready
  ];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function setupKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // Escape key closes mobile menu
    if (e.key === "Escape") {
      const navMenu = document.getElementById("navMenu");
      const navToggle = document.getElementById("navToggle");
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        document.body.classList.remove("nav-open");
      }
    }
  });
}

function setupTouchGestures() {
  let startY = 0;
  let startX = 0;

  document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", (e) => {
    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;
    const diffY = startY - endY;
    const diffX = startX - endX;

    // Swipe up gesture
    if (diffY > 50 && Math.abs(diffX) < 50) {
      // Could trigger scroll to next section
    }

    // Swipe down gesture
    if (diffY < -50 && Math.abs(diffX) < 50) {
      // Could trigger scroll to previous section
    }
  });
}

// ===== PERFORMANCE OPTIMIZATION =====

// Use requestIdleCallback for non-critical tasks
if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    // Initialize non-critical features
    initializeNonCriticalFeatures();
  });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(initializeNonCriticalFeatures, 1000);
}

function initializeNonCriticalFeatures() {
  // Add any non-critical features here
  console.log("Ademeg College website initialized successfully!");
}

// ===== ERROR HANDLING =====

window.addEventListener("error", (e) => {
  console.error("Website error:", e.error);
  // Could send error to analytics service
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  // Could send error to analytics service
});
