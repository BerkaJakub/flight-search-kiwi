import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Flights from './components/Flights';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      flights: []
    };
  }

  onChangeForm(data){
    fetch(`https://api.skypicker.com/flights?flyFrom=`+data.from+`&to=`+data.to+`&dateFrom=`+data.date+`&dateTo=`+data.date+`&partner=picky&partner_market=us`)
    .then( function(response) {
      return response;
    })
    .then( function(data) {
      console.log(data);
    })
    .catch( function() {
      this.setState({
        infoStatus: 'error'
      });
    })

  }


  render() {
    

    let flights = [
      {
      key: '1',
      from: "Praue",
      to: "Barcelona",
      date: "12/12/2018",
      time: "12:30",
      price: "58 EUR" },
      {
      key: '2',
      from: "Prague",
      to: "Brno",
      date: "12/12/2018",
      time: "12:30",
      price: "48 EUR" }
    
    ];

    return (
      <div className="App">
        <h1>Flight Search</h1>
        <SearchForm changeForm={this.onChangeForm.bind(this)}/>
        <Flights flights={this.state.flights}/>
      </div>
    );
  }
}

export default App;
