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

    // Проверка владельца карточки
    if (cardData.owner._id !== userId) {
        deleteButton.style.display = 'none';
    }

    // Проверка лайка пользователя
    const isLiked = cardData.likes.some(user => user._id === userId);
    if (isLiked) {
        likeButton.classList.add('card__like-button_is-active');
    }

    deleteButton.addEventListener('click', () => handleDeleteCard(cardData._id, cardElement));
    likeButton.addEventListener('click', () => {
        cardLike(cardData._id, likeButton, likesCount)
            .then(updatedCard => {
                likesCount.textContent = updatedCard.likes.length;
                likeButton.classList.toggle('card__like-button_is-active'), 
                    updatedCard.likes.some(user => user._id === userId)
            })
            .catch(console.error);
    });
    cardImage.addEventListener('click', () => openImagePopup(cardData));

    return cardElement;
}