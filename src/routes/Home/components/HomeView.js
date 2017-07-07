import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import RaccoonImg from '../../../img/enot.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
      <img alt='This is Raccoon no idea why (maybe topcoat?)' className='raccoon' src={RaccoonImg}/>
  </div>
)

export default HomeView
