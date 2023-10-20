const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  //const button = document.querySelector(".scroll_btn");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); // Отменяем действие по умолчанию (например, переход по ссылке)
      const target = event.target.getAttribute("href"); // Получаем целевой элемент для прокрутки
      smoothScroll(target); // Вызываем функцию плавной прокрутки
    });
  });
};

export default menu;
