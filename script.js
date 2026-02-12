// Game Configuration
const BOARD_SIZE = 100;
const ROWS = 10;
const COLS = 10;

// Game State
let gameState = {
    players: [],
    rollQueue: [],
    currentRollerId: null,
    status: 'SETUP',
    rounds: 0,
    snakes: { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 },
    ladders: { 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 },
    currentQuestion: null,
    roundType: 'A',
    isBonus: false,
    activePlayerForBonus: null,
    penaltyPos: 0,
    onBonusComplete: null,
    diceRollCount: 0
};

// DOM Elements
const boardEl = document.getElementById('board');
const boardSvg = document.getElementById('board-svg');
const playersListEl = document.getElementById('players-list');
const diceEl = document.getElementById('dice');
const diceContainerEl = document.getElementById('dice-container');
const rollBtn = document.getElementById('roll-btn');
const uiLog = document.getElementById('game-log');
const bgMusic = document.getElementById('bg-music');
const winSound = document.getElementById('win-sound');

// Modals
const modalSetup = document.getElementById('setup-modal');
const modalQuestion = document.getElementById('question-modal');
const modalRules = document.getElementById('rules-modal');

// Setup Layout
const setupStep1 = document.getElementById('setup-step-1');
const setupStep2 = document.getElementById('setup-step-2');
const nextSetupBtn = document.getElementById('next-setup-btn');
const playerInputsContainer = document.getElementById('player-inputs-container');
const confirmSetupBtn = document.getElementById('confirm-setup-btn');
const playerCountInput = document.getElementById('player-count');

// Question Elements
const qText = document.getElementById('q-text');
const qOptions = document.getElementById('q-options');
const qCategory = document.getElementById('q-category');
const qType = document.getElementById('q-type');
const revealBtn = document.getElementById('reveal-answer-btn');
const answerPhase = document.getElementById('answer-phase');

const playerCheckboxes = document.getElementById('player-checkboxes');
const confirmWinnersBtn = document.getElementById('confirm-winners-btn');
const roundTypeDisplay = document.getElementById('round-type-display');

// Rules
const closeRulesBtn = document.getElementById('close-rules-btn');

// --- Initialization ---

function initBoard() {
    const cells = boardEl.querySelectorAll('.cell');
    cells.forEach(c => c.remove());

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const rowFromBottom = 9 - row; // 9 is Top, 0 is Bottom
            let boardNum;

            // Standard ZigZag:
            // Row 0 (Bottom): L to R. (1..10)
            // Row 1: R to L. (20..11)
            // ...

            if (rowFromBottom % 2 === 0) {
                // Even (0, 2, 4...) -> Left to Right
                boardNum = (rowFromBottom * 10) + (col + 1);
            } else {
                // Odd (1, 3...) -> Right to Left
                boardNum = (rowFromBottom * 10) + (10 - col);
            }

            cell.dataset.pos = boardNum;
            cell.innerHTML = `<span>${boardNum}</span>`;
            cell.id = `cell-${boardNum}`;

            if (gameState.snakes[boardNum]) cell.style.color = '#ef4444';
            if (gameState.ladders[boardNum]) cell.style.color = '#22c55e';

            boardEl.appendChild(cell);
        }
    }

    drawSnakesAndLadders();
}

function drawSnakesAndLadders() {
    setTimeout(() => {
        boardSvg.innerHTML = '';

        for (const [head, tail] of Object.entries(gameState.snakes)) {
            drawConnection(head, tail, '#ef4444', 'snake');
        }
        for (const [start, end] of Object.entries(gameState.ladders)) {
            drawConnection(start, end, '#22c55e', 'ladder');
        }
    }, 500);
}

function drawConnection(fromPos, toPos, color, type) {
    const fromEl = document.getElementById(`cell-${fromPos}`);
    const toEl = document.getElementById(`cell-${toPos}`);
    if (!fromEl || !toEl) return;

    const boardRect = boardEl.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const x1 = fromRect.left - boardRect.left + fromRect.width / 2;
    const y1 = fromRect.top - boardRect.top + fromRect.height / 2;
    const x2 = toRect.left - boardRect.left + toRect.width / 2;
    const y2 = toRect.top - boardRect.top + toRect.height / 2;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "5");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("opacity", "0.7");

    if (type === 'snake') {
        line.setAttribute("stroke-dasharray", "8,4");
    }

    boardSvg.appendChild(line);

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    const emoji = document.createElementNS("http://www.w3.org/2000/svg", "text");
    emoji.setAttribute("x", midX);
    emoji.setAttribute("y", midY);
    emoji.setAttribute("text-anchor", "middle");
    emoji.setAttribute("dominant-baseline", "middle");
    emoji.setAttribute("font-size", "24");
    emoji.textContent = type === 'snake' ? "🐍" : "🪜";
    boardSvg.appendChild(emoji);

    const c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x1); c1.setAttribute("cy", y1); c1.setAttribute("r", 6); c1.setAttribute("fill", color);
    boardSvg.appendChild(c1);

    const c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c2.setAttribute("cx", x2); c2.setAttribute("cy", y2); c2.setAttribute("r", 6); c2.setAttribute("fill", color);
    boardSvg.appendChild(c2);
}

