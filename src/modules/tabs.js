const tabs = () => {
  //Получаем колекцию и кнопки
  const tabPanel = document.querySelector(".service-header");
  const tabs = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  //Получаем кнопку scroll_btn из верхнего блока
  const scrollBtn = document.querySelector(".scroll_btn");

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

  //Делаем плавную прокрутку кнопки scroll_btn из верхнего блока
  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const targetOffset = target.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  });
};

export default tabs;
