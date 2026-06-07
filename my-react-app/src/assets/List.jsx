function List (Props) {

     

    const fruits = Props.items;
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    //  fruits.sort((a, b) => a.name - b.name );
    fruits.sort((a, b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 50 );
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 50 );

     const list = fruits.map((fruit)=>

            <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>

         );
     

    return (<>
                <h2>{Props.category}</h2>
                <hr />
                <ol>{list}</ol>
                <hr />
                 </>)
}

List.defaultProps = {
    category : "category",
    items : [],
}

export default List