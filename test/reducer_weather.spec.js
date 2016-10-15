import {expect} from 'chai';
import reducer from '../src/reducers/reducer_weather.js';

describe('Weather Reducer', () => {
	it('shoulder return a single weather source', () => {
		const initialState = [];
		
		const fetchWeather = {
			type: 'FETCH_WEATHER',
			payload: {
				data: 'weather test data'
			}
		};
	
		const newState = reducer(initialState, fetchWeather);
		console.warn(newState);
		expect(newState).to.eql(
			['weather test data']
		);
	});
});