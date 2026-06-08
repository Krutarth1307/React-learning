

function ClickEvent (){

    let count = 0;
    const click = (name) =>{
        if(count < 3){
            count ++;
            console.log(`Succesfully clicked ${count} times.`)
        }
        else{
            console.log(`Stop clicking me ${name}`)
        }}

    return(
        <button onClick ={() => click('Krutarth')}>Click me...</button>
    )
}

export default ClickEvent 