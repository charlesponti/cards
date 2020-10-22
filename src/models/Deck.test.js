const { default: Deck } = require("./Deck")
const { uniq } = require('lodash')

describe('Deck', () => {
    /**
     * @type {Deck}
     */
    let deck
    
    beforeEach(() => {
        deck = new Deck()
    })

    afterEach(() => {
        deck = null
    })
    
    test('it should have 52 cards', () => {
        expect(deck.id).not.toBeNull()
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
            const combos = hand.cards.map(c => c.id)
            expect(hand.cards.length).toEqual(5)
            expect(deck.hands.size).toEqual(i)
            expect(deck.cards.filter(card => combos.indexOf(card.id) !== -1)).toEqual([])
            i += 1
        }
    })

    test('pullCard should remove card from deck', () => {
        const card = deck.pullCard()
        expect(deck.cards.find(c => c.id === card.id)).toEqual(undefined)
        expect(card).not.toBeNull()
    })

    test('it should return hands to deck', () => {
        while (deck.cards.length >= 5) {
            deck.deal()
        }
        expect(deck.cards.length < 5).toEqual(true)
        deck.collectHands()
        expect(uniq(deck.cards.map(c => c.id)).length).toEqual(52)
        expect(deck.hands.size).toEqual(0)
    })

    test('it should add card to hand', () => {
        const hand = deck.deal()
        expect(deck.cards.length).toEqual(52 - 5)
        
        deck.dealToHand(hand.id)
        expect(deck.hands.get(hand.id).length).toEqual(6)
        expect(deck.cards.length).toEqual(52 - 5 - 1)
        
        deck.dealToHand(hand.id)
        expect(deck.hands.get(hand.id).length).toEqual(7)
        expect(deck.cards.length).toEqual(52 - 5 - 2)
    })

    test('it should add value to cards', () => {
        const twoOfHearts = deck.cards.find(c => c.id === 'hearts 2')
        const twoOfDiamonds = deck.cards.find(c => c.id === 'diamonds 2')
        const twoOfSpades = deck.cards.find(c => c.id === 'spades 2')
        expect(twoOfHearts.value).toBeGreaterThan(twoOfDiamonds.value)
        expect(twoOfHearts.value).toBeLessThan(twoOfSpades.value)
    })
})