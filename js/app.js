document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tabs__button');
  const tabItems = document.querySelectorAll('.tabs__item');
  const controls = document.querySelector('.tabs__buttons');
  const tabContent = document.querySelector('.tabs__content');
  
  tabLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
      const currentLink = controls.querySelector('li.active');
      if (currentLink !== item) {
        currentLink.classList.remove('active');
        item.classList.add('active');
      };
      
      const currentContent = tabContent.querySelector('.active');
      if(currentContent !== tabItems[index]) {
        currentContent.classList.remove('active');
        tabItems[index].classList.add('active');
      }; 
    });
  });
});