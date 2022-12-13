const butt = document.querySelector(".pride-production__video-control");
const videoPlay = document.getElementById("video");
const video = document.querySelector('.video');

function playClip(media) {
  media.play();
}

butt.addEventListener("click", function () {
  video.classList.add("hide");
  butt.style.opacity = "0";
  playClip(videoPlay)

});