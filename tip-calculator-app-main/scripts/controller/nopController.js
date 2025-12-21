import { render } from "./resultController.js";
import { isNopZero, setNopValue } from "../model/nopModel.js";

export const nopInputElement = document.getElementById("nop");

nopInputElement.addEventListener("input", (e) => {
  setNopValue(e.target.value || 1);
  if (isNopZero()) {
    document.getElementById("nop-input-wrapper").classList.add("input-error");
    document.getElementById("nop-error").classList.remove("hide");
  } else {
    document
      .getElementById("nop-input-wrapper")
      .classList.remove("input-error");
    document.getElementById("nop-error").classList.add("hide");
  }
  render();
});
