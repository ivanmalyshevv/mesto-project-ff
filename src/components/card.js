// Функция создания карточки
export function createCard(data, onDelete, onLike, onImageClick) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => onDelete(cardElement));

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => onLike(likeButton));

    cardImage.addEventListener('click', () => onImageClick(data));

    return cardElement;
}

// Функция удаления карточки
export function deleteCard(cardElement) {
    cardElement.remove();
}

// Функция лайка карточки
export function cardLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}