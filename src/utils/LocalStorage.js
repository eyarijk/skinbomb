export function getCurrentExchange() {
  const skin = localStorage.getItem('currentExchange');

  return skin ? JSON.parse(skin) : null;
}

export function setCurrentExchange(skin) {
  localStorage.setItem('currentExchange', JSON.stringify(skin));
}

export function removeCurrentExchange() {
  localStorage.removeItem('currentExchange');
}
