// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const kickDrum = new Audio("sounds/kick-drum.mp3");
const hiHat = new Audio("sounds/hi-hat.mp3");
const snareDrum = new Audio("sounds/snare-drum.mp3");

let counterArea = document.getElementById("counter-area");
let tickNum = 0;
let counterNum = 1;

let snareBeat = document.getElementById("snare-count");
let hiHatBeat = document.getElementById("hihat-count");
let kickbeat = document.getElementById("kick-count");

let playMet = document.getElementById("metronome-checkbox");
let playSn = document.getElementById("snaredrum-checkbox");
let playHi = document.getElementById("hihat-checkbox");
let playKickdrum = document.getElementById("kickdrum-checkbox");

function update() {
  if (tickNum === 4) {
    tickNum = 0;
    counterNum = tickNum + 1;
  }
  tickNum += 1;
  checkSetBeat();
  playMetronome();
  playSnareDrum();
  playHiHat();
  playKick();

  counterArea.innerText = tickNum;
}
function playMetronome() {
  if (playMet.checked) {
    if (tickNum < 4) {
      tick.load();
      tick.play();
    }
  }
}
function playSnareDrum() {
  if (playSn.checked) {
    if (Number(snareBeat.value) === tickNum) {
      snare.load();
      snare.play();
    }
  }
}
function playHiHat() {
  if (playHi.checked) {
    if (Number(hiHatBeat.value) === tickNum) {
      hiHat.load();
      hiHat.play();
    }
  }
}
function playKick() {
  if (playKickdrum.checked) {
    if (Number(kickbeat.value) === tickNum) {
      kickDrum.load();
      kickDrum.play();
    }
  }
}

function checkSetBeat() {
  snareBeat = document.getElementById("snare-count");
  hiHatBeat = document.getElementById("hihat-count");
  kickbeat = document.getElementById("kick-count");
}

function setupUpdate() {
  setInterval(update, 600);
}
setTimeout(setupUpdate, 300);
