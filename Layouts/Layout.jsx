import React from 'react'
import Navbar from '@/components/Home/NavbarItem/Navbar'
import Footer from '@/components/Home/FooterSection/Footer'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
