import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import {fetchCardRequest, setCardRequest, getIsLoading, getIsExist, getData} from '../../../modules/card';
import {getToken} from "../../../modules/auth";
import {connect} from 'react-redux';
import {Form, Field} from 'react-final-form';
import formatString from "format-string-by-pattern";
import {IconButton} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import ClearIcon from "./clearIcon";
import './profileForm.scss';

const ProfileForm = ({isExist, card, token, isLoading, fetchCardRequest, setCardRequest}) => {
    // const [clearCardNameShow, setClearCardNameShow] = useState(false);

    useEffect(() => {
        if (!isExist) {
            fetchCardRequest({token});
        }
    }, []);

    const rootClass = "form_profile";

    const initialValues = {
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate,
        cardName: card.cardName,
        cvc: card.cvc
    };

    const masks = {
        cardNumber: "9999 9999 9999 9999",
        cvc: "999"
    };

    const formatCardNumber = value => {
        const onlyNumbers = value.replace(/[^\d]/g, '');
        return formatString(masks.cardNumber, onlyNumbers);
    };

    const formatCvc = value => {
        const onlyNumbers = value.replace(/[^\d]/g, '');
        return formatString(masks.cvc, onlyNumbers);
    };

    const formatCardName = value => {
        return value.replace(/[\d!@#$%^&*()_]/g, '');
    };

    const onSubmit = values => {
        return setCardRequest({...values});
    };

    const PaymentForm = () => (
        <Form onSubmit={onSubmit}
              initialValues={initialValues}
              mutators={{
                  clearCardNumber: (args, state, utils) => {
                      utils.changeValue(state, 'cardNumber', () => undefined)
                  },
                  clearCardName: (args, state, utils) => {
                      utils.changeValue(state, 'cardName', () => undefined)
                  },
              }}
        >
            {({form, handleSubmit}) => (
                <form className={`${rootClass} form_wrapper`} onSubmit={handleSubmit}>
                    <Grid container align="center">
                        <Grid item xs={12} className={`${rootClass}_header`}>
                            <Typography variant="h4" component="h1">
                                Профиль
                            </Typography>
                            <Typography component="p">
                                Способ оплаты
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className="cards_row" justify="center" spacing={4}>
                        <Grid item sm={6}>
                            <Card className="card">
                                <Grid container direction="column" justify="space-around" className="card_col">
                                    <Field name="cardNumber"
                                           parse={formatCardNumber}
                                           render={({input, meta}) => (
                                               <FormControl fullWidth={true} className="form_control">
                                                   <InputLabel className={`${rootClass}_label`} htmlFor="cardNumber">
                                                       Номер карты:
                                                   </InputLabel>
                                                   <Input className={`${rootClass}_input`} id="cardNumber" {...input}
                                                          endAdornment={input.value.length >= 1 &&
                                                          <InputAdornment position="end">
                                                              <ClearIcon onClick={form.mutators.clearCardNumber}/>
                                                          </InputAdornment>
                                                          } required/>
                                                   {meta.touched && meta.error && <span>{meta.error}</span>}
                                               </FormControl>
                                           )}
                                    />
                                    <Field name="expiryDate"
                                           render={({input, meta}) => (
                                               <FormControl fullWidth={true} className="form_control">
                                                   <InputLabel className={`${rootClass}_label`} htmlFor="expiryDate">
                                                       Срок действия:
                                                   </InputLabel>
                                                   <Input className={`${rootClass}_input`} id="expiryDate" {...input}
                                                          required/>
                                                   {meta.touched && meta.error && <span>{meta.error}</span>}
                                               </FormControl>
                                           )}
                                    />
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <Card className="card">
                                <Grid container direction="column" justify="space-around" className="card_col">
                                    <Field name="cardName"
                                           parse={formatCardName}
                                           render={({input, meta}) => (
                                               <FormControl fullWidth={true} className="form_control">
                                                   <InputLabel className={`${rootClass}_label`} htmlFor="cardName">
                                                       Имя владельца:
                                                   </InputLabel>
                                                   <Input className={`${rootClass}_input`} id="cardName" {...input}
                                                          inputProps={{maxLength: "20"}}
                                                          endAdornment={input.value.length >= 1 &&
                                                          <InputAdornment position="end">
                                                              <ClearIcon onClick={form.mutators.clearCardName}/>
                                                          </InputAdornment>
                                                          } required/>
                                                   {meta.touched && meta.error && <span>{meta.error}</span>}
                                               </FormControl>
                                           )}
                                    />
                                    <Field name="cvc"
                                           parse={formatCvc}
                                           render={({input, meta}) => (
                                               <FormControl fullWidth={true} className="form_control">
                                                   <InputLabel className={`${rootClass}_label`} htmlFor="cvc">
                                                       CVC:
                                                   </InputLabel>
                                                   <Input className={`${rootClass}_input`} id="cvc" {...input}
                                                          required/>
                                                   {meta.touched && meta.error && <span>{meta.error}</span>}
                                               </FormControl>
                                           )}
                                    />
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} align="center" className="form_footer">
                        <Button className="btn"
                                disabled={isLoading}
                                data-testid="form-submit-btn"
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary">
                            Сохранить
                        </Button>
                    </Grid>
                </form>
            )}
        </Form>
    );

    return (
        <PaymentForm/>
    );
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isExist: getIsExist(state),
    card: getData(state),
    token: getToken(state)
});

const mapDispatchToProps = {setCardRequest, fetchCardRequest};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
