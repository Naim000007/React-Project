
import "./App.css"
import BasicUseEffect from "./Hooks/UseEffect/BasicUseEffect"
import Fetchapi from "./Hooks/UseEffect/Fetchapi"
import UseEffect from "./Hooks/UseEffect/UseEffect"
import UseMemoExample from "./Hooks/Usememo/UseMemoExample"
import UseMemo from "./Hooks/Usememo/UseMemoExample"
import FocusUseRef from "./Hooks/UseRef/FocusUseRef"
import UseRefHook from "./Hooks/UseRef/UseRefHook"
import CounterUseState from "./Hooks/UseState/CounterUseState"
import FormUseState from "./Hooks/UseState/FormUseState"
import UseState from './Hooks/UseState/UseState'

const App = () => {


  return (
    <div>
      {/* <UseState /> */}
      {/* <CounterUseState /> */}
      {/* <FormUseState /> */}
      {/* <UseEffect /> */}
      {/* <Fetchapi /> */}
      {/* <BasicUseEffect /> */}
      {/* <UseRefHook /> */}
      {/* <FocusUseRef /> */}
      <UseMemoExample />
    </div>
  )
}

export default App



//useState is a react hook which creates an state variable which helps ust to track state in components and updates the user interface when the state changes