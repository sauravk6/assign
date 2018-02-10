import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes';

ReactDOM.render( 
	<HashRouter>
		<AppRoutes/>
	</HashRouter>
	, document.getElementById('root')
);