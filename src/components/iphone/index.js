// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
import style_button2 from '../button2/button2_style';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import Button2 from '../button2';



export default class Iphone extends Component {
  // a constructor with initial set states
	constructor(props) {
		super(props);
		this.state = {
    // location state
			location: ''
		};
	}
  // a call to fetch weather data via openweathermap
	fetchWeatherData = () => {
		// fetching api http://api.openweathermap.org/data/2.5/forecast/daily?appid=API_KEY=$q=LOCATION&mode=json&units=metric&cnt=7
		const url = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=5a0ef66c2f23f2efb778937d7643e128&q=${this.state.location}&mode=json&units=metric&cnt=7`;
		$.ajax({
			url,
			dataType: "jsonp",
			success: this.parseResponse,
			error: function(req, err) { console.log('API call failed ' + err); }
		});
        // once the data grabbed, set search term to null
		this.setState({ location: '' });
	}
      // the main render method for the iphone component
	render() {
	  // check if temperature data is fetched, if so add the sign styling to the page
	  const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
	  // url's for weather icons
	  const imgURL1 = `http://openweathermap.org/img/w/${this.state.icon1}.png`;
	  const imgURL2 = `http://openweathermap.org/img/w/${this.state.icon2}.png`;
	  const imgURL3 = `http://openweathermap.org/img/w/${this.state.icon3}.png`;
	  const imgURL4 = `http://openweathermap.org/img/w/${this.state.icon4}.png`;
	  const imgURL5 = `http://openweathermap.org/img/w/${this.state.icon5}.png`;
	  const imgURL6 = `http://openweathermap.org/img/w/${this.state.icon6}.png`;
	  const imgURL7 = `http://openweathermap.org/img/w/${this.state.icon7}.png`;
          const logo = '../assets/icons/Weather-App-Logo.png';
	  // display all weather data
	  return (
		
	  	<div class = { style.container }>
		<div>
		<input src={logo} type="image" width="75" height="75" style="display:inline-block"/>
		</div>
	      <input class = { style.input }
	      type = "text"
	      placeholder = "Enter Location"
	      value = { this.state.location }
	      onChange = { (e) => this.setState({ location: e.target.value }) } />
	      <div class = { style_iphone.container }>
					<Button class = { style_iphone.button } clickFunction = { this.fetchWeatherData }/>
	      </div> 
	      <div class = { style.header }>
	    {/*display main weather*/}
		      	<div class = { style.row }> 
		      		<div class = { style.locate }>
		      			<div class = { style.city }>{ this.state.locate }</div>
		      		</div>
							<div class = { style.boximg }> 
								{ this.state.icon1 ? <img class={ style.image } src = { imgURL1 }/> : ''}
								<div class = { style.conditionsmain }> 
									{ this.state.cond1 } 
								</div>  
							</div>
							<div class = { style.boxUp }>
								<div class = { tempStyles }> 
									{ this.state.temp1 } 
								</div> 
							</div> 
						</div>
				{/*display 7 days weather*/}
	      		<div class = { style.row }> 
	      			<div class = { style.box }>
	      				{ this.state.icon1 ? <img src = { imgURL1 }/> : '' }
								<div class = { style.conditions }>
									{ this.state.d1 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond1 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp1 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{ this.state.icon2 ? <img src = { imgURL2 }/> : ''}   
								<div class = { style.conditions }> 
									{ this.state.d2 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond2 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp2 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{ this.state.icon3 ? <img src = { imgURL3 }/> : ''}    
								<div class = { style.conditions }> 
									{ this.state.d3 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond3 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp3 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{	this.state.icon4 ? <img src = { imgURL4 }/> : ''}  
								<div class = { style.conditions }> 
									{ this.state.d4 } 
								</div> 
								<div class = { style.conditions } > 
									{ this.state.cond4 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp4 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{	this.state.icon5 ? <img src = { imgURL5 }/> : ''}  
								<div class = { style.conditions }> 
									{ this.state.d5 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond5 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp5 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{this.state.icon6 ? <img src = { imgURL6 }/> : ''}        
								<div class = { style.conditions }> 
									{ this.state.d6 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond6 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp6 } 
								</div> 
							</div> 
							<div class = { style.box }> 
								{this.state.icon7 ? <img src = { imgURL7 }/> : ''}     
								<div class = { style.conditions }> 
									{ this.state.d7 } 
								</div> 
								<div class = { style.conditions }> 
									{ this.state.cond7 } 
								</div> 
								<div class = { tempStyles }> 
									{ this.state.temp7 } 
								</div> 
							</div> 
						</div> 
					</div> 
					<div class = { `${style_button2.button2_container} some-class` }> 
					<Button2 />
	      </div> 
	      <div class = { style.details }> 
	    </div> 
	  </div>
	);
	}

	  parseResponse = (parsed_json) => {
	      const location = parsed_json.city.name + ', ' + parsed_json.city.country;
	      // day One weather
	      const day1 = "Monday";
	      const temp_1 = Math.round(parsed_json.list[0].temp.max);
	      const conditions_1 = parsed_json.list[0].weather[0].main;
	      const icon_1 = parsed_json.list[0].weather[0].icon;
	      // day two weather
	      const day2 = "Tuesday";
	      const temp_2 = Math.round(parsed_json.list[1].temp.max);
	      const conditions_2 = parsed_json.list[1].weather[0].main;
	      const icon_2 = parsed_json.list[1].weather[0].icon;
	      // day three weather
	      const day3 = "Wednesday";
	      const temp_3 = Math.round(parsed_json.list[2].temp.max);
	      const conditions_3 = parsed_json.list[2].weather[0].main;
	      const icon_3 = parsed_json.list[2].weather[0].icon;
	      // day four weather
	      const day4 = "Thursday";
	      const temp_4 = Math.round(parsed_json.list[3].temp.max);
	      const conditions_4 = parsed_json.list[3].weather[0].main;
	      const icon_4 = parsed_json.list[3].weather[0].icon;
	      // day five weather
	      const day5 = "Friday";
	      const temp_5 = Math.round(parsed_json.list[4].temp.max);
	      const conditions_5 = parsed_json.list[4].weather[0].main;
	      const icon_5 = parsed_json.list[4].weather[0].icon;
	      // day six weather
	      const day6 = "Saturday";
	      const temp_6 = Math.round(parsed_json.list[5].temp.max);
	      const conditions_6 = parsed_json.list[5].weather[0].main;
	      const icon_6 = parsed_json.list[5].weather[0].icon;
	      // day seven weather
	      const day7 = "Sunday";
	      const temp_7 = Math.round(parsed_json.list[6].temp.max);
	      const conditions_7 = parsed_json.list[6].weather[0].main;
	      const icon_7 = parsed_json.list[6].weather[0].icon;
	      //var timeT = parsed_json['FCTTIME']['pretty'];
	      // set states for fields so they could be rendered later on
	      this.setState({
	          locate: location,
	          // day one state
	          d1: day1,
	          temp1: temp_1 + "°C",
	          cond1: conditions_1,
	          icon1: icon_1,
	          // day two state
	          d2: day2,
	          temp2: temp_2 + "°C",
	          cond2: conditions_2,
	          icon2: icon_2,
	          // day three state
	          d3: day3,
	          temp3: temp_3 + "°C",
	          cond3: conditions_3,
	          icon3: icon_3,
	          // day four state
	          d4: day4,
	          temp4: temp_4 + "°C",
	          cond4: conditions_4,
	          icon4: icon_4,
	          // day five state
	          d5: day5,
	          temp5: temp_5 + "°C",
	          cond5: conditions_5,
	          icon5: icon_5,
	          // day six state
	          d6: day6,
	          temp6: temp_6 + "°C",
	          cond6: conditions_6,
	          icon6: icon_6,
	          // day seven state
	          d7: day7,
	          temp7: temp_7 + "°C",
	          cond7: conditions_7,
	          icon7: icon_7
	          //time : timeT
	      });
	}
}
