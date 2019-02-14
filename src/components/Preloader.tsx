import * as React from "react"

import "styles/components/preloader"

export default class Preloader extends React.Component {
	interval: number
	maxCount: number = 25
	minCount: number = 1

	state = {
		count: this.minCount
	}

	componentDidMount() {
		this.interval = window.setInterval(this.updateCount, 50)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	updateCount = () => {
		this.setState({
			count: this.state.count >= this.maxCount
				? this.minCount
				: this.state.count +  2
		})
	}

	render() {
		var { count } = this.state
		return (
			<div 
				className="c-preloader"
				dangerouslySetInnerHTML={{ 
					__html: [...Array(count)].map(() => `&bull;`).join("")
				}}
			/>
		)
	}	
}