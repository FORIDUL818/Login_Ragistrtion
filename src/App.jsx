import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Ragistraion from "./Components/Ragistraion"
import Login from "./Components/Login"
import { ToastContainer,  } from 'react-toastify';




function App() {
  const router=createBrowserRouter([
    {
      path:"/ragistration",element:<Ragistraion/>
    },
    {
      path:"/login",element:<Login/>
    }
  ])
  return (
    <div>
      <ToastContainer/>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App