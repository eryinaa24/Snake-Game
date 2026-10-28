// Senarai 20 Soalan Kuiz Matematik Pink
const questions = [
    {
        question: "Siti ada 5 reben pink. Ibu memberi 3 lagi reben pink. Berapakah jumlah reben pink Siti?",
        options: ["7", "8", "9", "10"],
        answer: 1
    },
    {
        question: "Aina memasak 12 kek cawan bertema pink. 4 kek cawan telah dimakan oleh adiknya. Berapakah kek cawan yang tinggal?",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "Sebuah kotaknya mengandungi 10 guli pink. Jika terdapat 3 kotak yang sama, berapakah jumlah guli pink semuanya?",
        options: ["20", "25", "30", "35"],
        answer: 2
    },
    {
        question: "Laila ingin membahagikan 15 kuntum bunga ros pink secara sama rata kepada 3 orang kawannya. Berapa kuntum ros yang diterima setiap kawan?",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "Antara nombor berikut, yang manakah merupakan nombor genap yang dihiasi warna pink?",
        options: ["11", "13", "14", "17"],
        answer: 2
    },
    {
        question: "Berapakah nilai nombor dalam petak pink berikut? 18 + ⬜ = 25",
        options: ["6", "7", "8", "9"],
        answer: 1
    },
    {
        question: "Sebuah pensel pink berharga RM 2. Berapakah harga bagi 6 batang pensel pink yang sama?",
        options: ["RM 10", "RM 12", "RM 14", "RM 16"],
        answer: 1
    },
    {
        question: "Mira ada 20 belon pink. 5 belon telah pecah. Berapakah peratusan belon pink yang telah pecah?",
        options: ["20%", "25%", "30%", "50%"],
        answer: 1
    },
    {
        question: "Berapakah nilai 7 × 8 pada kad jemputan parti berwarna pink ini?",
        options: ["48", "54", "56", "64"],
        answer: 2
    },
    {
        question: "Sebuah jam dinding pink menunjukkan pukul 3:15 petang. Berapakah sudut antara jarum jam dan jarum minit secara anggaran?",
        options: ["0°", "7.5°", "15°", "30°"],
        answer: 1
    },
    {
        question: "Apakah pecahan bagi bahagian berkarpet pink jika 2 daripada 8 bahagian lantai ditutup karpet pink?",
        options: ["1/2", "1/3", "1/4", "1/8"],
        answer: 2
    },
    {
        question: "Sebuah segi empat tepat pink mempunyai panjang 6 cm dan lebar 4 cm. Berapakah luas segi empat tepat itu?",
        options: ["10 cm²", "20 cm²", "24 cm²", "28 cm²"],
        answer: 2
    },
    {
        question: "Nora ada RM 50. Dia membeli topi pink berharga RM 23.50. Berapakah baki wang Nora?",
        options: ["RM 26.50", "RM 27.50", "RM 26.00", "RM 25.50"],
        answer: 0
    },
    {
        question: "Cari purata bagi bilangan bunga pink dalam tiga pasu ini: 4, 8, dan 6.",
        options: ["5", "6", "7", "8"],
        answer: 1
    },
    {
        question: "Apakah nilai digit 5 dalam nombor 352 pada botol minuman pink ini?",
        options: ["5", "50", "500", "5000"],
        answer: 1
    },
    {
        question: "Selesaikan nilai x bagi kotak jawapan berwarna pink: 3x = 12.",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Sebuah kubus mainan berwarna pink mempunyai panjang sisi 3 cm. Berapakah isi padu kubus itu?",
        options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        answer: 2
    },
    {
        question: "Apakah bentuk geometri 2D bertema pink yang mempunyai 5 sisi lurus?",
        options: ["Sisi Empat", "Pentagon", "Heksagon", "Oktagon"],
        answer: 1
    },
    {
        question: "Berapakah hasil tambah 0.4 + 0.35 pada pita pengukur pink?",
        options: ["0.39", "0.70", "0.75", "0.80"],
        answer: 2
    },
    {
        question: "Sebuah bas mini pink bertolak jam 8:00 pagi dan tiba pada jam 9:45 pagi. Berapa lamakah tempoh perjalanan itu?",
        options: ["1 jam 15 minit", "1 jam 30 minit", "1 jam 45 minit", "2 jam"],
        answer: 2
    }
];

