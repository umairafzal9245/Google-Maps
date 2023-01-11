import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {


    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap GoogleMap
                defaultCenter={{ lat: parseFloat(props.buses[0].lat), lng: parseFloat(props.buses[0].lon) }}
                defaultZoom={10}
                apiKey={'AIzaSyDb96tCuDKLpfIy-mbv7OiCzvU7YJM6FlI'}
            >
                {
                    props.buses.map((bus) => (
                        <Marker
                            key={bus.vid}
                            position={{ lat: parseFloat(bus.lat), lng: parseFloat(bus.lon) }}
                            label={{ text: bus.vid, color: 'black', fontSize: '10px', fontWeight: 'bold' }}
                        />
                    ))
                }
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    buses={this.props.buses}
                />
            </div>
        );
    }
};
export default Map;

