const { default: Deck } = require("./Deck")

describe('Deck', () => {
    let deck
    
    beforeEach(() => {
        deck = new Deck()
    })

    afterEach(() => {
        deck = null
    })
    
    test('it should have 52 cards', () => {
        expect(deck.cards.length).toEqual(52)
        expect(deck.cards.find(c => c.suit === 'spades' && c.rank === '10')).not.toEqual(undefined)
        expect(deck.cards.find(c => c.suit === 'diamonds' && c.rank === 'K')).not.toEqual(undefined)
        expect(deck.cards.find(c => c.suit === 'hearts' && c.rank === 'A')).not.toEqual(undefined)
        expect(deck.cards.find(c => c.suit === 'clubs' && c.rank === '5')).not.toEqual(undefined)
        expect(deck.cards.find(c => c.suit === 'clubs' && c.rank === '1')).toEqual(undefined)
    })

    test('it should deal 5 cards', () => {
        let i = 1
        while (deck.cards.length >= 5) {
            const hand = deck.deal()
            const combos = hand.map(c => c.id)
            expect(hand.length).toEqual(5)
            expect(deck.hands.length).toEqual(i)
            expect(deck.cards.filter(card => combos.indexOf(card.id) !== -1)).toEqual([])
            i += 1
        }
    })
})