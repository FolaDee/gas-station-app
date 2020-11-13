import React from 'react';
import GoogleMapReact from "google-map-react";

const Marker = ({text, icon}) => <div>{text}
 <img src={icon}
      style={{ height:15, width:15}}
 />
</div>;

const GoogleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export class GoogleMap extends React.Component {
    render() {
        if (!this.props.gasStations) {
            return <div style={{padding: '10px'}}>Enter a city</div>
        }

        return (
            <div style={{height: "100vh", width: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GoogleMapsApiKey}}
                    defaultCenter={{
                        lat: this.props.gasStations[0].location.lat,
                        lng: this.props.gasStations[0].location.lng
                    }}
                    defaultZoom={13}
                >
                    {this.props.gasStations.map((place) =>
                        <Marker key={place.id}  lat={place.location.lat} lng={place.location.lng} text={place.name} icon={place.icon}/>
                    )}
                </GoogleMapReact>

            </div>
        );
    }
}

export default GoogleMap;
