import imageUrl from "../assets/test.jpeg"

function ProfilePic(){

    // const handleClick = () => console.log('Hey!')

    const handleClick = (e) => e.target.style.display = 'none';

    return(
        <>
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
        </>
    );
}

export default ProfilePic