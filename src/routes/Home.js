import React from 'react';
import { connect } from 'dva';
import PLACES from '../constants/places';
import WeatherDisplay from '../components/WeatherDisplay';

function Home(props) {
  const {
    dispatch,
    weatherData,
  } = props;

  return (
    <div>
      {PLACES.map(place => (
        <button
          key={place.zip}
          onClick={() => dispatch({ type: 'app/SET_SELECTED_PLACE', payload: place })}
        >
          {place.name}
        </button>
      ))}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedPlace: state.app.selectedPlace,
    weatherData: state.app.weatherData,
  };
}

export default connect(mapStateToProps)(Home);
