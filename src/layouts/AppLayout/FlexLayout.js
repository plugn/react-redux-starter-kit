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
function FlexLayout2() {
	return (
		<div className="flex-col">
			<header></header>
			<div className="flex-row">
				<div className="scroll">
					<UL/>
				</div>
				<div className="scroll">
					<UL/>
				</div>
				<div className="stretch"> stretchy content</div>

			</div>
			<footer></footer>
		</div>
	)
}

function FlexLayout() {
	return (

		<div className="flex-layout col">

			<header></header>

			<article>
				<section className="scroll">
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
					</ul>
				</section>
				<section className="flex"></section>
				<section className="scroll">
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
					</ul>

				</section>
			</article>
			<footer></footer>

		</div>
	)
}

export default FlexLayout2;
