const getState = () => {
    if (localStorage.length) {
        let state = localStorage.getItem('state');

        if (state) {
            return JSON.parse(state);
        }

        return {};
    }
};

const setState = (store) => {
    return localStorage.setItem('state', JSON.stringify(store));
};

export default {getState, setState};
