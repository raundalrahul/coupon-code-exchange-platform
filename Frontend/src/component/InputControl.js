import React from 'react'

export default function InputControl(props) {
  return (
    <div>
      {
        props.label && <label>{props.label}</label>
      }
      <input type="text" name="" id="" {...props} />
    </div>
  )
}
    