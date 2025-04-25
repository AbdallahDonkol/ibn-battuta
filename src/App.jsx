import React, { Component } from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import './i18n';

const routes = createBrowserRouter([{
  path:"/", element:<Layout/>, children:[
    {index:true,element:<Home/>}, //route
    {path:'home',element:<Home/>}, //route
    {path:'*',element:<NotFound/>}, //route
  ]
}])

export default class App extends Component {
  render() {
    return <>
      <RouterProvider router={routes}/>
    </>
  }
}
