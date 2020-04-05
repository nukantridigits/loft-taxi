import React, {Component} from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        let {children} = this.props;

        return (
            <div className="modal">
                <div className="modal_content">
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;
