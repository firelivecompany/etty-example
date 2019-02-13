import * as React from "react"
import { RouteComponentProps } from "react-router"

import * as template from "config/template.json"
import * as locales from "config/locales.json"

export interface IApplicationProps extends RouteComponentProps<any> {
	
}

export default class Application extends React.Component<IApplicationProps, any> {
	render() {
		return (
			<h1>Hello, Etty!! {template.Homepage.description} {locales[0]}</h1>
		)
	}
}