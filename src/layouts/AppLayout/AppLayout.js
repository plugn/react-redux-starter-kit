import React from 'react'
import './AppLayout.scss'

class AppLayout extends React.Component {

	/*
	 constructor(props) {
	 super(props);
	 this.setState({
	 color: 'blue'
	 })
	 }
	 */

	render() {
		return (
			<div id="app-layout">
				<header>header</header>
				<main>
					<nav>nav</nav>
					<aside>aside</aside>
					<article>article</article>
				</main>
				{/*<footer>footer</footer>*/}
			</div>
		)
	}

}

export default AppLayout
