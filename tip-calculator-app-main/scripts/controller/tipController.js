import { render } from "./resultController.js";
import { setTipValue } from "../model/tipModel.js";

export const tipButtonElements = document.getElementsByClassName("btn");
export const customTipElement = document.getElementById("custom");

for (let element of tipButtonElements) {
  element.addEventListener("click", (e) => {
    customTipElement.value = null;
    setTip(tipButtonElements, e.target);
    render();
  });
}

customTipElement.addEventListener("input", (e) => {
  for (let element of tipButtonElements) {
    element.classList.remove("btn-active");
    element.classList.add("btn-inactive");
  }

  setTipValue(e.target.value);
  render();
});

function setTip(buttonsElement, activeElement) {
  for (let element of buttonsElement) {
    element.classList.remove("btn-active");
    element.classList.add("btn-inactive");
  }

  buttonsElement[activeElement.id].classList.remove("btn-inactive");
  buttonsElement[activeElement.id].classList.add("btn-active");
  setTipValue(activeElement.dataset.tip);
  return;
}
