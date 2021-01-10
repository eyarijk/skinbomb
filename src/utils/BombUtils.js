export function calcStep(rate) {
  if (rate < 1.49) {
    return 1;
  }

  if (rate < 1.67) {
    return 2;
  }

  if (rate < 2) {
    return 3;
  }

  if (rate < 2.5) {
    return 4;
  }

  if (rate < 3) {
    return 5;
  }

  return 6;
}

export function calcWingsStep(rate) {
  if (rate >= 5.0) {
    return 2;
  }

  if (rate >= 4.0) {
    return 1;
  }

  return 0;
}

export function calcWingsFire(rate) {
  return rate >= 5.01;
}
