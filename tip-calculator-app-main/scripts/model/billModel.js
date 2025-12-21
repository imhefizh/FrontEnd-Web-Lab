let bill = 0;

export function setBillValue(value) {
  return (bill = Number(value));
}

export function getBillValue() {
  return bill;
}

export function isBillZero() {
  return bill == 0;
}
