import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { mount } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SearchBar from '../../src/containers/search_bar';
import * as actions from '../../src/actions/index';
import reducers from '../../src/reducers';
chai.use(chaiEnzyme());
const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('<SearchBar/>', () => {
	
	describe('These tests blahblahblah', function (done) {
		
		var wrapper;
		before((done) => {
			wrapper = mount(
			  <Provider store={createStoreWithMiddleware(reducers)}>
				  <SearchBar />
			  </Provider>
			);
			done();
		});
		
		
		it('should do something', function (done) {
			expect(wrapper.find('.board-creator')).to.exist;
			done();
		});
		
	});
});