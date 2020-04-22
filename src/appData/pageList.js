import MapPage from "../pages/map";
import ProfilePage from "../pages/profile";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import NotFoundPage from "../pages/404";

const pageList = {
    map: {
        id: 'map',
        path: '/map',
        title: 'Карта',
        component: MapPage,
        private: true
    },
    profile: {
        id: 'profile',
        path: '/profile',
        title: 'Профиль',
        component: ProfilePage,
        private: true
    },
    login: {
        id: 'login',
        path: '/',
        title: 'Выйти',
        component: LoginPage,
        exact: true,
    },
    signup: {
        id: 'signup',
        path: '/signup',
        component: SignupPage,
        isNotInMenu: true,
    },
    notFound: {
        id: '404',
        path : '*',
        component: NotFoundPage,
        isNotInMenu: true,
    }
};

export default pageList;
