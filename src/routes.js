import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';

export default (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Home}/>
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
);
