/* ----Site-wide cursor----- */
const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");

document.addEventListener("mousemove", function (evt) {
  site_wide_cursor.style.left = evt.pageX + "px";
  site_wide_cursor.style.top = evt.pageY + "px";
  site_wide_cursor.style.display = "block";
});

document.addEventListener("mousedown", function () {
  site_wide_cursor.classList.add("active");
});

document.addEventListener("mouseup", function () {
  site_wide_cursor.classList.remove("active");
});

// Box Bound Cursors - This part might need adjustments based on your needs
const boxes = document.querySelectorAll(".boxes .box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    site_wide_cursor.style.display = "none";
  });

  box.addEventListener("mouseleave", function () {
    site_wide_cursor.style.display = "block";
  });
});

/* ----head----- */
document.addEventListener("DOMContentLoaded", (event) => {
  const audioPlayer = document.getElementById("weijiazhuaudioPlayer");

  const spokenElements = document.querySelectorAll(".spoken");

  spokenElements.forEach((el) => {
    el.addEventListener("mouseover", () => {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;

      videoPlayer.pause();
      videoPlayer.currentTime = 0;

      audioPlayer.src = el.dataset["audiofile"]; // that's interesting, the "audioFile" in "data-audioFile" becomes "audiofile"
      audioPlayer.play();
      videoPlayer.play();
    });

    el.addEventListener("mouseleave", () => {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;

      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    });
  });
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
