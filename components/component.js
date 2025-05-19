import { headerHTML } from "./header.js";
import { footerHTML } from "./footer.js";

document.addEventListener("DOMContentLoaded", function () {
  // Insert header
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = headerHTML;
  }

  // Insert footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = footerHTML;
  }

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navmenu a").forEach((link) => {
    const linkHref = link.getAttribute("href").split("/").pop();
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  document.querySelectorAll('.card.animated').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = './course-detail.html'; // target page URL
  });
});

});
