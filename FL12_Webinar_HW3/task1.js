const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8 ,9, 10, 'Jack', 'Queen', 'King'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    get isFaceCard() {
        if (this.rank === 1 || this.rank > 10){
            this.isFace = true;
        } else {
            this.isFace = false;
        }
        return this.isFace;
    }

    toString(){
        return `${ranks[this.rank-1]} of ${this.suit}`;
    }

    static compare(cardOne, cardTwo){
        if (cardOne.rank === 1){
            return true;
        } else if (cardTwo.rank === 1) {
            return false;
        } else {
            return cardOne.rank > cardTwo.rank;
        }
    }
}

class Deck {
  constructor() {
      this.cards = (function () {
        let readyDeck = [];
        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                readyDeck.push(new Card(suits[i], j));
            }
        }
        return readyDeck;
      })();
  } 

  get count() {
      return this.cards.length;
  }

  suffle() {
      for( let i = 0; i < 200; i++) {
          let fRandNum =  Math.floor(Math.random()*52);
          let sRandNum = Math.floor(Math.random()*52);
          [this.cards[fRandNum],this.cards[sRandNum]] = [this.cards[sRandNum],this.cards[fRandNum]]; 
      }
  }
  draw(n) {
      let returnedCards = [];
      for (let i = 0; i < n; i++) {
          returnedCards.push(this.cards.pop());
      }
      return returnedCards;
  }
}

const _wins = Symbol('wins');

class Player {
    constructor (name) {
        this.name = name;
        this.deck = new Deck();
        this[_wins] = 0;
    }
    
    addWin() {
        this[_wins]++;
    }

    get wins() {
        return this[_wins];
    }

    static Play(playerOne, playerTwo) {
        playerOne.deck.suffle();
        playerTwo.deck.suffle();

        let fPoints = 0;
        let sPoints = 0;

        for (let i = 0; i < 52; i++) {
            let fCard = playerOne.deck.draw(1);
            let sCard = playerTwo.deck.draw(1);
            if (Card.compare(fCard[0],sCard[0])) {
                fPoints++;
            } else if (Card.compare(sCard[0],fCard[0])) {
                sPoints++;
            } else {
                i--;
            }
        }
        
        if (fPoints > sPoints) {
            playerOne.addWin();
            playerOne.deck = new Deck();
            playerTwo.deck = new Deck();                       
            return `${playerOne.name} wins ${fPoints} to ${sPoints}`;
        } else if (sPoints > fPoints) {
            playerTwo.addWin();
            playerOne.deck = new Deck();
            playerTwo.deck = new Deck(); 
            return `${playerTwo.name} wins ${sPoints} to ${fPoints}`;
        } else {
            playerOne.deck = new Deck();
            playerTwo.deck = new Deck(); 
            return 'A draw!';
        }
    }
}
