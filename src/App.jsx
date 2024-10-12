 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'
import './App.css'
import { Navbar } from './components/navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>+6</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

//https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux

export default App
