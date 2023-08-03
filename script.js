const intro = document.querySelector(".intro");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const computer = document.querySelector(".computer");

const nav = document.querySelector(".nav");

const section1 = document.querySelector(".section--1");
const scrollBtn = document.querySelector(".header--Scroll-button");

const multan = document.querySelector(".multan");
const multanPic = document.querySelector(".multan-pic");

const facebook = document.querySelector(".facebook-link");
const twitter = document.querySelector(".twitter-link");

const allSections = document.querySelectorAll("section");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// Intro

intro.scrollIntoView({
  behavior: "smooth",
});
setTimeout(
  () => intro.classList.add("hidden"),

  7000
);

setTimeout(() => {
  main.style.opacity = "100%";
  body.style.backgroundColor = "white";
}, 8000);

// computer Animation
computer.addEventListener("mouseover", function () {
  computer.setAttribute("src", "img/computer on.png");
});
computer.addEventListener("mouseout", function () {
  computer.setAttribute("src", "img/Header Computer.png");
});

//Page Navigation

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    const link = document.querySelector(id);

    link.scrollIntoView({
      behavior: "smooth",
    });
  }
});

//Scroll btn

scrollBtn.addEventListener("click", function () {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

//nav bar opacity animation

const opacityChanger = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const links = nav.querySelectorAll(".nav__link");
    links.forEach((link) => {
      if (e.target === link) return;
      link.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", opacityChanger.bind(0.5));

nav.addEventListener("mouseout", opacityChanger.bind(1));

//location hover pic reveal
multanPic.style.maxHeight = "0px";
const displayPic = function () {
  multanPic.style.maxHeight = this;
};
multan.addEventListener("mouseover", displayPic.bind("100px"));

multan.addEventListener("mouseout", displayPic.bind("0px"));

//img links

facebook.addEventListener("click", function () {
  facebook.setAttribute("href", "https://www.facebook.com/");
});

twitter.addEventListener("click", function () {
  twitter.setAttribute("href", "https://twitter.com/");
});

//Scroll animation sections

const obsCallBack = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("animate");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0.16,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("animate");
});

//Images hover Animation

const imgAnimate = function () {
  if (!this.classList.contains("imgAnimate")) this.classList.add("imgAnimate");
  else this.classList.remove("imgAnimate");
};

img1.addEventListener("mouseover", imgAnimate.bind(img1));
img1.addEventListener("mouseout", imgAnimate.bind(img1));

img2.addEventListener("mouseover", imgAnimate.bind(img2));

img2.addEventListener("mouseout", imgAnimate.bind(img2));

// slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const previousBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = 3;

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

const gotoSlide = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};

nextBtn.addEventListener("click", function () {
  curSlide++;
  if (curSlide === maxSlide) curSlide = 0;
  gotoSlide();
});

previousBtn.addEventListener("click", function () {
  curSlide--;
  if (curSlide === -1) curSlide = maxSlide - 1;
  gotoSlide();
});