// --- Setup ---

nextSetupBtn.onclick = () => {
    const count = parseInt(playerCountInput.value);
    playerInputsContainer.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const row = document.createElement('div');
        row.className = 'player-input-row';
        row.innerHTML = `
            <label>Player ${i} Name:</label>
            <input type="text" id="pname-${i}" value="Player ${i}">
        `;
        playerInputsContainer.appendChild(row);
    }

    setupStep1.classList.add('hidden');
    setupStep2.classList.remove('hidden');
};

confirmSetupBtn.onclick = () => {
    const count = parseInt(playerCountInput.value);
    gameState.players = [];
    const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#ec4899', '#a855f7'];

    for (let i = 1; i <= count; i++) {
        const nameVal = document.getElementById(`pname-${i}`).value || `Player ${i}`;
        gameState.players.push({
            id: i - 1,
            name: nameVal,
            color: colors[(i - 1) % colors.length],
            position: 1
        });
    }

    modalSetup.classList.add('hidden');
    modalRules.classList.remove('hidden');
};

closeRulesBtn.onclick = () => {
    modalRules.classList.add('hidden');
    modalRules.classList.add('hidden');
    // Attempt to start music on user interaction
    bgMusic.volume = 0.5;
    bgMusic.play().catch(e => console.log("Audio play failed:", e));
    startGame();
};

function startGame() {
    renderPlayersList();
    renderPlayerTokens();

    gameState.rounds = 0;
    drawSnakesAndLadders();
    nextRound();
}

function renderPlayersList() {
    playersListEl.innerHTML = '';
    gameState.players.forEach((p) => {
        const isRolling = (p.id === gameState.currentRollerId);
        const div = document.createElement('div');
        div.className = `player-card ${isRolling ? 'active' : ''}`;
        div.innerHTML = `
            <div class="player-avatar" style="background:${p.color}">${p.name.substring(0, 2)}</div>
            <div>
                <div style="font-weight:bold;">${p.name}</div>
                <div style="font-size:0.8rem;">Pos: ${p.position}</div>
            </div>
        `;
        playersListEl.appendChild(div);
    });
}

function renderPlayerTokens() {
    document.querySelectorAll('.token').forEach(e => e.remove());
    gameState.players.forEach(p => {
        const token = document.createElement('div');
        token.className = 'token';
        token.id = `token-${p.id}`;
        token.style.backgroundColor = p.color;

        // Show Initials
        token.innerText = p.name.substring(0, 2).toUpperCase();

        updateTokenPosition(token, p.position);
        boardEl.appendChild(token);
    });
}

function updateTokenPosition(tokenElement, boardPos) {
    if (!tokenElement) return;
    const cell = document.getElementById(`cell-${boardPos}`);
    if (!cell) return;

    const cellRect = cell.getBoundingClientRect();
    const boardRect = boardEl.getBoundingClientRect();

    const top = cellRect.top - boardRect.top;
    const left = cellRect.left - boardRect.left;

    // Slight Jitter to avoid perfect overlap
    const jitterX = (Math.random() - 0.5) * 8;
    const jitterY = (Math.random() - 0.5) * 8;

    tokenElement.style.top = `${top + (cellRect.height / 2) + jitterY}px`;
    tokenElement.style.left = `${left + (cellRect.width / 2) + jitterX}px`;
    tokenElement.style.transform = 'translate(-50%, -50%)';
}

// --- Logic ---

function nextRound() {
    gameState.rounds++;
    gameState.rollQueue = [];
    gameState.currentRollerId = null;
    gameState.roundType = Math.random() > 0.5 ? 'A' : 'B';

    roundTypeDisplay.innerText = `Round ${gameState.rounds} - Type ${gameState.roundType}`;
    log(`--- Round ${gameState.rounds} (${gameState.roundType}) ---`);
    showQuestion();
}

// Global shuffle bag outside gameState to persist across soft resets if needed, 
// or keep in gameState if we want it to reset per game. Let's keep in gameState for simplicity.
// But we need to init it. Adding logic to check if empty.

