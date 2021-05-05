import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <div style={{width:'100%',height:'80px',background:'#fff',boxShadow:'0px 0px 10px #e6e1da'}}>

       <img src={logo}></img>
       <FaBars style={{position:'absolute',right:'3'}}/>
    </div>
  )
}

export default Navbar
