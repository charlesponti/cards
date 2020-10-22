import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PlayingCard from '../components/PlayingCard'


const useStyles = makeStyles({
    root: {
        marginTop: '1rem'
    },

    card: {
        marginLeft: '1rem',
        minWidth: '20%',
        fontSize: '10px'
    }
})

export default function Hand({ cards, id }) {
    const styles = useStyles()

    return (
        <Grid container data-test-id="hand" className={styles.root}>
            <Grid item xs={12}>
                <Typography>{id}</Typography>
            </Grid>
            <Grid container direction="row" justify="center">
                {cards.map((card, idx) => <PlayingCard key={card.id} {...card} className={styles.card}/>)}
            </Grid>
        </Grid>
    )
}