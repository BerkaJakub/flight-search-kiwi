import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Flights from './components/Flights';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    };
  }

  onChangeForm(from, to, date) {
    var parts = date.split('-');
    var correctDate = parts[2] + "/" + parts[1] + "/" + parts[0];
    console.log(from, to, correctDate);
    fetch(`https://api.skypicker.com/flights?flyFrom=` + from + `&to=` + to + `&dateFrom=` + correctDate + `&dateTo=` + correctDate + `&partner=picky&partner_market=us`)
      .then(response => response.json())
      .then(res => this.setState({ flights: res.data }))
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ', error.message);
      })
  }


  render() {

    return (
      <div className="App container">
        <h1>Flight Search</h1>
        <SearchForm changeForm={this.onChangeForm.bind(this)} />
        <Flights flights={this.state.flights} />
      </div>
    );
  }
}

export default App;
