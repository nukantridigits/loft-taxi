import MapPage from "../pages/map";
import ProfilePage from "../pages/profile";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

const pageList = {
    map: {
        id: 'map',
        path: '/map',
        title: 'Карта',
        component: MapPage,
    },
    profile: {
        id: 'profile',
        path: '/profile',
        title: 'Профиль',
        component: ProfilePage,
    },
    login: {
        id: 'login',
        path: '/',
        title: 'Выйти',
        component: LoginPage,
    },
    signup: {
        id: 'signup',
        path: '/signup',
        component: SignupPage,
        isNotInMenu: true,
    },
};

export default pageList;
