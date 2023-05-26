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
                setShow("-translate-y-[90px]");
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
            <div className="bg-white w-full shadow-md hidden md:block">
                <Top />
                <hr className='opacity-70 ' />
                <Middle />
                <Bottom />
            </div>
            <div className={`shadow-md bg-white md:hidden z-20 sticky top-0 transition-transform duration-300 ${show}`}>
                <TopPhone />
            </div>

        </>

    )
}

export default Navbar
