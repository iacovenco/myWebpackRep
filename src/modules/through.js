const through = () => {
  // Получаем ссылки на поля ввода
  // 1) Валидация поля ввода имени
  const nameInput = document.querySelector(".form-name");
  nameInput.addEventListener("input", function (e) {
    const value = e.target.value;
    // Регулярное выражение для проверки на допустимые символы
    const regex = /^[а-яА-ЯёЁ\s-]+$/;
    if (!regex.test(value)) {
      e.target.setCustomValidity(
        "Пожалуйста, введите только кириллицу, дефис или пробел"
      );
    } else {
      e.target.setCustomValidity("");
    }
  });

  // 2) Валидация поля ввода email
  const emailInput = document.querySelector(".form-email");
  emailInput.addEventListener("input", function (e) {
    const value = e.target.value;
    // Регулярное выражение для проверки на допустимые символы
    const regex = /^[a-zA-Z0-9@!\-_.'*~]+$/;
    if (!regex.test(value)) {
      e.target.setCustomValidity(
        "Пожалуйста, введите только латинские буквы, цифры и символы: @ - _ . ! ~ * '"
      );
    } else {
      e.target.setCustomValidity("");
    }
  });

  // 3) Валидация поля ввода телефона
  const phoneInput = document.querySelector(".form-phone");
  phoneInput.addEventListener("input", function (e) {
    const value = e.target.value;
    // Регулярное выражение для проверки на допустимые символы
    const regex = /^[\d()+-]+$/;
    if (!regex.test(value)) {
      e.target.setCustomValidity(
        "Пожалуйста, введите только цифры, круглые скобки и дефис"
      );
    } else {
      e.target.setCustomValidity("");
    }
  });
};

/*
НЕ ПОНИМАЮ
1)Я получаю все классы form,но работает только первый блок с этими классами
пробовал получать по id,тогда все ок,но кода много.Что я делаю не так?
2)Почему-то у email нет такого приоритета как у имени или телефона.
То-есть если ввожу имя и телефон кнопка заявки срабатывает и все хороши,но если введу имя и email
кнопка не срабатывает и даже если после этого ввести номер,кнопка все равно не работает.Подскажите пожалуйста и тут(
*/

export default through;
