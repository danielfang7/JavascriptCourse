'use strict';

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);
const nav = document.querySelector(`.nav`);

///////////////////////////////////////
// Modal window

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

//////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);

  // Scrolling (current position + current scroll)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // // Smooth Scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  // New method of Scroll - way easier, only works in Modern Browsers
  section1.scrollIntoView({ behavior: `smooth` });
});

///////////////////////////////
// Page Navigation
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// Event Delegation Method
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  // Matching Strategy (only select link elements)
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// Tabbed Component
// Event Delegation
tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`); // Click on Overall Container, then only return Button using .closest

  // If we don't click on the Button and click on the Container (which returns null for .closest), return early
  if (!clicked) return;

  // Remove --active class name on all buttons, then only add it on the clicked tab button
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));

  // Remove --active class name on content areas so content resets then we only show the clicked tab content
  tabsContent.forEach(t => t.classList.remove(`operations__content--active`));

  // Activaate Tab
  clicked.classList.add(`operations__tab--active`);

  // Change Content area below the Tab
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu Fade Animations
const handleHover = function (e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// Using arrow functions to pass the opacity directly
nav.addEventListener('mouseover', e => handleHover(e, 0.5));
nav.addEventListener('mouseout', e => handleHover(e, 1));

// Sticky Navigation: old method
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener(`scroll`, function () {
//   console.log(window.scrollY);
//   if (this.window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// });

// Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(`header`);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
/////////////////////////////////
/*
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

// Inline Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

// To get Computed Styles (as appears on page)
console.log(getComputedStyle(message).color);

// To adjust Computed Styles
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// To adjust Custom Properties
document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes (accessing and modifying standard attributes)
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src); // if we need the relative src or href link and not the absolute, use getAttribute instead
console.log(logo.className);

logo.alt = `Beautiful minimalist logo`;

// Non-standard attribute
console.log(logo.designer); // returns undefined
console.log(logo.getAttribute(`designer`)); // works
logo.setAttribute(`company`, `Bankist`); // creates and sets new attribute

// Data Attributes (specially stored in dataset attribute)
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add(`c`);
logo.classList.remove(`c`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`);

// Don't Use, overrides/only allows one
logo.className = `Daniel`;


const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);

  // Scrolling (current position + current scroll)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // // Smooth Scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  // New method of Scroll - way easier, only works in Modern Browsers
  section1.scrollIntoView({ behavior: `smooth` });
});

// Removing event listener (must define callback function separatly)
const h1 = document.querySelector(`h1`);
const alertH1 = function (e) {
  alert(`addEventListener: Great! You are reading the heading :D`);

  h1.removeEventListener(`mouseenter`, alertH1);
};
h1.addEventListener(`mouseenter`, alertH1);

// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You are reading the heading :D #2`);
// };


// rgb(255, 255 ,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target);
});

// Parent of above block
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER`, e.target);
});

// Parent of above block
document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV BAR`, e.target);
});
*/
