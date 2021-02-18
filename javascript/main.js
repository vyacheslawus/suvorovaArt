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
const socialModalLink = document.querySelector('.social-modal_link');


  coopBox.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('div');

    socialItems.forEach(item => {
      
   
      if (target === item) {
        
        item.classList.toggle('active');
       
        if (item.classList.contains('active')) {
          socialModal.style.display = 'flex';
        } else {
          socialModal.style.display = '';
        }

       const socialModalTitle = socialModal.querySelector('.social-modal_title');

        if (target.id === 'email') {
          socialModalTitle.textContent = 'Отпрвить письмо на почту:';
         socialModalLink.textContent = 'DrRomDom@yandex.ru';
          
        } else if (target.id === 'inst') {
          socialModalTitle.textContent = 'Написать в Директ:';
          socialModalLink.textContent = 'instagramm.com/chuftaraz';
        }  else if (target.id === 'vk') {
          socialModalTitle.textContent = 'Личное сообщение:';
          socialModalLink.textContent = 'vk.com/chuftaraz';
        }

      } 
    
     
    })
  });


  closeModal.addEventListener('click', () => {
    socialModal.style.display = '';
  })

  // DONATING MENU //

  const donatButton = document.querySelector('.donat-button');
  const donatWrapper = document.querySelector('.donat-wrapper');
  const authorCry = document.querySelector('.author-cry');
  const authorPhotoImg = document.querySelector('.author-photo img');
  const donatingChecked = document.querySelector('.donating-checked');
  const authorBioText = document.querySelector('.author-bio_text');


  donatButton.addEventListener('click', () => {
    donatButton.classList.toggle('active');
    if (donatButton.classList.contains('active')) {
      donatWrapper.style.display = 'flex';
      authorCry.style.display = 'flex';
      authorPhotoImg.style.filter = 'opacity(20%)';
      authorBioText.textContent = 'Вы можете пожертвовать любую сумму на указанные реквизиты. Данный вклад поступает напрямую Автору и в дальнейшем будет способствовать развитию как непосредственно самому художнику, так и искусству в целом. Наш ресурс не пропагандирует внесение пожертвований, или какую-либо машенническую деятельность. Подтверждая оплату Вы соглашаетесь с политикой конфеденциальности, а также приниаете условия соглашения. Огромное спасибо за то, что Вы учавствуете в развитие художественного искусства.'

      
    } else {
      donatWrapper.style.display = 'none';
      authorCry.style.display = 'none';
      authorPhotoImg.style.filter = 'none';
      authorBioText.textContent = '2000 года рождения. Родилась в городе Набережные Члены, Республика Татарстан.С раннего детства увлекаюсь разного рода искусством, в особенности - живописью. Рисую гуашью, акварелью, маслом. Но в современных реалиях предпочитаю создавать работы в стиле "Digital ART". На сегодняшний день имею за спиной опыт работы в разных категориях живописи, от создания логотипов для некоммерческих организаций до воспроизведения крупномасштабных художественных картин. На данный момент обучаюсь в направление "Художественный дизайнер" в филиале Сочинского Государсвтенного Университета (СГУ).'
    }

    donatingChecked.addEventListener('click', () => {
      donatButton.classList.remove('active');
      donatWrapper.style.display = 'none';
      authorCry.style.display = 'none';
      authorPhotoImg.style.filter = 'none';
      alert('thanks you!');
      authorBioText.innerHTML = `<span class="author-bio_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor excepturi quia voluptas atque corporis architecto accusamus alias incidunt illum similique! Asperiores rerum velit saepe, dolorem repudiandae maxime iusto qui aperiam laborum quibusdam ipsum, molestias omnis. Autem nulla fugit assumenda nam.</span>`;
    });
    

  });

  // LIKE BUTTON //

  const likeButtons = document.querySelectorAll('.like_img');
  console.log(likeButtons);
  const cardDateLike = document.querySelectorAll('.card-date-like');

  likeButtons.forEach(button => {
    
    button.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('img');
      if (target === button) {
        button.classList.toggle('active');
        button.textContent = 'XYI';
        
      }
    })
  })

  // GET ORDERS MODAL // 

  const getOrderButton = document.querySelector('.get-order');
  const orderForm = document.querySelector('.order-form');
  const orderFormClose = document.querySelector('.close-form');


  getOrderButton.addEventListener('click', () => {
      orderForm.style.display = 'flex';
  })

  orderFormClose.addEventListener('click', () => {
      orderForm.style.display = 'none';
  })


});

