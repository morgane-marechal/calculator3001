import { useState } from 'react'
// import ScoreScreen from './ScoreScreen.jsx'
// import StateScreen from './StateScreen.jsx'
import NumberButton from './NumberButton.jsx'
import OperatorButton from './OperatorButton.jsx'

function BeautifulScreen({output, setOutput}) {

    return (
        <>
            {/* <ScoreScreen />
            <StateScreen /> */}
            <div id="totalDisplay">{output}</div>
            <div id="displayCalc"></div>
        </>
    );
  }


  export default BeautifulScreen;