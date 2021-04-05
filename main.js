// The number of metronome ticks that have occured
let numTicks = 0;

// Setup 'tick' and 'tock' sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

function update() {

    // Increment numTicks
    numTicks++;

    // Every three ticks, play 'tock'
    if (numTicks % 4 === 0) {
        tock.play();
    }
    
    // Else play 'tick'
    else {
        tick.play();
    }
}

function setupUpdate() {
    // Call update() every 600ms
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
