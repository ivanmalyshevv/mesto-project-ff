const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-33',
    headers: {
      authorization: '22c894a5-7e4a-4380-ba10-93dce6366fe6', 
      'Content-Type': 'application/json'
    }
  };
  
  // Проверка ответа сервера
  function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(err => {
      console.error('Ошибка сервера:', err);
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  
  // Загрузка информации о пользователе
  export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    }).then(checkResponse);
  }
  
  // Загрузка карточек
  export function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    }).then(checkResponse);
  }
  
  // Обновление информации о пользователе
  export function updateProfileInfo(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(checkResponse);
  }
  
  // Добавление новой карточки
  export function addNewCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(checkResponse);
  }
  
  // Удаление карточки
  export function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    }).then(checkResponse);
  }
  
  // Постановка лайка
  export function likeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    }).then(checkResponse);
  }
  
  // Снятие лайка
  export function unlikeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    }).then(checkResponse);
  }
  
  // Обновление аватара
  export function updateAvatar(avatarUrl) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    }).then(checkResponse);
  }