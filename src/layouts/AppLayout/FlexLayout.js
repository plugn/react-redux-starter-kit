import React from 'react'
import './FlexLayout.scss'
import article from './article.json'

function createMarkup() {
	return {__html: JSON.stringify(article.text)}
}

function FlexLayout() {
	return (

		<div className="flex-layout">

			<header></header>
			<article>
				<section id="left">
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
				<section id="right">
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
				<section id="center"></section>
			</article>
			<footer></footer>

		</div>
	)
}

export default FlexLayout;
