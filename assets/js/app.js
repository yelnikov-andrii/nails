// menu toggler

const menuButton = document.querySelector('.header__menuButton');
const menu = document.querySelector('.header__menu');
const closeButton = document.querySelector('.menu__closeButton');
const header = document.querySelector('.header');

menuButton.addEventListener('click', () => {
  menu.classList.add('active');
  header.classList.add('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
  header.classList.remove('active');
});

// menu toggler

// scroll sticky block
window.addEventListener('scroll', function() {
  var stickyBlock = document.querySelector('.stickyBlock');
  var stickyPosition = stickyBlock.getBoundingClientRect().top;

  if (stickyPosition <= 0) {
    stickyBlock.classList.add('stickyBlock--animate');
  } else {
    stickyBlock.classList.remove('stickyBlock--animate');
  }
});

// scroll sticky block

// AOS init

AOS.init();

//AOS init

// dropdowns 

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.faq__dropdownButton');

  dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = this.parentElement.classList.toggle('active');
      this.classList.toggle('active');

      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : '0';
    });
  });
});

// dropdowns