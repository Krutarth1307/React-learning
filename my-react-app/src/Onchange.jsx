import React, { useState } from "react";

function OnChange() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }

    function handleComment(event) {
        setComment(event.target.value);
    }

    function handleQantity(event) {
        setQuantity(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value);
    }

    function handleShipping(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleName} />
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQantity} type="number" />
            <p>quantity : {quantity}</p>

            <textarea value={comment} onChange={handleComment} />
            <p>comment : {comment}</p>

            <select name="payment" onChange={handlePayment}>
                <option >...</option>
                <option >Paytm</option>
                <option >Phonepe</option>
                <option >Gpay</option>
            </select>
            <p>Payment-type : {payment}</p>

            <label ><input type="radio" value="PickUp" 
                            checked={shipping === "PickUp"}
                            onChange={handleShipping}/>
                            Pick up delivery</label>
            <br />
            <label ><input type="radio" value="Delivery"
                            checked={shipping === "Delivery"}
                            onChange={handleShipping}/>Delivery</label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default OnChange;