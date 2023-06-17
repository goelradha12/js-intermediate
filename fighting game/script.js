/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1,p2,gameState) => {
  // Update the DOM with the names and the latest health of players
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;

  if(p1.health<=0 || p2.health<=0)
  {
    game.isOver = true;
    game.declareWinner(game.isOver,p1,p2);
  }
}

// ** Create the Player class which can create a player with all it's attributes and methods **

class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike (player, enemy, attackDmg) {
    
    let random = Math.floor(Math.random()*10);
    enemy.health -= random;
    // Subtract the enemy health with the damageAmount
    updateGame(p1,p2,game.isOver);
    //  Update the game and DOM with updateGame()
    //  Return a message of 'player name attacks enemy name for damageAmount'

  }
  // ** Heal the player for random number from  1 to 5 **
  heal (player) {
    
    let random = Math.floor(Math.random()*5);

    player.health += random;
    // Add hpAmount to players health
    updateGame(p1,p2,game.isOver);
    //  Update the game and DOM with updateGame()

    //  Return a message of 'player name heals for hpAmount HP'

  }
}

// ** Create the Game class with all it's attributes and methods to run a match **
class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner(isOver,p1, p2) {
    
    document.getElementById('victory').play();
    if(this.isOver==true &&  p1.health<=0)
    {
      resultDiv.innerText = `${p2.name} wins!!`;
    }
    if(this.isOver==true &&  p2.health<=0)
    {
      resultDiv.innerText = `${p1.name} wins!!`;
    }
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1,p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()
    p1.health = 100;
    p2.health = 100;
    game.isOver = false;
    resultDiv.innerText = '';
    updateGame(p1,p2,game.isOver);
  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    this.reset(p1,p2);
    // Reset to make sure player health is back to full before starting
    
    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      p1.strike(p1,p2,5);
      p2.strike(p2,p1,5);
      p1.heal(p1);
      p2.heal(p2);
    //Make sure both players get strike() and heal() once each loop
    }
    // Once isOver is TRUE run the declareWinner() method 
    this.declareWinner(this.isOver,p1,p2);
  }
  
}

// ** Create 2 players using the player class **
const player1 = new Player('Mohan',100,7);
const player2 = new Player('Sohan',100,5);

// ** Save original Player Data into a variable in order to reset **
let p1 = player1;
let p2 = player2;

// ** Create the game object from the Game class **
const game = new Game();
// ** Intialize the game by calling updateGame() **


// ** Save intial isOver from the game object inside this variable **
let gameState = game.isOver;
updateGame(p1,p2,gameState);

// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **
playButton.onclick =() =>{ game.play(p1,p2)};

// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
  if((e.key=='Q' || e.key=='q') && p2.health>0 && game.isOver==false)
  {
    player1.strike(player1,player2,10);
    document.getElementById('p1attack').play();
  }
    // After striking then play attack sound
  
});

document.addEventListener('keydown', function(e) {
  
  // if you press a AND the player health is greater than 0 AND isOver is still false then strike()
  if((e.key=='a' || e.key=='A') && p1.health>0 && game.isOver==false)
  {
    player1.heal(player1);
    document.getElementById('p1heal').play();
  }
    // After healing then play heal sound
  
});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
  
  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
  if((e.key=='p' || e.key=='P')&& p1.health>0 && game.isOver==false)
  {
    player2.strike(player2,player1,10);
    document.getElementById('p2attack').play();
  }
    // After striking then play attack sound
 
});

document.addEventListener('keydown', function(e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
  if((e.key=='l' || e.key=='L')&& p2.health>0 && game.isOver==false)
  {
    player2.heal(player2);
    document.getElementById('p2heal').play();
  }
    // After healing then play heal sound
  
});




