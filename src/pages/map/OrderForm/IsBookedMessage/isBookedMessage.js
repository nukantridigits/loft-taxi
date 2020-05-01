import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import './isBookedMessage.scss';

const IsBookedMessage = ({makeNewOrder}) => {
    return (
        <div className="is_booked_message">
            <Typography variant="h4" component="h1">
                Заказ размещён
            </Typography>
            <Typography component="p">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
            <Button size="large" type="submit"
                    variant="contained"
                    color="primary" onClick={makeNewOrder}>
                Сделать новый заказ
            </Button>
        </div>
    );
};

export default IsBookedMessage;
