import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default class Layout extends Component {
  render() {
    return <>
  <div className="layout d-flex flex-column min-vh-100">
    <Navbar/>
      <div className="outlet_content flex-grow-1">
        <Outlet/>
      </div>
    <Footer/>
  </div>
  </>
  }
}
