// import preact
import { h, render, Component } from 'preact';
    
export default class Button2 extends Component {

    // rendering a function when the button is clicked
    render({clickFunction}) {
        if(!clickFunction){
            clickFunction = () => {
                console.log("passed something as 'clickFunction' that wasn't a function !");
            }
        }   
        return (
            <div>
			<a  href="http://www.interrail.eu/interrail-passes/" target="_blank">
                 <button onClick={clickFunction}>
                    Buy Tickets
                </button>
		       </a>
            </div>
        );
    }
}