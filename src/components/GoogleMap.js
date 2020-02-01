import React ,{Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
<Map google={this.props.google}
initialCenter={{
    lat: 48.1102,
    lng: -1.66273,
    }}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={17}>
  <Marker
    title={'CYHA DESIGN 77, Avenue Aristide Briand'}
    name={'SOMA'}
    position={{lat: 48.110409, lng: -1.662663}} />


</Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCuK-3Rpcf0_RWrdrDot2Nu2cAyAZfXKgY')
})(MapContainer)









