// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
import style_button2 from '../button2/button2_style';
//import style_iphone from  '../sidebar/sidebar_style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import Button2 from '../button2';
// import the sidebar componet
//import sidebar from '../sidebar';



export default class Iphone extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
		this.state={
			// location state
			location: 'London',
    }
  }
	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = `http://api.openweathermap.org/data/2.5/forecast?appid=5a0ef66c2f23f2efb778937d7643e128&q=${this.state.location}`;
		// var url = `http://api.wunderground.com/api/dbd7f2b02a0f874b/conditions/forecast10day/hourly/q/${this.state.country}/${this.state.city}.json`;
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, set search term to null
		this.setState({ location: '' });
    //this.setState({ displayButton: false});
	}
	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
        
		// display all weather data
		return (
			<div class={ style.container }>
        <input class= {style.input} type="text" placeholder="Enter Location" value={ this.state.location } onChange={(e) => this.setState({ location: e.target.value })}/>
				<div class= { style_iphone.container }> 
					<Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData } />	
				</div>  
				<div class={ style.header }> /
					<div class={ style.city }>{ this.state.locate }</div>  
					<div class={ style.conditions }>{ this.state.cond }</div>   
					<span class={ tempStyles }>{ this.state.temp }</span>                      
				</div>
				<div class={`${style_button2.button2_container} some-class`}> 
					 <Button2 /> 
				</div>
				<div class={ style.details }></div>
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json.city.name+', '+parsed_json.city.country;
		var temp_c = Math.round(parsed_json.list[0].main.temp-273.15);
		var conditions = parsed_json.list[0].weather[0].main;	
    //var timeT = parsed_json['FCTTIME']['pretty'];
		// set states for fields so they could be rendered later on
		 this.setState({
		 	locate: location,
			temp: temp_c+ "°C",
			cond : conditions,
		// 	//time : timeT
		 });      
	}
}