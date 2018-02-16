import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Stateless
class FlightItem extends Component {

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  render() {
    var dateDeparture = new Date(this.props.flight.dTime * 1000);
    var dateArrival = new Date(this.props.flight.aTime * 1000);
    return (
      <div className="FlightItem card mb-1">
        <ul className="list-group">
          <li className="list-group-item">{this.props.flight.cityFrom} ({this.props.flight.flyFrom}) &rarr; {this.props.flight.cityTo} ({this.props.flight.flyTo})</li>
          <li className="list-group-item">
          {dateDeparture.getDate()}.{dateDeparture.getMonth() + 1}.{dateDeparture.getFullYear()}, {this.addZero(dateDeparture.getHours())}:
          {this.addZero(dateDeparture.getMinutes())} - {this.addZero(dateArrival.getHours())}:{this.addZero(dateArrival.getMinutes())}</li>
          <li className="list-group-item font-weight-bold">{this.props.flight.conversion["EUR"]} EUR</li>
        </ul>
      </div>
    );
  }
}

FlightItem.propTypes = {
  flight: PropTypes.object
};

export default FlightItem;
