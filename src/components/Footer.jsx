import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; 2026 Recipe App. All rights reserved.</p>
        <p className="mb-0">Follow us on 
          <a href="#" className="text-light mx-1">Facebook</a> | 
          <a href="#" className="text-light mx-1">Instagram</a> | 
          <a href="#" className="text-light mx-1">Twitter</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer