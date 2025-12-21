import { valueCalculator } from "../model/calculatorModel.js";

export const tipAmountElement = document.getElementById("tip-amount-value");
export const totalElement = document.getElementById("total-value");

export function render() {
  const payload = valueCalculator();
  // console.log(payload);
  tipAmountElement.innerHTML = payload.tipAmountPerPerson;
  totalElement.innerHTML = payload.total;
}
