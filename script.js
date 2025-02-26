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

// Ensure videos load their first frame without autoplaying
document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section) => {
    const video = section.querySelector(".background-video");

    // Force load the video
    video.load();

    // Move slightly forward to force rendering
    video.currentTime = 0.1; 

    // Add an event listener to ensure video is visible
    video.addEventListener("loadeddata", () => {
      video.style.display = "block"; // Make sure it's visible
    });
  });
});

sections.forEach((section) => {
  const video = section.querySelector(".background-video");

  section.addEventListener("mouseenter", () => {
    video.play();
    section.style.boxShadow = "0 0 100rem 100rem rgba(0, 0, 0, 0.7)";
  });

  section.addEventListener("mouseleave", () => {
    video.pause();
    section.style.boxShadow = "none";
  });
});

