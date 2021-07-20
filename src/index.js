"use strict";
import cards from "/menu.json";
import cardsTpl from "./templates/card.hbs";

// ========= переменные =========
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const switcher = document.querySelector(".theme-switch__toggle");
const container = document.querySelector(".js-menu");
const bodyq = document.querySelector("body");

// =========== создаем разметку ===========

function createCardsMarkup(cards) {
  return cards.map(cardsTpl).join();
}
const colorsMarkup = createCardsMarkup(cards);

// container.innerHTML = cardsTpl(cards);

// =========== проверка текущей темы ===========
if (localStorage.getItem("theme") === Theme.DARK) {
  const currentTheme = localStorage.getItem("theme");
  switcher.setAttribute("checked", "checked");
  bodyq.classList.add(Theme.DARK);
} else {
  bodyq.classList.add(Theme.LIGHT);
}

// =========== слушатель на инпуте ===========
switcher.addEventListener("input", onSwitcher);

// ========== смена темы, сохранение в localStorage ===========
function onSwitcher(event) {
  if (!event.target.checked) {
    localStorage.setItem("theme", Theme.LIGHT);
    bodyq.classList.add(Theme.LIGHT);
    bodyq.classList.remove(Theme.DARK);
  } else {
    localStorage.setItem("theme", Theme.DARK);
    bodyq.classList.add(Theme.DARK);
    bodyq.classList.remove(Theme.LIGHT);
  }
}
