import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Link } from 'react-router-dom';

import IndexPage from './components/IndexPage';

import WorkPage from './components/Work/WorkPage';

import ThreeMakePage from './components/Work/ThreeMakePage';

import ThreeModelToolPage from './components/Work/ThreeModelToolPage';

import MenuPage from './components/Work/React/MenuPage';

let App = (props) => {
	return <div>
		<Route exact path='/' component={IndexPage} />
		<Route exact path='/work' component={WorkPage} />
		<Route exact path='/work/threemake' component={ThreeMakePage}/>
		<Route exact path='/work/threemodeltool' component={ThreeModelToolPage}/>
		<Route exact path='/work/reactmenu' component={MenuPage}/>
	</div>
}

ReactDOM.render(<HashRouter>
	<App />
</HashRouter>, document.getElementById('app'));