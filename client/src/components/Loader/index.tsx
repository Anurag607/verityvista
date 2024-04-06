import React from 'react'
import './loader.scss'

const index : React.FC= () => {
  return (
    
    <svg viewBox="0 0 100 100">
  <g className='frame'>
   <circle cx="50" cy="50" r="159"/>
   <circle cx="50" cy="50" r="150"/>
   <circle cx="50" cy="50" r="141"/>
  </g>
    <g className='horizline'>
      <circle cx="0" cy="50" r="13"/>
     <circle cx="33" cy="50" r="13"/>
      <circle cx="66" cy="50" r="13"/>
     <circle cx="0" cy="50" r="1"/>
     <circle cx="33" cy="50" r="1"/>
      <circle cx="66" cy="50" r="1"/>
    </g>
   <path d="M 90,50 A 40 40 0 0 1 0,50"/>
   <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
		<feGaussianBlur stdDeviation="6" />
	</filter>
</svg>
    
  )
}

export default index