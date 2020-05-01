import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAddressListRequest, makeNewOrder} from '../../../modules/routes';
import {getAddressList, getIsBooked} from "../../../modules/routes/selectors";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IsBookedMessage from './IsBookedMessage'
import './orderForm.scss';

const OrderForm = ({fetchAddressListRequest, makeNewOrder, addressListDefault, isBooked}) => {
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
    };

    const onFromChangeHanlder = (event, newValue) => {
        return setFrom(newValue);
    };

    const onToChangeHanlder = (event, newValue) => {
        return setTo(newValue);
    };

    return (
        <Grid container className="overlay order_form_wrapper">
            <Paper className="order_form_container">
                {isBooked ? <IsBookedMessage makeNewOrder={makeNewOrder}/> :
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
                                        renderInput={(params) => <TextField {...params} label="Откуда" margin="normal"/>}
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
});

const mapDispatchToProps = {fetchAddressListRequest, makeNewOrder};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
