import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                from: '',
                to: '',
                date: ''
            }

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
        this.props.onChangeForm(this.state.data)
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        From:
                        <input type="text" name="from" value={this.state.data.from} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        To:
                        <input type="text" name="to" value={this.state.data.to} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" value={this.state.data.date} onChange={this.handleInputChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchForm;
