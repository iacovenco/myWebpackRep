import animate from "./helpers.js";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  // Добавляем анимацию открытия модального окна
  const animateModal = () => {
    modal.style.opacity = 0;

    animate(modal, "opacity", 0, 1, 500);
  };

  // Добавляем анимацию закрытия модального окна
  const closeAnimation = () => {
    animate(modal, "opacity", 1, 0, 500);

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };

  //Адаптируем под вызов под размер экрана пользователя
  if (window.innerWidth > 768) {
    //Вызываем  и закрываем модальное окно с анимацией
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
        animateModal();
      });
    });

    closeBtn.addEventListener("click", () => {
      closeAnimation();
    });
  } else {
    //Вызываем  и закрываем модальное окно без анимацией
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
};

export default modal;
