// import preact 
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_ipad from '../button/style_ipad';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Ipad extends Component {
//var Ipad = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		this.state={
			// temperature state
			temp : '',
			// button display state
			display: true
    }
  }

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = `http://api.wunderground.com/api/dbd7f2b02a0f874b/conditions/forecast10day/q/UK/${this.state.term}.json`;
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

		// display all weather data
		return (
			<div class={ style.container }>
				<div class={ style.header }>
					<input type="text" placeholder="search weather" onChange={(e) => this.setState({ term: e.target.value })}/>
					<div class={ style.city }>{ this.state.currentCity }</div>
					<div class={ style.country }>{ this.state.currentCountry }</div>
					<div class={ style.conditions }>{ this.state.cond }</div>
					<span class={ style.temperature }>{ this.state.temp }</span>
				</div>
				<div class={ style.details }></div>
				<div class={ style_ipad.container }>
					<Button class={ style_ipad.button } clickFunction={ this.fetchWeatherData }/ >
				</div>
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var city = parsed_json['current_observation']['display_location']['city'];
		var country = parsed_json['current_observation']['display_location']['country'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		// set the states for fields so they could be rendered later on
		this.setState({
			currentCity: city,
			currentCountry: country,
			temp: temp_c,
			cond : conditions
		});      
	}
}