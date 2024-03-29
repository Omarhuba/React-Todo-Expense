import React from 'react'
import '../Styles/Card.css'

export const Card = (props) => {
    const classes = 'card' + props.className
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}
