import Popover from './Popover';

const popoverFactory = new Popover();
let actualPopoverId = null;

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (actualPopoverId === null) {
    actualPopoverId = popoverFactory.showPopover(
      'And here\'s some amazing content. It\'s very engaging. Right?',
      'Popover title',
      btn
    );
  } else {
    popoverFactory.removePopover(actualPopoverId);
    actualPopoverId = null;
  }
});