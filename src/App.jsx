import React from 'react'
import './App.css'
import ShowCount from './components/showCount/showCount'
import MyButton from './components/button/button'
function App() {
  const [counter, setCounter] = React.useState(0)

  const sumORest = (counterType) =>
    counterType === 'minus' ? setCounter(counter - 1) : setCounter(counter + 1)

  return (
    <>
      <ShowCount counter={counter} />
      <div className='divBtn'>
        <MyButton nameBtn='Restar' event={sumORest} operation='minus' />
        <MyButton operation='plus' event={sumORest} />
      </div>
    </>
  )
}

export default App
