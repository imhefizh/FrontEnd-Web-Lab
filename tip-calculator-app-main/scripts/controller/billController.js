import { isBillZero, setBillValue } from "../model/billModel.js";
import { render } from "./resultController.js";

export const billInputElement = document.getElementById("bill");

billInputElement.addEventListener("input", (e) => {
  setBillValue(e.target.value);
  if (isBillZero()) {
    document.getElementById("bill-input-wrapper").classList.add("input-error");
    document.getElementById("bill-error").classList.remove("hide");
  } else {
    document
      .getElementById("bill-input-wrapper")
      .classList.remove("input-error");
    document.getElementById("bill-error").classList.add("hide");
  }
  render();
});
