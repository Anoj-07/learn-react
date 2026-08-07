function Button(){

    const handleClick = (e) => e.target.textContent = 'Enough';

    // const handleClickWithPrams = (name) => console.log(`${name} stop clicking me`) 

    return(
        <button onClick={(e) => handleClick(e)}>Click Here! </button>
    );
}

export default Button