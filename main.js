(()=>{"use strict";var e="";const t=[{name:"Каппадокия",link:e+"1dfeb0b561f021ebd69b.jpg"},{name:"Фудзияма",link:e+"a5859b7beca671396acf.jpg"},{name:"Петра",link:e+"9db852d2c3d179ae2beb.jpg"},{name:"Тадж-Махал",link:e+"9e12421dc79ad9fc5fbb.jpg"},{name:"Венгерский парламент",link:e+"f908c26ceca01d4f54bf.jpg"},{name:"Парк Йосемити",link:e+"d490e166e42242f3424c.jpg"}];function r(e,t,r,n){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=o.querySelector(".card__image"),u=o.querySelector(".card__title");i.src=e.link,i.alt=e.name,u.textContent=e.name,o.querySelector(".card__delete-button").addEventListener("click",(function(){return t(o)}));var a=o.querySelector(".card__like-button");return a.addEventListener("click",(function(){return r(a)})),i.addEventListener("click",(function(){return n(e)})),o}function n(e){e.remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function c(e){e.querySelector(".popup__close").addEventListener("click",(function(){return a(e)})),e.addEventListener("mousedown",(function(t){t.target===e&&a(e)}))}var l=["inputSelector","submitButtonSelector"];function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p,d,_,f=function(e,t,r){var n=r.inputErrorClass,o=r.errorClass,i=document.querySelector("#".concat(e.id,"-error"));e.classList.add(n),i.textContent=t,i.classList.add(o)},m=function(e,t){var r=t.inputErrorClass,n=t.errorClass,o=document.querySelector("#".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},y=function(e,t,r){var n=r.inactiveButtonClass,o=e.every((function(e){return e.validity.valid}));t.disabled=!o,t.classList.toggle(n,!o)},v=function(e,t){var r=t.inputSelector,n=t.submitButtonSelector,o=t.inactiveButtonClass,i=t.inputErrorClass,u=t.errorClass,a=Array.from(e.querySelectorAll(r)),c=e.querySelector(n);a.forEach((function(e){m(e,{inputErrorClass:i,errorClass:u}),e.setCustomValidity("")})),c.disabled=!0,c.classList.add(o)},S=document.querySelector(".places__list"),b=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),q=document.querySelector(".popup_type_edit"),E=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_image"),L=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),x=q.querySelector(".popup__form"),h=q.querySelector(".popup__input_type_name"),j=q.querySelector(".popup__input_type_description"),w=E.querySelector(".popup__form"),A=E.querySelector(".popup__input_type_card-name"),B=E.querySelector(".popup__input_type_url"),O=g.querySelector(".popup__image"),M=g.querySelector(".popup__caption"),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function D(e){S.prepend(e)}function I(e){O.src=e.link,O.alt=e.name,M.textContent=e.name,u(g)}d=(p=P).formSelector,_=s(p,["formSelector"]),Array.from(document.querySelectorAll(d)).forEach((function(e){!function(e,t){var r=t.inputSelector,n=t.submitButtonSelector,o=s(t,l),i=Array.from(e.querySelectorAll(r)),u=e.querySelector(n);i.forEach((function(e){e.addEventListener("input",(function(){!function(e,t){var r=t.inputErrorClass,n=t.errorClass,o=e.validity.valid,i=e.value.trim();if(!o){if(e.validity.valueMissing)f(e,e.dataset.errorMessage||"Вы пропустили это поле.",{inputErrorClass:r,errorClass:n});else if(e.validity.tooShort||e.validity.tooLong){var u=e.getAttribute("minlength"),a=e.getAttribute("maxlength");f(e,"Должно быть от ".concat(u," до ").concat(a," символов"),{inputErrorClass:r,errorClass:n})}else e.validity.typeMismatch&&"url"===e.type?f(e,"Введите адрес сайта.",{inputErrorClass:r,errorClass:n}):f(e,e.validationMessage,{inputErrorClass:r,errorClass:n});return!1}"text"===e.type&&e.dataset.pattern&&!new RegExp(e.dataset.pattern).test(i)?f(e,e.dataset.errorMessage||"Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы.",{inputErrorClass:r,errorClass:n}):m(e,{inputErrorClass:r,errorClass:n})}(e,o),y(i,u,o)}))})),y(i,u,o)}(e,_)})),t.forEach((function(e){D(r(e,n,o,I))})),x.addEventListener("submit",(function(e){e.preventDefault(),b.textContent=h.value,C.textContent=j.value,a(q)})),c(q),c(E),c(g),L.addEventListener("click",(function(){h.value=b.textContent,j.value=C.textContent,v(x,P),u(q)})),k.addEventListener("click",(function(){u(E)})),w.addEventListener("submit",(function(e){e.preventDefault(),D(r({name:A.value,link:B.value},n,o,I)),a(E),w.reset(),v(w,P)}))})();