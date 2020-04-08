import React, {Component} from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false};
    }

    login = (email, password) => {
        return this.setState({isLoggedIn: !!email && !!password});
    };

    logout = () => {
        return this.setState({isLoggedIn: false});
    };

    render() {
        let {children} = this.props;
        return (
            <AuthContext.Provider value={{
                isLoggedIn: this.state.isLoggedIn,
                login: this.login,
                logout: this.logout
            }}>
                {children}
            </AuthContext.Provider>
        );
    };
}
