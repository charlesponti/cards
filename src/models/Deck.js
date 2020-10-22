import { v4 as uuidv4 } from 'uuid'

const getCardString = c => `${c.suit} ${c.rank}`

class Card {
    /**
     * @type {String}
     */
    id;

    /**
     * @type {String}
     */
    suit;

    /**
     * @type {String}
     */
    rank;

    /**
     * @type {Number}
     */
    value;
}

/**
 * @description Class representing a deck of cards.
 */
class Deck {
    /**
     * @type {[{ id: string, suit: string, rank: string }]}
     */
    cards = []
    
    /**
     * @type {Map<String, [Card]>}
     */
    hands = new Map()

    suits = ['clubs', 'diamonds', 'hearts', 'spades']

    ranks = [...[...new Array(9)].map((v, i) => (i + 2).toString()), 'J', 'Q', 'K', 'A']

    /**
     * Create a deck of cards
     */
    constructor() {
        this.id = uuidv4()
        
        // Create suite of each suit
        for (const [suitIdx, suit] of this.suits.entries()) {
            // Create card for each rank in each suit
            for (const [rankIdx, rank] of this.ranks.entries()) {
                this.cards.push({ 
                    id: getCardString({suit, rank}), 
                    suit, 
                    rank, 
                    value: (suitIdx + rankIdx) 
                })
            }
        }
    }

    /**
     * @description Get random card from deck
     * @returns {{ id: string, suit: string, rank: string }}
     */
    pullCard() {
        /**
         * NOTE: We use `this.cards.length` instead of 52 because the length of the deck will
         * change as cards are dealt
         * @type {Number}
         */
        const cardIdx = Math.floor(Math.random() * Math.floor(this.cards.length))

        // Remove card from deck
        return this.cards.splice(cardIdx, 1)[0]
    }
    
    /**
     * @description Create a new hand
     * @param {Number} handLength - Length of hand
     * @returns {{ id: string, cards: [Card] }}
     */
    deal(handLength = 5) {
        const cards = []
        const id = uuidv4()

        // Add cards to hand
        while (cards.length < handLength) {
            cards.push(this.pullCard())
        }

        // Add hand to current hands
        this.hands.set(id, cards)
        
        return { id, cards }
    }

    /**
     * @description Collect all hands and return to deck
     * @returns {Deck}
     */
    collectHands() {
        for (let hand of this.hands.values()) {
            for (const card of hand) {
                this.cards.push(card)
            }
        }
        
        // Empty `hands` Map
        this.hands.clear()
        
        // Return Deck to allow for method chaining
        return this
    }

    /**
     * @description Pull card from deck and add to hand
     * @param {String} handId - Id of hand
     * @returns {Deck}
     */
    dealToHand(handId) {
        this.hands.set(
            handId, 
            [...this.hands.get(handId), this.pullCard()]
        )
        
        // Return Deck to allow for method chaining
        return this
    }
}

export default Deck