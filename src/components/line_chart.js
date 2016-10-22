import _ from 'lodash'; // using the underscore is just a convention for lodash
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';


function average(data){
    return _.round(_.sum(data) / data.length);
}


// convert this data!
export default class SparkLineChart extends Component {


    render() {
        var mobileClass;
        if (this.props.units == "hPA") {
            mobileClass = "hidden-xs-1";
        } else {
            mobileClass = "tempAvg";
        }

        return (
            <div className={mobileClass}>
            <Sparklines width={120} height={80} data={this.props.data}>
                <SparklinesLine color={this.props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>

            <div>Avg: {average(this.props.data)} {this.props.units}</div>
            </div>
        );
    }
}