const toggleBtn = document.querySelector('.nav-toggleBtn');
const rmenu = document.querySelector('.nav-rmenu');

toggleBtn.addEventListener('click', () => {
  rmenu.classList.toggle('active')
})