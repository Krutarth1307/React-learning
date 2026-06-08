

function ClickEvent (){

    let count = 0;
    const click = (e) => e.target.textContent = `Ouch!`;

    return(
        <button onClick ={(e) => click(e)}>Click me...</button>
    )
}

export default ClickEvent 