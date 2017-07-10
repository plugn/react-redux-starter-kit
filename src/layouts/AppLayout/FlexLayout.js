import React from 'react'
import './FlexLayout.scss'
import populateJSX from '../../util/populateJSX'

const UL = () => (
		<ul>
			{populateJSX(23,
				(v, i) => <li>item {i}</li>
			)}
		</ul>
)


function FlexLayout() {
	return (
		<div className="flex-col debug">
			<header>awesome site header</header>

			<div className="flex-row">
				<div className="scroll">
					<UL/>
				</div>

				<div className="flex-col">
					<div className="stretch">1</div>
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


export default FlexLayout;
