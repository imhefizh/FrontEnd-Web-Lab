import { getBillValue } from "./billModel.js";
import { getNopValue } from "./nopModel.js";
import { getTipValue } from "./tipModel.js";

export function valueCalculator() {
  const bill = getBillValue();
  const tip = getTipValue();
  const nop = getNopValue();

  let total = bill + bill * tip;
  return {
    values: { bill: bill, tip: tip, numberOfPeople: nop },
    tipAmountPerPerson: Number(((bill * tip) / nop).toFixed(2)) || "0.00",
    total: Number((total / nop).toFixed(2)) || "0.00",
  };
}
