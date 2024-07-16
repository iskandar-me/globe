"use strict";
// ------------Toggles cities-------------//

const cityToggleBtn = document.querySelector(".toggle-cities-btn");
const hiddenCities = document.querySelectorAll(".hidden-city");
const seeLessCitiesBtn = document.querySelector(".see-less-cities-btn");

function toggleCity() {
   hiddenCities.forEach((city) => {
      city.classList.toggle("hidden");
      city.classList.toggle("flex");

      if (city.classList.contains("hidden")) {
         cityToggleBtn.textContent = "See more places";
         seeLessCitiesBtn.classList.add("hidden");
      } else {
         cityToggleBtn.textContent = "See less places";
         seeLessCitiesBtn.classList.remove("hidden");
         window.scrollBy({
            top: 350,
            left: 0,
            behavior: "smooth",
         });
      }
   });
}

cityToggleBtn.addEventListener("click", toggleCity);
seeLessCitiesBtn.addEventListener("click", toggleCity);

// ------------Toggle reviews----------------- ///
const hiddenReviews = document.querySelectorAll(".hidden-review"),
   toggleReviewBtn = document.querySelector(".toggle-review-btn"),
   seeLessReviewsBtn = document.querySelector(".see-less-reviews-btn");

function toggleReview() {
   hiddenReviews.forEach((review) => {
      review.classList.toggle("hidden");
      review.classList.toggle("flex");
      if (review.classList.contains("hidden")) {
         toggleReviewBtn.textContent = "See more reviews";
         seeLessReviewsBtn.classList.add("hidden");
      } else {
         toggleReviewBtn.textContent = "See less reviews";
         seeLessReviewsBtn.classList.remove("hidden");
         window.scrollBy({
            top: 600,
            left: 0,
            behavior: "smooth",
         });
      }
   });
}

toggleReviewBtn.addEventListener("click", toggleReview);
seeLessReviewsBtn.addEventListener("click", toggleReview);
