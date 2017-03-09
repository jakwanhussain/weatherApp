// import preact
import { h, render, Component } from 'preact';
// import stylesheets for iphone & button
import style from './style';
import style_iphone from '../button/style_iphone';
import style_button2 from '../button2/button2_style';
// import mao component
import Map from '../map/map';
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
		// api of openweathermap http://api.openweathermap.org/data/2.5/forecast/daily?appid=API_KEY=$q=LOCATION&mode=json&units=metric&cnt=7
		const url = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=5a0ef66c2f23f2efb778937d7643e128&q=${this.state.location}&mode=json&units=metric&cnt=7`;
		// making an ajax call to fetch api data
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
	  // url's for each day's weather icons
	  const imgURL1 = `http://openweathermap.org/img/w/${this.state.icon1}.png`;
	  const imgURL2 = `http://openweathermap.org/img/w/${this.state.icon2}.png`;
	  const imgURL3 = `http://openweathermap.org/img/w/${this.state.icon3}.png`;
	  const imgURL4 = `http://openweathermap.org/img/w/${this.state.icon4}.png`;
	  const imgURL5 = `http://openweathermap.org/img/w/${this.state.icon5}.png`;
	  const imgURL6 = `http://openweathermap.org/img/w/${this.state.icon6}.png`;
	  const imgURL7 = `http://openweathermap.org/img/w/${this.state.icon7}.png`;
		const logo = '../assets/icons/Weather-App-Logo.png';
		
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
				{/*display 7 days weather in a row*/}
						<div class = { style.row }>
							{/*current day weather details*/}
							<div class = { style.box }>
							{/*weather condition icon*/}
								{ this.state.icon1 ? <img src = { imgURL1 }/> : '' }
								<div class = { style.conditions }>
							{/*specified weather forecast day*/}
									{ this.state.d1 }
								</div>
								<div class = { style.conditions }>
							{/*condition of the weather*/}
									{ this.state.cond1 }
								</div>
								<div class = { tempStyles }>
							{/*showing temperature of that day*/}
									{ this.state.temp1 }
								</div>
							</div>
						{/*day 2 weather details*/}
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
						{/*day 3 weather details*/}
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
						{/*day 4 weather details*/}
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
						{/*day 5 weather details*/}
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
						{/*day 6 weather details*/}
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
						{/*day 7 weather details*/}
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
					<Map/>
	      </div>
	  </div>
		);
	}

	  parseResponse = (parsed_json) => {
	      const location = parsed_json.city.name + ' ' + parsed_json.city.country;
	      // Current day weather

	      // fetching current day
	      const dt = parsed_json.list[0].dt;
	      const date = new Date(dt*1000);
	      const getDay = date.getDay();
	      let day1;
	      switch (getDay){
	      	case 0:
			        day1 = "Sunday";
			        break;
			    case 1:
			        day1 = "Monday";
			        break;
			    case 2:
			        day1 = "Tuesday";
			        break;
			    case 3:
			        day1 = "Wednesday";
			        break;
			    case 4:
			        day1 = "Thursday";
			        break;
			    case 5:
			        day1 = "Friday";
			        break;
			    case  6:
			        day1 = "Saturday";
	      }
	      // fetching current day maximum temperature
	      const temp_1 = Math.round(parsed_json.list[0].temp.max);
	      // fetching current day weather condition
	      const conditions_1 = parsed_json.list[0].weather[0].main;
	      // fetching icon regarding weather condition
	      const icon_1 = parsed_json.list[0].weather[0].icon;
	      // day two weather
	      const dt2 = parsed_json.list[1].dt;
	      const date2 = new Date(dt2*1000);
	      const getDay2 = date2.getDay();
	      let day2;
	      switch (getDay2){
	      	case 0:
			        day2 = "Sunday";
			        break;
			    case 1:
			        day2 = "Monday";
			        break;
			    case 2:
			        day2 = "Tuesday";
			        break;
			    case 3:
			        day2 = "Wednesday";
			        break;
			    case 4:
			        day2 = "Thursday";
			        break;
			    case 5:
			        day2 = "Friday";
			        break;
			    case  6:
			        day2 = "Saturday";
	      }
	      const temp_2 = Math.round(parsed_json.list[1].temp.max);
	      const conditions_2 = parsed_json.list[1].weather[0].main;
	      const icon_2 = parsed_json.list[1].weather[0].icon;
	      // day three weather
	      const dt3 = parsed_json.list[2].dt;
	      const date3 = new Date(dt3*1000);
	      const getDay3 = date3.getDay();
	      let day3;
	      switch (getDay3){
	      	case 0:
			        day3 = "Sunday";
			        break;
			    case 1:
			        day3 = "Monday";
			        break;
			    case 2:
			        day3 = "Tuesday";
			        break;
			    case 3:
			        day3 = "Wednesday";
			        break;
			    case 4:
			        day3 = "Thursday";
			        break;
			    case 5:
			        day3 = "Friday";
			        break;
			    case  6:
			        day3 = "Saturday";
	      }
	      const temp_3 = Math.round(parsed_json.list[2].temp.max);
	      const conditions_3 = parsed_json.list[2].weather[0].main;
	      const icon_3 = parsed_json.list[2].weather[0].icon;
	      // day four weather
	      const dt4 = parsed_json.list[3].dt;
	      const date4 = new Date(dt4*1000);
	      const getDay4 = date4.getDay();
	      let day4;
	      switch (getDay4){
	      	case 0:
			        day4 = "Sunday";
			        break;
			    case 1:
			        day4 = "Monday";
			        break;
			    case 2:
			        day4 = "Tuesday";
			        break;
			    case 3:
			        day4 = "Wednesday";
			        break;
			    case 4:
			        day4 = "Thursday";
			        break;
			    case 5:
			        day4 = "Friday";
			        break;
			    case  6:
			        day4 = "Saturday";
	      }
	      const temp_4 = Math.round(parsed_json.list[3].temp.max);
	      const conditions_4 = parsed_json.list[3].weather[0].main;
	      const icon_4 = parsed_json.list[3].weather[0].icon;
	      // day five weather
	      const dt5 = parsed_json.list[4].dt;
	      const date5 = new Date(dt5*1000);
	      const getDay5 = date5.getDay();
	      let day5;
	      switch (getDay5){
	      	case 0:
			        day5 = "Sunday";
			        break;
			    case 1:
			        day5 = "Monday";
			        break;
			    case 2:
			        day5 = "Tuesday";
			        break;
			    case 3:
			        day5 = "Wednesday";
			        break;
			    case 4:
			        day5 = "Thursday";
			        break;
			    case 5:
			        day5 = "Friday";
			        break;
			    case  6:
			        day5 = "Saturday";
	      }
	      const temp_5 = Math.round(parsed_json.list[4].temp.max);
	      const conditions_5 = parsed_json.list[4].weather[0].main;
	      const icon_5 = parsed_json.list[4].weather[0].icon;
	      // day six weather
	      const dt6 = parsed_json.list[5].dt;
	      const date6 = new Date(dt6*1000);
	      const getDay6 = date6.getDay();
	      let day6;
	      switch (getDay6){
	      	case 0:
			        day6 = "Sunday";
			        break;
			    case 1:
			        day6 = "Monday";
			        break;
			    case 2:
			        day6 = "Tuesday";
			        break;
			    case 3:
			        day6 = "Wednesday";
			        break;
			    case 4:
			        day6 = "Thursday";
			        break;
			    case 5:
			        day6 = "Friday";
			        break;
			    case  6:
			        day6 = "Saturday";
	      }
	      const temp_6 = Math.round(parsed_json.list[5].temp.max);
	      const conditions_6 = parsed_json.list[5].weather[0].main;
	      const icon_6 = parsed_json.list[5].weather[0].icon;
	      // day seven weather
	      const dt7 = parsed_json.list[6].dt;
	      const date7 = new Date(dt7*1000);
	      const getDay7 = date7.getDay();
	      let day7;
	      switch (getDay7){
	      	case 0:
			        day7 = "Sunday";
			        break;
			    case 1:
			        day7 = "Monday";
			        break;
			    case 2:
			        day7 = "Tuesday";
			        break;
			    case 3:
			        day7 = "Wednesday";
			        break;
			    case 4:
			        day7 = "Thursday";
			        break;
			    case 5:
			        day7 = "Friday";
			        break;
			    case  6:
			        day7 = "Saturday";
	      }
	      const temp_7 = Math.round(parsed_json.list[6].temp.max);
	      const conditions_7 = parsed_json.list[6].weather[0].main;
	      const icon_7 = parsed_json.list[6].weather[0].icon;
	      //var timeT = parsed_json['FCTTIME']['pretty'];
	      // set states for fields so they could be rendered later on
	      this.setState({
	          locate: location,
	          // day one state

	          // setting state of current day name with fetched name from api
	          d1: day1,
	          //  setting state of temperature with fetched temperature from api
	          temp1: temp_1 + "°C",
	          // setting state of condition with fetched condition from api
	          cond1: conditions_1,
	          // setting state of weather condition icon with fetched icon from api
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
