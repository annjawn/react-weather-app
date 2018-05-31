import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return(
      <tr key={name}>
        <td>
          <GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} />
        </td>
        <td><Chart data={temps} color="red" marker="F" /></td>
        <td><Chart data={pressures} color="blue" marker="hPa" /></td>
        <td><Chart data={humidity} color="green" marker="%" /></td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
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
  return{
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
