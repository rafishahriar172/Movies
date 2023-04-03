import{createBrowserRouter, RouterProvider,Route ,Outlet} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Menu from "./component/Menu"
import "./App.scss"

function App() {

  const Layout = () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/menu",
          element:<Menu/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
  ])
  return (    
      <RouterProvider router={router}/>    
  )
}

export default App
