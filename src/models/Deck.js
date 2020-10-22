
/**
 * @description Class representing a deck of cards.
 */
class Deck {
    cards = []
    suits = ['spades', 'diamonds', 'hearts', 'clubs']
    ranks = ['A', ...[...new Array(9)].map((v, i) => (i + 2).toString()), 'J', 'Q', 'K']

    /**
     * Create a deck of cards
     */
    constructor() {
        // Create suite of each suit
        for (let suit of this.suits) {
            // Create card for each rank in each suit
            for (let rank of this.ranks) {
                this.cards.push({ suit, rank })
            }
        }
    }
}

export default Deck