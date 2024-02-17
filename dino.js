document.addEventListener('keydown', function(event) {
    if (event.key === ' ') { // space bar for jumping
        jump();
    }
});

let Character = document.getElementById('character');
let block = document.getElementById('block');
let GameOver = document.getElementById('GameOver');
let play = document.getElementById('play');

// function playMusic() {
//     let audio = new Audio("audio.mp3");
//     audio.play()
// }
// play.addEventListener("click", playMusic);

function updateGame() {
    location.reload();

}

function jump() {
    if (!Character.classList.contains('animate')) {
        Character.classList.add('animate');
        setTimeout(function () {
            Character.classList.remove('animate');
        }, 700);
    }
}
var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(Character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 160 && blockLeft > 0 && characterTop >= 479 ) {
        block.style.animation = 'none';
        block.style.display = '';

        // Remove and add the "jump" class to trigger the jump animation
        Character.classList.remove('jump');
        Character.classList.add('jump');

        // Reset character's top position
        Character.style.top = '479px';
        alert('You Lose.Restart To Play Again' )
        // GameOver.innerHTML ='You Lose. <br> Restart To Play Again' 
        clearInterval(checkDead); // Stop the interval when the condition is met
    }
}, 100);