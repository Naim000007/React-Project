
import "./App.css"
import CounterUseState from "./Hooks/UseState/CounterUseState"
import FormUseState from "./Hooks/UseState/FormUseState"
import UseState from './Hooks/UseState/UseState'

const App = () => {


  return (
    <div>
      {/* <UseState /> */}
      {/* <CounterUseState /> */}
      <FormUseState />
    </div>
  )
}

export default App



//useState is a react hook which creates an state variable which helps ust to track state in components and updates the user interface when the state changes