import React from 'react'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

const Middle = () => {



    return (
        <div className=' px-6 flex items-center justify-center gap-5 font-poppins bg-bgColor text-white footerText2 lg:grid grid-cols-4'>
            <div className="leftSide col-span-1 footerText2">
                <div className="p-2 text-center lg:text-left">
                    <div className=" flex items-center justify-center lg:block">
                        <picture>
                            <img
                                className="h-7"
                                src="/logo1.png"
                                alt=""
                            />
                        </picture>
                    </div>
                    <h1 className="mt-2">Phone: 6787686787</h1>

                    <div className="mt-2">
                        <h1>
                            Monday-Friday: <b>9.00</b> am - <b>8.00 </b> pm
                        </h1>
                        <h1>
                            Saturday: <b>10.00</b> am - <b>6.00 </b> pm
                        </h1>
                    </div>

                    <h1 className=" whitespace-nowrap">22-No Road.Khilkhet,Dhaka,Bangladesh</h1>

                    <Link
                        className="flex items-center mt-2"
                        href={">>"}
                    >
                        <div className="flex gap-2">
                            <FiMail size={22} />
                            <p className="font-medium">
                                nomanhossain@gmail.com
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="middle1 p-2 hidden sm:block">
                <h1 className='font-bold '>GET TO KNOW US</h1>
                <div className='mt-2 flex flex-col'>
                    <Link className=' hover:underline duration-300' href={""}> Careers </Link>
                    <Link className=' hover:underline duration-300' href={""}> Blog</Link>
                    <Link className=' hover:underline duration-300' href={""}>About Amazon</Link>
                    <Link className=' hover:underline duration-300' href={""}>Investor Relations</Link>
                    <Link className=' hover:underline duration-300' href={""}>Amazon Devices</Link>
                    <Link className=' hover:underline duration-300' href={""}> Amazon Science</Link>
                </div>
            </div>
            <div className="middle2 p-2 hidden md:block">
                <h1 className='font-bold'>GET TO KNOW US</h1>
                <div className='mt-2 flex flex-col'>
                    <Link className=' hover:underline duration-300' href={""}> Careers </Link>
                    <Link className=' hover:underline duration-300' href={""}> Blog</Link>
                    <Link className=' hover:underline duration-300' href={""}>About Amazon</Link>
                    <Link className=' hover:underline duration-300' href={""}>Investor Relations</Link>
                    <Link className=' hover:underline duration-300' href={""}>Amazon Devices</Link>
                    <Link className=' hover:underline duration-300' href={""}> Amazon Science</Link>
                </div>
            </div>
            <div className="rightSide p-2 hidden xs:block">
                <h1 className='font-bold'>GET TO KNOW US</h1>
                <div className='mt-2 flex flex-col'>
                    <Link className=' hover:underline duration-300' href={""}> Careers </Link>
                    <Link className=' hover:underline duration-300' href={""}> Blog</Link>
                    <Link className=' hover:underline duration-300' href={""}>About Amazon</Link>
                    <Link className=' hover:underline duration-300' href={""}>Investor Relations</Link>
                    <Link className=' hover:underline duration-300' href={""}>Amazon Devices</Link>
                    <Link className=' hover:underline duration-300' href={""}> Amazon Science</Link>
                </div>
            </div>
        </div>
    )
}

export default Middle
