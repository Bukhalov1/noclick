let secondsSpent = 0;
const timeSpentElement = document.getElementById('time-spent');
let intervalId;

function updateTimeSpent() {
    const mult = 1 + 1 * getUserMultiplier();
    secondsSpent += mult;
    timeSpentElement.textContent = secondsSpent;
}

function getUserMultiplier() {
    // Здесь можно реализовать логику получения значения mult для каждого пользователя.
    // Для простоты, в этом примере возвращаем жестко заданное значение.
    return 5;
}

// Запуск обновления времени с интервалом в 1 секунду
intervalId = setInterval(updateTimeSpent, 1000);

function toggleMenu() {
    const bottomPanel = document.getElementById('bottomPanel');
    const toggleButton = document.getElementById('toggleButton');

    if (bottomPanel.classList.contains('show')) {
        bottomPanel.classList.remove('show');
        toggleButton.style.bottom = '20px';
        toggleButton.textContent = "↑";
    } else {
        bottomPanel.classList.add('show');
        toggleButton.style.bottom = '95px'; // Adjust based on the height of the bottom panel
        toggleButton.textContent = "↓";
    }
    toggleButton.classList.toggle('active');
}

// Resize event listener to handle dynamic resizing
window.addEventListener('resize', () => {
    document.querySelector('.container').style.height = `${window.innerHeight}px`;
});

// Set the initial height of the container
document.querySelector('.container').style.height = `${window.innerHeight}px`;
