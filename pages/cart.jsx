import Head from 'next/head'
import React from 'react'
import Layout from '@/Layouts/Layout'
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'



const cart = () => {
  return (
    <Layout>
      <Head>
        <title>Cometics Center Cart_page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='py-4 px-2 md:px-6 bg-white'>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[2px]  text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            <Link href={""} className="uppercase">
              Home
            </Link>
            <FiChevronRight size={14} />
          </div>
          <div className="flex items-center gap-[2px] text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Link href={""} className="uppercase">
              cart
            </Link>
            <FiChevronRight size={14} />
          </div>
        </div>
        <div className='flex flex-col gap-4 md:grid grid-cols-7 mt-3'>
          <div className='mobileCardSection sm:hidden '>
            <div className='flex items-center justify-between p-2 bg-white shadow-md'>
              <picture>
                <img src="/demo/p/p1.avif" alt="product" className='h-16 rounded' />
              </picture>
              <div className='flex flex-col gap-4'>
                <h3 className='capitalize text-xs font-medium opacity-80'>americn women hair jell (500ml)</h3>
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-2'>
                    <h5 className='price text-xs font-medium opacity-80'>484 TK</h5>
                    <RxCross2 size={11} className='opacity-80' />
                    <select className='border-none focus:outline-0 bg-gray-100 text-xs font-medium opacity-80 capitalize px-2'>
                      <option className='text-xs font-medium opacity-80 capitalize' value="1">1</option>
                      <option className='text-xs font-medium opacity-80 capitalize' value="2">
                        2
                      </option>
                      <option className='text-xs font-medium opacity-80 capitalize' value="3">
                        3
                      </option>
                    </select>
                  </span>
                  <h5 className='Totalprice text-sm  font-semibold opacity-80'>484 TK</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='md:col-span-5 hidden sm:block'>
            <div className="relative shadow-md">
              <table className="w-full text-left">
                <thead className="text-xs text-white uppercase bg-bgColor">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Unit Price
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Total
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <picture>
                        <img src="/demo/p/p3.avif" className='w-36' alt="shampoo" />
                      </picture>
                    </th>
                    <td className="px-3 py-4">
                      <h2 className='capitalize text-sm font-medium opacity-80'>Kashmiri Face wash</h2>
                      <h6 className='text-xs capitalize mt-2 max-w-sm opacity-80'>This is Kashmiri facewash ,its totaly naturul</h6>
                    </td>
                    <td className="px-3 py-4 text-xs font-medium opacity-80">
                      580 TK
                    </td>
                    <td className="px-3 py-4 text-xs ">
                      <span className='border border-gray-300 p-1 flex items-center justify-between gap-2'>
                        <BiMinus size={18} className='cursor-pointer opacity-80' /> <h5 className='text-sm font-medium opacity-80'>5</h5><BiPlus size={18} className='cursor-pointer opacity-80' />
                      </span>
                    </td>
                    <td className="px-3 py-4 text-xs font-medium  opacity-80">
                      2500 TK
                    </td>
                    <td className="px-3 py-4 text-xs font-medium ">
                      <AiTwotoneDelete size={22} className='opacity-80 cursor-pointer' />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <picture>
                        <img src="/demo/p/p3.avif" className='w-36' alt="shampoo" />
                      </picture>
                    </th>
                    <td className="px-3 py-4">
                      <h2 className='capitalize text-sm font-medium opacity-80'>Kashmiri Face wash</h2>
                      <h6 className='text-xs capitalize mt-2 max-w-sm opacity-80'>This is Kashmiri facewash ,its totaly naturul</h6>
                    </td>
                    <td className="px-3 py-4 text-xs font-medium opacity-80">
                      580 TK
                    </td>
                    <td className="px-3 py-4 text-xs ">
                      <span className='border border-gray-300 p-1 flex items-center justify-between gap-2'>
                        <BiMinus size={18} className='cursor-pointer opacity-80' /> <h5 className='text-sm font-medium opacity-80'>5</h5><BiPlus size={18} className='cursor-pointer opacity-80' />
                      </span>
                    </td>
                    <td className="px-3 py-4 text-xs font-medium  opacity-80">
                      2500 TK
                    </td>
                    <td className="px-3 py-4 text-xs font-medium ">
                      <AiTwotoneDelete size={22} className='opacity-80 cursor-pointer' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='md:col-span-2'>
            <div className=' bg-white shadow-md'>
              <div className='bg-bgColor py-[9px] w-full'>
                <h3 className='text-sm font-semibold opacity-90 uppercase text-white px-2'>summary</h3>
              </div>
              <div className='mt-2 px-4'>
                <span className='flex items-center justify-between '>
                  <h1 className='text-xs font-bold opacity-75 uppercase '>total 2</h1>
                  <h1 className='text-xs font-bold opacity-75 uppercase '>3500 TK</h1>
                </span>
                <span className='flex flex-col gap-2 mt-5'>
                  <h1 className='text-xs font-bold opacity-75 uppercase'>shipping</h1>
                  <select className='border-none focus:outline-0 bg-gray-100 py-[4px] text-xs font-medium opacity-80 capitalize'>
                    <option className='text-xs font-medium opacity-80 capitalize py-[2px]' value="1">standerd delivery 50 tk</option>
                    <option className='text-xs font-medium opacity-80 capitalize' value="2">
                      express delivery 80 tk
                    </option>
                    <option className='text-xs font-medium opacity-80 capitalize' value="3">
                      manual delivery 35 tk
                    </option>
                  </select>
                </span>
                <span className='flex flex-col gap-2 mt-5'>
                  <h1 className='text-xs font-bold opacity-75 uppercase'>give code</h1>
                  <div className='flex w-full relative mt-2'>
                    <input
                      type="text"
                      className="flex items-center bg-gray-200 w-full p-[5px] px-4 focus:outline-none text-sm"
                      placeholder="Enter your coupon"
                    />
                    <FaLongArrowAltRight className='absolute right-0 mt-2 opacity-75 mr-1 cursor-pointer' />
                  </div>
                </span>
                <hr className='mt-6 w-full opacity-90' />
                <span className='flex items-center justify-between mt-4'>
                  <h1 className='text-xs font-bold opacity-75 uppercase '>total price</h1>
                  <h1 className='text-xs font-bold opacity-75 uppercase '>3500 TK</h1>
                </span>
                <button className='w-full py-[6px] bg-bgColor uppercase text-white text-sm font-medium rounded mt-4 mb-1'>
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default cart