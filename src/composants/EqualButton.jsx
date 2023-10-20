export default function EqualButton({output, setOutput}) {
    let outputChange=output;

    function evalOp(output){
        // const result = eval(displayValue);
        // setDisplayValue(result.toString());
        try {
            const result = eval(output);
            setOutput(result.toString());
            //setOutput((output) => eval(output));
            console.log(output);
            let dispCalc=document.getElementById('displayCalc');
            dispCalc.innerHTML=(output);
            } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
                let dispCalc=document.getElementById('displayCalc');
                dispCalc.innerHTML=("error");

            }
        }
}

    return (
        <button id="egal"
            onClick={() => evalOp(outputChange)}> Equal
        </button>
    )
  }