import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import './isBookedMessage.scss';

const IsBookedMessage = ({cancelOrder}) => {
    return (
        <div className="is_booked_message" data-testid="isBookedMessage">
            <Typography variant="h4" component="h1">
                Заказ размещён
            </Typography>
            <Typography component="p">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
            <Button className="btn"
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={cancelOrder}>
                Сделать новый заказ
            </Button>
        </div>
    );
};

export default IsBookedMessage;
