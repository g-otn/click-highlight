const classPrefix = '_click-animation';
const classes = ['left', 'middle', 'right']; // MouseEvent.button as index

const createNewElement = (/** @type {MouseEvent} */ e) => {
  const buttonNameClass = classes[e.button];
  const elem = document.createElement('div');
  elem.classList.add(classPrefix, `${classPrefix}-${buttonNameClass}`);
  elem.style.top = `${e.clientY}px`;
  elem.style.left = `${e.clientX}px`;
  // Delete itself after animation
  elem.onanimationend = () => elem.parentNode.removeChild(elem);
  return elem;
};

const handleMouseDown = (/** @type {MouseEvent} */ e) => {
  document.body.appendChild(createNewElement(e));
};

const init = () => {
  document.addEventListener('mousedown', handleMouseDown, {
    capture: true,
    passive: true,
  });
};

init();
