import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineLocalOffer, MdKeyboardArrowRight } from 'react-icons/md'
import dummyData from "../../../public/assets/js/dummy.json"

const Bottom = () => {

  return (
    <div className='bg-black px-6  text-white hidden md:block '>
      <div className='flex items-center justify-between font-poppins'>
        <div className='flex items-center gap-6'>
          <div className="dropdown inline-block relative ">
            <div className=" text-white font-normal bg-gray-900 py-1.5 px-4 rounded inline-flex items-center ">
              <span>Browse Categories</span>
            </div>
            <ul className="dropdown-content absolute z-50 hidden text-gray-900 pt-1">
              {dummyData.map((item) => (
                <li key={item.id} className="dropdown shadow-2xl">
                  <span className='flex items-center justify-between'>
                    <h1 className="bg-white hover:bg-gray-100 font-medium duration-300 w-44 py-2 px-4 block" >{item.title}</h1>
                  </span>
                  {item.subCat && (
                    <ul className="dropdown-content absolute hidden text-gray-700  pl-5 ml-[156px] -mt-10 ">
                      <div className='grid grid-cols-3 w-max bg-white shadow-md'>
                        {item.subCat.map((sitem) => (
                          <li key={sitem.id} className='col-span-1' >
                            <h1 className=" py-2 px-4 block font-[600] border border-gray-200 border-t-0 border-l-0 border-r-0 border-b mr-2">{sitem.title}</h1>

                            {sitem.label3.map((last) => (
                              <Link href={""} key={last.id} className='mt-1'>
                                <p className="py-1 px-4 block ">{last.title}</p>
                              </Link>
                            ))}
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>))}
            </ul>
          </div>




          <div className='flex items-center gap-5'>
            <Link className='hover:text-bgColor duration-300' href={""}>Home</Link>
            <Link className='hover:text-bgColor duration-300' href={""}>Shope</Link>
            <Link className='hover:text-bgColor duration-300' href={""}>Vendor</Link>
            <Link className='hover:text-bgColor duration-300' href={""}>Best Sellers</Link>
            <div className='hover:text-bgColor duration-300 flex items-center gap-2'>
              <p>Customer Service</p>
              <IoIosArrowDown size={18} />
            </div>
          </div>

        </div>
        <div className='hidden lg:flex items-center gap-4'>
          <Link href={""}>
            + Add Product
          </Link>
          <div className='flex items-center gap-2 cursor-pointer'>
            <MdOutlineLocalOffer size={20} />
            <p>{"Today's"} Deals</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom
