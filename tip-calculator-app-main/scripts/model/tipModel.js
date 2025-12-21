let tipValue = 0;

export function setTipValue(value) {
  return (tipValue = Number(value) / 100);
}

export function getTipValue() {
  return tipValue;
}
