const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8 ,9, 10, 'Jack', 'Queen', 'King'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

function createDeckOfCards() {
    let deck = [];
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
           deck.push(new Card(suits[i], j));
        }
    }
    return deck;
}

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
        return cardOne.rank > cardTwo.rank;
    }
}

class Deck {
  constructor() {
      this.cards = createDeckOfCards();
  } 
  get count() {
      return this.cards.length;
  }
  suffle() {
      for( let i = 0; i < 100; i++) {
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

class Player {
    constructor(name) {
        this.name = name;
        this.deck = new Deck();
        this.wins = 0;
    }
    // get wins() {
    //     return this.wins;
    // }
    static Play(playerOne, playerTwo) {
        playerOne.deck.suffle();
        playerTwo.deck.suffle();
        let fPoints = 0;
        let sPoints = 0;
        for (let i = 0; i < 51; i++) {
            let fCard = playerOne.deck.draw(1);
            let sCard = playerTwo.deck.draw(1);
            if (Card.compare(fCard[0],sCard[0])) {
                fPoints++;
            } else if (!Card.compare(fCard[0],sCard[0])) {
                sPoints++;
            } else {
                i--;
            }
        }
        if (fPoints > sPoints) {
            playerOne.wins++;
            playerOne.deck = new Deck();
            playerTwo.deck = new Deck();                       
            return `${playerOne.name} wins ${fPoints} to ${sPoints}`;
        } else if (sPoints > fPoints) {
            playerTwo.wins++;
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
