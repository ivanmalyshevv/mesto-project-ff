import initialCards from './scripts/cards.js';
import './pages/index.css';
import { createCard, deleteCard, cardLike } from './components/card.js';
import { openModal, closeModal, popupListeners } from './components/modal.js';

// DOM узлы
const placesList = document.querySelector('.places__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

// Получаем попапы по их классам
const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

// Получаем кнопки редактирования и добавления карточек
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

// Получаем форму и поля ввода из попапа редактирования профиля
const profileFormElement = editProfilePopup.querySelector('.popup__form');
const nameInput = editProfilePopup.querySelector('.popup__input_type_name');
const jobInput = editProfilePopup.querySelector('.popup__input_type_description');

// Получаем форму и поля ввода из попапа добавления карточки
const addCardFormElement = addCardPopup.querySelector('.popup__form');
const cardNameInput = addCardPopup.querySelector('.popup__input_type_card-name');
const cardLinkInput = addCardPopup.querySelector('.popup__input_type_url');

// Получаем элементы попапа с изображением
const imageModal = imagePopup.querySelector('.popup__image');
const imageCaption = imagePopup.querySelector('.popup__caption');

// Функционал вставки элемента карточки
function renderCard(cardElement) {
    placesList.prepend(cardElement);
}

// Выводим карточку на страницу, используя цикл forEach
initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, cardLike, openImagePopup);
    renderCard(cardElement);
});

// Функция для заполнения полей формы текущими значениями
function fillForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// Обработчик отправки формы редактирования профиля
function handleProfilFormSubmit(evt) {
    evt.preventDefault(); // Отменяем стандартную отправку формы

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    // Закрываем попап
    closeModal(editProfilePopup);
}

// Прикрепляем обработчик к форме редактирования профиля
profileFormElement.addEventListener('submit', handleProfilFormSubmit);

// Слушатель событий для попапов
popupListeners(editProfilePopup);
popupListeners(addCardPopup);
popupListeners(imagePopup);

// Открытие попапа редактирования профиля с заполнением полей
editProfileButton.addEventListener('click', () => {
    fillForm();
    openModal(editProfilePopup);
});

// Открытие попапа добавления карточки
addCardButton.addEventListener('click', () => {
    openModal(addCardPopup);
});

// Функция для открытия попапа с изображением
function openImagePopup(data) {
    imageModal.src = data.link;
    imageModal.alt = data.name;
    imageCaption.textContent = data.name;

    openModal(imagePopup);
}

// Обработчик отправки формы добавления карточки
function handleAddCardSubmit(evt) {
    evt.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем значения полей
    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    // Создаем новый объект карточки
    const newCard = {
        name: newCardName,
        link: newCardLink,
    };

    // Создаем карточку и добавляем её в контейнер
    const newCardElement = createCard(newCard, deleteCard, cardLike, openImagePopup);
    renderCard(newCardElement);

    // Закрываем попап и очищаем форму
    closeModal(addCardPopup);
    addCardFormElement.reset();
}

// Прикрепляем обработчик к форме добавления карточки
addCardFormElement.addEventListener('submit', handleAddCardSubmit);