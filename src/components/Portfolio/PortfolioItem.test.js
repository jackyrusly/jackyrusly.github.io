import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './PortfolioItem';
import PortfolioData from './PortfolioData';

describe('Portfolio Item', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PortfolioItem {...PortfolioData[0]} />, div);
    });
});
