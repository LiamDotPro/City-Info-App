import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import WeatherList from '../../src/containers/weather_list';
import * as actions from '../../src/actions/index';
import reducers from '../../src/reducers';
chai.use(chaiEnzyme());
const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('<WeatherList/>', () => {
	
	describe('These tests blahblahblah', function (done) {
		
		var wrapper;
		before((done) => {
			wrapper = mount(
			  <Provider store={createStoreWithMiddleware(reducers)}>
				  <WeatherList />
			  </Provider>
			);
			done();
		});
		
		
		it('should do something', function (done) {
			console.log(wrapper.props());
			done();
		});
		
		it('The table tag should have the correct classes', function (done) {
			//console.log(wrapper.debug());
			done();
		});
		
		it('The table header should have the correct nodes and text', function (done) {
			//console.log(wrapper.debug());
			done();
		});
	});
});