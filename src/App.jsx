import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import CommonHtml from './components/CommonHtml'
import Contact from './components/Contact'
import Student from './components/Student'

function App() {

  return (
    <main className='app'> 
    <Routes>
      <Route path='/' element={<CommonHtml/>}>
      <Route path="/" element={<Student/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </main>
    
  )
}

export default App
