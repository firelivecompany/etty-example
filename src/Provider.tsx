import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import * as locales from "config/locales.json"
// import "config/template.json"

import Application from "./Application"

export default class Provider extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/:locale" render={props => {
					return <Application {...props} locales={locales} />
				}} />
				<Redirect to="/en" />
			</Switch>
		)
	}
}