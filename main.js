(()=>{"use strict";var e="";const t=[{name:"Каппадокия",link:e+"1dfeb0b561f021ebd69b.jpg"},{name:"Фудзияма",link:e+"a5859b7beca671396acf.jpg"},{name:"Петра",link:e+"9db852d2c3d179ae2beb.jpg"},{name:"Тадж-Махал",link:e+"9e12421dc79ad9fc5fbb.jpg"},{name:"Венгерский парламент",link:e+"f908c26ceca01d4f54bf.jpg"},{name:"Парк Йосемити",link:e+"d490e166e42242f3424c.jpg"}];function n(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),u=o.querySelector(".card__image"),c=o.querySelector(".card__title");u.src=e.link,u.alt=e.name,c.textContent=e.name,o.querySelector(".card__delete-button").addEventListener("click",(function(){return t(o)}));var i=o.querySelector(".card__like-button");return i.addEventListener("click",(function(){return n(i)})),u.addEventListener("click",(function(){return r(e)})),o}function r(e){e.remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function u(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&i(t)}}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function a(e){e.querySelector(".popup__close").addEventListener("click",(function(){return i(e)})),e.addEventListener("mousedown",(function(t){t.target===e&&i(e)}))}function l(e,t,n){var r=t.querySelector("#".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function p(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function s(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){n.setCustomValidity(""),l(n,e,t)})),p(n,r,t)}var d,_=document.querySelector(".places__list"),f=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_image"),q=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),L=y.querySelector(".popup__form"),k=y.querySelector(".popup__input_type_name"),C=y.querySelector(".popup__input_type_description"),E=v.querySelector(".popup__form"),g=v.querySelector(".popup__input_type_card-name"),x=v.querySelector(".popup__input_type_url"),j=S.querySelector(".popup__image"),A=S.querySelector(".popup__caption"),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function h(e){_.prepend(e)}function w(e){j.src=e.link,j.alt=e.name,A.textContent=e.name,c(S)}d=B,Array.from(document.querySelectorAll(d.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?l(e,t,n):function(e,t,n,r){var o=n.querySelector("#".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),o.textContent=t,o.classList.add(r.errorClass)}(e,e.validationMessage,t,n)}(o,e,t),p(n,r,t)}))}))}(e,d)})),t.forEach((function(e){h(n(e,r,o,w))})),L.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=k.value,m.textContent=C.value,i(y)})),a(y),a(v),a(S),q.addEventListener("click",(function(){k.value=f.textContent,C.value=m.textContent,s(L,B),c(y)})),b.addEventListener("click",(function(){c(v)})),E.addEventListener("submit",(function(e){e.preventDefault(),h(n({name:g.value,link:x.value},r,o,w)),i(v),E.reset(),s(E,B)}))})();