import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, currentUser }) => {
    const [loggedIN, setloggedIN] = useState(currentUser !== null);

    return(
        <UserContext.Provider value={{loggedIN, setloggedIN}}>
            {children}
        </UserContext.Provider>

    )
    };
