// 遊戲狀態變數
let score = 0;
let correct = 0;
let total = 0;
let startTime = null;
let lastKeyTime = null;
let keyPressCount = 0;

// 產生隨機字母 (只包含小寫字母)
function getRandomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

// 產生新的字元
function add_new_chars() {
    const container = document.getElementById('container');
    // 隨機決定要產生1-3個字元
    const numChars = 1 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < numChars; i++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = getRandomChar();
        container.appendChild(charSpan);
    }
    
    // 標記第一個字元為當前要輸入的字元
    const firstChar = container.querySelector('.char');
    if (firstChar) {
        firstChar.classList.add('current');
    }
}

// 更新統計數據
function updateStats() {
    document.getElementById('score').textContent = `得分: ${score}`;
    
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 100;
    document.getElementById('accuracy').textContent = `準確率: ${accuracy}%`;
    
    // 計算打字速度 (字母/分鐘)
    if (startTime && keyPressCount > 10) {
        const minutes = (Date.now() - startTime) / 60000;
        const speed = Math.round(keyPressCount / minutes);
        document.getElementById('speed').textContent = `速度: ${speed} 字母/分鐘`;
    }
    
    // 更新進度條
    const progress = Math.min(100, score);
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressBar').textContent = `${progress}%`;
}

// 當網頁載入完成時
window.onload = function() {
    const container = document.getElementById('container');
    
    // 初始產生字元
    add_new_chars();
    updateStats();

    // 監聽鍵盤事件
    document.addEventListener("keydown", function(e) {
        // 忽略特殊鍵
        if (e.key.length !== 1 || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }
        
        // 開始計時
        if (!startTime) {
            startTime = Date.now();
        }
        
        keyPressCount++;
        total++;
        
        const firstChar = container.querySelector('.char.current');
        
        // 如果有字元且輸入的鍵符合第一個字元
        if (firstChar && e.key.toLowerCase() === firstChar.textContent.toLowerCase()) {
            // 移除第一個字元
            firstChar.remove();
            correct++;
            score++;
            
            // 如果沒有字元了，產生新的
            if (container.querySelectorAll('.char').length === 0) {
                add_new_chars();
            } else {
                // 標記新的第一個字元為當前要輸入的字元
                const newFirstChar = container.querySelector('.char');
                if (newFirstChar) {
                    newFirstChar.classList.add('current');
                }
            }
        } else {
            // 錯誤輸入，扣分但不低於0
            score = Math.max(0, score - 0.5);
        }
        
        updateStats();
        lastKeyTime = Date.now();
    });

    // 點擊時自動聚焦
    container.addEventListener('click', function() {
        this.focus();
    });

    // 初始聚焦
    container.focus();
    
    // 自動產生新字元 (每3秒檢查一次)
    setInterval(function() {
        if (container.querySelectorAll('.char').length < 5) {
            add_new_chars();
        }
    }, 3000);
};