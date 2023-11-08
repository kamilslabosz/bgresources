import * as React from 'react';
import classes from './AECard.module.css'

interface AEProps {
    battleDeck: string[],
    cardIdx: number,
    handleCardChange: (direction: number)=>void,
}

function AECard(props: AEProps) {
    return ( <div>
        <h1 className={classes.label}>{props.battleDeck[props.cardIdx]}</h1>
        {props.cardIdx < props.battleDeck.length ? (
          <button className={classes.bigBtn} onClick={() => props.handleCardChange(1)}>Next</button>
        ) : (
          <h1 className={classes.label}>End of deck!</h1>
        )}
        {props.cardIdx !== 0 && (
          <button className={classes.smallBtn} onClick={() => props.handleCardChange(-1)}>Previous</button>
        )}
      </div> );
}

export default AECard;