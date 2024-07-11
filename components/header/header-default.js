"use strict";
const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", (e) => {
   openSideBar();
});

overlay.addEventListener("click", (e) => {
   closeSideBar();
});
function openSideBar() {
   overlay.classList.remove("hidden");
   sideBar.classList.remove("hidden");
   document.body.classList.add("overflow-hidden");
}
function closeSideBar() {
   overlay.classList.add("hidden");
   sideBar.classList.add("hidden");
   document.body.classList.remove("overflow-hidden");
   document.body.classList.add("overflow-auto");
}

function toggleSidebar() {
   if (window.innerWidth > 768) {
      overlay.classList.add("hidden");
      sideBar.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("overflow-auto");
   }
}
window.addEventListener("resize", toggleSidebar);
