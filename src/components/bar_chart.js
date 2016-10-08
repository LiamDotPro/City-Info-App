import _ from 'lodash'; // using the underscore is just a convention for lodash
import React, {Component} from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';


function average(data){
	return _.round(_.sum(data) / data.length);
}


// convert this data!
export default class SparkBarChart extends Component {
	
	
	render() {
		
		return (
		  <div>
			  <Sparklines width={120} height={80} data={this.props.data}>
				  <SparklinesBars color={this.props.color}/>
				  <SparklinesReferenceLine type="avg"/>
			  </Sparklines>
			  
			  <div>{average(this.props.data)} {this.props.units}</div>
		  </div>
		);
	}
}