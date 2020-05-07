import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HelpIcon = () => {
    return (
        <div className="help_icon icon_wrapper" data-testid="helpIcon"
             style={{marginLeft: "5px", cursor: "pointer"}}>
            <HelpOutlineIcon style={{fontSize: 18, color: "#747474"}}/>
        </div>
    );
};

export default HelpIcon;
