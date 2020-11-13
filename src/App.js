import React from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import StationSearch from "./components/StationSearch";
const parser = require('./lib/parser.js');


const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


class App extends React.Component {
    state = {
        selectedPlaces: ''
    }

    findStation= (city) => {
        if (city) {
            const handler = (places) => {
                this.setState({
                    selectedPlaces: places
                })
            }
            const api_call_url =`http://localhost:2020/maps/api/place/textsearch/json?query=gas_station+${city}&radius=1500&key=${googleMapsApiKey}`
            fetch(api_call_url).then(res => res.json()).then(parser).then(handler)
        }
    }

    render() {
        return (
            <div className="App">
                <React.Fragment>
                    <StationSearch searchCity={this.findStation}/>
                    <GoogleMap gasStations={this.state.selectedPlaces} />

                </React.Fragment>


            </div>
        );
    }
}

export default App;
