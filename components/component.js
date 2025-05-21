const headerHTML = `
 <header id="header" class="header d-flex align-items-center fixed-top">
      <div
        class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        <a
          href="index.html"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img
            src="assets/img/2. SV5 - Logo SETEC - MEACH Sopheaktra.png"
            alt=""
          />
          <h1 class="sitename">SETEC Institue</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li class="header-item"><a href="./index.html">Home</a></li>
            <li class="header-item"><a href="./about.html">About</a></li>
            <li class="header-item"><a href="./service-details.html">Services</a></li>
            <li class="header-item"><a href="./donate.html">Donate</a></li>
            <li class="dropdown header-item">
              <a href="#"><span>Our Courses</span>
                <i class="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul class="option-dropdown">
                <li><a href="./courses.html">Software Engineering</a></li>
                <li><a href="./courses.html">Project Management</a></li>
                <li><a href="./courses.html">Network Engineering</a></li>
                <li><a href="./courses.html">Database Administrator</a></li>
                <li><a href="./courses.html">Graphic Design</a></li>
                <li><a href="./courses.html">Mobile Development</a></li>
                <li><a href="./courses.html">Web Development</a></li>
              </ul>
            </li>
            <li class="header-item"><a href="./login.html">Login</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted header-item" href="./enroll.html">Enroll now!</a>
      </div>
    </header>
`;

const footerHTML = `
  <footer id="footer" class="footer">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">SETEC Institue</span>
          </a>
          <div class="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p class="mt-3">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About us</a></li>
            <li><a href="./service-details.html">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="./courses.html">Web Design</a></li>
            <li><a href="./courses.html">Web Development</a></li>
            <li><a href="./courses.html">Product Management</a></li>
            <li><a href="./courses.html">Marketing</a></li>
            <li><a href="./courses.html">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Courses</h4>
          <ul>
            <li><a href="./courses.html">Software Engineering</a></li>
            <li><a href="./courses.html">Project Management</a></li>
            <li><a href="./courses.html">Network Engineering</a></li>
            <li><a href="./courses.html">Database Administrator</a></li>
            <li><a href="./courses.html">Mobile Development</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Download App</h4>
          <ul>
            <li><a href="#" class="animated"><img src="assets/img/play-store.webp" width="120"></a></li>
            <li><a href="#" class="animated"><img src="assets/img/app-store.webp" width="120"></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <div class="row">
        <div class="col-lg-4">
          <p>© <span>Copyright</span> <strong class="px-1 sitename f-logo">Setec Institute</strong> <span>All Rights Reserved</span></p>
          Designed by <a href="https://sabayhost.com/">Setec Institute - SV5</a>
        </div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          We accept:
          <img src="assets/img/ic_KHQR_x2.png" width="50">
          <img src="assets/img/ic_Paypal_x2.png" width="50">
        </div>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", function () {
  // Insert header and footer
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (header) header.innerHTML = headerHTML;
  if (footer) footer.innerHTML = footerHTML;

  // Set active navigation link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navmenu a").forEach((link) => {
    const linkHref = link.getAttribute("href").split("/").pop();
    link.classList.toggle("active", linkHref === currentPage);
  });

  // Make cards clickable to navigate to index.html
  document.querySelectorAll(".card.animated").forEach((card) => {
    card.style.cursor = "pointer"; // Visual feedback that card is clickable
    card.addEventListener('click', (event) => {
      if (!event.target.closest('a, button')) { // Skip if clicking on links/buttons
        window.location.href = 'course-detail.html';
      }
    });
  });

  // Login functionality (only on login page)
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "123") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password");
      }
    });

    // Allow login on Enter key press
    const passwordField = document.getElementById("password");
    if (passwordField) {
      passwordField.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          loginBtn.click();
        }
      });
    }
  }
});