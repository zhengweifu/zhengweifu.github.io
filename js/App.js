import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Link } from 'react-router-dom';

import IndexPage from './components/IndexPage';

import WorkPage from './components/Work/WorkPage';

import ThreeMakePage from './components/Work/ThreeMakePage';

import ThreeModelToolPage from './components/Work/ThreeModelToolPage';

import MenuPage from './components/Work/React/MenuPage';
import ButtonPage from './components/Work/React/ButtonPage';
import IconPage from './components/Work/React/IconPage';

let App = (props) => {
	return <div>
		<Route exact path='/' component={IndexPage} />
		<Route exact path='/work' component={WorkPage} />
		<Route exact path='/work/threemake' component={ThreeMakePage}/>
		<Route exact path='/work/threemodeltool' component={ThreeModelToolPage}/>
		<Route exact path='/work/reactmenu' component={MenuPage}/>
		<Route exact path='/work/reactbutton' component={ButtonPage}/>
		<Route exact path='/work/reacticon' component={IconPage}/>
	</div>
}

ReactDOM.render(<HashRouter>
	<App />
</HashRouter>, document.getElementById('app'));