function showQuestion() {
    // Initialize or refill the question bag if empty
    if (!gameState.featureQuestionBag || gameState.featureQuestionBag.length === 0) {
        // Create a list of indices [0, 1, 2, ... N-1]
        gameState.featureQuestionBag = Array.from({ length: QUESTIONS.length }, (_, i) => i);
    }

    // Pick a random index from the bag
    const randomIndex = Math.floor(Math.random() * gameState.featureQuestionBag.length);
    const questionIndex = gameState.featureQuestionBag[randomIndex];

    // Remove the selected index from the bag so it's not picked again immediately
    gameState.featureQuestionBag.splice(randomIndex, 1);

    const q = QUESTIONS[questionIndex];
    gameState.currentQuestion = q;
    gameState.isBonus = false;

    qCategory.innerText = q.category;
    qCategory.style.color = '';
    qType.innerText = gameState.roundType === 'A' ? "Type A: Multi Winner" : "Type B: Single Winner";
    qText.innerText = q.question;

    qOptions.innerHTML = '';
    q.options.forEach((opt) => {
        const div = document.createElement('div');
        div.className = 'option-btn';
        div.innerText = opt;
        qOptions.appendChild(div);
    });

    modalQuestion.classList.remove('hidden');
    answerPhase.classList.add('hidden');
    revealBtn.classList.remove('hidden');
}

revealBtn.onclick = () => {
    const correctIdx = gameState.currentQuestion.correctAnswer;
    qOptions.children[correctIdx].classList.add('selected');
    qOptions.children[correctIdx].style.borderColor = '#22c55e';
    qOptions.children[correctIdx].style.backgroundColor = 'rgba(34, 197, 94, 0.2)';

    answerPhase.classList.remove('hidden');
    revealBtn.classList.add('hidden');

    generatePlayerCheckboxes();
};

function generatePlayerCheckboxes() {
    playerCheckboxes.innerHTML = '';
    gameState.players.forEach(p => {
        const item = document.createElement('label');
        item.className = 'player-select-item';
        item.innerHTML = `
            <input type="checkbox" value="${p.id}">
            <span style="width:20px;height:20px;background:${p.color};border-radius:50%;display:inline-block;"></span>
            ${p.name}
        `;
        item.querySelector('input').addEventListener('change', (e) => {
            if (e.target.checked) item.classList.add('selected');
            else item.classList.remove('selected');

            if (gameState.roundType === 'B' && e.target.checked) {
                document.querySelectorAll('#player-checkboxes input').forEach(input => {
                    if (input !== e.target) {
                        input.checked = false;
                        input.parentElement.classList.remove('selected');
                    }
                });
            }
        });
        playerCheckboxes.appendChild(item);
    });
}

confirmWinnersBtn.onclick = () => {
    const checkedInputs = document.querySelectorAll('#player-checkboxes input:checked');
    if (checkedInputs.length === 0) {
        if (confirm("Tidak ada yang benar? Lanjut ke ronde berikutnya?")) {
            modalQuestion.classList.add('hidden');
            log(`No winners.`);
            setTimeout(() => nextRound(), 1000);
            return;
        } else {
            return;
        }
    }

    gameState.rollQueue = Array.from(checkedInputs).map(input => parseInt(input.value));
    modalQuestion.classList.add('hidden');
    processRollQueue();
};

function processRollQueue() {
    if (gameState.rollQueue.length === 0) {
        log("Queue empty. Next Round.");
        setTimeout(() => nextRound(), 1000);
        return;
    }

    const pid = gameState.rollQueue.shift();
    gameState.currentRollerId = pid;
    renderPlayersList();

    const p = gameState.players.find(x => x.id === pid);
    log(`${p.name}'s turn (Pos ${p.position})`);

    diceContainerEl.classList.remove('hidden');
    rollBtn.classList.remove('hidden');
    rollBtn.innerText = `${p.name} - Roll Dice`;
}

