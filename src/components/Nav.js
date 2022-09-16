import { Fragment } from 'react';
import { Outlet,Link } from "react-router-dom"
import './nav.scss'
 
 
const Nav=()=>{
    return(
    <Fragment>
        
        <div className='navigation'> 
         <h1 className='logo'>|RENTT|</h1>
        <div className='nav-links-container'>
        <Link className='nav-link' to='/home'>
              HOME
          </Link>
          <Link className='nav-link' to='/dash'>
              DASHBOARD
          </Link>
          <Link className='nav-link' to='/products'>
             PRODUCTS
          </Link>
          <Link className='nav-link' to='/client'>
              CLIENT
          </Link>
        </div>
       
        </div>
        
      <Outlet/>
      
    </Fragment>)
      
      
  }

  export default Nav;