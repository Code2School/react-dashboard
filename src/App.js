import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import './App.translate';

const App = () => (
	<Router>
		<Routes/>
	</Router>
);

export default App;
