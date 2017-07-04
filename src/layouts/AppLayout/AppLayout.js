import React from 'react'
import './AppLayout.scss'
import article from './article.json'

function createMarkup() {
	return {__html: JSON.stringify(article.text)}
}

class AppLayout extends React.Component {

	render() {
		return (
			<div id="app-layout">
				<header>header</header>
				<main>
					<nav>nav</nav>
					<aside className="pos-rel">
						<div className="scroll-container" dangerouslySetInnerHTML={createMarkup()}></div>
					</aside>
					<article>article</article>
				</main>
				{/*<footer>footer</footer>*/}
			</div>
		)
	}

}
AppLayout.defaultProps = {
	article
}

export default AppLayout;
