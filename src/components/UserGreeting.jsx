// ! Conditional Rendering: 
// - Allows you to control what gets rendered in your application based on a condition.
// - Used to **show**, **hide**, or **change** components based on specific conditions.

import PropTypes from 'prop-types'

function UserGreeting({
    isLoggedIn = false,
    username = 'Guest'
}) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}
    </h2>

    const loginPrompt = <h2 className="login-prompt">Please Login!
    </h2>

    return (
        isLoggedIn ? welcomeMessage : loginPrompt
    );
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
export default UserGreeting