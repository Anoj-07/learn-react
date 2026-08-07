import PropTypes from 'prop-types'
// render List
function List({
    items=[],
    category='items'
}) {

    const itemList = items;
    const categoties = category

    // ! Sort
    // items.sort((a, b)  => a.name.localeCompare(b.name)) //ALPHABETICAL
    // items.sort((a, b) => b.calories - a.calories); //NUMERIC

    // ! Filter
    // const lowCalFruits = itemList.filter(item => itemList.calories < 100);
    // const highCalFruits = itemList.filter(item => item.calories >= 100);

    // const listItems = highCalFruits.map(
    //     highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name} = <b>{highCalFruit.calories}</b></li>
    // );

    const listItems = itemList.map(
        item => <li key={item.id}> {item.id}: {item.name} = <b>{item.calories}</b></li>
    );

    return (
        <>
        <h3 className="list-category">{categoties}</h3>
        <ol className="list-items">
            {listItems}
        </ol></>
        
    );
};

List.prototypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string,
        calories: PropTypes.number 
    })),
};

export default List