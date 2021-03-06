import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItems.component";
import StripeButton from '../../components/StripeButton/StripeButton.component';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>

      <div className={"test-warning"}>
        *Please use test credit card* <br />
        Number: 4242 4242 4242 4242 <br />
        Expires: 01/20 <br />
        CVV: 123
        </div>
      <StripeButton price={total}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
