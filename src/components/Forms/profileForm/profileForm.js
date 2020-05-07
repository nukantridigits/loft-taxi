import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
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
import ClearIcon from "../clearIcon";
import HelpIcon from './helpIcon';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import parseISO from 'date-fns/parseISO';
import TooltipDefault from "./tooltipDefault";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './profileForm.scss';

const ProfileForm = ({isExist, card, token, isLoading, fetchCardRequest, setCardRequest}) => {
    const rootClass = "form_profile";
    const [showPassword, setShowPassword] = useState(true);

    useEffect(() => {
        if (!isExist) {
            fetchCardRequest({token});
        }
    }, []);

    const initialValues = {
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate || new Date(),
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
        return setCardRequest({
            ...values, token
        });
    };

    const handleClickShowPassword = () => {
        return setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const formatDate = (date) => {
        if (typeof date === "string") {
            date = parseISO(date);
        }

        let month = parseInt(date.getMonth()) + 1;
        month = month > 10 ? month : '0' + month;

        let year = String(date.getYear()).slice(-2);

        return month + '/' + year;
    };

    const validate = (values) => {
        const errors = {};
        const cardNumber = values.cardNumber;
        const cvc = values.cvc;

        if (!cardNumber) {
            errors.cardNumber = "Заполните обязательное поле «Номер карты»";
        } else if (cardNumber.length !== 19) {
            errors.cardNumber = "«Номер карты» должен состоять из 16 цифр";
        }

        if (!values.cardName) {
            errors.cardName = "Заполните обязательное поле «Имя владельца»";
        }

        if (!values.cvc) {
            errors.cvc = "Заполните обязательное поле «CVC»";
        } else if (cvc.length !== 3) {
            errors.cvc = "«CVC» должен состоять из 3 цифр";
        }

        return errors;
    };

    const useStyles = makeStyles(() => ({
        input: {
            fontSize: "24px",
            fontWeight: "300",
            borderBottom: "1px solid rgba(234, 234, 234, .4)",
            '&:hover': {
                '&:not(.Mui-disabled)': {
                    '&:before': {
                        borderBottom: "1px solid rgba(234, 234, 234, 1)",
                    },
                }
            },
            '&:before': {
                borderBottomColor: "rgba(234, 234, 234, .4)",
            },
            '&:after': {
                borderBottomColor: "rgba(234, 234, 234, .4)",
            }
        }
    }));

    const classes = useStyles();

    const DatePickerStyledInputWrapper = ({value, onClick}) => {
        return (
            <>
                <InputLabel style={{fontSize: "12px"}} className={`${rootClass}_label`}>
                    Срок дейстия:
                </InputLabel>
                <Input className={classes.input}
                       type="text"
                       readOnly
                       value={value}
                       onClick={onClick}
                />
            </>
        );
    };

    const PaymentForm = () => (
        <Form onSubmit={onSubmit}
              initialValues={initialValues}
              validate={validate}
              mutators={{
                  clearCardNumber: (args, state, utils) => {
                      utils.changeValue(state, 'cardNumber', () => undefined)
                  },
                  clearCardName: (args, state, utils) => {
                      utils.changeValue(state, 'cardName', () => undefined)
                  },
              }}
        >
            {({form, handleSubmit, submitting, pristine}) => (
                <form className={`${rootClass} form_wrapper`} onSubmit={handleSubmit} data-testid="profileForm" >
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
                            <Card className="card bg_icon">
                                <Grid container direction="column" justify="space-around" className="card_col">
                                    {!isLoading &&
                                    <Field
                                        name="cardNumber"
                                        parse={formatCardNumber}
                                        render={({input, meta}) => (
                                            <FormControl fullWidth={true} className="form_control">
                                                <InputLabel className={`${rootClass}_label`}
                                                            htmlFor="cardNumber">
                                                    Номер карты:
                                                </InputLabel>
                                                <Input className={`${rootClass}_input`}
                                                       id="cardNumber" {...input}
                                                       inputProps={{minLength: "19", maxLength: "19"}}
                                                       endAdornment={input.value.length >= 1 &&
                                                       <InputAdornment position="end">
                                                           <ClearIcon
                                                               onClick={form.mutators.clearCardNumber}/>
                                                       </InputAdornment>
                                                       } required/>
                                                {meta.touched && meta.error &&
                                                <span
                                                    className="validation_error">{meta.error}</span>}
                                            </FormControl>
                                        )}
                                    />}
                                    {!isLoading &&
                                    <Field
                                        name="expiryDate"
                                        render={({input}) => (
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DatePicker
                                                    format="MM/yy"
                                                    views={["month", "year"]} {...input}
                                                    TextFieldComponent={
                                                        ({onClick}) =>
                                                            <DatePickerStyledInputWrapper
                                                                value={formatDate(input.value)}
                                                                onClick={onClick}
                                                            />
                                                    }
                                                />
                                            </MuiPickersUtilsProvider>
                                        )}
                                    />}
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <Card className="card">
                                <Grid container direction="column" justify="space-around" className="card_col">
                                    {!isLoading &&
                                    <Field
                                        name="cardName"
                                        parse={formatCardName}
                                        render={({input, meta}) => (
                                            <FormControl fullWidth={true} className="form_control">
                                                <InputLabel className={`${rootClass}_label`}
                                                            htmlFor="cardName">
                                                    Имя владельца:
                                                </InputLabel>
                                                <Input className={`${rootClass}_input`}
                                                       id="cardName" {...input}
                                                       inputProps={{maxLength: "20"}}
                                                       endAdornment={input.value.length >= 1 &&
                                                       <InputAdornment position="end">
                                                           <ClearIcon
                                                               onClick={form.mutators.clearCardName}/>
                                                       </InputAdornment>
                                                       } required/>
                                                {meta.touched && meta.error &&
                                                <span
                                                    className="validation_error">{meta.error}</span>}
                                            </FormControl>
                                        )}
                                    />}
                                    {!isLoading &&
                                    <Field
                                        name="cvc"
                                        parse={formatCvc}
                                        render={({input, meta}) => (
                                            <FormControl fullWidth={true}
                                                         className="form_control cvc_wrapper">
                                                <InputLabel className={`${rootClass}_label`}
                                                            htmlFor="cvc">
                                                    CVC:
                                                    <TooltipDefault
                                                        title={
                                                            <>
                                                                <span className="popperArrow"/>
                                                                <Typography component="p" style={{
                                                                    textAlign: "center",
                                                                    fontSize: "10px",
                                                                }}>
                                                                    3 последние цифры<br/> на
                                                                    оборотной
                                                                    стороне карты</Typography>
                                                            </>
                                                        }
                                                    >
                                                            <span style={{marginTop: "-3px"}}>
                                                              <HelpIcon/>
                                                            </span>
                                                    </TooltipDefault>
                                                </InputLabel>
                                                <Input className={`${rootClass}_input`} id="cvc"
                                                       inputProps={{minLength: "3"}} {...input}
                                                       type={showPassword ? 'password' : 'text'}
                                                       endAdornment={
                                                           <InputAdornment position="end">
                                                               <div style={{
                                                                   opacity: 0.5,
                                                                   cursor: "pointer"
                                                               }}
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                               >
                                                                   {showPassword ? <VisibilityOff/> :
                                                                       <Visibility/>}
                                                               </div>
                                                           </InputAdornment>}
                                                       required/>
                                                {meta.touched && meta.error &&
                                                <span
                                                    className="validation_error">{meta.error}</span>}
                                            </FormControl>
                                        )}
                                    />}
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} align="center" className="form_footer">
                        <Button className="btn"
                                disabled={isLoading}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary">
                            Сохранить
                        </Button>
                        <Button className="btn"
                                disabled={submitting || pristine}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="default"
                                onClick={form.reset}
                        >
                            Отменить
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

