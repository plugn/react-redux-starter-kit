import React from 'react'
import PropTypes from 'prop-types'
import ScrollContainer from '../../components/ScrollContainer'
import {Heading, Text} from 'axs'
import {Flex, Box} from 'reflexbox'
import './AppLayout.scss'

class AppLayout extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.setState({
	// 		color: 'blue'
	// 	})
	// }

	render() {
		return (
			<div className="app-layout">
				<header>header</header>
				<main>
					<article>article</article>
					<nav>nav</nav>
					<aside>aside</aside>
				</main>
				<footer>footer</footer>
			</div>
		)
	}

	_render() {
		return (
			<Flex>
				<Box
					p={1} width={256}
					css={{
						color: 'orange'
					}}
				>
					<Text>I m orange</Text>

				</Box>

				<Box width='auto'>
					<Text>really auto width ? </Text>
				</Box>
			</Flex>
		)
	}
}

export default AppLayout
