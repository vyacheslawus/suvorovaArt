'use strict'
document.addEventListener('DOMContentLoaded', () => {


// NAVIGATION MENU START
const navbar = document.querySelector('.navbar');
const navbarElem = document.querySelectorAll('.navbar-item');
const galleryWrapper = document.querySelector('.gallery-box');
const cooperationWrapper  = document.querySelector('.cooperation');
const newsWrapper = document.querySelector('.news-box');
const aboutWrapper = document.querySelector('.about-author');
const welcomeClose = document.querySelector('.welcome-on-board');

navbar.addEventListener('click', (event) => {
    let target = event.target;

    target = target.closest('li');

    navbarElem.forEach(item => {
      welcomeBoardClose();
      if (item === target) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
      if (target.id === 'gallery') {
        galleryWrapper.style.display = 'flex';
      } else {
        galleryWrapper.style.display = 'none';
      }

      if (target.id === 'cooperation') {
        cooperationWrapper.style.display = 'flex';
      } else { 
          cooperationWrapper.style.display = 'none';
        }

        if (target.id === 'news') {
          newsWrapper.style.display = 'flex';
        } else {
          newsWrapper.style.display = 'none';
        }

         if (target.id === 'about') {
          aboutWrapper.style.display = 'flex';
        } else {
          aboutWrapper.style.display = 'none';
        }
      
    })
})
// NAVIGATION MENU END

// MODAL NAVIGATION MENU //

const menuButton = document.querySelector('.menu-icon');
const menuModal = document.querySelector('.menu-modal');
const closeMenuModal = document.querySelector('.close-menu');

menuButton.addEventListener('click', () => {
  menuModal.classList.toggle('active');
})

const closeModalMenu = () => {
  menuModal.classList.remove('active');
}

closeMenuModal.addEventListener('click', closeModalMenu);



// MMMMM //

const navbarModal = document.querySelector('.modal-nav');
const navbarModalElem = document.querySelectorAll('.modal-nav-item');

navbarModal.addEventListener('click', (event) => {
    let target = event.target;

    target = target.closest('li');

    navbarModalElem.forEach(item => {
      welcomeBoardClose();
      closeModalMenu();
     
      if (item === target) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
      if (target.id === 'gallery') {
      
        galleryWrapper.style.display = 'flex';
      } else {
        galleryWrapper.style.display = 'none';
      }

      if (target.id === 'cooperation') {
        cooperationWrapper.style.display = 'flex';
      } else { 
          cooperationWrapper.style.display = 'none';
        }

        if (target.id === 'news') {
          newsWrapper.style.display = 'flex';
        } else {
          newsWrapper.style.display = 'none';
        }

        if (target.id === 'about') {
          aboutWrapper.style.display = 'flex';
        } else {
          aboutWrapper.style.display = 'none';
        }
    
      
    })

  });


// WELCOME PAGE FUNCTION 

const welcomeBoardClose = () => {
    welcomeClose.style.display = 'none';
}

// COOPERATION BOX STARTED //

const coopBox = document.querySelector('.coop-box');
const socialModal = document.querySelector('.social-modal');
const socialItems = document.querySelectorAll('.social-item');
const closeModal = document.querySelector('.close-modal');


  coopBox.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('div');

    socialItems.forEach(item => {
      socialModal.style.display = 'flex';
   
      item.classList.toggle('active');
    
        if (target.classList.contains('email-box')) {
          socialModal.innerHTML = `<span>hello world</span> <span class="close-modal">×</span>`
        } 
    })
  })

})