// --- Dice Logic ---
rollBtn.onclick = () => {
    rollBtn.classList.add('hidden');

    // 1-12
    const result = Math.floor(Math.random() * 12) + 1;

    // Determines which VISUAL face (1-6) will point forward
    const visualFace = (result - 1) % 6 + 1;

    const faceMap = {
        1: '.front', 2: '.bottom', 3: '.right', 4: '.left', 5: '.top', 6: '.back'
    };

    // Update Text on Faces
    // 1. Reset all to standard 1-6
    for (let i = 1; i <= 6; i++) {
        const el = diceEl.querySelector(faceMap[i]);
        if (el) el.innerText = i;
    }

    // 2. Set Target Face to Actual Result
    const targetFaceEl = diceEl.querySelector(faceMap[visualFace]);
    if (targetFaceEl) {
        targetFaceEl.innerText = result;
        // Force reflow to ensure text update is processed before spin
        void targetFaceEl.offsetWidth;
    }

    log(`Rolling... (Target: ${result}, Face: ${visualFace})`);

    // Spin Animation
    const rotations = {
        1: [0, 0], 2: [90, 0], 3: [0, -90],
        4: [0, 90], 5: [-90, 0], 6: [180, 0]
    };
    const [rx, ry] = rotations[visualFace];

    gameState.diceRollCount++;
    // Add extra full spins (360 * 3 = 1080)
    // We alternate rotation direction to make it look dynamic? No, stick to consistent add.
    const spins = 1080 * gameState.diceRollCount;

    diceEl.style.transform = `rotateX(${rx + spins}deg) rotateY(${ry + spins}deg)`;

    setTimeout(() => {
        const p = gameState.players.find(x => x.id === gameState.currentRollerId);

        log(`${p.name} moves ${result} steps.`);

        movePlayerStepByStep(p, result).then(() => {
            checkTileEvents(p).then(() => {
                setTimeout(processRollQueue, 800);
            });
        });
    }, 1200);
};

async function movePlayerStepByStep(player, steps) {
    const startPos = player.position;
    let target = startPos + steps;
    if (target > 100) target = 100;

    const token = document.getElementById(`token-${player.id}`);

    // Temporarily speed up transition for walking steps (faster than the default jump)
    token.style.transition = 'all 0.3s ease-out';

    // Walk step by step
    for (let nextPos = startPos + 1; nextPos <= target; nextPos++) {
        player.position = nextPos;
        updateTokenPosition(token, nextPos);
        renderPlayersList(); // Update sidebar info
        // Wait slightly longer than the transition duration
        await new Promise(r => setTimeout(r, 350));
    }

    // Restore original transition/style for Snakes/Ladders (long jumps)
    token.style.transition = '';
    return Promise.resolve();
}

async function checkTileEvents(player) {
    const pos = player.position;

    if (gameState.snakes[pos]) {
        // Snake
        return new Promise((resolve) => {
            startBonusQuestion(player, gameState.snakes[pos], resolve);
        });
    }

    if (gameState.ladders[pos]) {
        // Ladder
        log(`🪜 Ladder! Up to ${gameState.ladders[pos]}`);
        const top = gameState.ladders[pos];
        await new Promise(r => setTimeout(r, 600));
        player.position = top;
        updateTokenPosition(document.getElementById(`token-${player.id}`), player.position);
    }

    if (player.position === 100) {
        if (player.position === 100) {
            winSound.play().catch(e => console.log("Win sound failed:", e));
            alert(`${player.name} WINS!`);
            gameState.status = 'WIN';
        }
    }
}

function startBonusQuestion(player, tailPos, onComplete) {
    const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    gameState.currentQuestion = q;
    gameState.activePlayerForBonus = player;
    gameState.penaltyPos = tailPos;
    gameState.onBonusComplete = onComplete;

    qCategory.innerText = "🐍 SNAKE TRAP!";
    qCategory.style.color = '#ef4444';
    qType.innerText = "Answer correctly to stay!";
    qText.innerText = q.question;

    qOptions.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option-btn';
        div.innerText = opt;
        div.onclick = () => handleBonusAnswer(idx);
        qOptions.appendChild(div);
    });

    modalQuestion.classList.remove('hidden');
    answerPhase.classList.add('hidden');
    revealBtn.classList.add('hidden');
}

function handleBonusAnswer(idx) {
    const isCorrect = (idx === gameState.currentQuestion.correctAnswer);
    const p = gameState.activePlayerForBonus;

    modalQuestion.classList.add('hidden');
    qCategory.style.color = '';

    if (isCorrect) {
        log(`Correct! ${p.name} stays at ${p.position}.`);
        alert("Correct! Safe.");
    } else {
        log(`Wrong! ${p.name} slides to ${gameState.penaltyPos}.`);
        alert("Wrong! Sliding down...");
        p.position = gameState.penaltyPos;
        updateTokenPosition(document.getElementById(`token-${p.id}`), p.position);
    }
    if (gameState.onBonusComplete) gameState.onBonusComplete();
}

function log(msg) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = msg;
    uiLog.prepend(entry);
}

window.addEventListener('resize', drawSnakesAndLadders);
initBoard();
