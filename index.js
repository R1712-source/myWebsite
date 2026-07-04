const introBtn = document.getElementById("introBtn");
const detail = document.getElementById("detail");
const box = document.getElementById("introDesc");

function disp() {
  const isHidden = window.getComputedStyle(detail).display === 'none';

  detail.style.display = isHidden ? 'block' : 'none';
  box.classList.toggle('blurred', isHidden);
}

