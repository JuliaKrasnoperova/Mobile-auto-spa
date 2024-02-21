"use srtict";

// Video
export const videoLoad = () => {
  const links = document.querySelectorAll("#video");

  links.forEach(function (video) {
    video.addEventListener("click", () => {
      if (video.classList.contains("ready")) {
        return;
      }

      const src = video.dataset.src;

      video.classList.add("ready");
      video.insertAdjacentHTML(
        "afterbegin",
        `<iframe src= ${src} title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`
      );
    });
  });
};
