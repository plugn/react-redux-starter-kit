import React from 'react'
// import
import './FlexLayout.scss'
import populateJSX from '../../util/populateJSX'
import {Card, CardTitle, CardText, CardActions, Button} from 'react-md';
import FontIcon from 'react-md/lib/FontIcons';

const UL = () => (
	<ul>
		{populateJSX(23,
			(v, i) => <li>item {i}</li>
		)}
	</ul>
)
function MDGrid1() {
	return (
		<div className="md-grid">
			<Card className="md-cell">
				<CardTitle title="Hello, World!"/>
				<CardText>
					<div className="icon-examples">
						<p>FontIcons from Material Icons</p>
						<FontIcon style={{color: 'lime'}}>home</FontIcon>
						<FontIcon>favorite</FontIcon>
					</div>
				</CardText>
				<CardActions>
					<Button flat label="Action 1"/>
					<Button flat label="Action 2"/>
				</CardActions>
			</Card>
		</div>
	);
}
function MDLayout() {
	return (
		<div className="md-grid md-grid-no-spacing md-cell">
		</div>
	);
}


function MDLayout() {
	return (
		<div className="flex-col debug">
			<header>awesome site header</header>

			<div className="flex-row">
				<div className="scroll">
					<UL/>
				</div>

				<div className="flex-col">
					<div className="stretch">
						<MDGrid1/>

					</div>
					<div className="flex-col scroll-x">

						<div className="stretch" style={{width: '1000px'}}>
							BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE
							BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA
							BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA
							BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA BLA BLA BLA BLE BLE FLA
						</div>
					</div>

				</div>

				<div className="stretch scroll"> stretchy content
					<UL/>
				</div>

			</div>

			<footer></footer>
		</div>
	)
}


export default MDLayout;
