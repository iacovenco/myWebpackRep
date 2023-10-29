const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slider = document.querySelectorAll(".portfolio-item");
  const dotsContainer = document.querySelector(".portfolio-dots");

  // Создание точек равного количества слайдов
  for (let i = 0; i < slider.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  //Получаем элементы портофило и даем им класс active
  const autoSlide = () => {
    prevSlide(slider, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slider.length) {
      currentSlide = 0;
    }
    nextSlide(slider, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  //Запускаем наше портфолио с интервалом
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  //Останавливаем слайды
  const stopSlide = () => {
    clearInterval(interval);
  };

  //Получаем все кнопки из класса portfolio
  //И вешаем на них переключение по клику
  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    prevSlide(slider, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slider.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slider.length - 1;
    }
    nextSlide(slider, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  //Добавляем ограничители если мышка находится над кнопками
  //то слайды останавливаются
  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  //Добавляем ограничители если мышка уходит с кнопок
  //то слайды запускаются
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
