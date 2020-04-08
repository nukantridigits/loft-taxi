import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logoLight from '../../assets/img/logo_light.svg';
import logoDark from '../../assets/img/logo_dark.svg';

class Logo extends Component {
    static defaultProps = {
        type: "dark"
    };

    static propTypes = {
        type: PropTypes.string,
    };

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
