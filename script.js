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

sections.forEach((section) => {
  const video = section.querySelector(".background-video");

  section.addEventListener("mouseenter", () => {
    video.play();

  });

  section.addEventListener("mouseleave", () => {
    video.pause();
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


