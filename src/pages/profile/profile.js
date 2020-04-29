import React from 'react';
import pageList from '../../appData/pageList';
import MainLayout from '../../layouts/main';
import ProfileForm from '../../components/Forms/profileForm';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './profile.scss';

const ProfilePage = () => {
    const pageId = pageList.profile.id;

    return (
        <MainLayout className={pageId} pageId={pageId}>
            <Grid container
                  justify="center"
                  alignItems="center"
            >
                <Grid item sm={10}>
                    <Paper className="paper_container">
                        <ProfileForm/>
                    </Paper>
                </Grid>
            </Grid>
        </MainLayout>
    );
};

export default ProfilePage;
