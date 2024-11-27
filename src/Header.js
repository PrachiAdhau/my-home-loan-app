import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='bg-dark d-flex justify-content-around'>
    <h1 className='text-warning'>HomeLoan mangement system</h1>
    <div className='mt-2'>
        <Link className='btn btn-light me-5' to={'/aad'}>Add Enquiry</Link> 
        <Link className='btn btn-light' to={'/view'}>View Enquiry</Link> 
        
    </div>
   </nav>
  )
}

export default Header;