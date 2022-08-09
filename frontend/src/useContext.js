import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, currentUser }) => {
    const [loggedIn, setloggedIn] = useState(currentUser !== null);

    return(
        <UserContext.Provider value={{loggedIn, setloggedIn}}>
            {children}
        </UserContext.Provider>

    )
    };
