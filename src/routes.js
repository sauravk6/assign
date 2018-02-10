import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import MainTab from './views/Testa/MainTab.js'
import Belong from './views/Belong/Belong.js'
// import Page500 from './views/Pages/Page500/'

const RoutesWrapperLevel1 = (props) => (
	<Switch>
		<Route exact path="/" render={()=>(<Belong />)}/>
	</Switch>
);

const Routes = () =>  (
	<Simple>
		<RoutesWrapperLevel1 />
	</Simple>
);

export default Routes;
