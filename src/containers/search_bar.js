import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
  }

//IMPORTANT - Read http://www.react.express/fat_arrow_functions
//The binding for the keyword this is the same outside and inside the fat arrow function.
//This is different than functions declared with function, which can bind this to another object upon invocation.
//Maintaining the this binding is very convenient for operations like mapping: this.items.map(x => this.doSomethingWith(x)).
/*  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }*/

  onFormSubmit = (event) => {
    event.preventDefault(); //prevent browser from submitting the form
    
    this.props.fetchWeather(this.state.term);

    this.setState({ term: ''});
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search for a city to get a five day forecast"
          value={this.state.term}
          onChange={event => {this.setState({ term: event.target.value })}}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather },dispatch);
}

//null is because there is no state binding, only action creator binding
export default connect(null, mapDispatchToProps)(SearchBar);
