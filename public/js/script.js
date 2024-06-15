let secondsSpent = 0;
const timeSpentElement = document.getElementById('time-spent');
let intervalId;
var tofix = 3;

function getUserNumber(){
    return 0;
}

// document.getElementById('toggleButton').click(); // ATTENTION!

// Запуск обновления времени с интервалом в 1 секунду
intervalId = setInterval(updateTimeSpent, 1000);

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

// Function to show sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    if (sectionId === 'mainSection') {
        document.querySelector('.background').style.display = 'block';
        document.querySelector('.large-number').style.display = 'block';
        document.querySelector('.bottom-panel').style.display = 'flex';
    } else {
        document.querySelector('.background').style.display = 'none';
        document.querySelector('.large-number').style.display = 'none';
        document.querySelector('.bottom-panel').style.display = 'none';
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.classList.add('active');
    }
}

// Function to display leaderboards
function displayLeaderboards(data) {
    const leaderboardsList = document.getElementById('leaderboardsList');
    leaderboardsList.innerHTML = '';
    // Добавим заголовок
    const headerItem = document.createElement('li');
    headerItem.classList.add('leaderboard-header');
    headerItem.innerHTML = '<span>Username</span><span>Scores</span><span>Multiplier</span>';
    leaderboardsList.appendChild(headerItem);
    data.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${player.username}</span><span>${player.scores}</span><span>${player.multiplier}</span>`;
        leaderboardsList.appendChild(listItem);
    });
}

// Example data
const exampleData = [
    { username: 'Player1', scores: 105.23, multiplier: 1.053 },
    { username: 'Player2', scores: 98.45, multiplier: 1.002 },
    { username: 'Player3', scores: 45.10, multiplier: 0.085 }
];

// Display example data on load
document.addEventListener('DOMContentLoaded', () => {
    displayLeaderboards(exampleData);
});
