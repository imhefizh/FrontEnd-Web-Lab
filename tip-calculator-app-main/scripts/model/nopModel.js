let numberOfPeople = 1;

export function setNopValue(value) {
  return (numberOfPeople = Number(value));
}

export function getNopValue() {
  return numberOfPeople;
}

export function isNopZero() {
  return numberOfPeople == 0;
}
