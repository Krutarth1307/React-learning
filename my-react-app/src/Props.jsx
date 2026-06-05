
function Props(props){
    return(
            <div className='card'>
                <img className="image" src={props.icon}alt={props.name} />
                <h3 className='name'>{props.name}</h3>
                <p className='description'>{props.description}</p>
            </div>
        )
}

export default Props;