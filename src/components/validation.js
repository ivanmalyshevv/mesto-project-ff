// Функция для отображения ошибки
function showInputError(inputElement, errorMessage, formElement, validConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement && errorElement) {
      inputElement.classList.add(validConfig.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(validConfig.errorClass);
    }
  }
  
  // Функция для скрытия ошибки
  function hideInputError(inputElement, formElement, validConfig) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement && errorElement) {
      inputElement.classList.remove(validConfig.inputErrorClass);
      errorElement.classList.remove(validConfig.errorClass);
      errorElement.textContent = '';
    }
  }
  
  // Функция для проверки валидности поля
  function checkInputValidity(inputElement, formElement, validConfig) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else if (inputElement.type === "url" && inputElement.validity.typeMismatch) {
      inputElement.setCustomValidity("Введите адрес сайта"); 
    } else {
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.validationMessage, formElement, validConfig);
    } else {
      hideInputError(inputElement, formElement, validConfig);
    }
  }
  
  // Функция для проверки наличия невалидных полей
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }
  
  // Функция для переключения состояния кнопки
  function toggleButtonState(inputList, buttonElement, validConfig) {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(validConfig.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(validConfig.inactiveButtonClass);
    }
  }
  
  // Функция для установки слушателей событий на форму
  function setEventListeners(formElement, validConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
    const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, validConfig);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(inputElement, formElement, validConfig);
        toggleButtonState(inputList, buttonElement, validConfig);
      });
    });
  }
  
  // Функция для включения валидации всех форм
  export function enableValidation(validConfig) {
    const formList = Array.from(document.querySelectorAll(validConfig.formSelector));
  
    formList.forEach((formElement) => {
      setEventListeners(formElement, validConfig);
    });
  }
  
  // Функция для очистки ошибок валидации
  export function clearValidation(formElement, validConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
    const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  
    inputList.forEach((inputElement) => {
      inputElement.setCustomValidity('');
      hideInputError(inputElement, formElement, validConfig);
    });
  
    toggleButtonState(inputList, buttonElement, validConfig);
  }