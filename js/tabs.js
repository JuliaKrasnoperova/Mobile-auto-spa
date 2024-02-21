"use strict";

// Tabs
const tabs = document.querySelectorAll(".tabs__item");
const tabsContent = document.querySelectorAll(".tabs__content");
const tabsParent = document.querySelector(".tabs__list");

export const clickTabs = () => {
  if (document.contains(tabsParent)) {
    const hideTabContent = () => {
      tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });

      tabs.forEach((item) => {
        item.classList.remove("tabs__item_active");
      });
    };

    const showTabContent = (i = 0) => {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add("tabs__item_active");
    };

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
};
