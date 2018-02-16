import React, { Component } from 'react';
import FlightItem from './FlightItem';
import PropTypes from 'prop-types';

class Flights extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            flightsPerPage: 5
        };
        this.handlePageClick = this.handlePageClick.bind(this);

    }

    handlePageClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
        
    }

    render() {

        const indexOfLastFlight = this.state.currentPage * this.state.flightsPerPage;
        const indexOfFirstFlight = indexOfLastFlight - this.state.flightsPerPage;
        const flightsToDisplay = this.props.flights.slice(indexOfFirstFlight, indexOfLastFlight);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.flights.length / this.state.flightsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="Flights container">
                {flightsToDisplay.map((flight, i) => <FlightItem key={i} flight={flight} />)}
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {pageNumbers.map((pageNumber, i) =>
                            <li key={pageNumber} className="page-item"><a className="page-link" href="#" id={pageNumber} key={pageNumber} onClick={this.handlePageClick}> {pageNumber} </a></li>
                        )
                        }
                    </ul>
                </nav>

            </div>
        );
    }
}

Flights.propTypes = {
    flights: PropTypes.object
  };

export default Flights;
