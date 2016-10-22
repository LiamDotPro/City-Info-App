import React from 'react';
import { shallow } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Title from '../../src/components/title';
chai.use(chaiEnzyme());

describe('<Title/>', () => {
	
	describe('Does the title have the correct html attributes and classes', function (done) {
		
		var wrapper;
		before((done) => {
			wrapper = shallow(<Title/>);
			done();
		});
		
		
		it('The Title should have the correct classes and tags', function (done) {
			wrapper.setState({searchTerm: 'surfing'});
			expect(wrapper.contains([
				<ul className="clock-container">
					<li className="flip-clock">
					  <span className="foldable">
	            <span>City - Info - App</span>
	        </span>
					</li>
				</ul>
			])).to.equal(true);
			done();
		});
		
	});
});