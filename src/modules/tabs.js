const tabs = () => {
  //Получаем колекцию и кнопки
  const tabPanel = document.querySelector(".service-header");
  const tabs = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  //Перебираем кнопки
  tabPanel.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      const tabBtn = e.target.closest(".service-header-tab");

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};

export default tabs;
