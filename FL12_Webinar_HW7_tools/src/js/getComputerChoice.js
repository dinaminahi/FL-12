function getComputerChoice() {
    let plays = ['rock', 'paper', 'scissors'];
    let choice = plays[Math.floor(Math.random() * plays.length)];
    return choice;
  }

export default getComputerChoice;