import * as React from 'react';

interface AEProps {
    heading: string
}

function AECard(props: AEProps) {
    return ( <div><h1>{props.heading}</h1></div> );
}

export default AECard;