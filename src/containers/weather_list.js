import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { Header, Table } from 'semantic-ui-react';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return(
      <Table.Row key={name}>
        <Table.Cell>
          <GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} />
        </Table.Cell>
        <Table.Cell><Chart data={temps} color="red" marker="F" /></Table.Cell>
        <Table.Cell><Chart data={pressures} color="blue" marker="hPa" /></Table.Cell>
        <Table.Cell><Chart data={humidity} color="green" marker="%" /></Table.Cell>
      </Table.Row>
    );
  }

  render(){
    return(
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Pressure</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.weather.map(this.renderWeather)}
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state){
  return{
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
