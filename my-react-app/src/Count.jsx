import React,{useState} from "react";

function Count(){

        const [count, setCount] = useState(0);
        const [username , setUsername] = useState("Guest");
        const [age, setAge] = useState(18);

        const increase = () => {
            setCount(count => count + 1);
        }

        const decrease = () => {
            setCount(count => count - 1);
        }

        const reset = () => {
            setCount(0);
        }

        const name = () =>{
            setUsername("krutarth");
        }

        const increaseAge = ()=>{
            setAge(age => age + 1);
        }

        const decreaseAge = ()=>{
            setAge(age => age - 1);
        }
            

       
       
       return (<><div className="myDiv">
            <p className="displayCount" >{count}</p>

            <button className="btns" onClick={decrease}>decrease</button>

            <button className="btns" onClick={reset}>reset</button>

            <button className="btns" onClick={increase}>increase</button>
            
        </div>
        
        <div>
            <p>Enter the name : {username}</p>
            <button onClick={name}>getName</button>

            <p>Your age : {age}</p>
            <button onClick={increaseAge}>increament age</button>
            <button onClick={decreaseAge}>decreament age</button>
            </div>

            </>
            );


}

export default Count;