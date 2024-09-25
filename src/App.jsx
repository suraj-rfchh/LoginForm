import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Forgotpass from './components/Forgotpass'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginForm />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/forgotpass' element={<Forgotpass/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

