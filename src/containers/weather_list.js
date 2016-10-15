import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLineChart from '../components/line_chart';
import SparkBarChart from '../components/bar_chart';
import GMap from '../components/map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        const temps = cityData.list.map(weather => weather.main.temp ) //convert this from Kelvin to Farenheit
        const pressures = cityData.list.map(weather => weather.main.pressure )
        const humidities = cityData.list.map(weather => weather.main.humidity )


        return (
            <tr key={cityData.city.name}>
                <td className="GMap"><GMap lon={lon - .0035} lat={lat}/></td>
                <td className="spark">
                    <SparkLineChart data={temps} units="K" color="green"/>
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
                <tr style={{textAlign: "center"}}>
                    <th>City</th>

                    <th>Temperature (K)</th>
                    <th>Pressue (hPA)</th>
                    <th>Humdity (%)</th>

                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }


}

function mapStateToProps(state){
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);

