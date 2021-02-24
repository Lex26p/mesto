"use strict";

let popup = document.querySelector('.popup_edid-text'); // Попап
let editBtm = document.querySelector('.profile__edit-btm'); // Кнопка открыть
let popupCloseBtn = document.querySelector('.popup__close_edid-text'); // Кнопка закрыть
let profileName = document.querySelector('.profile__name'); // Имя профиля
let profileTitle = document.querySelector('.profile__title'); // Деятельность
let nameInput = document.querySelector('.popup__in-text_name-input'); // Форма имя
let jobInput = document.querySelector('.popup__in-text_job-input'); // Форма деятельность
let popupSubmit = document.querySelector(".popup__form_edid-text"); // Сохранить
let like = document.querySelectorAll(".element__group"); // Лайк
let deleteElement = document.querySelectorAll(".element__delete"); // Лайк

let popupNewPlace = document.querySelector('.popup_new-place'); // Попап
let openAddPlace = document.querySelector('.profile__add-btm'); // Кнопка открыть
let popupCloseBtnPlace = document.querySelector('.popup__close_new-place'); // Кнопка закрыть
let namePlaceInput = document.querySelector('.popup__in-text_name-place'); // Форма название места
let urlInput = document.querySelector('.popup__in-text_url'); // URL
let popupSavePlase = document.querySelector(".popup__form_new-place"); // Сохранить
let elementsBlock = document.querySelector(".elements"); // Блок элементы




function OpenPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileTitle.textContent;
}

function PopupSave (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}



function PopupSavePlace (evt) {
  

  evt.preventDefault();
  elementsBlock.insertAdjacentHTML('afterbegin', `<div class="element">
            <img src="${urlInput.value}" alt="Млечный путь" class="element__img">
            <button class="element__delete"></button>
            <div class="element__container">
              <p class="element__title">${namePlaceInput.value}</p>
              <button class="element__group"></button>
            </div>
          </div>`);


let like = document.querySelectorAll(".element__group"); // Лайк
let deleteElement = document.querySelectorAll(".element__delete"); // uuu

like[0].addEventListener('click', likeAdd);
deleteElement[0].addEventListener('click', delElm);

popupNewPlace.classList.remove('popup_opened');
}

function OpenPopupPlace() {
  popupNewPlace.classList.add('popup_opened');
}






openAddPlace.addEventListener('click', OpenPopupPlace);
popupSavePlase.addEventListener('submit', PopupSavePlace);





function likeAdd (evt) {
  evt.target.classList.toggle('element__group_active');
}

function delElm (evt) {
  evt.target.parentNode.remove();
}

editBtm.addEventListener('click', OpenPopup);
popupSubmit.addEventListener('submit', PopupSave);

popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

like.forEach(group => {
  group.addEventListener('click', likeAdd);
});

deleteElement.forEach(del => {
  del.addEventListener('click', delElm);
});