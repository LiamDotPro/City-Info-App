
import _ from 'lodash'; // using the underscore is just a convention for lodash
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
 


function average(data){
	return _.round(_.sum(data) / data.length);
}


export default class Line extends Component {
	
	render() {
		
		return (
		  <div>
			  <SparklinesLine color={this.props.color}/>
			  <SparklinesReferenceLine type="avg"/>
		  </div>
		);
	}
}