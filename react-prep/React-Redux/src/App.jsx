import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Features/Counter/counterSlice'

function App() {
  const [ammount, setAmmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handelIncrementClick = () => {
    dispatch(increment())
  }
  const handelDecrementClick = () => {
    dispatch(decrement())
  }
  const handelResetClick = () => {
    // setCount(0)
    dispatch(reset())
  }
  const handelIncementClick = () => {
    dispatch(incrementByAmount(ammount))
  }

  return (
    <>
      <div>
        <button onClick={handelIncrementClick}>+</button>
        <p>
          {count}
        </p>
        <button onClick={handelDecrementClick}>-</button> <br></br>
        <br></br>
        <button onClick={handelResetClick}>Reset </button>
        <br></br>
        <input
          type='number'
          value={ammount}
          placeholder='Enter a Number'
          onChange={(e) => setAmmount(e.target.value)}></input>
        <br></br>
        <button onClick={handelIncementClick}>Inc by Amount</button>
      </div>
    </>
  )
}

export default App
