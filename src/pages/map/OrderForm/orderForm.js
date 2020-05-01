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

const OrderForm = ({fetchAddressListRequest, makeNewOrder, addressList, isBooked}) => {
    const [fromList, setFromList] = useState(addressList);
    const [toList, setToList] = useState(addressList);

    useEffect(() => {
        if (!addressList.length) {
            fetchAddressListRequest();
        }
    }, []);

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
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

                                        }}
                                        renderInput={(params) => <TextField {...params} label="Откуда"
                                                                            margin="normal"/>}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        id="routeTo"
                                        options={addressList}
                                        onChange={(event, newValue) => {

                                        }}
                                        renderInput={(params) => <TextField {...params} label="Куда" margin="normal"/>}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="btn"
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
    addressList: getAddressList(state),
    isBooked: getIsBooked(state),
});

const mapDispatchToProps = {fetchAddressListRequest, makeNewOrder};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
