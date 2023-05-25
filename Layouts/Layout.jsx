import React from 'react'
import Navbar from '@/components/Home/NavbarItem/Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default Layout
