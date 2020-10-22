import React, { useState } from 'react';
import './App.css';
import Deck from './models/Deck';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hand from './components/Hand';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'white'
  },
  buttonContainer: {
    marginTop: '2rem'
  }
})

function App() {
  const [deck] = useState(new Deck())
  const [hands, setHands] = useState([])
  const styles = useStyles()  

  function onCreateHand() {
    const hand = deck.deal()
    setHands([...hands, hand])
  }

  return (
    <div className="App">
        <h1>Cards 'n Such</h1>
        <Grid direction="column" container>
          {hands.map((hand) => <Hand key={hand.id} {...hand} />)}
        </Grid>
        <div className={styles.buttonContainer}>
          <Button 
            color="primary"
            variant="outlined" 
            onClick={onCreateHand}
            className={styles.button}
          >
            Deal Hand
          </Button>
        </div>
    </div>
  );
}

export default App;
