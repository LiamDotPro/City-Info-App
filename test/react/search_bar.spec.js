import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { mount, shallow } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SearchBar from '../../src/containers/search_bar';
import * as actions from '../../src/actions/index';
import reducers from '../../src/reducers';
chai.use(chaiEnzyme());
const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('<SearchBar/>', () => {
	
	describe('Tests to see if the <SearchBar/> sets up correctly', function (done) {
		
		var wrapper;
		before((done) => {
			wrapper = shallow(
			  <Provider store={createStoreWithMiddleware(reducers)}>
				  <SearchBar />
			  </Provider>
			);
			done();
		});
		
		
		it('The state value searchTerm should be able to be set to \"surfing\"', function (done) {
			wrapper.setState({searchTerm: 'surfing'});
			expect(wrapper.state().searchTerm).to.equal('surfing');
			done();
		});
		
	});
});