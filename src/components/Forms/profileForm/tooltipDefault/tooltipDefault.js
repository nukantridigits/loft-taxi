import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const TooltipDefault = withStyles(() => ({
    tooltip: {
        backgroundColor: '#fff',
        color: '#323232',
        border: '1px solid #999',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "194px",
        height: "55px",
        position: "relative"
    },
}))(Tooltip);

export default TooltipDefault;
