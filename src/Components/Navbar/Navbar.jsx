import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../Images/car-blue.png'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavlinkClick = () =>{
    setNavbar(false)
  }

  const toggleNav = () =>{
    setNavbar(!navbar)
  }

  return (
    <div className='h-24 w-full fixed bg-white shadow-lg shadow-zinc-200 flex items-center justify-between md:px-10 z-[9999]'>
        <div className={`flex items-center cursor-pointer`}>
            <img className='md:w-[9vw] w-[20vw]' src={logo} alt="Car Hire Logo" />
            <h1 className='text-3xl font-bold'>Car <br /> <span className='text-blue-900'>Hire</span></h1>
        </div>

        <div className={`lg:flex hidden items-center md:gap-10 gap-2 text-lg font-semibold`}>
            <NavLink to='/' activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink to='/about' activeClassName="active" className="nav-link">About</NavLink>
            <NavLink to='/contact' activeClassName="active" className="nav-link">Contact</NavLink>
            <NavLink to='/model' activeClassName="active" className="nav-link">Models</NavLink>
            <NavLink to='/ourteam' activeClassName="active" className="nav-link">Our Team</NavLink>
        </div>
        <div className="p-1 lg:flex hidden gap-1">
            <button className='px-4 py-2 rounded-lg text-white bg-blue-600 font-semibold text-lg mr-4 hover:shadow-md  hover:shadow-blue-200'>Sign In</button>
            <button className='px-4 py-2 rounded-lg text-white bg-orange-600 font-semibold text-lg hover:shadow-md hover:shadow-orange-200'>Register</button>
        </div>

        {/* <FaBars className='text-3xl cursor-pointer bars' onClick={toggleNav}/> */}

        {navbar ? (
        <FaTimes
          className='text-3xl cursor-pointer bars mr-5'
          onClick={toggleNav}
        />
      ) : (
        <FaBars
          className='text-3xl cursor-pointer bars mr-5 lg:hidden'
          onClick={toggleNav}
        />
      )}

        {navbar && (
         <div className={` z-[999] fixed top-0 left-0 w-full ${navbar ? 'open' : 'close'}`}>
          <div className={`h-[90vh]  w-full bg-slate-100 gap-7 text-2xl flex flex-col font-semibold absolute top-20 text-center pt-20`}>
            <NavLink to='/'    activeClassName="active" className="nav-link" onClick={handleNavlinkClick}>Home</NavLink>
            <NavLink to='/about'    activeClassName="active" className="nav-link" onClick={handleNavlinkClick}>About</NavLink>
            <NavLink to='/contact'    activeClassName="active" className="nav-link" onClick={handleNavlinkClick}>Contact</NavLink>
            <NavLink to='/model'    activeClassName="active" className="nav-link" onClick={handleNavlinkClick}>Models</NavLink>
            <NavLink to='/ourteam'    activeClassName="active" className="nav-link" onClick={handleNavlinkClick}>Our Team</NavLink>
        </div>
          </div>
          )}
    </div>
  )
}

export default Navbar