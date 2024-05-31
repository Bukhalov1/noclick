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
