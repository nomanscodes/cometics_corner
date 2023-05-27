import React from 'react'
import Navbar from '@/components/Home/NavbarItem/Navbar'
import Footer from '@/components/Home/FooterSection/Footer'
import Bottom from '@/components/PhoneBottom/Bottom'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            <div>{children}</div>
            <Bottom />
            <Footer />
        </div>
    )
}

export default Layout
