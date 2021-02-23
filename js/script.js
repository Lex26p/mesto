"use strict";

let popup = document.querySelector('.popup'); // Попап
let editBtm = document.querySelector('.profile__edit-btm'); // Кнопка открыть
let popupCloseBtn = document.querySelector('.popup__close'); // Кнопка закрыть
let profileName = document.querySelector('.profile__name'); // Имя профиля
let profileTitle = document.querySelector('.profile__title'); // Деятельность
let nameInput = document.querySelector('.popup__in-text_name-input'); // Форма имя
let jobInput = document.querySelector('.popup__in-text_job-input'); // Форма деятельность
let popupSubmit = document.querySelector(".popup__form"); // Сохранить
let like = document.querySelectorAll(".element__group"); // Лайк

function OpenPopup () {
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

function likeAdd (evt) {
  evt.target.classList.toggle('element__group_active');
}

editBtm.addEventListener('click', OpenPopup);
popupSubmit.addEventListener('submit', PopupSave);

popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

like.forEach(group => {
  group.addEventListener('click', likeAdd);
});