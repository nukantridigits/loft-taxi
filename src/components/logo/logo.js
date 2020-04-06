import React, {Component} from 'react';
import logoLight from '../../assets/img/logo_light.svg';
import logoDark from '../../assets/img/logo_dark.svg';

class Logo extends Component {
    render() {
        let {type} = this.props;
        let path = logoLight;

        if (type === 'dark') {
            path = logoDark;
        }

        return (
            <img className="logo" src={path}/>
        );
    }
}

export default Logo;
