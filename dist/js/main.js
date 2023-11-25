/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_through__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/through */ \"./modules/through.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"30 november 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_through__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formId: \"form1\",\r\n  someElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formId: \"form2\",\r\n  someElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formId: \"form3\",\r\n  someElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  // Получаем все поля ввода\r\n  const inputFields = document.querySelectorAll(\".calc-item\");\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    // Добавляем обработчик  ввода для каждого поля\r\n    inputFields.forEach(function (inputField) {\r\n      inputField.addEventListener(\"input\", function () {\r\n        // Удаляем все символы, кроме цифр\r\n        this.value = this.value.replace(/\\D/g, \"\");\r\n      });\r\n    });\r\n\r\n    total.textContent = totalValue;\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Функция для анимации свойств элемента\r\nconst animate = (element, property, start, end, duration) => {\r\n  const range = end - start;\r\n  const startTime = performance.now();\r\n\r\n  const update = (currentTime) => {\r\n    const elapsedTime = currentTime - startTime;\r\n    const progress = Math.min(elapsedTime / duration, 1);\r\n    const value = start + range * progress;\r\n\r\n    element.style[property] = value;\r\n\r\n    if (progress < 1) {\r\n      requestAnimationFrame(update);\r\n    }\r\n  };\r\n\r\n  requestAnimationFrame(update);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  // Функция для открытия и закрытия меню\r\n  const handleMenu = (e) => {\r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.toggle(\"active-menu\");\r\n    } else if (e.target.closest(\".close-btn\")) {\r\n      menu.classList.remove(\"active-menu\");\r\n    }\r\n  };\r\n\r\n  // Добавляем обработчик клика на документ\r\n  document.addEventListener(\"click\", handleMenu);\r\n\r\n  // Функция для плавного скроллинга к секции\r\n  const smoothScroll = (target) => {\r\n    const targetElement = document.querySelector(target);\r\n    targetElement.scrollIntoView({ behavior: \"smooth\" });\r\n  };\r\n\r\n  // Добавляем обработчик клика на пункты меню\r\n  menuItems.forEach((item) => {\r\n    item.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const target = e.target.getAttribute(\"href\");\r\n      smoothScroll(target);\r\n      menu.classList.remove(\"active-menu\"); // Закрыть меню после плавной прокрутки\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n\r\n  // Добавляем анимацию открытия модального окна\r\n  const animateModal = () => {\r\n    modal.style.opacity = 0;\r\n\r\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modal, \"opacity\", 0, 1, 500);\r\n  };\r\n\r\n  // Добавляем анимацию закрытия модального окна\r\n  const closeAnimation = () => {\r\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modal, \"opacity\", 1, 0, 500);\r\n\r\n    setTimeout(() => {\r\n      modal.style.display = \"none\";\r\n    }, 500);\r\n  };\r\n\r\n  //Адаптируем под вызов под размер экрана пользователя\r\n  if (window.innerWidth > 768) {\r\n    //Вызываем  и закрываем модальное окно с анимацией\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        modal.style.display = \"block\";\r\n        animateModal();\r\n      });\r\n    });\r\n\r\n    closeBtn.addEventListener(\"click\", () => {\r\n      closeAnimation();\r\n    });\r\n  } else {\r\n    //Вызываем  и закрываем модальное окно без анимацией\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        modal.style.display = \"block\";\r\n      });\r\n    });\r\n\r\n    closeBtn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"none\";\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Загрузка...\";\r\n  const errorText = \"Ошибка...\";\r\n  const successText = \"Спасибо! Наш менеджер с Вами свяжется!\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll(\"input\");\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    console.log(\"submit\");\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n\r\n          setTimeout(() => {\r\n            form.removeChild(statusBlock);\r\n          }, 5000);\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert(\"Данные не валидны!!!\");\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место,пожалуйста!\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (event) => {\r\n      event.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slider = document.querySelectorAll(\".portfolio-item\");\r\n  const dotsContainer = document.querySelector(\".portfolio-dots\");\r\n\r\n  // Создание точек равного количества слайдов\r\n  for (let i = 0; i < slider.length; i++) {\r\n    const dot = document.createElement(\"li\");\r\n    dot.classList.add(\"dot\");\r\n    dotsContainer.appendChild(dot);\r\n  }\r\n\r\n  const dots = document.querySelectorAll(\".dot\");\r\n  const timeInterval = 2000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  //Получаем элементы портофило и даем им класс active\r\n  const autoSlide = () => {\r\n    prevSlide(slider, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n    if (currentSlide >= slider.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slider, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  //Запускаем наше портфолио с интервалом\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  //Останавливаем слайды\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  //Получаем все кнопки из класса portfolio\r\n  //И вешаем на них переключение по клику\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n    prevSlide(slider, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n    if (currentSlide >= slider.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slider.length - 1;\r\n    }\r\n    nextSlide(slider, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  //Добавляем ограничители если мышка находится над кнопками\r\n  //то слайды останавливаются\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  //Добавляем ограничители если мышка уходит с кнопок\r\n  //то слайды запускаются\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  //Получаем колекцию и кнопки\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  //Получаем кнопку scroll_btn из верхнего блока\r\n  const scrollBtn = document.querySelector(\".scroll_btn\");\r\n\r\n  //Перебираем кнопки\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n\r\n  //Делаем плавную прокрутку кнопки scroll_btn из верхнего блока\r\n  scrollBtn.addEventListener(\"click\", function (e) {\r\n    e.preventDefault();\r\n    const target = document.querySelector(this.getAttribute(\"href\"));\r\n    const targetOffset = target.offsetTop;\r\n\r\n    window.scrollTo({\r\n      top: targetOffset,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/through.js":
/*!****************************!*\
  !*** ./modules/through.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst through = () => {\r\n  // Функция для валидации имени\r\n  function validateName(input) {\r\n    const regex = /^[а-яА-ЯёЁ\\s-]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = input.value.replace(/[^а-яА-ЯёЁ\\s-]/g, \"\");\r\n    }\r\n\r\n    //Приводим первую букву каждого слова  к верхнему регистру, а остальные к нижнему\r\n    input.value = input.value\r\n      .toLowerCase()\r\n      .replace(/(?:^|\\s|-)\\S/g, function (match) {\r\n        return match.toUpperCase();\r\n      });\r\n\r\n    // Удаляем пробелы и дефисы в начале и конце значения\r\n    input.value = input.value.trim();\r\n  }\r\n\r\n  // Функция для валидации email\r\n  function validateEmail(input) {\r\n    const regex =\r\n      /^[a-zA-Z0-9]+[a-zA-Z0-9.!*_'-]*@[a-zA-Z0-9]+\\.[a-zA-Z0-9.]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = \"\";\r\n    }\r\n  }\r\n\r\n  // Функция для валидации телефона\r\n  function validatePhone(input) {\r\n    const regex = /^[0-9()+-]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = input.value.replace(/[^0-9()+-]/g, \"\");\r\n    }\r\n\r\n    // Заменяем несколько идущих подряд пробелов или дефисов на один\r\n    input.value = input.value.replace(/(\\s{2,}|-{2,})/g, function (match) {\r\n      return match.charAt(0);\r\n    });\r\n\r\n    // Удаляем пробелы и дефисы в начале и конце значения\r\n    input.value = input.value.trim();\r\n  }\r\n\r\n  // В поля name=\"user_message\" разрешаем только кириллицу, пробелы, цифры и знаки препинания.\r\n  function validateMessege(input) {\r\n    const regex = /^[а-яА-ЯёЁ0-9\\s.,!?;:()-]+$/;\r\n    if (!regex.test(input.value)) {\r\n      input.value = input.value.replace(/[^а-яА-ЯёЁ0-9\\s.,!?;:()-]/g, \"\");\r\n    }\r\n  }\r\n\r\n  // Получаем все элементы формы\r\n  const formOneName = document.getElementById(\"form1-name\");\r\n  const formOneEmail = document.getElementById(\"form1-email\");\r\n  const formOnePhone = document.getElementById(\"form1-phone\");\r\n  const formTwoName = document.getElementById(\"form2-name\");\r\n  const formTwoEmail = document.getElementById(\"form2-email\");\r\n  const formTwoPhone = document.getElementById(\"form2-phone\");\r\n  const formThreeName = document.getElementById(\"form3-name\");\r\n  const formThreeEmail = document.getElementById(\"form3-email\");\r\n  const formThreePhone = document.getElementById(\"form3-phone\");\r\n  const formMessege = document.getElementById(\"form2-message\");\r\n\r\n  // Добавляем обработчики события blur для полей формы\r\n  formOneName.addEventListener(\"blur\", function () {\r\n    validateName(formOneName);\r\n  });\r\n  formOneEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formOneEmail);\r\n  });\r\n  formOnePhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formOnePhone);\r\n  });\r\n  formTwoName.addEventListener(\"blur\", function () {\r\n    validateName(formTwoName);\r\n  });\r\n  formTwoEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formTwoEmail);\r\n  });\r\n  formTwoPhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formTwoPhone);\r\n  });\r\n  formThreeName.addEventListener(\"blur\", function () {\r\n    validateName(formThreeName);\r\n  });\r\n  formThreeEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formThreeEmail);\r\n  });\r\n  formThreePhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formThreePhone);\r\n  });\r\n  formMessege.addEventListener(\"blur\", function () {\r\n    validateMessege(formMessege);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (through);\r\n\n\n//# sourceURL=webpack:///./modules/through.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      timerHours.textContent = getTime.hours.toString().padStart(2, \"0\");\r\n      timerMinutes.textContent = getTime.minutes.toString().padStart(2, \"0\");\r\n      timerSeconds.textContent = getTime.seconds.toString().padStart(2, \"0\");\r\n    } else {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      clearInterval(timerInterval);\r\n    }\r\n  };\r\n\r\n  updateClock();\r\n  const timerInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;