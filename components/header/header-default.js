"use strict";
const menuBtn = document.querySelector(".menu-btn");
const sideBar= document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
menuBtn.addEventListener("click", (e) => {
   console.log(e.target);
   sideBar.classList.toggle("hidden");
   overlay.classList.remove("hidden");
   document.body.classList.add("overflow-hidden")
});

overlay.addEventListener("click", (e) => {
   sideBar.classList.add("hidden");
   overlay.classList.add("hidden");
   document.body.classList.remove("overflow-hidden")
   document.body.classList.add("overflow-auto")
});
