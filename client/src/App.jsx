import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

// components
import Layout from "./components/Layout"

// pages
import { Home, Signin, Books, Dashboard, AddBook, EditBook} from './pages'
//hooks
import useToken from './hooks/useToken'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route path='/' element={<Home />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/books' element={<Books />}/>
            <Route path='/addbook' element={<AddBook />}/>
            <Route path='/editbook/:id' element={<EditBook />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Route>
          <Route path='*' element={<h1>Page not found 404</h1>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
