window.addEventListener('load', init);

// Globals

// Available Levels
//const levels = {
//  easy: 10,
//  medium: 7,
//  hard: 5
//};

// To change level
let currentLevel ;

let time ;
let score = 0;
let isPlaying;
let submit = document.querySelector('form button')

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');

const words = [
  'pistache',
  'rivière',
  'chanceux',
  'statue',
  'générer',
  'têtue',
  'cocktail',
  'fuyez',
  'arbre',
  'développer',
  'établissement',
  'héro',
  'javascript',
  'nutrition',
  'revolver',
  'prestidigitation',
  'jumeaux',
  'investiguer',
  'horrible',
  'symptôme',
  'rire',
  'orchestre',
  'maître',
  'encyclopedie',
  'ordinateur',
  'clavier',
  'cuisine',
  'café',
  'thé',
  'salvateur',
  'anticonstitution',
  'aliment',
  'magasin',
  'gargantuesque',
  'onomatopée',
  'sociologie',
  'mélancholie',
  'construire',
  'archevêque',
  'ornementale',
  'joie',
  'hameau',
  'paysage',
  'forêt',
  'bergerie',
  'canopée',
  'dressage',
  'église',
  'festivité',
  'gratuit',
  'hélicoptère',
  'inspecteur',
  'jare',
  'kayak',
  'lauréat',
  'montagneux',
  'nymphe',
  'opérationnel',
  'pétrichor',
  'quintolet',
  'rapière',
  'soluble',
  'tanière',
  'ubuesque',
  'vélodrome',
  'wagonnet',
  'xylographique',
  'yiddish',
  'zabuton',
  'définition'
];

// Initialize Game
easy.addEventListener('click',setlev1);
medium.addEventListener('click',setlev2);
hard.addEventListener('click',setlev3);
let t;
function setlev1() {
    time=11;
    t=time;
    seconds.innerHTML=10;
    message.innerHTML="";
    wordInput.value="";
}

function setlev2() {
    time=8;
    t=time;
    seconds.innerHTML=7;
    message.innerHTML="";
    wordInput.value="";
}

function setlev3() {
    time=6;
    t=time;
    seconds.innerHTML=5;
        message.innerHTML="";
        wordInput.value="";
}

function init() {
  // Show number of seconds in UI

  //seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = t;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Partie terminée<br><br>Vous n\'avez pas indiqué le mot dans les temps impartis';
    score = -1;
  }
}