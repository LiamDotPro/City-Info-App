import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, fetchWeatherAll } from '../actions/index';


class SearchBar extends Component {


  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchWeatherAll();
  }


  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }


  onFormSubmit(event) {
        // This stop the form from submitting using the method preventDefault()
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    const place = 'Get a five-day forecast in your favorite cities  |  Double click to delete a city';
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder={place}
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchWeatherAll }, dispatch);
}

// Null is used because Redux expects the first parameter to be the state
export default connect(null, mapDispatchToProps)(SearchBar);
