const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  //Добавляем анимацию открытия модального окна
  const animateModal = () => {
    let opacity = 0;
    modal.style.opacity = opacity;

    const open = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(open);
      } else {
        opacity += 0.01;
        modal.style.opacity = opacity;
      }
    }, 10);
  };

  // Добавляем анимацию закрытия модального окна
  const closeAnimation = () => {
    let opacity = 1;

    const close = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(close);
        modal.style.display = "none";
      } else {
        opacity -= 0.01;
        modal.style.opacity = opacity;
      }
    }, 10);
  };

  //Сбрасываем анимацию
  //(для того чтобы при последующих вызовах анимация не слетала)
  const resetModal = () => {
    modal.classList.remove("fadeIn");
  };

  //Адаптируем под вызов под размер экрана пользователя
  if (window.innerWidth > 768) {
    //Вызываем  и закрываем модальное окно с анимацией
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
        animateModal();
        resetModal();
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

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") // || e.target.contains("popup-close")
    ) {
      closeAnimation();
    }
  });
};

export default modal;
