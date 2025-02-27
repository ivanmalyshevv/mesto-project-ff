// Функция создания карточки
export function createCard(cardData, handleDeleteCard, cardLike, openImagePopup, userId) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const likesCount = cardElement.querySelector('.card__likes-count');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    likesCount.textContent = cardData.likes.length;

    if (cardData.owner._id !== userId) {
        deleteButton.style.display = 'none';
    }

    deleteButton.addEventListener('click', () => handleDeleteCard(cardData._id, cardElement));
    likeButton.addEventListener('click', () => cardLike(cardData._id, likeButton, likesCount));
    cardImage.addEventListener('click', () => openImagePopup(cardData));

    return cardElement;
}
  
  // Функция удаления карточки
  export function handleDeleteCard(cardId, cardElement) {
    deleteCard(cardId)
        .then(() => {
            cardElement.remove();
        })
        .catch(err => {
            console.error('Ошибка при удалении карточки:', err);
        });
}
  
  // Функция лайка карточки
  export function cardLike(cardId, likeButton, likesCount) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');

    (isLiked ? unlikeCard(cardId) : likeCard(cardId))
        .then(updatedCard => {
            likesCount.textContent = updatedCard.likes.length;
            likeButton.classList.toggle('card__like-button_is-active');
        })
        .catch(err => {
            console.error('Ошибка при постановке/снятии лайка:', err);
        });
}