// Pembolehubah Keadaan Kuiz
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let secondsElapsed = 0;

// Elemen DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const skipBtn = document.getElementById('skip-btn');
const restartBtn = document.getElementById('restart-btn');

const questionNumberEl = document.getElementById('question-number');
const timerEl = document.getElementById('timer');
const currentScoreEl = document.getElementById('current-score');
const progressBarEl = document.getElementById('progress-bar');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');

// Pendengar Acara (Event Listeners)
startBtn.addEventListener('click', startQuiz);
skipBtn.addEventListener('click', skipQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Fungsi Mula Kuiz
function startQuiz() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    currentQuestionIndex = 0;
    score = 0;
    secondsElapsed = 0;
    currentScoreEl.innerText = score;

    startTimer();
    showQuestion();
}

// Fungsi Pemasa (Timer)
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Papar Soalan Semasa
function showQuestion() {
    const currentQ = questions[currentQuestionIndex];

    // Kemaskini Header & Bar Kemajuan
    questionNumberEl.innerText = `Soalan ${currentQuestionIndex + 1}/${questions.length}`;
    questionTextEl.innerText = currentQ.question;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarEl.style.width = `${progressPercent}%`;

    // Kosongkan dan tambah pilihan baru
    optionsContainerEl.innerHTML = '';

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span>${option}</span>
            <i class="fa-regular fa-circle"></i>
        `;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainerEl.appendChild(btn);
    });
}

// Kendalikan Pemilihan Jawapan
function selectOption(selectedIndex, btnElement) {
    const currentQ = questions[currentQuestionIndex];
    const allBtns = optionsContainerEl.querySelectorAll('.option-btn');

    // Niyahaktifkan semua butang selepas satu pilihan dibuat
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === currentQ.answer) {
        score++;
        currentScoreEl.innerText = score;
        btnElement.classList.add('correct');
        btnElement.querySelector('i').className = 'fa-solid fa-circle-check';
    } else {
        btnElement.classList.add('wrong');
        btnElement.querySelector('i').className = 'fa-solid fa-circle-xmark';

        // Tunjukkan jawapan yang betul
        const correctBtn = allBtns[currentQ.answer];
        correctBtn.classList.add('correct');
        correctBtn.querySelector('i').className = 'fa-solid fa-circle-check';
    }

    // Pindah ke soalan seterusnya selepas 1.2 saat
    setTimeout(() => {
        nextQuestion();
    }, 1200);
}

// Langkah Soalan
function skipQuestion() {
    nextQuestion();
}

// Pindah ke Soalan Seterusnya / Tamatkan Kuiz
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Tamatkan Kuiz & Papar Keputusan
function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById('final-score').innerText = `${score}/${questions.length}`;
    document.getElementById('final-percentage').innerText = `${percentage}%`;
    document.getElementById('final-time').innerText = timerEl.innerText;

    // Ubah Tajuk & Ikon Berdasarkan Keputusan
    const resultTitle = document.getElementById('result-title');
    const resultIcon = document.getElementById('result-icon');

    if (percentage >= 80) {
        resultTitle.innerText = "Luar Biasa! 🌟";
        resultIcon.className = "fa-solid fa-crown";
        resultIcon.style.color = "#eab308";
    } else if (percentage >= 50) {
        resultTitle.innerText = "Syabas & Tahniah! 👍";
        resultIcon.className = "fa-solid fa-star";
        resultIcon.style.color = "#ec4899";
    } else {
        resultTitle.innerText = "Cuba Lagi! 💪";
        resultIcon.className = "fa-solid fa-heart";
        resultIcon.style.color = "#f43f5e";
    }
}

// Semula Kuiz
function restartQuiz() {
    startQuiz();
}
