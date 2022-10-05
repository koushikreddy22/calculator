import { useState } from "react"
import "../CSS/calculator.css"
import "./functions"
function Calculator(){
    const [val,setVal]=useState("");
    const backSpace=()=>{
        try{
            setVal(val.slice(0,-1))

        }catch(error){
            setVal("")

        }
    }
    const calculate=()=>{
        try{
            setVal(eval(val))

        }catch(error){

        }

    }
    return(
        <>
            <div id="main-container">
                <header>Calculator</header>
                <div id="form-container">
                    <div id="form">
                        <input type="text" placeholder="0" value={val}>
                        </input>
                    </div>
                    <div class="key">
                        <button value="c" onClick={() => backSpace()}>c</button></div>
                </div>                
        <div>
            <button value="1" onClick={(e) => setVal(val + e.target.value)}>1</button>
            <button value="2" onClick={(e) => setVal(val + e.target.value)}>2</button>
            <button value="3" onClick={(e) => setVal(val + e.target.value)}>3</button>
            <button value="/" onClick={(e) => setVal(val + e.target.value)}>/</button>
        <div>
                <button value="4" onClick={(e) => setVal(val + e.target.value)}>4</button>
                <button value="5" onClick={(e) => setVal(val + e.target.value)}>5</button>
                <button value="6" onClick={(e) => setVal(val + e.target.value)}>6</button>
                <button value="-" onClick={(e) => setVal(val + e.target.value)}>-</button>
            </div><div>
                <button value="7" onClick={(e) => setVal(val + e.target.value)}>7</button>
                <button value="8" onClick={(e) => setVal(val + e.target.value)}>8</button>
                <button value="9" onClick={(e) => setVal(val + e.target.value)}>9</button>
                <button value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
            </div><div>
                <button value="." onClick={(e) => setVal(val + e.target.value)}>.</button>
                <button value="0" onClick={(e) => setVal(val + e.target.value)}>0</button>
                <button value="=" onClick={()=>calculate()}>=</button>
                <button value="*" onClick={(e) => setVal(val + e.target.value)}>*</button>
            </div>
            </div>
            </div>
            </>
    )
}
export default Calculator