export default function ClearButton({output, setOutput}) {

    function clearAll(output){
        setOutput((output) => output=0);
        console.log('test equal '+output);
        let dispCalc=document.getElementById('displayCalc');
        dispCalc.innerHTML=(output);

    // const buttonEgal = (
    //     <button
    //             onClick={() => evalOp(output)}> Click
    //     </button>
    //  )  

    }
    return (
        <button id="clear"
            onClick={() => clearAll(output)}> Clear
        </button>
    )
  }