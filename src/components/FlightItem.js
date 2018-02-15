import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Stateless
class FlightItem extends Component {
  
  render() {
    var dateDeparture = new Date(this.props.flight.dTime*1000);
    var dateArrival = new Date(this.props.flight.aTime*1000);
    return (
      <div className="FlightItem">
        <ul>
          <li>From: {this.props.flight.cityFrom} ({this.props.flight.flyFrom})</li>
          <li>To: {this.props.flight.cityTo} ({this.props.flight.flyTo})</li>
          <li>Date: {dateDeparture.getDate()}.{dateDeparture.getMonth()+1}.{dateDeparture.getFullYear()}</li>
          <li>Time: {dateDeparture.getHours()}:{dateDeparture.getMinutes()} - {dateArrival.getHours()}:{dateArrival.getMinutes()}</li>
          <li>Price: {this.props.flight.conversion["EUR"]} EUR</li>
        </ul>
      </div>
    );
  }
}

FlightItem.propTypes = {

};

export default FlightItem;
