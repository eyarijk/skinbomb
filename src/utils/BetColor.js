export default function BetColor(rate, opacity = false) {
  if (rate <= 1.49) {
    return `rgba(33, 150, 83, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 1.5 && rate <= 1.99) {
    return `rgba(242, 74, 74, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 2 && rate <= 2.99) {
    return `rgba(242, 201, 76, ${opacity ? '0.2' : '1'})`;
  } else if (rate >= 3 && rate <= 4.99) {
    return `rgba(47, 128, 237, ${opacity ? '0.2' : '1'})`;
  }
  return `rgba(189, 76, 242, ${opacity ? '0.2' : '1'})`;
}
