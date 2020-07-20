import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Settings from './views/Settings/Settings';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/settings" component={Settings} />
	</Switch>
);

export default Routes;
