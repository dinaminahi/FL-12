const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8 ,9, 10, 'Jack', 'Queen', 'King'];

class Card {
    constructor(suit, rank, isFace) {
        this.suit = suit;
        this.rank = rank;
        this.isFace = isFace;
    }
    get isFaceCard() {
        return this.isFace;
    }

    toString(){
        return `${ranks[this.rank-1]} of ${this.suit}`;
    }

    static compare(cardOne, cardTwo){
        return `${cardOne.toString()} is ${cardOne.rank > cardTwo.rank ? 'bigger' : 'smaller'} than ${cardTwo.toString()}`;
    }
}