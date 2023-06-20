"use strict";
// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = document.querySelectorAll(".tabs__item");
  const tabsContent = document.querySelectorAll(".tabs__content");
  const tabsParent = document.querySelector(".tabs__list");
  if (document.contains(tabsParent)) {
    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });

      tabs.forEach((item) => {
        item.classList.remove("tabs__item_active");
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add("tabs__item_active");
    }

    hideTabContent();
    showTabContent();
    tabsParent.addEventListener("click", (event) => {
      const target = event.target;

      if (target && target.classList.contains("tabs__item")) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  // Accordion
  const accordion_item = document.querySelectorAll(".accordion__item");

  accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion__header");

    accordion_header_item.addEventListener("click", () => {
      const accordion_content_item = item.querySelector(".accordion__content");

      const item_actived = document.querySelector(".accordion__active");

      VerifyActive(item, accordion_content_item, item_actived);
    });
  });

  function VerifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".accordion__icon");
    const icon_item_active = document.querySelectorAll(".accordion__icon");

    icon_item_active.forEach((item) => (item.innerHTML = "+"));

    if (content_actived) {
      content_actived.style.height = 0;
      content_actived.classList.remove("accordion__active");
    }

    if (content !== content_actived) {
      icon_item.innerHTML = "-";
      content.classList.add("accordion__active");
      content.style.height = content.scrollHeight + 10 + "px";
    }
  }
});
