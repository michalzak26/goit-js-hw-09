const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stopButton.disabled = true;
let colorChangeInterval = null;

// Funkcja do generowania losowego koloru
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Funkcja uruchamiająca zmianę koloru
function startColorSwitch() {
  // Dezaktywacja przycisku "Start", aktywacja "Stop"
  startButton.disabled = true;
  stopButton.disabled = false;

  // Zmiana koloru tła co 1 sekundę
  colorChangeInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Funkcja zatrzymująca zmianę koloru
function stopColorSwitch() {
  // Aktywacja przycisku "Start", dezaktywacja "Stop"
  startButton.disabled = false;
  stopButton.disabled = true;

  // Zatrzymanie zmiany koloru
  clearInterval(colorChangeInterval);
}

// Event Listeners dla przycisków
startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);

