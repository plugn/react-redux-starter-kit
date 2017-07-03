import React from 'react'
import PropTypes from 'prop-types'
import ScrollContainer from '../../components/ScrollContainer'

class AppLayout extends React.Component {
	static propTypes = {
		toolbar: PropTypes.element,
		layerList: PropTypes.element,
		layerEditor: PropTypes.element,
		map: PropTypes.element,
		bottom: PropTypes.element,
	}

	static childContextTypes = {
		reactIconBase: PropTypes.object
	}

	getChildContext() {
		return {
			reactIconBase: {size: 14}
		}
	}

	render() {
		return <div className="maputnik-layout">
			{this.props.toolbar}
			<div className="maputnik-layout-list">
				<ScrollContainer>
					{this.props.layerList}
				</ScrollContainer>
			</div>
			<div className="maputnik-layout-drawer">
				<ScrollContainer>
					{this.props.layerEditor}
				</ScrollContainer>
			</div>
			{this.props.map}
			{this.props.bottom && <div className="maputnik-layout-bottom">
				{this.props.bottom}
			</div>
			}
		</div>
	}
}

export default AppLayout
