import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import {getCardRequest, setCardRequest, getIsLoading, getIsExist, getData} from '../../../modules/card';
import {getToken} from "../../../modules/auth";
import {connect} from 'react-redux';
import './profileForm.scss';

const ProfileForm = ({isExist, token, isLoading, getCardRequest, setCardRequest}) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

    useEffect(() => {
        if (!isExist) {
            getCardRequest({token});
        }
    }, []);

    const onFormSubmitHandler = event => {
        event.preventDefault();

        if (!!cardNumber && !!expiryDate && !!cardName && !!cvc && !!token) {
            return setCardRequest({
                cardNumber, expiryDate, cardName, cvc, token
            });
        }

        return false;
    };

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

    return (
        <form className="form_profile form_wrapper"
              onSubmit={onFormSubmitHandler}>
            <Grid container align="center">
                <Grid item xs={12} className="form_profile_header ">
                    <Typography variant="h4" component="h1">
                        Профиль
                    </Typography>
                    <Typography component="p">
                        Способ оплаты
                    </Typography>
                </Grid>

                <Grid container className="cards_row" justify="center" spacing={4}>
                    <Grid item sm={6}>
                        <Card className="card">
                            <Grid container direction="column" justify="space-around" className="card_col">
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="cardNumber">
                                        Номер карты
                                    </InputLabel>
                                    <Input id="cardNumber" data-testid="cardNumber-input"
                                           onChange={handleCardNumberChange} required/>
                                </FormControl>
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="expiryDate">
                                        Срок действия
                                    </InputLabel>
                                    <Input id="expiryDate" data-testid="expiryDate-input"
                                           onChange={handleExpiryDateChange} required/>
                                </FormControl>
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item sm={6}>
                        <Card className="card">
                            <Grid container direction="column" justify="space-around" className="card_col">
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="cardNumber">
                                        Имя владельца
                                    </InputLabel>
                                    <Input id="cardName" data-testid="cardName-input"
                                           onChange={handleCardNameChange} required/>
                                </FormControl>
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="expiryDate">
                                        CVC
                                    </InputLabel>
                                    <Input id="cvc" data-testid="cvc-input"
                                           onChange={handleCvcChange} required/>
                                </FormControl>
                            </Grid>
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

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isExist: getIsExist(state),
    card: getData(state),
    token: getToken(state)
});

const mapDispatchToProps = {setCardRequest, getCardRequest};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
