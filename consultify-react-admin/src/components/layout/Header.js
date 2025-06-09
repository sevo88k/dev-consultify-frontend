import React from 'react'
import lightLogo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
         <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
                        <div className="navbar-brand-box">
                         
                            <Link to="/" className="logo">
                                <span className="logo-sm">
                                   <img src={lightLogo} alt="" height="12" />
                                </span>
                                <span className="logo-lg">
                                    <img src={lightLogo} alt="" height="50"/>                                   
                                </span>
                            </Link>
                            
                        </div>

                         <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect d-none" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                    
                    </div>

                    
                </div>
            </header>
    </div>
  )
}

export default Header