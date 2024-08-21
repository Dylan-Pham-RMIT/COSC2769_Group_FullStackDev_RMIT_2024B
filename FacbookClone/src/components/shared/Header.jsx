import React, { useState } from 'react'
import logo from '../../image/logo.png'
import avatar from '../../image/avatar.jpg'
import '../../css/header.css'
import DropDownBar from './DropDownBar'
import { NavLink } from 'react-router-dom'

function Header() {
  
const [dropbar,setDropBar] = useState(false);
function toggle(){
  setDropBar(false);
}
  return (
    <div className='header_container'>

        <div className="search_bar">
            <img src={logo} alt="" />
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search CrabNest' />
            </div>
        </div>

        <div className="header_nav">
        <NavLink to={"/home"}><i class="ri-home-5-fill"></i></NavLink>
        <i class="ri-team-fill"></i>
        <i class="ri-group-2-fill"></i>
        <i class="ri-tools-fill"></i>
        </div>
    
        <div className="noti_action">
        <i class="ri-notification-4-fill"></i>
        <img src={avatar} alt="" onClick={()=>setDropBar((prev) => !prev)}/>

        {dropbar === true?<div><DropDownBar toggleDropBar={toggle}/>
          </div>:<div></div>}
        
        </div>
    </div>
  )
}

export default Header