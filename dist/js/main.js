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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_through__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/through */ \"./modules/through.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 october 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_through__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  // Получаем все поля ввода\r\n  const inputFields = document.querySelectorAll(\".calc-item\");\r\n  const selectElement = document.querySelector(\".calc-type\");\r\n\r\n  // Добавляем обработчик  ввода для каждого поля\r\n  inputFields.forEach(function (inputField) {\r\n    inputField.addEventListener(\"input\", function () {\r\n      // Удаляем все символы, кроме цифр\r\n      this.value = this.value.replace(/\\D/g, \"\");\r\n    });\r\n  });\r\n\r\n  // Добавляем обработчик  изменения значения\r\n  selectElement.addEventListener(\"change\", function () {\r\n    // Получаем выбранное значение\r\n    const selectedValue = this.value;\r\n\r\n    // Если выбрано значение, то выводим текст option\r\n    if (selectedValue !== \"\") {\r\n      const optionText = this.options[this.selectedIndex].text;\r\n      console.log(\"Выбрано значение: \" + optionText);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  //const button = document.querySelector(\".scroll_btn\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  const smoothScroll = (target) => {\r\n    const targetElement = document.querySelector(target);\r\n    targetElement.scrollIntoView({ behavior: \"smooth\" });\r\n  };\r\n\r\n  menuItems.forEach((item) => {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault(); // Отменяем действие по умолчанию (например, переход по ссылке)\r\n      const target = event.target.getAttribute(\"href\"); // Получаем целевой элемент для прокрутки\r\n      smoothScroll(target); // Вызываем функцию плавной прокрутки\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n\r\n  //Добавляем анимацию открытия модального окна\r\n  const animateModal = () => {\r\n    let opacity = 0;\r\n    modal.style.opacity = opacity;\r\n\r\n    const open = setInterval(() => {\r\n      if (opacity >= 1) {\r\n        clearInterval(open);\r\n      } else {\r\n        opacity += 0.01;\r\n        modal.style.opacity = opacity;\r\n      }\r\n    }, 10);\r\n  };\r\n\r\n  // Добавляем анимацию закрытия модального окна\r\n  const closeAnimation = () => {\r\n    let opacity = 1;\r\n\r\n    const close = setInterval(() => {\r\n      if (opacity <= 0) {\r\n        clearInterval(close);\r\n        modal.style.display = \"none\";\r\n      } else {\r\n        opacity -= 0.01;\r\n        modal.style.opacity = opacity;\r\n      }\r\n    }, 10);\r\n  };\r\n\r\n  //Сбрасываем анимацию\r\n  //(для того чтобы при последующих вызовах анимация не слетала)\r\n  const resetModal = () => {\r\n    modal.classList.remove(\"fadeIn\");\r\n  };\r\n\r\n  //Адаптируем под вызов под размер экрана пользователя\r\n  if (window.innerWidth > 768) {\r\n    //Вызываем  и закрываем модальное окно с анимацией\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        modal.style.display = \"block\";\r\n        animateModal();\r\n        resetModal();\r\n      });\r\n    });\r\n\r\n    closeBtn.addEventListener(\"click\", () => {\r\n      closeAnimation();\r\n    });\r\n  } else {\r\n    //Вызываем  и закрываем модальное окно без анимацией\r\n    buttons.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        modal.style.display = \"block\";\r\n      });\r\n    });\r\n\r\n    closeBtn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"none\";\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/through.js":
/*!****************************!*\
  !*** ./modules/through.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst through = () => {\r\n  // Функция для валидации имени\r\n  function validateName(input) {\r\n    const regex = /^[а-яА-ЯёЁ\\s-]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = input.value.replace(/[^а-яА-ЯёЁ\\s-]/g, \"\");\r\n    }\r\n\r\n    //Приводим первую букву каждого слова  к верхнему регистру, а остальные к нижнему\r\n    input.value = input.value\r\n      .toLowerCase()\r\n      .replace(/(?:^|\\s|-)\\S/g, function (match) {\r\n        return match.toUpperCase();\r\n      });\r\n\r\n    // Удаляем пробелы и дефисы в начале и конце значения\r\n    input.value = input.value.trim();\r\n  }\r\n\r\n  // Функция для валидации email\r\n  function validateEmail(input) {\r\n    const regex =\r\n      /^[a-zA-Z0-9]+[a-zA-Z0-9.!*_'-]*@[a-zA-Z0-9]+\\.[a-zA-Z0-9.]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = \"\";\r\n    }\r\n  }\r\n\r\n  // Функция для валидации телефона\r\n  function validatePhone(input) {\r\n    const regex = /^[0-9()+-]+$/;\r\n\r\n    if (!regex.test(input.value)) {\r\n      input.value = input.value.replace(/[^0-9()+-]/g, \"\");\r\n    }\r\n\r\n    // Заменяем несколько идущих подряд пробелов или дефисов на один\r\n    input.value = input.value.replace(/(\\s{2,}|-{2,})/g, function (match) {\r\n      return match.charAt(0);\r\n    });\r\n\r\n    // Удаляем пробелы и дефисы в начале и конце значения\r\n    input.value = input.value.trim();\r\n  }\r\n\r\n  // Получаем все элементы формы\r\n  const formOneName = document.getElementById(\"form1-name\");\r\n  const formOneEmail = document.getElementById(\"form1-email\");\r\n  const formOnePhone = document.getElementById(\"form1-phone\");\r\n  const formTwoName = document.getElementById(\"form2-name\");\r\n  const formTwoEmail = document.getElementById(\"form2-email\");\r\n  const formTwoPhone = document.getElementById(\"form2-phone\");\r\n  const formThreeName = document.getElementById(\"form3-name\");\r\n  const formThreeEmail = document.getElementById(\"form3-email\");\r\n  const formThreePhone = document.getElementById(\"form3-phone\");\r\n\r\n  // Добавляем обработчики события blur для полей формы\r\n  formOneName.addEventListener(\"blur\", function () {\r\n    validateName(formOneName);\r\n  });\r\n  formOneEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formOneEmail);\r\n  });\r\n  formOnePhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formOnePhone);\r\n  });\r\n  formTwoName.addEventListener(\"blur\", function () {\r\n    validateName(formTwoName);\r\n  });\r\n  formTwoEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formTwoEmail);\r\n  });\r\n  formTwoPhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formTwoPhone);\r\n  });\r\n  formThreeName.addEventListener(\"blur\", function () {\r\n    validateName(formThreeName);\r\n  });\r\n  formThreeEmail.addEventListener(\"blur\", function () {\r\n    validateEmail(formThreeEmail);\r\n  });\r\n  formThreePhone.addEventListener(\"blur\", function () {\r\n    validatePhone(formThreePhone);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (through);\r\n\n\n//# sourceURL=webpack:///./modules/through.js?");

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