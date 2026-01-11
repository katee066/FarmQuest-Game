let currentUser = null;
let users = JSON.parse(localStorage.getItem('farmquest_users')) || [];

const currentUserLabel = document.getElementById('currentUserLabel');
const logoutBtn = document.getElementById('logoutBtn');
const coinsLabel = document.getElementById('coinsLabel');

window.onload = async function() {
    console.log('Страница загружена');
    
    initSoundControls();
    
    const savedUser = localStorage.getItem('farmquest_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
        await loadCoinsFromDB();
    }
    
    setTimeout(() => {
        if (audioManager.userInteracted) {
            audioManager.initAudio();
        }
    }, 1000);
};

async function loadCoinsFromDB() {
    try {
        if (!currentUser || currentUser.isGuest) return;
        const response = await fetch(`/api/coins/${currentUser.username}`);
        const data = await response.json();
        if (coinsLabel) coinsLabel.textContent = data.coins;
    } catch(e) {}
}

function initSoundControls() {
    const musicSlider = document.getElementById('musicVolume');
    const sfxSlider = document.getElementById('sfxVolume');
    const musicValue = document.getElementById('musicVolumeValue');
    const sfxValue = document.getElementById('sfxVolumeValue');
    
    if (musicSlider && sfxSlider) {
        musicSlider.value = audioManager.musicVolume * 100;
        sfxSlider.value = audioManager.sfxVolume * 100;
        if (musicValue) musicValue.textContent = `${Math.round(audioManager.musicVolume * 100)}%`;
        if (sfxValue) sfxValue.textContent = `${Math.round(audioManager.sfxVolume * 100)}%`;
        
        musicSlider.addEventListener('input', function() {
            audioManager.setMusicVolume(this.value);
            if (musicValue) musicValue.textContent = `${this.value}%`;
        });
        
        sfxSlider.addEventListener('input', function() {
            audioManager.setSFXVolume(this.value);
            if (sfxValue) sfxValue.textContent = `${this.value}%`;
        });
        
        sfxSlider.addEventListener('change', function() {
            if (this.value > 0) {
                audioManager.playSound('button');
            }
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            setTimeout(() => {
                audioManager.playSound('button');
            }, 100);
        }
        
        const hint = document.getElementById('audioHint');
        if (hint && audioManager.userInteracted) {
            hint.style.opacity = '0';
            hint.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                if (hint) hint.remove();
            }, 500);
        }
    });
}

function showRegisterModal() {
    audioManager.playSound('click');
    window.location.href = 'reg.html';
}

function showLoginModal() {
    audioManager.playSound('click');
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
        loginAsGuestWithName(username);
    }
}

function loginAsGuest() {
    audioManager.playSound('click');
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
    audioManager.playSound('click');
    currentUser = null;
    localStorage.removeItem('farmquest_currentUser');
    updateUserUI();
    if (coinsLabel) coinsLabel.textContent = '0';
}

function startGame() {
    audioManager.playSound('click');
    window.location.href = 'game.html';
}

function showScreen(screenId) {
    audioManager.playSound('click');
    if (screenId === 'farm') {
        window.location.href = 'farm.html';
    } else {
        alert(`Скоро будет экран: ${screenId}`);
    }
}

function goToFarm() {
    audioManager.playSound('click');
    window.location.href = 'farm.html';
}