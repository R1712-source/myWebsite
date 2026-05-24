const introBtn = document.getElementById("introBtn");
const detail = document.getElementById("detail");

function disp() {
  const isHidden = window.getComputedStyle(detail).display === 'none';

  detail.style.display = isHidden ? 'block' : 'none';
}

