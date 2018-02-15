import React, { Component } from 'react';

class LocationSuggestion extends Component {
  
  render() {
    return (
        <datalist id={this.props.id}>
            {this.props.locations.map((location, i) => <option key={i} value={location.name} />)}
        </datalist>
    );
  }
}

export default LocationSuggestion;
