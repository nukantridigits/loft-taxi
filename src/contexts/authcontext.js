import React, {useState} from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const login = (email, password) => {
        return setIsAuthorized(!!email && !!password);
    };

    const logout = () => {
        return setIsAuthorized(false);
    };

    return (
        <AuthContext.Provider value={{
            isAuthorized: isAuthorized,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
