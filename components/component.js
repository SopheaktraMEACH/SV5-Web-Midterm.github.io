import { headerHTML } from './header.js';
import { footerHTML } from './footer.js';

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
});