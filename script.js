const loadingText = document.querySelector('.loadingText');
const background = document.querySelector('.background');
let loading = 20;
let interval = setInterval(blurring, 100);
const scale = (num, one, two) => {
  return (num * one) / two;
};

function blurring() {
  loading--;

  if (loading <= 0) {
    clearInterval(interval);
  }

  loadingText.innerText = `${loading}`;
  loadingText.style.opacity = scale(loading, 1, 20);
  background.style.filter = `blur(${scale(loading, 100, 100)}px)`;
}