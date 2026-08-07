import profilePic from "../../assets/test.jpeg";
import PropTypes from "prop-types";

// props: data pass from parent to child
// PropTypes: Ensures the passed props have the correct data type.
// defaultProps: default values for props in case they are not passed from the parent component

// function Card({
    // name = "guest",
    // text = "No text",
    // isStudent = false,
// }) by this also we can pass props in modern react


function Card({
    name = "guest",
    text = "No text",
    isStudent = false,
}) {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2>{name}</h2>
            <p>{text}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    isStudent: PropTypes.bool
}

export default Card


