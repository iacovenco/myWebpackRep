const calc = () => {
  // Получаем все поля ввода
  const inputFields = document.querySelectorAll(".calc-item");
  const selectElement = document.querySelector(".calc-type");

  // Добавляем обработчик  ввода для каждого поля
  inputFields.forEach(function (inputField) {
    inputField.addEventListener("input", function () {
      // Удаляем все символы, кроме цифр
      this.value = this.value.replace(/\D/g, "");
    });
  });

  // Добавляем обработчик  изменения значения
  selectElement.addEventListener("change", function () {
    // Получаем выбранное значение
    const selectedValue = this.value;

    // Если выбрано значение, то выводим текст option
    if (selectedValue !== "") {
      const optionText = this.options[this.selectedIndex].text;
      console.log("Выбрано значение: " + optionText);
    }
  });
};

export default calc;
