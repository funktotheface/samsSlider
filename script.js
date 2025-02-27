const sections = document.querySelectorAll(".section1, .section2, .section3");

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
