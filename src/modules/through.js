const through = () => {
  // Функция для валидации имени
  function validateName(input) {
    const regex = /^[а-яА-ЯёЁ\s-]+$/;

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-ЯёЁ\s-]/g, "");
    }

    //Приводим первую букву каждого слова  к верхнему регистру, а остальные к нижнему
    input.value = input.value
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, function (match) {
        return match.toUpperCase();
      });

    // Удаляем пробелы и дефисы в начале и конце значения
    input.value = input.value.trim();
  }

  // Функция для валидации email
  function validateEmail(input) {
    const regex =
      /^[a-zA-Z0-9]+[a-zA-Z0-9.!*_'-]*@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;

    if (!regex.test(input.value)) {
      input.value = "";
    }
  }

  // Функция для валидации телефона
  function validatePhone(input) {
    const regex = /^[0-9()+-]+$/;

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^0-9()+-]/g, "");
    }

    // Заменяем несколько идущих подряд пробелов или дефисов на один
    input.value = input.value.replace(/(\s{2,}|-{2,})/g, function (match) {
      return match.charAt(0);
    });

    // Удаляем пробелы и дефисы в начале и конце значения
    input.value = input.value.trim();
  }

  // В поля name="user_message" разрешаем только кириллицу, пробелы, цифры и знаки препинания.
  function validateMessege(input) {
    const regex = /^[а-яА-ЯёЁ0-9\s.,!?;:()-]+$/;
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-ЯёЁ0-9\s.,!?;:()-]/g, "");
    }
  }

  // Получаем все элементы формы
  const formOneName = document.getElementById("form1-name");
  const formOneEmail = document.getElementById("form1-email");
  const formOnePhone = document.getElementById("form1-phone");
  const formTwoName = document.getElementById("form2-name");
  const formTwoEmail = document.getElementById("form2-email");
  const formTwoPhone = document.getElementById("form2-phone");
  const formThreeName = document.getElementById("form3-name");
  const formThreeEmail = document.getElementById("form3-email");
  const formThreePhone = document.getElementById("form3-phone");
  const formMessege = document.getElementById("form2-message");

  // Добавляем обработчики события blur для полей формы
  formOneName.addEventListener("blur", function () {
    validateName(formOneName);
  });
  formOneEmail.addEventListener("blur", function () {
    validateEmail(formOneEmail);
  });
  formOnePhone.addEventListener("blur", function () {
    validatePhone(formOnePhone);
  });
  formTwoName.addEventListener("blur", function () {
    validateName(formTwoName);
  });
  formTwoEmail.addEventListener("blur", function () {
    validateEmail(formTwoEmail);
  });
  formTwoPhone.addEventListener("blur", function () {
    validatePhone(formTwoPhone);
  });
  formThreeName.addEventListener("blur", function () {
    validateName(formThreeName);
  });
  formThreeEmail.addEventListener("blur", function () {
    validateEmail(formThreeEmail);
  });
  formThreePhone.addEventListener("blur", function () {
    validatePhone(formThreePhone);
  });
  formMessege.addEventListener("blur", function () {
    validateMessege(formMessege);
  });
};

export default through;
