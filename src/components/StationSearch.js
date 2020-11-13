import React from 'react';

export class StationSearch extends React.Component {
    state = {
        city: ''
    }

    handleChange = event => {
        this.setState({city: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       name="city"
                       style={{ flex: '10', padding: '5px'}}
                       placeholder="Enter location..."
                       value={this.state.city}
                       onChange={this.handleChange}
                />
                <button onClick={this.props.searchCity.bind(this, this.state.city)}>Submit</button>

            </form>
        )
    }

}

export default StationSearch;