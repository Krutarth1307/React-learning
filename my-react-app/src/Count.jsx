import React,{useState} from "react";

function Count(){

        const [count, setCount] = useState(0);

        const increase = () => {
            setCount(count + 1);
        }

        const decrease = () => {
            setCount(count - 1);
        }

        const reset = () => {
            setCount(0);
        }

       
       
       return (<div className="myDiv">
            <p className="displayCount" >{count}</p>

            <button className="btns" onClick={decrease}>decrease</button>

            <button className="btns" onClick={reset}>reset</button>

            <button className="btns" onClick={increase}>increase</button>
            
        </div>);

}

export default Count;