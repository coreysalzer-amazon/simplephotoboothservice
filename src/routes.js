import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './pages/App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

export default (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Home}/>
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
);
