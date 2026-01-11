let currentUser = null;
let users = JSON.parse(localStorage.getItem('farmquest_users')) || [];

const currentUserLabel = document.getElementById('currentUserLabel');
const logoutBtn = document.getElementById('logoutBtn');
const coinsLabel = document.getElementById('coinsLabel');

window.onload = async function() {
    const savedUser = localStorage.getItem('farmquest_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
        await loadCoinsFromDB();  // Загрузка монет из БД
    }
};

async function loadCoinsFromDB() {
    try {
        if (!currentUser || currentUser.isGuest) return;
        const response = await fetch(`/api/coins/${currentUser.username}`);
        const data = await response.json();
        if (coinsLabel) coinsLabel.textContent = data.coins;
    } catch(e) {
        console.log('Сервер недоступен, используем localStorage');
    }
}

function showRegisterModal() {
    window.location.href = 'reg.html';
}

function showLoginModal() {
    // Теперь используем серверный логин
    loginWithServer();
}

async function loginWithServer() {
    const username = prompt('Логин:');
    if (!username) return;
    
    const password = prompt('Пароль (пока = логину для простоты):');
    if (!password || password !== username) {
        alert('Пароль должен равняться логину');
        return;
    }
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        
        const user = await response.json();
        if (user.error) {
            alert(user.error);
            return;
        }
        
        currentUser = user;
        localStorage.setItem('farmquest_currentUser', JSON.stringify(currentUser));
        updateUserUI();
        if (coinsLabel) coinsLabel.textContent = user.coins;
        alert(`Добро пожаловать, ${user.username}! Монет: ${user.coins}`);
        
    } catch(e) {
        // Fallback на localStorage
        loginAsGuestWithName(username);
    }
}

function loginAsGuest() {
    currentUser = { id: 'guest', username: 'Гость', isGuest: true };
    localStorage.setItem('farmquest_currentUser', JSON.stringify(currentUser));
    updateUserUI();
}

function loginAsGuestWithName(username) {
    currentUser = { id: 'guest', username, isGuest: true };
    localStorage.setItem('farmquest_currentUser', JSON.stringify(currentUser));
    updateUserUI();
}

function updateUserUI() {
    if (currentUser) {
        currentUserLabel.textContent = currentUser.username;
        logoutBtn.style.display = 'inline-block';
    } else {
        currentUserLabel.textContent = 'Не вошли';
        logoutBtn.style.display = 'none';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('farmquest_currentUser');
    updateUserUI();
    if (coinsLabel) coinsLabel.textContent = '0';
}

function startGame() {
    window.location.href = 'game.html';
}

function showScreen(screenId) {
    if (screenId === 'farm') {
        window.location.href = 'farm.html';
    } else {
        alert(`Скоро будет экран: ${screenId}`);
    }
}

function goToFarm() {
    window.location.href = 'farm.html';
}
