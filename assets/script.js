// Close the navbar menu on scroll
document.addEventListener("scroll", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.click();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarCollapse = document.getElementById("navbarNav");
    var navLinks = navbarCollapse.querySelectorAll(".nav-link");
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 768 && navbarCollapse.classList.contains("show")) {
                bsCollapse.hide();
            }
        });
    });
});
