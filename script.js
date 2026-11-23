// 1. Button changes content using addEventListener('click', ...)
const changeTextBtn = document.querySelector('#change-text-btn');
const statusText = document.querySelector('#status-text');

changeTextBtn.addEventListener('click', () => {
  statusText.textContent = 'Success! The page content was updated using JavaScript.';
});

// 2. Style changes in real time on input
const colorInput = document.querySelector('#color-input');
const livePreview = document.querySelector('#live-preview');

colorInput.addEventListener('input', () => {
  const currentText = colorInput.value.trim();

  if (currentText.length > 0) {
    livePreview.textContent = currentText;
    livePreview.style.color = '#1d4ed8';
    livePreview.classList.add('highlight');
  } else {
    livePreview.textContent = 'Watch my style change as you type!';
    livePreview.style.color = '#000000';
    livePreview.classList.remove('highlight');
  }
});

// 3. Dynamic list using createElement and appendChild (+ Bonus remove)
const itemInput = document.querySelector('#item-input');
const addItemBtn = document.querySelector('#add-item-btn');
const itemList = document.querySelector('#item-list');

addItemBtn.addEventListener('click', () => {
  const itemText = itemInput.value.trim();
  if (itemText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;

  // Bonus: Remove button for each added item
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(removeBtn);
  itemList.appendChild(listItem);

  itemInput.value = '';
  itemInput.focus();
});

