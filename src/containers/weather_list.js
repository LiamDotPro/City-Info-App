import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SparkLineChart from '../components/line_chart';
import SparkBarChart from '../components/bar_chart';
import GMap from '../components/map';
import {deleteCityInfo} from '../actions/index';


class WeatherList extends Component {
  
  constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  
  
  handleDoubleClick(...args) {
    this.props.deleteCityInfo(args[0]);
  }
  
  
  convertTemp(weather) {
    return Math.floor(weather.main.temp * (9 / 5) - 459.67);
  }
  
  
  renderWeather(cityData, idx) {
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    const temps = cityData.list.map(this.convertTemp); // convert this from Kelvin to Farenheit
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    
    return (
      <tr onDoubleClick={this.handleDoubleClick.bind(undefined, idx)} key={cityData.city.name}>
        <GMap lon={lon - 0.0035} lat={lat}/>
        <td className="spark">
          <SparkLineChart data={temps} units="F°" color="green"/>
        </td>
        
        <td className="spark">
          <SparkLineChart data={pressures} color="orange" units="hPA"/>
        </td>
        
        <td className="spark">
          <SparkBarChart data={humidities} color="purple" units="%"/>
        </td>
      </tr>
    );
  }
  
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr style={{textAlign: 'center'}}>
          <th>City</th>
          <th className="tempAvg">Temperature (K)</th>
          <th className="hidden-xs-1">Pressue (hPA)</th>
          <th className="hidden-xs-1">Humdity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteCityInfo}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);

