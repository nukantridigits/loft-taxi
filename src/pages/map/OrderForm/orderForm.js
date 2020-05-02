import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {cancelOrder, fetchAddressListRequest, fetchRouteRequest} from '../../../modules/routes';
import {getAddressList, getIsBooked, getRoute} from "../../../modules/routes/selectors";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IsBookedMessage from './IsBookedMessage'
import './orderForm.scss';

const OrderForm = ({route, fetchAddressListRequest, fetchRouteRequest, makeOrder, cancelOrder, addressListDefault, isBooked}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [addressList, setAddressList] = useState(addressListDefault);
    const [canOrder, setCanOrder] = useState(false);

    useEffect(() => {
        if (!addressListDefault.length) {
            fetchAddressListRequest();
        }
    }, []);

    useEffect(() => {
        const addressList = addressListDefault.filter((address) => {
            return address !== from && address !== to
        });

        setCanOrder(!!(from && to));
        setAddressList(addressList);
    }, [from, to]);

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        if (canOrder && !!from && !!to) {
            fetchRouteRequest({
                address1: from,
                address2: to
            });
        }
    };

    const onFromChangeHanlder = (event, newValue) => {
        return setFrom(newValue);
    };

    const onToChangeHanlder = (event, newValue) => {
        return setTo(newValue);
    };

    const onCancelOrderHandler = () => {
        setFrom('');
        setTo('');
        setAddressList(addressListDefault);
        cancelOrder();
    };

    return (
        <Grid container className="overlay order_form_wrapper">
            <Paper className="order_form_container">
                {isBooked ? <IsBookedMessage cancelOrder={onCancelOrderHandler}/> :
                    <form onSubmit={onFormSubmitHandler}>
                        <Grid container>
                            <Grid container className="inputs_area">
                                <Grid item xs={12}>
                                    <Autocomplete
                                        id="routeFrom"
                                        options={addressList}
                                        onChange={(event, newValue) => {
                                            onFromChangeHanlder(event, newValue);
                                        }}
                                        getOptionSelected={(option) => option}
                                        renderInput={(params) => <TextField {...params} label="Откуда"
                                                                            margin="normal"/>}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        id="routeTo"
                                        options={addressList}
                                        onChange={(event, newValue) => {
                                            onToChangeHanlder(event, newValue);
                                        }}
                                        getOptionSelected={(option) => option}
                                        renderInput={(params) => <TextField {...params} label="Куда" margin="normal"/>}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="btn"
                                        disabled={!canOrder}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary">
                                    Вызвать такси
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Paper>
        </Grid>
    );
};

const mapStateToProps = state => ({
    addressListDefault: getAddressList(state),
    isBooked: getIsBooked(state),
    route: getRoute(state)
});

const mapDispatchToProps = {fetchAddressListRequest, fetchRouteRequest, cancelOrder};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
