const $ = (selector) => document.querySelector(selector);
const menus = $(".menu");
const overLay = $(".overlay");
const nav = $("nav");

menus.addEventListener("click", () => {
  if (nav.style.transform === "translateX(0)") {
    nav.style.transform = "translateX(-100%)";
    overLay.style.visibility = "hidden";
  } else {
    nav.style.transform = "translateX(0)";
    overLay.style.visibility = "visible";
  }
});

overLay.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
  overLay.style.visibility = "hidden";
});
