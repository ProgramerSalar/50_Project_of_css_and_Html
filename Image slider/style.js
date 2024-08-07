const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev");
const immmmmmgsE1 = document.querySelector("img");
const imageContainerE1 = document.querySelector(".image-container");

let currentImg = 1;
let timeout;

nextE1.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevE1.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();

function updateImg(){
    if (currentImg > imgsEl.length) {
        currentImg = 1;
      } else if (currentImg < 1) {
        currentImg = imgsEl.length;
      }
      imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
      timeout = setTimeout(() => {
        currentImg++;
        updateImg();
      }, 3000);  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
