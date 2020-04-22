import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link, Redirect} from 'react-router-dom';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';

import PageList from "../../../appData/pageList";
import {connect} from 'react-redux';

import './profileForm.scss';


const ProfileForm = ({isLoading = false,}) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

    /* ProfileForm.propTypes = {
         isRegForm: PropTypes.bool
     };*/

    const handleCardNumberChange = event => {
        return setCardNumber(event.target.value);
    };

    const handleExpiryDateChange = event => {
        return setExpiryDate(event.target.value);
    };

    const handleCardNameChange = event => {
        return setCardName(event.target.value);
    };

    const handleCvcChange = event => {
        return setCvc(event.target.value);
    };

    const onFormSubmitHandler = event => {
        event.preventDefault();
        /*if (!!cardNumber && !!expiryDate && !!cardName && !!cvc && !!token) {
            return cardSaveRequest({
                cardNumber, expiryDate, cardName, cvc, token
            });
        }     */
    };

    return (
        <form className="form_profile form_wrapper"
              onSubmit={onFormSubmitHandler}>
            <Grid container align="center" >
                <Grid item xs={12} className="form_profile_header ">
                    <Typography variant="h4" component="h1">
                        Профиль
                    </Typography>
                    <Typography component="p">
                        Способ оплаты
                    </Typography>
                </Grid>

                <Grid container className="cards_row">
                    <Grid item sm={6}>
                        <Card>
                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="cardNumber">
                                    Номер карты
                                </InputLabel>
                                <Input id="cardNumber" data-testid="cardNumber-input" value={cardNumber}
                                       onChange={handleCardNumberChange} required/>
                            </FormControl>

                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="expiryDate">
                                    Срок действия
                                </InputLabel>
                                <Input id="expiryDate" data-testid="expiryDate-input" value={expiryDate}
                                       onChange={handleExpiryDateChange} required/>
                            </FormControl>
                        </Card>
                    </Grid>

                    <Grid item sm={6}>
                        <Card>
                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="cardNumber">
                                    Имя владельца
                                </InputLabel>
                                <Input id="cardName" data-testid="cardName-input" value={cardName}
                                       onChange={handleCardNameChange} required/>
                            </FormControl>

                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="expiryDate">
                                    CVC
                                </InputLabel>
                                <Input id="cvc" data-testid="cvc-input" value={cvc}
                                       onChange={handleCvcChange} required/>
                            </FormControl>
                        </Card>
                    </Grid>
                </Grid>


                <Grid item xs={12} align="center" className="form_footer">
                    <Button disabled={isLoading} data-testid="form-submit-btn" size="large" type="submit"
                            variant="contained"
                            color="primary">
                        Сохранить
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

/*const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = {authRequest, regRequest};*/

export default ProfileForm;
