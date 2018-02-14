import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Stateless
const FlightItem = (props) => {
    return (
      <div className="FlightItem">
        <ul>
            <li>From: {props.flight.from}</li>
            <li>To: {props.flight.to}</li>
            <li>Date: {props.flight.date}</li>
            <li>Time: {props.flight.time}</li>
            <li>Price: {props.flight.price} </li>
        </ul>
      </div>
    );
}

FlightItem.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string
};

export default FlightItem;
