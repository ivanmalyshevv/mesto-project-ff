// Функция для обработки нажатия клавиши Esc
function handleEscKeyUp(e) {
    if (e.key === "Escape") {
        const popup = document.querySelector('.popup_is-opened');
        if (popup) {
            closeModal(popup);
        }
    }
}

// Функция для открытия модального окна
export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscKeyUp);
}

// Функция для закрытия модального окна
export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKeyUp);
}

// Функция для добавления слушателей событий к модальному окну
export function popupListeners(popup) {
    const closePopupButton = popup.querySelector('.popup__close');

    closePopupButton.addEventListener('click', () => closeModal(popup));
    popup.addEventListener('mousedown', (event) => {
        if (event.target === popup) {
            closeModal(popup);
        }
    });
}