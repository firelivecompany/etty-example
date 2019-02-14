import * as React from "react"
import { RouteComponentProps } from "react-router"
import { observer } from "mobx-react"
import { Switch, Route, Redirect } from "react-router-dom"
import Superagent from "superagent"

import Etty, { Translation } from "stores/Etty"

import Preloader from "components/Preloader"

import Homepage from "views/Homepage"
import NotFound from "views/NotFound"

import "styles/main"

export interface IApplicationProps extends RouteComponentProps<any> {
	locales: string[]
}

@observer
export default class Application extends React.Component<IApplicationProps, any> {
	get routeLocale(): string {
		return this.props.match.params.locale
	}

	state = {
		ettyError: false
	}

	fails = {
		en: "Failed to init the application :(",
		ru: "Не удалось инициализировать приложение :("
	}

	componentDidMount() {
		Etty.init({
			delay: 600,
			initialLocale: this.routeLocale,
			locales: this.props.locales,
			fetch: this.getTranslation,
			onFetchError: () => alert("Whoah! Failed to fetch translation :( Falling back to last locale")
		}).catch(() => {
			this.setState({ ettyError: true })
		})
	}

	getTranslation = (locale: string): Promise<Translation> => {
		return new Promise((resolve, reject) => {
			Superagent.get(`/static/translations/${locale}.json`).then(data => {
				resolve(data.body)
			}).catch(reject)
		})
	}

	render() {
		if (this.state.ettyError)
			return (
				<main>
					<h1>{this.fails[this.routeLocale]}</h1>
				</main>
			)
		return !Etty.ready
			? <main className="app-preloader">
				<Preloader />
			</main>
			: <Switch>
				<Route path="/:locale" exact component={Homepage} />
				<Route component={NotFound} />
			</Switch>
	}
}