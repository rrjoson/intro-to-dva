import { FETCH_WEATHER_INFO } from '../services/app';
import PLACES from '../constants/places';

export default {

  namespace: 'app',

  state: {
    selectedPlace: {},
    weatherData: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'SET_SELECTED_PLACE', payload: PLACES[0] });
          dispatch({ type: 'FETCH_WEATHER_INFO' });
        }
      });
    },
  },

  effects: {
    *FETCH_WEATHER_INFO({ payload }, { call, put, select }) {
      const { selectedPlace } = yield select(state => state.app);
      const { data: weatherData } = yield call(FETCH_WEATHER_INFO, selectedPlace.zip);
      yield put({ type: 'SAVE', payload: { weatherData } });
    },

    *SET_SELECTED_PLACE({ payload }, { put }) {
      yield put({ type: 'SAVE', payload: { selectedPlace: payload } });
      yield put({ type: 'FETCH_WEATHER_INFO' });
    },
  },

  reducers: {
    SAVE(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
