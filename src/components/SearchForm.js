import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                from: '',
                to: '',
                date: ''
            
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {

        //console.log('A form was submitted: ' + this.state.from + ' ' + this.state.to + ' ' + this.correctDateFormat(this.state.date));
        event.preventDefault();
        this.props.changeForm(this.state.from, this.state.to, this.state.date);
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        From:
                        <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        To:
                        <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchForm;
