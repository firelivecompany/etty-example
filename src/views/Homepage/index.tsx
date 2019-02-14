import * as React from "react"
import { observer } from "mobx-react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"

import Etty from "stores/Etty"

export default class Homepage extends React.Component<RouteComponentProps<any>, any> {
	render() {
		var { $ } = Etty
		return (
			<main className="v-homepage">
				<h1>{$.Homepage.kappa}</h1>
				{/* <p>kek</p> */}
			</main>
		)
	}
}