import React, { useState } from 'react'

const ButtonRipple = () => {
  const [position, setPosition] = useState(null)

  const handleClickEvent = (e) => {
    const x = e.clientX
    const y = e.clientY
    const buttonLeft = e.target.offsetLeft
    const buttonTop = e.target.offsetTop
    setPosition({
      xInside: x - buttonLeft,
      yInside: y - buttonTop,
    })

    setTimeout(() => setPosition(null), 500)

  }

  return (
    <button className='ripple' onClick={(e) => handleClickEvent(e)}>
      Click Me
      {position && (
        <span
          className='circle'
          style={{
            top: `${position.yInside + 'px'}`,
            left: `${position.xInside + 'px'}`,
          }}
        ></span>
      )}
    </button>
  )
}

export default ButtonRipple
