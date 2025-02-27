(()=>{"use strict";function e(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__likes-count");return a.src=e.link,a.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length,e.owner._id!==o&&(i.style.display="none"),i.addEventListener("click",(function(){return t(e._id,c)})),l.addEventListener("click",(function(){return n(e._id,l,s)})),a.addEventListener("click",(function(){return r(e)})),c}function t(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&r(t)}}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",t)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",t)}function o(e){e.querySelector(".popup__close").addEventListener("click",(function(){return r(e)})),e.addEventListener("mousedown",(function(t){t.target===e&&r(e)}))}function c(e,t,n){var r=t.querySelector("#".concat(e.id,"-error"));e&&r&&(e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")}function a(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function u(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){n.setCustomValidity(""),c(n,e,t)})),a(n,r,t)}var i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"22c894a5-7e4a-4380-ba10-93dce6366fe6","Content-Type":"application/json"}};function l(e){return e.ok?e.json():e.json().then((function(t){return console.error("Ошибка сервера:",t),Promise.reject("Ошибка: ".concat(e.status))}))}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,p,f=document.querySelector(".places__list"),_=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),m=(document.querySelector(".profile__image"),document.querySelector(".popup_type_edit")),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_image"),S=document.querySelector(".popup_type_avatar"),b=(document.querySelector(".profile__avatar"),document.querySelector(".profile__edit-button")),q=document.querySelector(".profile__add-button"),C=document.querySelector(".profile__image"),E=m.querySelector(".popup__form"),L=m.querySelector(".popup__input_type_name"),k=m.querySelector(".popup__input_type_description"),x=v.querySelector(".popup__form"),g=v.querySelector(".popup__input_type_card-name"),A=v.querySelector(".popup__input_type_url"),U=S.querySelector(".popup_type_avatar .popup__form"),w=U.querySelector(".popup__input_type_url"),j=h.querySelector(".popup__image"),T=h.querySelector(".popup__caption"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function B(e){f.prepend(e)}function P(e){j.src=e.link,j.alt=e.name,T.textContent=e.name,n(h)}function D(e,t){(function(e){return fetch("".concat(i.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:i.headers}).then(l)})(e).then((function(){t.remove()})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))}function M(e,t,n){(t.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:i.headers}).then(l)}(e):function(e){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:i.headers}).then(l)}(e)).then((function(e){n.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(e){console.error("Ошибка при постановке/снятии лайка:",e)}))}d=O,Array.from(document.querySelectorAll(d.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);a(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):"url"===e.type&&e.validity.typeMismatch?e.setCustomValidity("Введите адрес сайта"):e.setCustomValidity(""),e.validity.valid?c(e,t,n):function(e,t,n,r){var o=n.querySelector("#".concat(e.id,"-error"));e&&o&&(e.classList.add(r.inputErrorClass),o.textContent=t,o.classList.add(r.errorClass))}(e,e.validationMessage,t,n)}(o,e,t),a(n,r,t)}))}))}(e,d)})),E.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.submitter,c=o.textContent;o.textContent="Сохранение...",(t=L.value,n=k.value,fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:t,about:n})}).then(l)).then((function(e){_.textContent=e.name,y.textContent=e.about,r(m)})).catch((function(e){console.error(e)})).finally((function(){o.textContent=c}))})),x.addEventListener("submit",(function(t){t.preventDefault();var n,o,c=t.submitter,a=c.textContent;c.textContent="Сохранение...",(n=g.value,o=A.value,fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:n,link:o})}).then(l)).then((function(t){B(e(t,D,M,P,p._id)),r(v),x.reset()})).catch((function(e){console.error("Ошибка при добавлении карточки:",e)})).finally((function(){c.textContent=a}))})),U.addEventListener("submit",(function(e){e.preventDefault();var t,n=e.submitter,o=n.textContent;n.textContent="Сохранение...",(t=w.value,fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:t})}).then(l)).then((function(e){document.querySelector(".profile__avatar").src=e.avatar,r(S),U.reset()})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){n.textContent=o}))})),o(m),o(v),o(h),o(S),b.addEventListener("click",(function(){L.value=_.textContent,k.value=y.textContent,u(E,O),n(m)})),q.addEventListener("click",(function(){u(x,O),n(v)})),C.addEventListener("click",(function(){u(U,O),n(S)})),Promise.all([fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then(l),fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then(l)]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];p=c,_.textContent=p.name,y.textContent=p.about,document.querySelector(".profile__avatar").src=p.avatar,a.forEach((function(t){B(e(t,D,M,P,p._id))}))}))})();