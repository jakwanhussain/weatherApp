// import preact
	
import { h, render, Component } from 'preact';

import style from './style';

export default class Sidebar extends Component {  
render() {
   return (
      <div class={ style.wrapper }>
         <ul id={ style.slide }>
                 <li>Weather</li>
                 <li>More</li>
                 <li>About</li>
        </ul>
     </div>
   );
}
}