import React from 'react'
import { render } from '@testing-library/react'
import PlayingCard from './PlayingCard'
import { RANKMOJIS, SUITMOJIS } from '../constants'

describe('<PlayingCard/>', () => {
    test('should render suit and rank', () => {
        const suit = 'hearts'
        const rank = 'king'
        const { getByText } = render(<PlayingCard suit={suit} rank={rank} value="15" />)
        expect(getByText(RANKMOJIS[rank] || rank)).toBeInTheDocument()
        expect(getByText(SUITMOJIS[suit] || suit)).toBeInTheDocument()
        expect(getByText('15')).toBeInTheDocument()
    })
})