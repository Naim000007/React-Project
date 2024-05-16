
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './Router/Router'

function App() {


  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App
