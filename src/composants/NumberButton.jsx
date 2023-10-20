import { useState } from 'react'


export default function NumberButton({output, setOutput}) {
    //console.log(props);
    //const [ output, setOutput] = useState("");
    const btnValues = [0,1,2,3,4,5,6,7,8,9];

    function addNumber(number){
            setOutput((output) => output + number);
            console.log(output+number);

    }

    // const addNumber = (number, output) => {
    // }

    const buttonsNumber = btnValues.map((value)=>(
        <button className="number"
            onClick={() => addNumber(value)}
            value={value}
            key={value}>
                {value}
        </button>
    ))

    //const clear = <button onClick={() => setOutput(0)}>Clear</button>


    return (
       // <button id={props.key} value={props.value} onClick={props.onClick}>{value}</button>
       buttonsNumber   
           
    )
  }