"use strict";

import { preloader } from "./preloader.js";
import { scrollFunction } from "./buttonUp.js";
import { clickTabs } from "./tabs.js";
import { accordionClick } from "./accordion.js";
import { burgerMenu } from "./burgerMenu.js";
import { swiperLoad } from "./swiper.js";
import { videoLoad } from "./video.js";
import { validate } from "./formValidation.js";

preloader();
scrollFunction();
clickTabs();
accordionClick();
burgerMenu();
swiperLoad();
videoLoad();
validate();
