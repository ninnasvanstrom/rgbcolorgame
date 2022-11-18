// *** VARIABLES *** //

// DOM content:
const rgbColor = document.querySelector('.rgb-color');
const reloadGame = document.querySelector('.reload-game');
const gameStatus = document.querySelector('.game-status');
const easyBtn = document.querySelector('.easy');
const hardBtn = document.querySelector('.hard');
const squares = document.querySelectorAll('.square');
const overlay = document.querySelector('.overlay');


// *** EVENT LISTENERS *** //
window.addEventListener('DOMContentLoaded', playEasyGame);
reloadGame.addEventListener('click', function() { 
    
    if(easyBtn.classList.contains('overlay')) {
        playEasyGame();
    } else {
        playHardGame();
    }
});
hardBtn.addEventListener('click', playHardGame);
easyBtn.addEventListener('click', playEasyGame);



// *** FUNCTIONS *** //

function getRGB() {
    const randomNum1 = Math.round(Math.random() * 255);
    const randomNum2 = Math.round(Math.random() * 255);
    const randomNum3 = Math.round(Math.random() * 255);
    return `RGB(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

function playEasyGame() {
    // reset to default:
    resetToDefault();

    // add overlay on easy button
    easyBtn.classList.add('overlay');
    // remove overlay on hard button
    hardBtn.classList.remove('overlay');

    // remove the last 3 squares:
    hideSquares();

    // get random index of squares: 
    let index = Math.floor(Math.random() * (squares.length/2));
    
    // set a random rgb color for each square:
    squares.forEach(function(square) {
        const index = square.getAttribute('data-id');
        
        if(index < (squares.length/2) + 1) {
            square.style.backgroundColor = getRGB();
        }

    });

    // set the text of the h1 to one of the squares:
    rgbColor.innerText = squares[index].style.backgroundColor;

    // correct / incorrect guess
    squares.forEach(function(square) {
        square.addEventListener('click', function(e) {
            let guess = e.target.style.backgroundColor;
            
            // if guess matches the right color:
            if(guess === rgbColor.textContent) {
                // show game status (win state): 
                gameStatus.style.visibility = 'visible';
                gameStatus.textContent = 'correct';
                rgbColor.style.color = guess;

                // show all squares in the right color:
                squares.forEach(function(square) {
                    square.style.opacity = '1';
                    square.style.backgroundColor = guess;
                })

                // change reloadGame to play again:
                reloadGame.innerText = 'play again';
               
            } else {
                // show game status (fail state): 
                gameStatus.style.visibility = 'visible';
                gameStatus.textContent = 'try again';

                // hide square:
                square.style.opacity = '0';
            }
        })
    })

}

function playHardGame() {
    // reset to default
    resetToDefault();

   // add overlay on hard button
   hardBtn.classList.add('overlay');
   // remove overlay on easy button
   easyBtn.classList.remove('overlay');

    // show squares
    squares.forEach(function(square) {
        square.style.display = 'block';
    })

   // get random index of squares: 
   let index = Math.floor(Math.random() * (squares.length));
   
   // set a random rgb color for each square:
   squares.forEach(function(square) {
        square.style.backgroundColor = getRGB();

   });

   // set the text of the h1 to one of the squares:
   rgbColor.innerText = squares[index].style.backgroundColor;

   // correct / incorrect guess
   squares.forEach(function(square) {
       square.addEventListener('click', function(e) {
           let guess = e.target.style.backgroundColor;
           
           // if guess matches the right color:
           if(guess === rgbColor.textContent) {
               // show game status (win state): 
               gameStatus.style.visibility = 'visible';
               gameStatus.textContent = 'correct';
               rgbColor.style.color = guess;

               // show all squares in the right color:
               squares.forEach(function(square) {
                   square.style.opacity = '1';
                   square.style.backgroundColor = guess;
               })

               // change reloadGame to play again:
               reloadGame.innerText = 'play again';
              
           } else {
               // show game status (fail state): 
               gameStatus.style.visibility = 'visible';
               gameStatus.textContent = 'try again';

               // hide square:
               square.style.opacity = '0';
           }
       })
   })

}

function hideSquares() {
    const square1 = squares[3];
    const square2 = squares[4];
    const square3 = squares[5];

    square1.style.display = 'none';
    square2.style.display = 'none';
    square3.style.display = 'none';

}


function resetToDefault(){
    // reset h1 color:
    rgbColor.style.color = 'white';
    // reset reloadGame:
    reloadGame.innerText = 'new colors';
    // display all squares: 
        // get random index of squares: 
        let index = Math.floor(Math.random() * (squares.length/2));
    squares.forEach(function(square) {
        if(index < 4) {
            square.style.opacity = '1'; 
        }
    });

    gameStatus.style.visibility = 'hidden';
}