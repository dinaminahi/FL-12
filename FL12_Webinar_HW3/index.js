const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8 ,9, 10, 'Jack', 'Queen', 'King'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

function createDeckOfCards() {
    let deck = [];
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
           deck.push(new Card(suits[i],ranks[j]));
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
        return `${cardOne.toString()} is ${cardOne.rank > cardTwo.rank ? 'bigger' : 'smaller'} than ${cardTwo.toString()}`;
    }
}


class Deck {
  constructor() {
      this.cards = createDeckOfCards();
  } 
  get count() {
      return this.cards.length;
  }
}
