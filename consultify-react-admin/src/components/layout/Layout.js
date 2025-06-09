import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div id="layout-wrapper">
             <Header />
            <div class="vertical-menu">

                <div data-simplebar="" class="h-100">
                    <Sidebar />  
                </div>
            </div>
        {children}
        </div>
  )
}

export default Layout