import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopPhone = () => {
    return (
        <div className='container mx-auto md:hidden px-3 flex items-center justify-between'>
            <div className='logoSection'>
                <Image
                    alt='logo'
                    src="/logo1.png"
                    height={40}
                    width={90}
                />
            </div>
            <div className='account&cart flex items-center gap-4'>
                <Link href={""} className='flex items-center gap-1'>
                    <span className='text-base font-semibold font-poppins'>Sign in</span>
                    <Image
                        alt='accountt'
                        src="/SVG/accountBlack.svg"
                        height={20}
                        width={20}
                    />
                </Link>
                <div className='cartSection flex items-center '>
                    <Link
                        href={"/cartpage"}
                        className="h-10 w-10 rounded-full z-10 flex justify-center items-center  relative mt-2"
                    >
                        <p className="h-5 w-5 bg-bgColor rounded flex items-center justify-center absolute z-50 mb-6 ml-5 ">
                            <span className="fontSize10 text-white">05</span>
                        </p>
                        <Image src="/SVG/cart2.svg" alt='cart' height={20}
                            width={22}></Image>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopPhone