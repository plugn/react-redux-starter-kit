import React from 'react'
import {IndexLink, Link} from 'react-router'
import './FlexLayout.scss'
import '../../components/topcoat/icon.css';


function TcHeader() {
	return (
		<header className="topcoat-navigation-bar topcoat-grid__row">
			<div className="topcoat-navigation-bar__item topcoat-grid__column--1">
				<button className="topcoat-icon-button--quiet">
					<span className="topcoat-icon icomatic">back</span>
				</button>
			</div>

			<div className="topcoat-navigation-bar__item topcoat-grid__column--auto">

				<div className="topcoat-tab-bar">
					<label className="topcoat-tab-bar__item">
						<input type="radio" name="topcoat" className="hide-input"/>
						<button className="topcoat-tab-bar__button">One</button>
					</label>
					<label className="topcoat-tab-bar__item">
						<input type="radio" name="topcoat"/>
						<button className="topcoat-tab-bar__button">Two</button>
					</label>
					<label className="topcoat-tab-bar__item">
						<input type="radio" name="topcoat"/>
						<button className="topcoat-tab-bar__button">Three</button>
					</label>
				</div>

			</div>

			<div className="topcoat-navigation-bar__item topcoat-grid__column--auto right">
				<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
				{' · '}
				<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
			</div>
			<div className="topcoat-navigation-bar__item topcoat-grid__column--auto right">
				<h1 className="topcoat-navigation-bar__title">MVT Styler</h1>
			</div>


		</header>

	)
}


function TcList({count}) {
	return (
		<ul className="topcoat-list__container">
			{[...Array(count || 30)].map((x, i) =>
				<li className="topcoat-list__item" key={'tc-list-item_' + i}>
					Item
				</li>
			)}
		</ul>
	)
}

////



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
		<div className="flex-col">
			<TcHeader/>
			<div className="flex-row">
				<div className="scroll" style={{minWidth: '14rem'}}>

					<h3 className="topcoat-list__header">Category</h3>
					<TcList/>

				</div>

				<div className="flex-col">
					<div className="stretch">
						{children}
					</div>
					<div className="flex-col scroll-x">
						<select className="topcoat-select">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
						<select className="topcoat-select" disabled>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
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
