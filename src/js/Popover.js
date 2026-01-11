export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(message, title, element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    
    const id = performance.now();
    this._popovers.push({
      id,
      element: popoverElement
    });
    
    popoverElement.setAttribute('id', id);

    const titleEl = document.createElement('h3');
    titleEl.classList.add('popover-header');
    titleEl.textContent = title;

    const bodyEl = document.createElement('div');
    bodyEl.classList.add('popover-body');
    bodyEl.textContent = message;

    const arrowEl = document.createElement('div');
    arrowEl.classList.add('arrow');

    popoverElement.appendChild(titleEl);
    popoverElement.appendChild(bodyEl);
    popoverElement.appendChild(arrowEl);

    document.body.appendChild(popoverElement);

    const { left, top, width, height } = element.getBoundingClientRect();

    popoverElement.style.left = left + width / 2 - popoverElement.offsetWidth / 2 + 'px';
    popoverElement.style.top = top - popoverElement.offsetHeight - 10 + 'px';

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find(p => p.id === id);
    if (popover) {
      popover.element.remove();
      this._popovers = this._popovers.filter(p => p.id !== id);
    }
  }
}