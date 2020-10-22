import React from 'react'
import { render } from '@testing-library/react'
import Hand from './Hand'
import Deck from '../models/Deck'
import { RANKMOJIS, SUITMOJIS } from '../constants'

describe('<Hand/>', () => {
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

    test('it should display hand', () => {
        const hand = deck.deal()
        const { getAllByText, getByText } = render(<Hand {...hand} />)
        
        expect(getByText(`Score: ${hand.score}`)).toBeInTheDocument()
        hand.cards.forEach(({ rank, suit, value }) => {
            expect(getAllByText(RANKMOJIS[rank] || rank).length).toBeGreaterThan(0)
            expect(getAllByText(SUITMOJIS[suit] || suit).length).toBeGreaterThan(0)
            expect(getAllByText(value+'').length).toBeGreaterThan(0)
        })
    })

    test('should display winner', () => {
        const hand = deck.deal()
        const { getByText } = render(<Hand {...hand} isWinner={true}/>)
        expect(getByText('WINNER!!')).toBeInTheDocument()
    })

    test('should display loser', () => {
        const hand = deck.deal()
        const { getByText } = render(<Hand {...hand} isWinner={false}/>)
        expect(getByText('LOSER 👎')).toBeInTheDocument()
    })
})