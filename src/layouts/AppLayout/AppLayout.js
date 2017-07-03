import React from 'react'
import PropTypes from 'prop-types'
import ScrollContainer from '../../components/ScrollContainer'
import {Heading, Text} from 'axs'
import {Flex, Box} from 'reflexbox'

class AppLayout extends React.Component {

	constructor(props) {
		super(props);
		this.setState({
			color: 'blue'
		})
	}

	render() {
		return (
			<Flex
				align='center'
				justify='center'
				column
				w={1}
				px={3}
				py={4}>
				<Box p={2}
					 style={{
						 color: '#eee',
						 backgroundColor: '#077',
						 transitionProperty: 'color',
						 transitionDuration: '1s',
						 transitionTimingFunction: 'ease-out'
					 }}
				>
					<Text f={2}>
						Flex Direction
					</Text>
				</Box>
				<Box p={2}>
					Column
				</Box>
			</Flex>
			// <Box px={3}>
			// 	<Flex
			// 		p={2}
			// 		css={{
			// 			backgroundColor: '#fff'
			// 		}}>
			// 		<Box px={2}>
			// 			Hello
			// 		</Box>
			// 		<Box px={2} ml='auto'>
			// 			Flex
			// 		</Box>
			// 	</Flex>
			// </Box>
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
