/**
 * @jest-environment jsdom
 */
import Popover from '../js/Popover';

test('should render popover', () => {
  document.body.innerHTML = '<button class="btn">Click me</button>';
  const btn = document.querySelector('.btn');
  const factory = new Popover();
  
  factory.showPopover('Test message', 'Test Title', btn);
  
  const popover = document.querySelector('.popover');
  const title = popover.querySelector('.popover-header');
  const body = popover.querySelector('.popover-body');

  expect(popover).toBeTruthy();
  expect(title.textContent).toBe('Test Title');
  expect(body.textContent).toBe('Test message');
});

test('should remove popover', () => {
  document.body.innerHTML = '<button class="btn">Click me</button>';
  const btn = document.querySelector('.btn');
  const factory = new Popover();
  
  const id = factory.showPopover('Msg', 'Title', btn);
  expect(document.querySelector('.popover')).toBeTruthy();
  
  factory.removePopover(id);
  expect(document.querySelector('.popover')).toBeNull();
});