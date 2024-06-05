let secondsSpent = 0;
const timeSpentElement = document.getElementById('time-spent');
let intervalId;
var tofix = 3;

function getUserNumber(){
    return 0
}

function updateTimeSpent() {
    const usr_mult = getUserMultiplier();
    const mult = getUserNumber() + 1 * usr_mult;
    secondsSpent += mult;
    if (usr_mult < 1){
        tofix = 3;
    }
    else{
        tofix = 1;
    }
    timeSpentElement.textContent = secondsSpent.toFixed(tofix);
}

function getUserMultiplier() {
    // Здесь можно реализовать логику получения значения mult для каждого пользователя.
    // Для простоты, в этом примере возвращаем жестко заданное значение.
    return 0.001;
}

// Запуск обновления времени с интервалом в 1 секунду
intervalId = setInterval(updateTimeSpent, 1000);

function toggleMenu() {
    const bottomPanel = document.getElementById('bottomPanel');
    const toggleButton = document.getElementById('toggleButton');
    const infoHeader = document.getElementById('infoHeader');

    if (bottomPanel.classList.contains('show')) {
        bottomPanel.classList.remove('show');
        toggleButton.style.bottom = '20px';
        toggleButton.textContent = "↑";
        infoHeader.classList.remove('show');
    } else {
        bottomPanel.classList.add('show');
        toggleButton.style.bottom = '72px'; // Adjust based on the height of the bottom panel
        toggleButton.textContent = "↓";
        infoHeader.classList.add('show');
    }
    toggleButton.classList.toggle('active');
}

// Resize event listener to handle dynamic resizing
window.addEventListener('resize', () => {
    document.querySelector('.container').style.height = `${window.innerHeight}px`;
});

// Set the initial height of the container
document.querySelector('.container').style.height = `${window.innerHeight}px`;
