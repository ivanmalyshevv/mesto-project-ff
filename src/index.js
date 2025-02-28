import './pages/index.css';
import { createCard } from './components/card.js';
import { openModal, closeModal, addPopupListeners } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { getUserInfo, getInitialCards, updateProfileInfo, addNewCard, deleteCard, likeCard, unlikeCard, updateAvatar } from './components/api.js';

// DOM узлы
const placesList = document.querySelector('.places__list');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar'); 

// Получаем попапы
const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const avatarPopup = document.querySelector('.popup_type_avatar');

// Кнопки
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editAvatarButton = document.querySelector('.profile__image');

// Формы
const profileFormElement = editProfilePopup.querySelector('.popup__form');
const nameInput = editProfilePopup.querySelector('.popup__input_type_name');
const jobInput = editProfilePopup.querySelector('.popup__input_type_description');

const addCardFormElement = addCardPopup.querySelector('.popup__form');
const cardNameInput = addCardPopup.querySelector('.popup__input_type_card-name');
const cardLinkInput = addCardPopup.querySelector('.popup__input_type_url');

const avatarFormElement = avatarPopup.querySelector('.popup__form');
const avatarInput = avatarFormElement.querySelector('.popup__input_type_url');

const imageModal = imagePopup.querySelector('.popup__image');
const imageCaption = imagePopup.querySelector('.popup__caption');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);

function renderCard(cardElement) {
  placesList.prepend(cardElement);
}

function handleDeleteCard(cardId, cardElement) {
    deleteCard(cardId)
        .then(() => cardElement.remove())
        .catch(err => console.error('Ошибка при удалении карточки:', err));
}

function cardLike(cardId, likeButton, likesCount) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');
    (isLiked ? unlikeCard(cardId) : likeCard(cardId))
        .then(updatedCard => {
            likesCount.textContent = updatedCard.likes.length;
            likeButton.classList.toggle('card__like-button_is-active');
        })
        .catch(err => console.error('Ошибка при лайке:', err));
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  updateProfileInfo(nameInput.value, jobInput.value)
    .then(updatedUser => {
      profileName.textContent = updatedUser.name;
      profileJob.textContent = updatedUser.about;
      closeModal(editProfilePopup);
    })
    .catch(console.error)
    .finally(() => submitButton.textContent = originalText);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then(newCard => {
      const newCardElement = createCard(newCard, handleDeleteCard, cardLike, openImagePopup, userData._id);
      renderCard(newCardElement);
      addCardFormElement.reset();
      closeModal(addCardPopup);
    })
    .catch(console.error)
    .finally(() => submitButton.textContent = originalText);
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    const submitButton = evt.submitter;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...';

    updateAvatar(avatarInput.value)
      .then(updatedUser => {
        profileAvatar.src = updatedUser.avatar; 
        avatarFormElement.reset();
        closeModal(avatarPopup);
      })
      .catch(console.error)
      .finally(() => submitButton.textContent = originalText);
}

function openImagePopup(data) {
  imageModal.src = data.link;
  imageModal.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imagePopup);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);
addCardFormElement.addEventListener('submit', handleAddCardSubmit);
avatarFormElement.addEventListener('submit', handleAvatarFormSubmit);

addPopupListeners(editProfilePopup);
addPopupListeners(addCardPopup);
addPopupListeners(imagePopup);
addPopupListeners(avatarPopup);

editProfileButton.addEventListener('click', () => {
  fillProfileForm();
  clearValidation(profileFormElement, validationConfig);
  openModal(editProfilePopup);
});

addCardButton.addEventListener('click', () => {
  clearValidation(addCardFormElement, validationConfig);
  openModal(addCardPopup);
});

editAvatarButton.addEventListener('click', () => {
  clearValidation(avatarFormElement, validationConfig);
  openModal(avatarPopup);
});

let userData;

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfo, cards]) => {
    userData = userInfo;
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    profileAvatar.src = userData.avatar;

    cards.forEach(card => {
      const cardElement = createCard(card, handleDeleteCard, cardLike, openImagePopup, userData._id);
      renderCard(cardElement);
    });
  })
  .catch(console.error);