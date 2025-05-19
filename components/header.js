export const headerHTML = `
 <header id="header" class="header d-flex align-items-center fixed-top">
      <div
        class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
      >
        <a
          href="index.html"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
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
            <li></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted header-item" href="./enroll.html">Enroll now!</a>
      </div>
    </header>
`;
