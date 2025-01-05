import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import Navlink from './Navlink';
import { CrossIcon, MenuIcon, XIcon } from 'lucide-react';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-white bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-slate-100 text-xl font-sans font-bold">
            CRYPTO
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Navlink link="/nft">NFT</Navlink>
          <Navlink link="/crypto">Crypto</Navlink>
          <Navlink link="/aboutUs">About Us</Navlink>
          <Navlink link="/ourTeam">Our Team</Navlink>
          <Navlink link="/contactUs">Contact Us</Navlink>
          <Button />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XIcon size={24} className="text-white" />
            ) : (
              <MenuIcon size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black text-white p-4">
          <Navlink link="/nft" onClick={toggleMobileMenu}>NFT</Navlink>
          <Navlink link="/crypto" onClick={toggleMobileMenu}>Crypto</Navlink>
          <Navlink link="/aboutUs" onClick={toggleMobileMenu}>About Us</Navlink>
          <Navlink link="/ourTeam" onClick={toggleMobileMenu}>Our Team</Navlink>
          <Navlink link="/contactUs" onClick={toggleMobileMenu}>Contact Us</Navlink>
          <Button />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
