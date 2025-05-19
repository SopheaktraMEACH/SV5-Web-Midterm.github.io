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
            <li class="header-item"><a href="#hero" class="active">Home</a></li>
            <li class="header-item"><a href="#about">About</a></li>
            <li class="header-item"><a href="#features">Services</a></li>
            <li class="header-item"><a href="#features">Donate</a></li>
            <li class="dropdown header-item">
              <a href="#"><span>Our Courses</span>
                <i class="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul class="option-dropdown">
                <li><a href="#">Software Engineering</a></li>
                <li><a href="#">Project Management</a></li>
                <li><a href="#">Network Engineering</a></li>
                <li><a href="#">Database Administrator</a></li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Web Development</a></li>
              </ul>
            </li>
            <li class="header-item"><a href="#contact">Login</a></li>
            <li></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted header-item" href="index.html#about">Enroll Now!</a>
      </div>
    </header>
`;
