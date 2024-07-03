// import React from 'react'

const MyButton = ({ nameBtn, operation, event }) => {
  return (
    <button
      onClick={() => {
        event(operation)
      }}
    >
      {nameBtn ? 'Restar' : 'Sumar'}
    </button>
  )
}

export default MyButton
