// import preact
import { h, render, Component } from 'preact';
import style from './style';


export default class Map extends Component {
	render() {
		return (
		<div>
			<button><a class = { style.link } href="../PlacesAPI.html" target="_blank">Search Places</a></button>
   	 	</div>
		);
	}
}
