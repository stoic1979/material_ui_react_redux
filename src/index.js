/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';

injectTapEventPlugin();

render(
  <Router routes={routes} history={browserHistory}  />, document.getElementById('app')
);
