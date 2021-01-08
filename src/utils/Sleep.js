export default function Sleep(ms) {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setTimeout(resolve, ms));
}
