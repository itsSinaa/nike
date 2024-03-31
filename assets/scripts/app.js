//! mobile menu start
const mobileMenuOpenBtn = document.getElementById("mobile-menu-open");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");

const overlay = document.getElementById("overlay");

function closeMobileMenu() {
  mobileMenu.className = "mobile-menu--deactive";
  overlay.className = "overlay--deactive";
}

function openMobileMenu() {
  mobileMenu.className = "mobile-menu--active";
  overlay.className = "overlay--active";
}

mobileMenuOpenBtn.addEventListener("click", openMobileMenu);
mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", closeMobileMenu);
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMobileMenu();
  }
});
//! mobile menu end

//!collection start
const collections = document.querySelectorAll(".collection");
const heroImg = document.querySelector('[alt="hero-img"]');

collections.forEach((current) => {
  current.addEventListener("click", () => {
    collections.forEach((element) => {
      element.classList.remove("collection--active");
    });

    heroImg.setAttribute("src", current.dataset.img);

    current.classList.add("collection--active");
  });
});
//!collection end

//! product swiper start
let productSwiper = new Swiper(".product-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  grabCursor: true,

  breakpoints: {
    420 : {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
//! product swiper end

//! testimonial swiper start
let testimonialSwiper = new Swiper(".testimonial-swiper",{
  loop : true,
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor : true,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
//! testimonial swiper end

// !AOS
AOS.init({
  once : true,
});