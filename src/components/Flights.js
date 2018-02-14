import React, { Component } from 'react';
import FlightItem from './FlightItem';


class Flights extends Component {

    render() {
        let flightItems;
        if (this.props.flights) {
            flightItems = this.props.flights.map(flight => {
                console.log(flight);
            });
        }
        return (
            <div className="Flights">
                {this.props.flights.map((flight, i) => <FlightItem key={i} flight={flight} />)}
            </div>
        );
    }
}

export default Flights;
