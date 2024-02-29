/* ----head----- */

const audioPlayer = new Audio();

const spokenElements = document.querySelectorAll(".spoken");

// TODO : test it
spokenElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    audioPlayer.src = el.dataset["audioFile"];
    audioPlayer.play();
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  var imagePlayer = document.getElementById("imagePlayer");
  var audioPlayer = document.getElementById("weijiazhuaudioPlayer");
  var videoPlayer = document.getElementById("videoPlayer"); // 获取视频元素
  var hoverText = document.querySelector(".weijiazhuhovertext");

  if (hoverText) {
    hoverText.addEventListener("mouseover", function () {
      // 检查图片是否不显示
      if (imagePlayer.style.display === "none") {
        // 如果图片不显示，则播放音频和视频
        if (audioPlayer.paused) {
          audioPlayer.play();
        }
        if (videoPlayer.paused) {
          videoPlayer.play(); // 播放视频
        }
      }
    });

    hoverText.addEventListener("mouseleave", function () {
      // 鼠标离开时都暂停并重置音频和视频
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }
      if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // 暂停视频并重置播放时间
      }
    });
  }
});

/* ----intro----- */

/* ----speaking----- */
// JavaScript代码
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("videoPlayer");
  var image = document.getElementById("imagePlayer");
  var toggleText = document.getElementById("toggleText");

  // 点击视频时显示图片
  video.addEventListener("click", function () {
    video.style.display = "none";
    image.style.display = "inline";
    toggleText.textContent = "CLICK TO START VOICE";
  });

  // 点击图片时显示视频
  image.addEventListener("click", function () {
    image.style.display = "none";
    video.style.display = "inline";
    toggleText.textContent = "CLICK TO STOP VOICE";
  });

  const projectsElements = document.querySelectorAll(".projectlist li");
  const projectsPics = document.querySelectorAll(".projectpics img");

  hideAllProjectPics();

  projectsElements.forEach((el) =>
    el.addEventListener("mouseover", () => {
      hideAllProjectPics();
      document.querySelector(
        ".projectpics #" + el.dataset["projectpic"]
      ).style.display = "unset";
    })
  );

  function hideAllProjectPics() {
    projectsPics.forEach((pp) => (pp.style.display = "none"));
  }
});
