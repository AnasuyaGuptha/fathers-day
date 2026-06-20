// Floating Hearts

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
  (Math.random() * 20 + 15) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);

}

setInterval(createHeart, 700);

// Letter Button

document
.getElementById("messageBtn")
.addEventListener("click", () => {

  alert(`Dear Dad ❤️

Thank you for being my first teacher,
my greatest supporter,
and my strongest inspiration.

Every success in my life carries
a part of your sacrifice.

Happy Father's Day ❤️`);

});

// Surprise Message

document
.getElementById("surpriseBtn")
.addEventListener("click", () => {

document.getElementById("surpriseMessage").innerHTML =

`❤️ Dad,

You are my hero,
my role model,
and my biggest blessing.

Thank you for every sacrifice,
every lesson,
and every smile.

I love you forever ❤️`;

});

// Lightbox Gallery

const images =
document.querySelectorAll(".memory-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

images.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

  });

});

document
.getElementById("closeLightbox")
.addEventListener("click", () => {

  lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.style.display = "none";
  }

});
