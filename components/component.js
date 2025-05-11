import { headerHTML } from './header.js';

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = headerHTML;
  }
});

