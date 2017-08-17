import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Link } from 'react-router-dom';

import IndexPage from './components/IndexPage';

let App = (props) => {
	return <div>
		<Route exact path='/' component={IndexPage} />
	</div>
}

ReactDOM.render(<HashRouter>
	<App />
</HashRouter>, document.getElementById('app'));