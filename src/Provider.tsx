import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Application from "./Application"

export default class Provider extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/:locale" render={props => {
					return <Application {...props} />
				}} />
				<Redirect to="/en" />
			</Switch>
		)
	}
}