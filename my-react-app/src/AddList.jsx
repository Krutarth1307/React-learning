import { useState } from "react";

function AddList(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Mango"]);

    function handleAddFoods(){
        const newFood = document.getElementById("addFood").value;
        document.getElementById("addFood").value = "";

        setFoods(f => [...f, newFood]);
    }

    return(
        <>
            <div>
                <h2>List of foods :</h2>

                {foods.map((food, index) => {
                    return <li>
                        <ul>{food}</ul>
                        </li>
                })
                }

                <input type="text" id="addFood" />
                <button onClick={handleAddFoods}>Add food</button>
            </div>
        </>
    )
}

export default AddList;