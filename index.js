
const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const popupClose = document.querySelector('.close');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  popup.style.display = 'block';
  form.reset(); 
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});
