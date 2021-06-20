import React, { useState } from 'react'
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

  const handleClick = (value) => {
    setActiveElement(value)
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
