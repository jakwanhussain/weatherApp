// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_button1 from '../button/style_button1';
import style_button2 from '../button2/button2_style';
import style_button3 from '../button3/button3_style';
import style_resetButton from '../resetButton/resetButton_style';
//import sidebar_style from '../sidebar/sidebar_style';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import Button2 from '../button2';
import Button3 from '../button3';
import ResetButton from '../resetButton';
//import Sidebar from '../sidebar';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		this.state.greet = "";
		// // button display state
		
		this.state.displayButton1 = true;
		this.state.displayButton2 = true;
		this.state.displayButton3 = false;
		this.state.displayHow = false;
                //this.fetchWeatherData();
                //this.state.displaySidebar = true;
		console.log(this.state);
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/dbd7f2b02a0f874b/conditions/forecast10day/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ 
			displayButton1: false
			 });
	}

	fetchLocalJsonData = () => {
			
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		// var url = "test.json";
		$.ajax({
			url: "../../assets/data/test.json",
			dataType: "json",
			success : this.parseLocalJson,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ 
			displayButton1: false,
			displayButton2: false,
			displayButton3: true,
                        //displaySidebar: true,
			locate: "",
			temp: "",
			cond: ""
		});
	
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		const phraseStyles = this.state.greet1 ? `${style.phrase1} ${style.filled}` : style.phrase1;
		
		// display all weather data

		// -------------
		// A note on generated class names
		// -------------
		// Classes are automatically generated and when you view them in the inspector they look a mess
		// (long alpha-numeric strings). If you want to add a readable class to an element, take a look
		// at the <div> for button2:

		// <div class={`${style_button2.button2_container} some-class`} >
		// NB: Those are backticks, not single quotes!!

		// This syntax allows us to include the styles in the .less file, and also add a class name
		// of our choosing so it's easier to see what's going on in a browser inspector. Great!

		// Big up to Filip for flagging this up - it's a top tip!
                
                // <div class={ style.forecast10day }>{ this.state.f10day }</div>
		return (
                        
			<div class={ style.container }>
				<div class={ style.header }>
					<div class={ style.city }>{ this.state.locate }</div>
					<div class={ style.conditions }>{ this.state.cond }</div>
                                        <div class={ style.city }>{ this.state.f10d }</div>
					<span class={ tempStyles }>{ this.state.temp }</span>
					<h1 class={ style.phrase1 }>{ this.state.greet1 }</h1>
					<h1 class={ style.phrase1 }>{ this.state.greet2 }</h1>
					<h1 class={ style.phrase1 }>{ this.state.inst }</h1>
					{ this.state.displayHow ? <h2 class={ style.phrase2 }>{ this.state.howDid }</h2> : null }
					
				</div>
                                
				<div class={ style_button1.container }> 
					{ this.state.displayButton1 ? <Button class={ style_button1.button } clickFunction={ this.fetchWeatherData }/ > : null }
				</div>

				{ this.state.displayButton2 ?
					<div class={`${style_button2.button2_container} some-class`}> 
						 <Button2  clickFunction={ this.fetchLocalJsonData }/ > 
					</div>
				: null }

				{ this.state.displayButton3 ?
					<div class={style_button3.button3_container}> 
						 <Button3 class={ style_button3.button } clickFunction={ this.returnPhrase }/ > 
					</div>
				: null }

				{ this.state.displayReset ?
					<div class={style_resetButton.reset_container}> 
						 <ResetButton class={ style_resetButton.button } clickFunction={ this.reset }/ > 
					</div>
				: null }
                                
                     

			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
                var forecast10day = parsed_json['forecast']['txt_forecast']['forecastday'][0]['icon'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
                        f10d : forecast10day,
		});      
	}

	parseLocalJson = (parsed_json) => {
		var greeting = parsed_json['phrase'];
		var greeting2 = parsed_json['another-phrase'];
		var instruction = parsed_json['inst'];
		var how = parsed_json['how'];

		// set states for fields so they could be rendered later on
		this.setState({
			greet1: greeting, 
			greet2: greeting2,
			inst: instruction,
			howDid: how
		});
		$("h1").css("background", "black");      
	}

	returnPhrase = () => {
		this.setState({
			greet1: "", 
			greet2: "",
			inst: "",
			displayButton2: false,
			displayButton3: false,
			displayReset: true,
			displayHow: true
		});      
		
		
	}

	reset = () => {
		this.setState({
			displayButton1: true,
			displayButton2: true,
			displayReset: false,
			displayHow: false
		}); 
	}


}