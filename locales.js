const LOCALES = {
    ru: {
        gameTitle: "FarmQuest",
        menuTitle: "FarmQuest",
        menuSubtitle: "Развивай ферму и управляй персонажами",
        
        account: "Аккаунт",
        notLoggedIn: "Не вошли",
        guest: "Гость",
        
        buttons: {
            startGame: "🌱 Войти на карту",
            manageCharacters: "👤 Управление персонажами",
            loginAsGuest: "🙋 Войти как гость",
            login: "🔑 Войти в аккаунт",
            register: "📝 Регистрация",
            logout: "Выйти из аккаунта",
            saveProgress: "💾 Сохранить прогресс",
            close: "Закрыть",
            backToMenu: "⬅️ В главное меню",
            continue: "Продолжить игру",
            start: "Начать",
            buy: "Купить",
            buyPack: "Купить (5 шт.)",
            plant: "Посеять",
            harvest: "Собрать",
            playAgain: "🔄 Начать заново",
            castRod: "🎣 Забросить удочку",
            castAgain: "🎣 Забросить снова",
            startGameBtn: "🐰 Начать игру"
        },
        
        sound: {
            music: "🎵 Фоновая музыка",
            sfx: "🔊 Звуковые эффекты",
            clickHint: "👆 КЛИКНИТЕ ДЛЯ ЗВУКОВ",
            clickHintDesc: "После клика на странице звуки будут работать"
        },
        
        messages: {
            welcome: "Добро пожаловать, {username}! Монет: {coins}",
            bought: "Куплено: {item}!",
            boughtSeeds: "Куплено 5 семян {seed}!",
            notEnoughCoins: "Недостаточно монет!",
            savedToCloud: "Прогресс сохранен в облако! ☁️",
            loadedFromCloud: "Прогресс загружен из облака! ☁️",
            saveFailed: "Не удалось сохранить в облако 😢",
            invalidPassword: "Пароль должен равняться логину",
            wrongCredentials: "Неверный логин или пароль",
            userExists: "Пользователь уже существует",
            userNotFound: "Пользователь не найден",
            registerDesc: "Создайте новый аккаунт для FarmQuest",
            loginDesc: "Введите данные для входа в FarmQuest",
            username: "Имя пользователя",
            email: "Email",
            password: "Пароль (минимум 6 символов)",
            loginOrEmail: "Логин или Email",
            haveAccount: "Уже есть аккаунт? Вход",
            noAccount: "Нет аккаунта? Регистрация",
            usernameShort: "Имя пользователя должно быть минимум 3 символа",
            invalidEmail: "Введите корректный email",
            passwordShort: "Пароль должен быть минимум 6 символов"
        },
        
        map: {
            title: "Карта фермы",
            subtitle: "Выберите локацию: поля, магазины или миниигры",
            farm: "🌾 Поля",
            farmDesc: "Сажайте и собирайте урожай",
            seeds: "🌱 Магазин семян",
            seedsDesc: "Покупка разных культур",
            tools: "🪓 Инструменты",
            toolsDesc: "Бонус к сбору урожая",
            equipment: "🚜 Оборудование",
            equipmentDesc: "Рост и доп. поля",
            minigames: "🎮 Миниигры",
            minigamesDesc: "Зарабатывайте бонусные монеты"
        },
        
        detailTitles: {
            farm: "Поля",
            seeds: "Магазин семян",
            tools: "Инструменты",
            equipment: "Оборудование",
            minigames: "Миниигры"
        },
        
        farm: {
            title: "Поле 1 (основное)",
            title2: "Поле 2 (дополнительное)",
            bonus: "Бонус",
            speed: "Скорость",
            coinsPerHarvest: "монет за сбор",
            growthSpeed: "Скорость роста",
            tutorial: "Нажимайте на клетки: пусто → вспахано → посеяно → (растёт) → готово → пусто.",
            selectSeed: "Выберите семена",
            wheat: "Пшеница",
            carrot: "Морковь",
            corn: "Кукуруза",
            pieces: "шт.",
            tilled: "🪓 Вспахано",
            planted: "🌱 Посеяно",
            growing: "Растёт...",
            ready: "✅ Готово к сбору",
            empty: "⬜ Пусто",
            harvestMessage: "Собрано +{amount} монет! (+1 к уровню)",
            noSeeds: "Нет семян {seed}!"
        },
        
        seedsShop: {
            desc: "Покупка пакетов семян. За каждую покупку вы получаете 5 штук.",
            growthTime: "Растёт {time} сек",
            reward: "даёт {reward} монет",
            price: "{price} монет",
            inStock: "На складе",
            pieces: "шт."
        },
        
        toolsShop: {
            desc: "Инструменты увеличивают монеты за каждый сбор урожая.",
            bonus: "+{bonus} монета за сбор",
            purchased: "Куплено",
            notPurchased: "Не куплено"
        },
        
        equipmentShop: {
            desc: "Оборудование ускоряет рост растений и открывает новое поле.",
            growthSpeed: "Ускоряет рост на {percent}%",
            secondField: "Открывает второе поле",
            purchased: "Куплено",
            notPurchased: "Не куплено"
        },
        
        minigames: {
            desc: "Здесь доступны миниигры, за которые можно получить дополнительные монеты.",
            openWindow: "Открыть окно миниигр",
            modalTitle: "Миниигры",
            modalSubtitle: "Выберите игру: Рыбалка, Поймай морковку или Кролик-змейка",
            fishing: "🎣 Рыбалка",
            carrot: "🐰 Поймай морковку",
            snake: "🐇 Кролик-змейка",
            
            fishingGame: {
                title: "🎣 Рыбалка",
                desc: "Ловите рыбу, нажимая на кнопку!",
                caught: "Вы поймали: {result}",
                fish: ["🐟 (+3 монеты)", "🐠 (+5 монет)", "🐡 (+8 монет)", "🩴 (ничего)", "🗑 (ничего)"]
            },
            
            carrotGame: {
                title: "🐰 Поймай морковку",
                desc: "Кликайте на падающие морковки!",
                score: "Очки: {score}",
                clickToStart: "🐰 Начать игру"
            },
            
            snakeGame: {
                title: "🐇 Кролик-змейка",
                desc: "Управляйте кроликом и собирайте морковки! Стрелки на клавиатуре или кнопки ниже.",
                carrotsCollected: "Собрано морковок: {score}",
                prize: "Приз: {prize} монет",
                gameOver: "Игра окончена! Вы получили {prize} монет и {score} к уровню!",
                controls: {
                    up: "⬆️",
                    left: "⬅️",
                    right: "➡️",
                    down: "⬇️",
                    pause: "⏯️"
                }
            }
        },
        
        levelSystem: {
            level: "Ур. {level}",
            stats: "📊 Статистика уровня:",
            currentLevel: "Текущий уровень: {level}",
            totalHarvested: "Собрано всего: {amount} урожая",
            progress: "Прогресс: {current}/{total}",
            bonuses: "Бонусы уровня {level}:",
            coinsPerHarvest: "+{bonus} монет за сбор",
            growthSpeed: "Скорость роста: {percent}%",
            nextLevel: "Следующий уровень ({next}):",
            reward: "Награда: {coins} монет",
            bonus: "Бонус: {bonus}",
            maxLevel: "🎉 Вы достигли максимального уровня!"
        },
        
        rewards: {
            newLevel: "Новый уровень!",
            levelReached: "Уровень {level} достигнут!",
            received: "Получено: {amount} монет",
            nextLevel: "До следующего уровня: {progress} урожая",
            levelDescriptions: {
                1: "Добро пожаловать в FarmQuest!",
                2: "Вы становитесь опытнее!",
                3: "Ваши навыки растут!",
                4: "Вы - уверенный фермер!",
                5: "Мастер земледелия!",
                6: "Эксперт по урожаю!",
                7: "Великий фермер!",
                8: "Легенда фермерства!",
                9: "Повелитель урожая!",
                10: "ВЕЛИЧАЙШИЙ ФЕРМЕР ВСЕХ ВРЕМЁН!"
            },
            defaultDesc: "Новая вершина достигнута!"
        },
        
        coins: "Монет",
        character: "Персонаж",
        loading: "Загрузка...",
        save: "Сохранить",
        cancel: "Отмена",
        confirm: "Подтвердить"
    },
    
    en: {
        gameTitle: "FarmQuest",
        menuTitle: "FarmQuest",
        menuSubtitle: "Grow your farm and manage characters",
        
        account: "Account",
        notLoggedIn: "Not logged in",
        guest: "Guest",
        
        buttons: {
            startGame: "🌱 Enter Map",
            manageCharacters: "👤 Manage Characters",
            loginAsGuest: "🙋 Login as Guest",
            login: "🔑 Login",
            register: "📝 Register",
            logout: "Logout",
            saveProgress: "💾 Save Progress",
            close: "Close",
            backToMenu: "⬅️ Back to Menu",
            continue: "Continue Game",
            start: "Start",
            buy: "Buy",
            buyPack: "Buy (5 pcs)",
            plant: "Plant",
            harvest: "Harvest",
            playAgain: "🔄 Play Again",
            castRod: "🎣 Cast Rod",
            castAgain: "🎣 Cast Again",
            startGameBtn: "🐰 Start Game"
        },
        
        sound: {
            music: "🎵 Background Music",
            sfx: "🔊 Sound Effects",
            clickHint: "👆 CLICK FOR SOUNDS",
            clickHintDesc: "Sounds will work after clicking on the page"
        },
        
        messages: {
            welcome: "Welcome, {username}! Coins: {coins}",
            bought: "Purchased: {item}!",
            boughtSeeds: "Purchased 5 {seed} seeds!",
            notEnoughCoins: "Not enough coins!",
            savedToCloud: "Progress saved to cloud! ☁️",
            loadedFromCloud: "Progress loaded from cloud! ☁️",
            saveFailed: "Failed to save to cloud 😢",
            invalidPassword: "Password must equal username",
            wrongCredentials: "Wrong login or password",
            userExists: "User already exists",
            userNotFound: "User not found",
            registerDesc: "Create a new FarmQuest account",
            loginDesc: "Enter your FarmQuest login details",
            username: "Username",
            email: "Email",
            password: "Password (minimum 6 characters)",
            loginOrEmail: "Login or Email",
            haveAccount: "Already have an account? Login",
            noAccount: "No account? Register",
            usernameShort: "Username must be at least 3 characters",
            invalidEmail: "Please enter a valid email",
            passwordShort: "Password must be at least 6 characters"
        },
        
        map: {
            title: "Farm Map",
            subtitle: "Choose location: fields, shops or minigames",
            farm: "🌾 Fields",
            farmDesc: "Plant and harvest crops",
            seeds: "🌱 Seed Shop",
            seedsDesc: "Buy different crops",
            tools: "🪓 Tools",
            toolsDesc: "Harvest bonus",
            equipment: "🚜 Equipment",
            equipmentDesc: "Growth and extra fields",
            minigames: "🎮 Minigames",
            minigamesDesc: "Earn bonus coins"
        },
        
        detailTitles: {
            farm: "Fields",
            seeds: "Seed Shop",
            tools: "Tools",
            equipment: "Equipment",
            minigames: "Minigames"
        },
        
        farm: {
            title: "Field 1 (main)",
            title2: "Field 2 (additional)",
            bonus: "Bonus",
            speed: "Speed",
            coinsPerHarvest: "coins per harvest",
            growthSpeed: "Growth speed",
            tutorial: "Click cells: empty → tilled → planted → (growing) → ready → empty.",
            selectSeed: "Select seeds",
            wheat: "Wheat",
            carrot: "Carrot",
            corn: "Corn",
            pieces: "pcs",
            tilled: "🪓 Tilled",
            planted: "🌱 Planted",
            growing: "Growing...",
            ready: "✅ Ready",
            empty: "⬜ Empty",
            harvestMessage: "Harvested +{amount} coins! (+1 to level)",
            noSeeds: "No {seed} seeds!"
        },
        
        seedsShop: {
            desc: "Buy seed packs. Each purchase gives you 5 pieces.",
            growthTime: "Grows {time} sec",
            reward: "gives {reward} coins",
            price: "{price} coins",
            inStock: "In stock",
            pieces: "pcs"
        },
        
        toolsShop: {
            desc: "Tools increase coins per harvest.",
            bonus: "+{bonus} coin per harvest",
            purchased: "Purchased",
            notPurchased: "Not purchased"
        },
        
        equipmentShop: {
            desc: "Equipment speeds up plant growth and opens new field.",
            growthSpeed: "Speeds growth by {percent}%",
            secondField: "Opens second field",
            purchased: "Purchased",
            notPurchased: "Not purchased"
        },
        
        minigames: {
            desc: "Minigames are available here for bonus coins.",
            openWindow: "Open minigames window",
            modalTitle: "Minigames",
            modalSubtitle: "Choose game: Fishing, Catch Carrot or Rabbit Snake",
            fishing: "🎣 Fishing",
            carrot: "🐰 Catch Carrot",
            snake: "🐇 Rabbit Snake",
            
            fishingGame: {
                title: "🎣 Fishing",
                desc: "Catch fish by clicking the button!",
                caught: "You caught: {result}",
                fish: ["🐟 (+3 coins)", "🐠 (+5 coins)", "🐡 (+8 coins)", "🩴 (nothing)", "🗑 (nothing)"]
            },
            
            carrotGame: {
                title: "🐰 Catch Carrot",
                desc: "Click falling carrots!",
                score: "Score: {score}",
                clickToStart: "🐰 Start Game"
            },
            
            snakeGame: {
                title: "🐇 Rabbit Snake",
                desc: "Control the rabbit and collect carrots! Keyboard arrows or buttons below.",
                carrotsCollected: "Carrots collected: {score}",
                prize: "Prize: {prize} coins",
                gameOver: "Game over! You got {prize} coins and {score} to level!",
                controls: {
                    up: "⬆️",
                    left: "⬅️",
                    right: "➡️",
                    down: "⬇️",
                    pause: "⏯️"
                }
            }
        },
        
        levelSystem: {
            level: "Lvl {level}",
            stats: "📊 Level Statistics:",
            currentLevel: "Current level: {level}",
            totalHarvested: "Total harvested: {amount} crops",
            progress: "Progress: {current}/{total}",
            bonuses: "Level {level} bonuses:",
            coinsPerHarvest: "+{bonus} coins per harvest",
            growthSpeed: "Growth speed: {percent}%",
            nextLevel: "Next level ({next}):",
            reward: "Reward: {coins} coins",
            bonus: "Bonus: {bonus}",
            maxLevel: "🎉 You reached max level!"
        },
        
        rewards: {
            newLevel: "New Level!",
            levelReached: "Level {level} reached!",
            received: "Received: {amount} coins",
            nextLevel: "To next level: {progress} crops",
            levelDescriptions: {
                1: "Welcome to FarmQuest!",
                2: "You're getting more experienced!",
                3: "Your skills are growing!",
                4: "You're a confident farmer!",
                5: "Master of agriculture!",
                6: "Harvest expert!",
                7: "Great farmer!",
                8: "Farming legend!",
                9: "Harvest overlord!",
                10: "GREATEST FARMER OF ALL TIME!"
            },
            defaultDesc: "New peak achieved!"
        },
        
        coins: "Coins",
        character: "Character",
        loading: "Loading...",
        save: "Save",
        cancel: "Cancel",
        confirm: "Confirm"
    }
};

let currentLocale = 'ru';

function t(key, params = {}) {
    const keys = key.split('.');
    let value = LOCALES[currentLocale];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    if (typeof value === 'string' && params) {
        return value.replace(/{(\w+)}/g, (match, param) => params[param] !== undefined ? params[param] : match);
    }
    
    return value;
}

function setLocale(locale) {
    if (LOCALES[locale]) {
        currentLocale = locale;
        localStorage.setItem('farmquest_locale', locale);
        applyTranslations();
        return true;
    }
    return false;
}

function getLocale() {
    return currentLocale;
}

function applyTranslations() {
    if (typeof document === 'undefined') return;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const params = JSON.parse(element.getAttribute('data-i18n-params') || '{}');
        const translation = t(key, params);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else if (element.tagName === 'IMG') {
            element.alt = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
    
    document.title = t('gameTitle');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLocale = localStorage.getItem('farmquest_locale') || 'ru';
    setLocale(savedLocale);
});