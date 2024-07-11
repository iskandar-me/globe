"use strict";
window.addEventListener("scroll", function () {
   const header = document.querySelector(".header");
   header.classList.toggle("bg-[#112211bb]", window.scrollY > 0);
   header.classList.toggle("fixed", window.scrollY > 0);
   header.classList.toggle("rounded-b-lg", window.scrollY > 0);
});
