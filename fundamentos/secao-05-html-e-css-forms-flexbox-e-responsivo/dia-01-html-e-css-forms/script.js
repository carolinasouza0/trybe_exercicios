// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const aPreventDefault = (event) => {
  event.preventDefault();
};

const checkboxPreventDefault = (event) => {
  event.preventDefault();
};

const textPreventDefault = (event) => {
  const character = event.key;
  character !== "a" && event.preventDefault();
};

HREF_LINK.addEventListener("click", aPreventDefault);
INPUT_CHECKBOX.addEventListener("click", checkboxPreventDefault);
INPUT_TEXT.addEventListener("keypress", textPreventDefault);
