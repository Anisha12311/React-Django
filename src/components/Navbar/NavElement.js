import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: linear-gradient(#E91E63, #F5F5F5);
    height : 80px;
    display : flex;
    justify-content : space-between;
    padding: 0.5rem calc((100vw-1000px) /2);
    z-index : 10;
    box-shadow: 5px 10px 8px  #888888;
`

export const NavLink = styled(Link)`
   color : #fff;
   display : flex;
   align-items : center;
   text-decoration : none;
   padding : 0 1rem;
   height : 100%;
   cursor: pointer;
   margin-left : 30px;
    
   &.ative {
       color: #15cdfc;
   }
  `;



  export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display : flex;
  align-items : center;
  margin-right: 140px;
  
  @media screen and (max-width : 768px){

     display : none;
     color : white;
     text-align : center;
     width : 100%;
     transition : all 0.5s ease;
  }

`




