import React from 'react'
import LayerTreeItem from './LayerTreeItem'
import listData from './listData'

class LayerTree extends React.Component {

	render() {
		return (
			<div className="tree-view">
				<LayerTreeItem model={listData}/>
			</div>
		)
	}
}


export default LayerTree;

