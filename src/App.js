import React from 'react'
import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home'

import Services from './components/Pages/Services/Services'
import Gallery from './components/Pages/Gallery/Gallery'
import Payment from './components/Pages/Payment/Payment'
import Enquiry from './components/Pages/Enquiry/Enquiry'
import NavHeader from './components/Navbar/NavHeader'
function App() {
    return(
    <Router>
        <NavHeader/>

        <Switch>
            <Route path = '/' exact component = {Home}/>
            
            <Route path = '/Services'  component = {Services}/> 
            <Route path = '/gallery'  component = {Gallery}/> 
            <Route path = '/payment'  component = {Payment}/> 
            <Route path = '/enquiry'  component = {Enquiry}/> 
        </Switch>
    </Router>

    )

   
}
export default App