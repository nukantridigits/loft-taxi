import React from 'react';
import {Link} from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pageList from "../../../appData/pageList";
import './emptyProfileModal.scss';

const EmptyProfileModal = ({profileIsLoading}) => {
    return (
        <div>
            {!profileIsLoading &&
            <Paper className="empty_profile_message overlay" elevation={2}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1">
                            Заполните платежные данные
                        </Typography>
                        <Typography component="p">
                            Чтобы заказать машину - введите данные платёжной карты на странице профиля.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className="btn"
                            component={Link}
                            variant="contained"
                            color="primary"
                            to={pageList.profile.path}
                        >
                            Перейти в профиль
                        </Button>
                    </Grid>
                </Grid>
            </Paper>}
        </div>
    );
};

export default EmptyProfileModal;
