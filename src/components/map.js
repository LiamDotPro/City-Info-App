import React, {Component} from 'react';
import {GoogleMap, GoogleMapLoader} from 'react-google-maps';


export default class GMap extends Component {
  
  render() {
    return (
      <GoogleMapLoader
        containerElement={<td className="GMap"/>}
        googleMapElement={
          <GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}}/>
        }
      />
    );
  }
}
