import React from 'react'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import TopPhone from './TopPhone'
import { useState, useEffect } from 'react'

const Navbar = () => {


    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <div className={`bg-white w-full shadow-md md:shadow-none sticky top-0 ${show} z-50`}>
                <TopPhone />
                <Top />
                <hr className='opacity-70 ' />
                <Middle />
                <div className='bg-black'>
                    <Bottom />
                </div>
            </div>

        </>

    )
}

export default Navbar
