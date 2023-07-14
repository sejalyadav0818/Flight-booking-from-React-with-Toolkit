import React from "react";
import InputField from "../Controls/InputField";
import "../../assets/style.css";
const TIcketPurchase = (props) => {
  return (
    <div>

      <InputField
        label="Full Name"
        name="fullName"
        value={props.ticketPurchase.fullName}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            fullName: e.target.value,
          }));
        }}
        error={props.errors.fullName}
      />
      <InputField
        label="Credit Card Number"
        name="cardnumber"
        value={props.ticketPurchase.cardnumber}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            cardnumber: e.target.value,
          }));
        }}
        error={props.errors.cardnumber}
      />
      <InputField
        label="Date and time of Payment"
        type="datetime-local"
        name="paymentDateTime"
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            paymentDateTime: e.target.value,
          }));
        }}
        value={props.ticketPurchase.paymentDateTime}
        error={props.errors.paymentDateTime}
      />
      <InputField
        label="Phone"
        name="Phone"
        value={props.ticketPurchase.Phone}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            Phone: e.target.value,
          }));
        }}
        error={props.errors.Phone}
      />
      <InputField
        label="Expiration (MM/YYYY)"
        type="month"
        name="month"
        value={props.ticketPurchase.month}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            month: e.target.value,
          }));
        }}
        error={props.errors.month}
      />
      <InputField
        label="CVV"
        type="number"
        name="cvv"
        value={props.ticketPurchase.cvv}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            cvv: e.target.value,
          }));
        }}
        error={props.errors.cvv}
      />
    </div>
  );
};

export default TIcketPurchase;
