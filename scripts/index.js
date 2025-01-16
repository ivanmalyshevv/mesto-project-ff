// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list')
// @todo: Функция создания карточки
function createCard(data, onDelete) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

   // Устанавливаем значения вложенных элементов
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;  
    cardImage.alt = data.name;   
    cardTitle.textContent = data.name; 

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => { onDelete(cardElement); });

    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Функционал вставки элемента карточки
function renderCard(cardElement) {
        placesList.append(cardElement);
}

// @todo: Вывести карточки на страницу, используя цикл forEach
initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    renderCard(cardElement)
});
