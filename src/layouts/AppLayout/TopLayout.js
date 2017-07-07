import React from 'react'
import {IndexLink, Link} from 'react-router'
import './FlexLayout.scss'

function UL() {
	return (
		<ul>
			<li>0</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
			<li>0</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
		</ul>

	)
}
function TopLayout({children}) {
	return (
		<div className="flex-col debug">
			<header>
				awesome site
				<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
				{' · '}
				<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>

			</header>

			<div className="flex-row">
				<div className="scroll">
					<UL/>
				</div>

				<div className="flex-col">
					<div className="stretch">
						{children}
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


export default TopLayout;
