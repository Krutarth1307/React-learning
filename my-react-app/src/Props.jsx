import IconDefault from './assets/Valo.png';

function Props({
    icon = IconDefault,
    name = "Agent name",
    description = "About the agent"

  }){
    return(
            <div className='card'>
                <img className="image" src={icon}alt={name} />
                <h3 className='name'>{name}</h3>
                <p className='description'>{description}</p>
            </div>
        )
}



export default Props;