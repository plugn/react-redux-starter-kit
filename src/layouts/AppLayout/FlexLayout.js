import React from 'react'
import './FlexLayout.scss'
import article from './article.json'

function createMarkup() {
	return {__html: JSON.stringify(article.text)}
}
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
					<div className="stretch">1</div>
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
