import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import Navabar from './components/Navabar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class   extends Component {
  render() {
    return (
      <>
      <Router>
        
        <Navabar/>
        <Routes>
          <Route exact path="/" element={<News key="home" pageSize={6} category={'general'}/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} category={'entertainment'}/>} />
          <Route exact path="/general" element={<News key="general" pageSize={6} category={'general'}/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={6} category={'sports'}/>} />
          <Route exact path="/science" element={<News key="science" pageSize={6} category={'science'}/>} />
          <Route exact path="technology" element={<News key="technology" pageSize={6} category={'technology'}/>} />
          <Route exact path="health" element={<News key="health" pageSize={6} category={'health'}/>} />

        </Routes>
        </Router>  
      </>
    )
  }
}
