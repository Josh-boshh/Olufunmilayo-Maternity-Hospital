function openPopUp(){
document.getElementById("pop-uppy").style.display = "block";
document.getElementById("overlayer").style.display = "block";
}

function closePopUp(){
document.getElementById("pop-uppy").style.display = "none";
document.getElementById("finished").style.display = "none";
document.getElementById("overlayer").style.display = "none";
}

function clicky(){
document.getElementById("finished").style.display = "block";
document.getElementById("pop-uppy").style.display = "none";

}

// Get all stars
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  // Hover effect to fill stars up to the hovered one
  star.addEventListener('mouseover', () => fillStars(index + 1));
  
  // Click event to set the rating
  star.addEventListener('click', () => setRating(index + 1));
  
  // Reset to current rating when not hovering
  star.addEventListener('mouseout', () => fillStars(currentRating));
});

// Store the current rating
let currentRating = 0;

// Function to fill stars up to a given index
function fillStars(rating) {
  stars.forEach((star, index) => {
    star.style.fill = index < rating ? 'gold' : 'gray'; 
  });
}

// Function to set and lock the rating
function setRating(rating) {
  currentRating = rating;
  fillStars(rating);
}

