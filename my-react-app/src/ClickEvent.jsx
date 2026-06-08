 import image from './assets/hero.png';

function ClickEvent (){


    let count = 0;
    const click = (e) => e.target.style.display = "none";

    return(
        <img src= {image} alt="Image" onClick={click} />
    )
}

export default ClickEvent 