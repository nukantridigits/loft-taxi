import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HelpIcon = ({onMouseEnter, onMouseLeave}) => {
    return (
        <div className="help_icon icon_wrapper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             style={{marginLeft: "5px", cursor: "pointer"}}>
            <HelpOutlineIcon style={{fontSize: 18, color: "#747474"}}/>
        </div>
    );
};

export default HelpIcon;
