import { useState } from 'react'
import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homepage, AllStories, Create, Edit, Error, Login, Mystories, Register, Welcome, SingleStory} from './pages'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='allstories' element={<AllStories/>} />
        <Route path='create' element={<Create/>} />
        <Route path='edit/:storyId' element={<Edit/>} />
        <Route path='*' element={<Error/>} />
        <Route path='login' element={<Login/>} />
        <Route path='mystories' element={<Mystories/>} />
        <Route path='register' element={<Register/>} />
        <Route path='single/:storyId' element={<SingleStory/>} />
        <Route path='welcome' element={<Welcome/>} />
        
      </Routes>
    </Router>
     
    </>
  )
}

export default App
