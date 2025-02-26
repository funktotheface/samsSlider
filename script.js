// const videos = document.querySelectorAll(".background-video");

// videos.forEach((video) => {
//   video.addEventListener("mouseenter", () => {
//     video.play();
//   });

//   video.addEventListener("mouseleave", () => {
//     video.pause();
//   });
// });

// const sections = document.querySelectorAll(".section1, .section2, .section3");
// const container = document.querySelector(".container");

// sections.forEach((section) => {
//   const video = section.querySelector(".background-video");

//   section.addEventListener("mouseenter", () => {
//     video.play();
//     section.style.boxShadow = "0 0 100rem 100rem rgba(0, 0, 0, 0.7)";
//   });

//   section.addEventListener("mouseleave", () => {
//     video.pause();
//     section.style.boxShadow = "none";
//   });
// });

const sections = document.querySelectorAll(".section1, .section2, .section3");

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section) => {
    const video = section.querySelector(".background-video");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Wait for the video to load its first frame
    video.addEventListener("loadeddata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Set the section's background image to the captured frame
      section.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;
      section.style.backgroundSize = "cover";
      section.style.backgroundPosition = "center";
    });
  });
});

sections.forEach((section) => {
  const video = section.querySelector(".background-video");

  section.addEventListener("mouseenter", () => {
    video.play();
    section.style.boxShadow = "0 0 100rem 100rem rgba(0, 0, 0, 0.7)";
    section.style.backgroundImage = "none"; // Remove background image when playing
  });

  section.addEventListener("mouseleave", () => {
    video.pause();
    section.style.boxShadow = "none";
  });
});

