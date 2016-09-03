import React, { Component } from 'react';

export default class SearchBar extends Component {


    constructor(props) {
        super(props);

        this.state = { searchTerm : ''};
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({searchTerm: event.target.value});

    }

    api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=

    onFormSubmit(event) {
        // This stop the form from submitting using the method preventDefault()
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <input
                placeholder = "Get a five-day forecast in your favorite cities"
                className = "form-control"
                value = {this.state.searchTerm}
                onChange = {this.onInputChange}
                />
                <span className = "input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}