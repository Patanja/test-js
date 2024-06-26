// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
function logPlayersData() {
    const players = data.getPlayers();
   for (let i = 0; i < players.length; i++){
console.log(`PLAYER ${i + 1}`);
console.log(`NAME: ${players[i].name}`);
console.log(`LASTNAME: ${players[i].lastname}`);
console.log(`POSITION: ${players[i].position}`);
   }
}
logPlayersData();


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

function logPlayersNamesDescending() {

    const players = data.getPlayers();
    const playersNames = players.map(player => player.name).sort((a,b) => b.length - a.length);
    console.log(playersNames);
}

logPlayersNamesDescending();



/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average 
 * Output example -> Goals per match: 2.19
 */

// Your code
function logAverageGoals() {
const players = data.getPlayers();
const averageGoals = players.reduce((acc, player) => acc + player.scoringChance, 0) / 100;
console.log(`Goals per match: ${averageGoals}`);

}

logAverageGoals();


/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

function logPlayersNames (name) {
    const players = data.getPlayers();
    const player = players.find(player => player.name === name);
    console.log(player.position);
}
logPlayersNames("Tito");


/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

function splitPlayers() {
    const players = data.getPlayers();
    const teamA = [];
    const teamB = [];

    // Shuffle the players array
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }

    // Split the shuffled array into two equal halves
    for (let i = 0; i < players.length; i++) {
        if (i < players.length / 2) {
            teamA.push(players[i]);
        } else {
            teamB.push(players[i]);
        }
    }

    const teamAScore = Math.round(teamA.reduce((acc, player) => acc + player.scoringChance, 0) / 100);
    const teamBScore = Math.round(teamB.reduce((acc, player) => acc + player.scoringChance, 0) / 100);

    console.log(`Team A score: ${teamAScore}`);
    console.log(`Team B score: ${teamBScore}`);
}

splitPlayers();