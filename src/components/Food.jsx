function Food(){
    const food1 = 'Apple';
    const food2 = 'Peach';

    return(
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food