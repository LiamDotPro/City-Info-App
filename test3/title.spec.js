import React from 'react';
import { mount, shallow, render } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Title from '../src/components/title';
chai.use(chaiEnzyme());


describe('<Title/>', function () {
	var wrapper;
	before(() => {
		wrapper = render(<Title/>);
	});
	
	
	it('should have the correct number of descendants', function () {
		expect(wrapper.find('.title')).to.have.exactly(3).descendants('span');
	});
	
	describe('All of the correct classes should be present', function () {
		it('span should have a class name of you', function () {
			expect(wrapper.find('.you')).to.have.className('you');
		});
		
		it('span should have a class name of tube', function () {
			expect(wrapper.find('.tube')).to.have.className('tube');
		});
		
		it('span should have a class name of searchEnd', function () {
			expect(wrapper.find('.searchEnd')).to.have.className('searchEnd');
		});
	});
	
	describe('All of the correct content should be present', function () {
		it('should contain the text \"You\"', function () {
			expect(wrapper.find('.you').text()).to.equal('You');
		});
		
		it('should contain the text \"Tube\"', function () {
			expect(wrapper.find('.tube').text()).to.equal('Tube');
		});
		
		it('should contain the text \"Search\"', function () {
			expect(wrapper.find('.searchEnd').text()).to.equal('Search');
		});
	});

	
});

