"use strict";
const userProfile = document.querySelector(".user__profile");
const userArrowDownIcon = document.querySelector(".user__arrow-down-icon");
const userActionsModal = document.querySelector(".user__actions-modal");
const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
userProfile.addEventListener("click", (e) => {
   toggleProfileModal();
});

menuBtn.addEventListener("click", (e) => {
   openSideBar();
   closeProfileModal();
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

function toggleProfileModal() {
   // Open profile modal
   userActionsModal.classList.toggle("hidden");
   userArrowDownIcon.classList.toggle("rotate-180");
}
function closeProfileModal() {
   userActionsModal.classList.add("hidden");
   userArrowDownIcon.classList.remove("rotate-180");
}
//
function toggleSidebar() {
   if (window.innerWidth > 768) closeSideBar();
}
window.addEventListener("resize", toggleSidebar);

 document.querySelector('.id').addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('clicked');
 })
 document.querySelector('.name').addEventListener('click',(e)=>{
e.stopPropagation()
  console.log(e.target);
 })