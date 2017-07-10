import React from 'react'
import './LayerTree.scss'

function LayerTreeRoot({model}) {
	return (
		<ul className="tile__root gu-unselectable">
			{
				model.map(
					(listItem, listKey) => <LayerTreeItem model={listItem} itemIndex={listKey} key={listKey}/>
				)
			}
		</ul>
	)
}

function LayerTreeFolder({model, itemIndex, onItemClick, isOpen}) {

	if (!model.children.length) {
		return null;
	}

	return (

		<li className="tile tile__folder">
			<span className="tile__name bold" onClick={onItemClick}>{ model.id } [ {isOpen ? '-' : '+'} ]</span>

			(
			<ul hidden={!isOpen} className="tile__list" data-group={itemIndex}>
				<li hidden></li>

				{model.children.map(
					(listItem, listKey) =>
						<LayerTreeItem
							model={listItem}
							itemIndex={listKey}
							dataGroup={itemIndex}/>
				)}
			</ul>
			)
		</li>

	)
}

function LayerTreeLeaf({model, onItemClick}) {
	return <li className="tile" onClick={onItemClick(model.id)}>{model.id}</li>
}


class LayerTreeItem extends React.Component {
	// static ini
	static defaultProps = {
		model: [],
		itemIndex: 0
	}

	log(what, event) {

		console.log(`:: ${what}`, event);
	}


	render() {
		if (Array.isArray(this.props.model)) {
			return <LayerTreeRoot model={this.props.model}/>
		}
		else if (this.props.model.children) {
			return <LayerTreeFolder model={this.props.model}/>
		}
		else return <LayerTreeLeaf model={this.props.model} onItemClick={ e => this.log('onLeafClick()', e) }/>

	}
}


export default LayerTreeItem;

