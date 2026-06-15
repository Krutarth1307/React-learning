import { useState } from "react";

function Car(){

    const [car, setCar] = useState({model:"Brezza", make:"Suzuki", year:"2025"});

    function yearChange(event){
        setCar(c => ({...car, year : event.target.value}));
    }

    function modelChange(event){
        setCar(c => ({...car, model : event.target.value}));
    }

    function makeChange(event){
        setCar(c => ({...car, make : event.target.value}));
    }


    return(
        <div>
            <p>{car.make} {car.model} {car.year}  </p>
            <input type="number" placeholder="Enter the year :"
                    value={car.year}
                    onChange={yearChange}/> <br />

            <input type="text" placeholder="Enter the make :"
                    value={car.make}
                    onChange={makeChange}/> <br />

            <input type="text" placeholder="Enter the model :"
                    value={car.model}
                    onChange={modelChange}/> <br />
        </div>
    )
    
}

export default Car;