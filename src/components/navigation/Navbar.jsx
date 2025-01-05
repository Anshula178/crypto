import React from 'react'
import { Link } from 'react-router-dom'
import Navlink from './Navlink'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='text-white bg-black'>
    <div className='  container mx-auto flex justify-between items-center p-4 '>
      <div className=''>
        <Link to="/" className='text-slate-100 text-xl font-sans font-bold'>CRYPTO</Link>
      </div>
      <div className='flex  '>
        <Navlink link='/nft'>NFT</Navlink>
        <Navlink link='/crypto'>Crypto</Navlink>
        <Navlink link='/aboutUs'>About Us</Navlink>
        <Navlink link='/ourTeam'>Our Team</Navlink>
        <Navlink link='/contactUs'>Contact Us</Navlink>
        <Button></Button>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
