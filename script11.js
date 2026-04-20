// ===================================================
// script11.js — Interactive Features for My Future Career Website
// ===================================================

// ---------------------------------------------------
// Feature 1: Show / Hide Extra Info (Toggle Text)
// ---------------------------------------------------
function toggleInfo() {
  var extraInfo = document.getElementById("extraInfo");
  var btn = document.getElementById("toggleBtn");

  if (extraInfo.classList.contains("hidden")) {
    extraInfo.classList.remove("hidden");
    btn.textContent = "Show Less";
  } else {
    extraInfo.classList.add("hidden");
    btn.textContent = "Show More About Me";
  }
}

// ---------------------------------------------------
// Feature 2: Change Page Theme (Color Change)
// ---------------------------------------------------
function changeTheme() {
  var body = document.body;

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    alert("Switched to Light Theme!");
  } else {
    body.classList.add("dark-theme");
    alert("Switched to Dark Theme!");
  }
}

// ---------------------------------------------------
// Feature 3: Alert Message — Send a Quick Hello
// ---------------------------------------------------
function sendMessage() {
  alert("Hello! Thank you for visiting My Future Career website.\nI will get back to you soon!");
}

// ---------------------------------------------------
// Feature 4: Smooth Scroll for Navigation Links
// ---------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        event.preventDefault();
        var targetId = href.substring(1);
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
          var offset = 60;
          var top = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      }
    });
  });
});

// ---------------------------------------------------
// Feature 5: Highlight Active Navigation Link on Scroll
// ---------------------------------------------------
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("main section");
  var navLinks = document.querySelectorAll("nav ul li a");
  var currentSection = "";

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 80;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.style.backgroundColor = "";
    link.style.color = "#ffffff";

    if (link.getAttribute("href") === "#" + currentSection) {
      link.style.backgroundColor = "#1a365d";
      link.style.color = "#bee3f8";
    }
  });
});
