import React, { Component } from 'react';
import LocationsSuggestion from './LocationsSuggestion';
class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            date: '',
            toLocations: [],
            fromLocations: []

        };

        this.handleFromInputChange = this.handleFromInputChange.bind(this);
        this.handleToInputChange = this.handleToInputChange.bind(this);
        this.handleDateInputChange = this.handleDateInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFromInputChange(event) {
        this.setState({ from: event.target.value });
        fetch(`https://api.skypicker.com/locations/?term=` + event.target.value + `&locale=en-US&v=2&location_types=city`)
            .then(response => response.json())
            .then(
                res => this.setState({ fromLocations: res.locations })
            )
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
            })
    }

    handleToInputChange(event) {
        this.setState({ to: event.target.value });
        fetch(`https://api.skypicker.com/locations/?term=` + event.target.value + `&v=2&locale=en-US&location_types=city`)
            .then(response => response.json())
            .then(
                res => this.setState({ toLocations: res.locations })
            )
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
            })
    }

    handleDateInputChange(event) {
        this.setState({ date: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.changeForm(this.state.from, this.state.to, this.state.date);
    }

    render() {
        return (
            <div className="SearchForm container mb-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>From:</label>
                            <input className="form-control" type="text" name="from" value={this.state.from} onChange={this.handleFromInputChange} list="fromLocations" placeholder="City"/>
                            <LocationsSuggestion id="fromLocations" locations={this.state.fromLocations} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>To:</label>
                            <input className="form-control" type="text" name="to" value={this.state.to} onChange={this.handleToInputChange} list="toLocations" placeholder="City"/>
                            <LocationsSuggestion id="toLocations" locations={this.state.toLocations} />

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Date:</label>
                            <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleDateInputChange} placeholder=""/>
                        </div>
                    </div>
                    <div className="form-row">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;
