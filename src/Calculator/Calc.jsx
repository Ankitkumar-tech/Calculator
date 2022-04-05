import { useState ,useRef,useEffect} from "react"
import "./Calc.css"

export const Calc  = () =>{

    const [result,setResult] =useState("")
    const inputRef =useRef(null);
    useEffect(()=>inputRef.current.focus())
     

    function handleClick(e){
    setResult(result+e.target.name)
    }

    function backspace(){
        setResult(result.slice(0,result.length-1))
    }
    function clear(){
        setResult("")
    }

   function showme(){
       try{
           setResult(eval(result.toString()))
       }
       catch(error){
           setResult("error")
       }
   }

    return (
        <div className="c1">
         <form className="show">
             <input className="show1" type="text" placeholder="Jindgi bhr yad rkhoge"  value={result} ref={inputRef}/>
         </form>
         <div className="c2">
         <button id="clear" onClick={clear}>Clear</button>
         <button id="backspace" onClick={backspace}>Delete</button>
         <button name="+" className="b1" onClick={handleClick}>+</button>
         <button name="1" className="b1" onClick={handleClick}>1</button>
         <button name="2" className="b1" onClick={handleClick}>2</button>
         <button name="3" className="b1" onClick={handleClick}>3</button>
         <button name="-" className="b1" onClick={handleClick}>-</button>
         <button name="4" className="b1" onClick={handleClick}>4</button>
         <button name="5" className="b1" onClick={handleClick}>5</button>
         <button name="6" className="b1" onClick={handleClick}>6</button>
         <button name="*" className="b1" onClick={handleClick}>*</button>
         <button name="7" className="b1" onClick={handleClick}>7</button>
         <button name="8" className="b1" onClick={handleClick}>8</button>
         <button name="9" className="b1" onClick={handleClick}>9</button>
         <button name="/" className="b1" onClick={handleClick}>/</button>
         <button name="0" className="b1" onClick={handleClick}>0</button>
         <button name="." className="b1" onClick={handleClick}>.</button>
         <button id="result" onClick={showme}>=</button>
         </div>
        </div>
    )
}