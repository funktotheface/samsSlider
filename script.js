// const videos = document.querySelectorAll(".background-video");

// videos.forEach((video) => {
//   video.addEventListener("mouseenter", () => {
//     video.play();
//   });

//   video.addEventListener("mouseleave", () => {
//     video.pause();
//   });
// });


const sections = document.querySelectorAll(".section1, .section2, .section3");
const container = document.querySelector(".container");

sections.forEach((section) => {
  const video = section.querySelector(".background-video");

  section.addEventListener("mouseenter", () => {
    video.play();
   container.style.boxShadow = "0 0 20px 20px rgba(0, 0, 0, 0.5)";

  });

  section.addEventListener("mouseleave", () => {
    video.pause();
    container.style.boxShadow = "none";
  });
});

sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    document.body.style.backgroundImage = "linear-gradient(rgb(51, 0, 0), rgb(0, 0, 0))";
  });

  section.addEventListener("mouseleave", () => {
    document.body.style.backgroundImage = "linear-gradient(rgb(185, 3, 3), rgb(0, 0, 0))";
  });
});


