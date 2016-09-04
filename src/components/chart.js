import _ from 'lodash'; // using the underscore is just a convention for lodash
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
    return _.round(_.sum(data) / data.length);
}


// convert this data!
export default class SparkChart extends Component {


    render() {

        return (
            <div>
            <Sparklines height={80} width={120} data={this.props.data}>
                <SparklinesLine color={this.props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>

            <div>{average(this.props.data)} {this.props.units}</div>
            </div>
        );
    }
}