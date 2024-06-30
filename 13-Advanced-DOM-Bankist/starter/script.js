'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting Entire HTML
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting Elements
const header = document.querySelector(`.header`); // selects first element that matches class
const allSections = document.querySelectorAll(`.section`); // selects all elements that match class
console.log(allSections);

// Other ways to Select Elements for HTML Collection
document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`); // returns HTML collection of all buttons, not Node list (HTML collection updates automatically with live changes of elements)
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`)); // also returns live HTML collection

// Creating and Inserting HTML Elements
// .insertAdjacentHTML - simple way

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message); // adds element as first child of header
// header.append(message); // appends element as last child (moves it from first to last) as DOM elements are unique

// header.append(message.cloneNode(true)); // we can use this to make a copy to have it in both places

header.before(message); // inserts before header as a sibling
header.after(message); // inserts after header as sibling

// Deleting Elements
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });
