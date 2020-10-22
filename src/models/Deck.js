import { v4 as uuidv4 } from 'uuid'

const getCardString = c => `${c.suit} ${c.rank}`

/**
 * @description Class representing a deck of cards.
 */
class Deck {
    /**
     * @type {[{ id: string, suit: string, rank: string }]}
     */
    cards = []
    
    /**
     * @type {Map}
     */
    hands = new Map()

    suits = ['spades', 'diamonds', 'hearts', 'clubs']

    ranks = ['A', ...[...new Array(9)].map((v, i) => (i + 2).toString()), 'J', 'Q', 'K']

    /**
     * Create a deck of cards
     */
    constructor() {
        this.id = uuidv4()
        
        // Create suite of each suit
        for (let suit of this.suits) {
            // Create card for each rank in each suit
            for (let rank of this.ranks) {
                this.cards.push({ id: getCardString({suit, rank}), suit, rank })
            }
        }
    }

    /**
     * @description Get random card from deck
     * @returns {{ id: string, suit: string, rank: string }}
     */
    getRandomCard() {
        /**
         * NOTE: We use `this.cards.length` instead of 52 because the length of the deck will
         * change as cards are dealt
         */
        return this.cards[Math.floor(Math.random() * Math.floor(this.cards.length))]
    }
    
    /**
     * @description Create a new hand
     * @returns {Map}
     */
    deal() {
        const hand = []
        const combos = []
        
        while (hand.length !== 5) {
            const card = this.getRandomCard()
            if (combos.indexOf(card.id) === -1) {
                combos.push(card.id)
                hand.push(card)
            }
        }

        // Remove card from deck
        this.cards = this.cards.filter(card => combos.indexOf(card.id) === -1)

        // Add hand to current hands
        this.hands.set(uuidv4(), hand)
        
        return hand
    }

    collectHands() {
        for (let hand of this.hands.values()) {
            for (const card of hand) {
                this.cards.push(card)
            }
        }
        this.hands.clear()
    }
}

export default Deck