import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])
  return (
    <>
      <div className='container'>
        <nav
          className={`navbar navbar-expand-lg navbar-dark`}
          style={{
            backgroundColor: scrolling ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
            transition: 'background-color 0.3s ease-in-out'
          }}
        >
          <div className="container-fluid">
            <p className="navbar-brand"> </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-md-auto gap-2">


                <li className="nav-item rounded">
                  <p className="nav-link" ><i className="bi bi-telephone-fill me-2" />Home</p>
                </li>
                <li className="nav-item rounded">
                  <Link to={'/shop'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Shop</Link>
                </li>
                <li className="nav-item rounded">
                  <Link to={'/blog'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Blog</Link>
                </li>
                <li className="nav-item rounded">
                  <p className="nav-link" ><i className="bi bi-telephone-fill me-2" />Contact</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Navigation