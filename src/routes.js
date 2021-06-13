import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Counter from './pages/Counter'

import NotFound from './pages/NotFound'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/counter" component={Counter} />

				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
