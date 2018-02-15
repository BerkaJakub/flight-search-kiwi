import React, { Component } from 'react';
import FlightItem from './FlightItem';


class Flights extends Component {

    render() {
        
        return (
            <div className="Flights">
                {this.props.flights.map((flight, i) => <FlightItem key={i} flight={flight} />)}
            </div>
        );
    }
}

export default Flights;
