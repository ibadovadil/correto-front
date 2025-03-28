import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const token = localStorage.getItem('token');
  const Navigate =useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    Navigate('/login')
  }
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
                  <Link to={'/'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Home</Link>
                </li>
                <li className="nav-item rounded">
                  <Link to={'/shop'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Shop</Link>
                </li>
                <li className="nav-item rounded">
                  <Link to={'/blog'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Blog</Link>
                </li>
                <li className="nav-item rounded">
                  <Link to={'/gallery'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Gallery</Link>
                </li>
                {token ? (
                  <li className="nav-item rounded">
                    <div className="nav-link profile-item">
                      <i className="bi bi-person-fill me-2" />{JSON.parse(atob(token.split('.')[1])).fullname}
                      <div className='dropDown py-2'>
                        <Link className="nav-link" to={'/profile'}>
                          Profile
                        </Link>
                        <Link className="nav-link" to={'/basket'}>
                          Basket
                        </Link>
                        <Link className="nav-link" to={'/wishlist'}>
                          Wishlist
                        </Link>
                        <button onClick={handleSignOut} className='btn btn-outline-danger'>
                          Log Out
                        </button>
                      </div>
                    </div>


                  </li>
                ) : (
                  <>
                    <li className="nav-item rounded">
                      <Link to={'/login'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Login</Link>
                    </li>
                    <li className="nav-item rounded">
                      <Link to={'/register'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Register</Link>
                    </li></>
                )}
                <li className="nav-item rounded">
                  <Link to={'/contact'} className="nav-link" ><i className="bi bi-telephone-fill me-2" />Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
