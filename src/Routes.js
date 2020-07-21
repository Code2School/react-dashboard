import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Settings from './views/Settings/Settings';
import Notifications from './views/Notifications/Notifications';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/settings" component={Settings} />
		<Route path="/notifications" component={Notifications} />
	</Switch>
);

export default Routes;
