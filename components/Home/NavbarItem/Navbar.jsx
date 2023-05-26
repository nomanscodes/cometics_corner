import React from 'react'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import TopPhone from './TopPhone'

const Navbar = () => {
    return (
        <>
            <div className='bg-white w-full shadow-md md:shadow-none'>
                <TopPhone />
                <Top />
                <hr className='opacity-70 ' />
                <Middle />
            </div>
            <Bottom />
        </>

    )
}

export default Navbar
