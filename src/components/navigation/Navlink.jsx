import React from 'react'
import { Link } from 'react-router-dom';

const Navlink = (props) => {
    const{link,children}=props;
  return (
    <div>
      <Link to={link} className='text-slate-100 px-6 text-base py-3 font-sans font-medium hover:text-gray-400'>{children}</Link>
    </div>
  )
}

export default Navlink
