import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const ClearIcon = ({onClick}) => {
    return (
        <div data-testid="clearIcon" className="clear_icon_wrapper icon_wrapper" onClick={onClick} style={{cursor: "pointer"}}>
            <CloseIcon style={{fontSize: 24, color: "#ffb1b1"}}/>
        </div>
    );
};

export default ClearIcon;
