import * as React from "react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"

export default class NotFound extends React.Component<RouteComponentProps<any>, any> {
	render() {
		var { locale } = this.props.match.params
		return (
			<main className="v-not-found">
				<h1>Not found</h1>
				<Link to={`/${locale}`}>
					> goto "Homepage"
				</Link>
			</main>
		)
	}
}