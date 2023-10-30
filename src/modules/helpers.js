// Функция для анимации свойств элемента
const animate = (element, property, start, end, duration) => {
  const range = end - start;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const value = start + range * progress;

    element.style[property] = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

export default animate;
