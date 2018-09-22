import React from 'react';
import ReactDOM from 'react-dom';
import Biography from '../Biography';

describe('Biography', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Biography />, div);
  });
});
