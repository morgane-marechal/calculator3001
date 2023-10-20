import { useState } from 'react'




export default function OperatorButton({output, setOutput}) {
    //console.log(props);
    //const [ output, setOutput] = useState("");

    const btnOp = ['+', '-', '*', '/'];

    function addOperator(value){
        setOutput((output) => output + value);
            console.log(output+value);     
    }


    const buttonsOperator = btnOp.map((value)=>(
        <button className="operatorButton"
            onClick={() => addOperator(value)}
            value={value}
            key={value}>
                {value}
        </button>
        
    ))

    return (
       // <button id={props.value} onClick={props.onClick}>{value}</button>
       buttonsOperator
        
    )
  }