import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_index.scss'
const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const Categories = () => {
  const [activeElement, setActiveElement] = useState('All')
  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)
    if (value === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <div className='CategoriesBar'>
      {keywords.map((value, i) => (
        <span
          key={i}
          className={activeElement === value ? 'active' : null}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  )
}

export default Categories
