export default function EqualButton({output, setOutput}) {
    let outputChange=output;

    function evalOp(output){
        setOutput((output) => eval(output));
        console.log(output);
        let dispCalc=document.getElementById('displayCalc');
        dispCalc.innerHTML=(output);
}

    return (
        <button id="egal"
            onClick={() => evalOp(outputChange)}> Equal
        </button>
    )
  }