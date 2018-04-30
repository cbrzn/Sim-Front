import React from 'react';
import { render } from 'react-dom';
import Router from './containers/Router';
require('./style/custom.css');

render(<Router />, document.getElementById('app'));
