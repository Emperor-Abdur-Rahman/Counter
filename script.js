document.addEventListener('DOMContentLoaded', function () {
  const counter = document.querySelector('.counter');
  const incrementBtn = document.querySelector('.increment-btn');
  const decrementBtn = document.querySelector('.decrement-btn');
  const resetBtn = document.querySelector('.reset-btn');
  const addBtn = document.querySelector('.add-btn');
  const subtractBtn = document.querySelector('.subtract-btn');
  const toggleBtn = document.querySelector('.toggle-btn');
  const changeBgBtn = document.querySelector('.change-bg-btn');
  const extraBtn = document.querySelector('.extra-btn');
  const randomBtn = document.querySelector('.random-btn');
  const timerBtn = document.querySelector('.timer-btn');
  const resetBgBtn = document.querySelector('.reset-bg-btn');
  const container = document.querySelector('.container');

  let count = 0;
  let isIncrementing = true;
  let isOutlined = false;
  let timerInterval;

  function updateCounter() {
    counter.textContent = count;
  }

  function increment() {
    count++;
    updateCounter();
  }

  function decrement() {
    count--;
    updateCounter();
  }

  function reset() {
    count = 0;
    updateCounter();
  }

  function add() {
    count += 5;
    updateCounter();
  }

  function subtract() {
    count -= 5;
    updateCounter();
  }

  function toggleIncrement() {
    isIncrementing = !isIncrementing;
    toggleBtn.textContent = isIncrementing ? 'Toggle Decrement' : 'Toggle Increment';
  }

  function changeBackground() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  function doubleAmount() {
    count *= 2;
    updateCounter();
  }

  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    count = randomNumber;
    updateCounter();
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      increment();
    }, 1000);
  }

  function resetBackground() {
    document.body.style.backgroundColor = '#f2f2f2';
  }

  function toggleOutline() {
    isOutlined = !isOutlined;
    container.classList.toggle('outlined', isOutlined);
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);
  resetBtn.addEventListener('click', reset);
  addBtn.addEventListener('click', add);
  subtractBtn.addEventListener('click', subtract);
  toggleBtn.addEventListener('click', toggleIncrement);
  changeBgBtn.addEventListener('click', changeBackground);
  extraBtn.addEventListener('click', doubleAmount);
  randomBtn.addEventListener('click', getRandomNumber);
  timerBtn.addEventListener('click', startTimer);
  resetBgBtn.addEventListener('click', resetBackground);
  toggleOutlineBtn.addEventListener('click', toggleOutline);
});
