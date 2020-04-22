export const getLocalStorageState = () => {
    if (localStorage.length) {
        let store = localStorage.getItem('store');

        if (store) {
            return JSON.parse(store);
        }
    }

    return {};
};

export const setLocalStorageState = (store) => {
    return localStorage.setItem('store', JSON.stringify(store));
};
