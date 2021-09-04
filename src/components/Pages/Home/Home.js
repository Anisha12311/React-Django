import React from 'react' 
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../images/1 (1).jpg'
import { Button } from 'react-bootstrap';
import About1 from './About1';
import Footer from './Footer';
import Social from './Social';
const Home = () => {
    return (
        <div className = "content-wrap" >
      
        <figure className = "position-relative">
             <img  src ={Logo} 
                   alt = "Logo" style ={{ width : "100%", height : "550px"}}/>
            
          <figcaption>
          Outdoor & Adventure Business
          <p>your Adventure and Outdoor business instantly</p>
          <Button variant="secondary">GET START</Button>{' '}
          </figcaption>
          <About1/>
          <Social/>
        <Footer/>
        </figure>
      
        </div>
        
       
    )
}
export default Home


