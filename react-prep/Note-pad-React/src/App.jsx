import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Navabar from "./Component/Navabar"
import Home from "./Component/Home"
import Paste from "./Component/paste"
import ViewPaste from "./Component/ViewPaste"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navabar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element:
        <div>
          <Navabar />
          <Paste />
        </div>
    },
    {
      path: "/pastes/:id",
      element:
        <div>
          <Navabar />
          <ViewPaste />
        </div>
    }
  ]
)
export default function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}