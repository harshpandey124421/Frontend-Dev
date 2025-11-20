// Q5_image_gallery_with_modal.js
"use strict";

// HTML assumed:
// grid of images with class 'img'
// modal: #modal, #modalImg, overlay click to close

let images = document.querySelectorAll(".img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");

images.forEach(img => {
  img.onclick = (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  };
});

modal.onclick = () => modal.style.display = "none";
modalImg.onclick = (e) => e.stopPropagation();
