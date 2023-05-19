
import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress :0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})

  }
  render() {
    return (<>
    <Router>
    <Navbar/>
    <LoadingBar
    height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
          <Route path="/" exact element={<News setProgress={this.setProgress}  country="in" catagory="general"/>} />
          <Route path="/business" exact element={<News setProgress={this.setProgress}  country="in" catagory="business"/>} />
          <Route path="/entertainment" exact element={<News setProgress={this.setProgress}  country="in" catagory="entertainment"/>} />
          <Route path="/health" exact element={<News setProgress={this.setProgress}  country="in" catagory="health"/>} />
          <Route path="/science" exact element={<News setProgress={this.setProgress}  country="in" catagory="science"/>} />
          <Route path="/sports" exact element={<News setProgress={this.setProgress}  country="in" catagory="sports"/>} />
          <Route path="/technology" exact element={<News setProgress={this.setProgress}  country="in" catagory="technology"/>} />
        </Routes>
    </Router>
      </>
    )
  }
}



