import React from 'react'
import CompareCard from './CompareCard'

const Table = () => {
    return (
        <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
                <thead className="">
                    <tr>
                        <th scope="col" className="px-8">
                            <span className="sr-only"></span>
                        </th>
                        <th scope="col" className="px-2">
                            <CompareCard />
                        </th>
                        <th scope="col" className="px-2">
                            <CompareCard />

                        </th>
                        <th scope="col" className="px-2">
                            <CompareCard />

                        </th>
                        <th scope="col" className="px-2">
                            <CompareCard />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b border-t">
                        <td className="w-32 whitespace-nowrap text-[16px] font-[600] py-2 px-4">
                            Customer Rating
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            <div className='flex items-center gap-2'>
                                <picture className='flex items-center gap-1'>
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                </picture>
                                <h1 className='text-sm font-medium'>(5653)</h1>
                            </div>
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            <div className='flex items-center gap-2'>
                                <picture className='flex items-center gap-1'>
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                </picture>
                                <h1 className='text-sm font-medium'>(5653)</h1>
                            </div>
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            <div className='flex items-center gap-2'>
                                <picture className='flex items-center gap-1'>
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                </picture>
                                <h1 className='text-sm font-medium'>(5653)</h1>
                            </div>
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            <div className='flex items-center gap-2'>
                                <picture className='flex items-center gap-1'>
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                    <img src="/SVG/star.svg" className='h-4' alt="" />
                                </picture>
                                <h1 className='text-sm font-medium'>(5653)</h1>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-t bg-gray-100">
                        <td className="w-32 whitespace-nowrap text-[16px] font-[600] py-2 px-4">
                            Price
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            598 TK
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            598 TK
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            598 TK
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            598 TK
                        </td>
                    </tr>
                    <tr className="border-b border-t bg-white">
                        <td className="w-32 whitespace-nowrap text-[16px] font-[600] py-2 px-4">
                            Sold By
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                    </tr>
                    <tr className="border-b border-t bg-gray-100">
                        <td className="w-32 whitespace-nowrap text-[16px] font-[600] py-2 px-4">
                            Brand Name
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Menom
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Softsoap
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Lorem
                        </td>
                    </tr>
                    <tr className="border-b border-t bg-white">
                        <td className="w-32  text-[16px] font-[600] py-2 px-4">
                            Recommended Uses For Product
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Body
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Moisturizing,Exfoliating,Body
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Body
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            Body
                        </td>
                    </tr>
                    <tr className="border-b border-t bg-gray-100">
                        <td className="w-32  text-[16px] font-[600] py-2 px-4">
                            Size
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            21 Fl Oz (Pack of 4)
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            21 Fl Oz (Pack of 1)
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            21 Fl Oz (Pack of 2)
                        </td>
                        <td className="font-semibold text-gray-900 px-3">
                            21 Fl Oz (Pack of 7)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table