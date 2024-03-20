import "./App.css"
import Content from "./Content/Content"
import Header from "./Header/Header"
import { Routes, Route } from 'react-router-dom'
import Login from "./Login/Login"
import Layout from "./Layout"
import Register from "./Register/Register"
import Pages from "./Pages/Pages"


function App() {
  return (
    <Routes>
      <Route path="/" element = { <Layout /> }>

        <Route path="/" element = {
          <> <Pages/> </>
        } />

        <Route path='/login' element = {
          <> <Login /> </>
        } />

        <Route path='/register' element = {
          <> <Register/> </>
        } />

        


      </Route>

    </Routes>
  )
}

export default App
