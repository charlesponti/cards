import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { RANKMOJIS, SUITMOJIS } from '../constants'

export default function PlayingCard({ suit, rank, value }) {
    return (
        <Card>
            <CardHeader title={SUITMOJIS[suit] || suit} subheader={value} />
            <CardContent>{RANKMOJIS[rank] || rank}</CardContent>
        </Card>
    )   
}