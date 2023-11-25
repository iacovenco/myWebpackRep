const menu = () => {
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");

  // Функция для открытия и закрытия меню
  const handleMenu = (e) => {
    if (e.target.closest(".menu")) {
      menu.classList.toggle("active-menu");
    } else if (e.target.closest(".close-btn")) {
      menu.classList.remove("active-menu");
    }
  };

  // Добавляем обработчик клика на документ
  document.addEventListener("click", handleMenu);

  // Функция для плавного скроллинга к секции
  const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  // Добавляем обработчик клика на пункты меню
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      smoothScroll(target);
      menu.classList.remove("active-menu"); // Закрыть меню после плавной прокрутки
    });
  });
};
export default menu;
