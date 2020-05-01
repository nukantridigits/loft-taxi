import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAddressListRequest} from '../../../modules/routes';
import {getAddressList} from "../../../modules/routes/selectors";

const OrderForm = ({fetchAddressListRequest, addressList}) => {
    useEffect(() => {
        if (!addressList.length) {
            fetchAddressListRequest();
        }
    }, []);

    return (
        <div className="order_form_wrapper overlay">
            <h1>OrderForm</h1>
        </div>
    );
};

const mapStateToProps = state => ({
    addressList: getAddressList(state),
});

const mapDispatchToProps = {fetchAddressListRequest};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
