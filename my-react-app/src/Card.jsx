import Icon from './assets/Sova.png'

function Card(){

    return(
        <div className='card'>
            <img className="image" src={Icon}alt="Sova" />
            <h3 className='name'>Sova</h3>
            <p className='description'>My name is Sova. I'm the hunter. I like to use old weapens.</p>
        </div>
    )
}

export default Card