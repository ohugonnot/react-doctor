import React, {useState} from "react";

const UserContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {
    },
    onLogout: () => {
    },
})

export const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;