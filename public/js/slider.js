import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
// import "../../../node_modules/swiper/swiper-bundle.css";
// import "../../node_modules/swiper/swiper-bundle.css";
// import "../../node_modules/swiper/swiper-bundle.js";
const swiperhero = new Swiper(".swiperhero", {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".heroNext-btn",
    prevEl: ".heroPrev-btn",
  },
  loop: true,
  speed: 500,
  spaceBetween: 50,
  slidesPerView: 2,
  autoplay: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

const swiperhero1 = new Swiper(".swiperhero1", {
  modules: [Navigation, Autoplay, Pagination],
  navigation: {
    nextEl: ".heroNext1-btn",
    prevEl: ".heroPrev1-btn",
  },
  loop: true,
  speed: 500,
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
//====================================== cardswiper==========================================
const swiperhero2 = new Swiper(".swiperhero2", {
  modules: [Navigation, Autoplay, Pagination],
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".heroNext4-btn",
    prevEl: ".heroPrev3-btn",
  },
  loop: false,
  speed: 500,
  spaceBetween: 16,
  slidesPerView: 1,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
//===================================== cardpage=====================================
const swiperhero3 = new Swiper(".swiperhero3", {
  modules: [Navigation, Autoplay, Pagination],
  navigation: {
    nextEl: ".heroNext1-btn",
    prevEl: ".heroPrev1-btn",
  },
  loop: false,
  speed: 500,
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
// ===============================small card swiper==============================
const swiperhero4 = new Swiper(".swiperhero4", {
  modules: [Navigation, Autoplay, Pagination],
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".heroNext4-btn",
    prevEl: ".heroPrev3-btn",
  },
  loop: false,
  speed: 500,
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
// ===============================Customer review slider==================================
const swiperhero5 = new Swiper(".swiperhero5", {
  modules: [Navigation, Autoplay, Pagination],
  navigation: {
    nextEl: ".heroNext1-btn",
    prevEl: ".heroPrev1-btn",
  },
  loop: false,
  speed: 500,
  spaceBetween: 10,
  slidesPerView: 1,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 200,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
// ===============================Follow us on instagram6small card swiper==============================
const swiperhero6 = new Swiper(".swiperhero6", {
  modules: [Navigation, Autoplay, Pagination],
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".heroNext4-btn",
    prevEl: ".heroPrev3-btn",
  },
  loop: false,
  speed: 500,
  spaceBetween: 5,
  slidesPerView: 2,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
