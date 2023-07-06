import React from 'react'

const AddressCard = ({ Bill }) => {
    return (
        <div className="p-3 border border-gray-400 border-opacity-70  rounded flex items-center gap-2 mt-2 h-fit">
            <div>
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 p-[2px] rounded-full border border-gray-700 ">
                        <picture>
                            <img src="/SVG/correct.svg" alt="" />
                        </picture>
                    </span>
                    {Bill ? <>
                        <h3 className="text-[13px] font-semibold text-gray-800 whitespace-nowrap">Same as shipping address
                        </h3>
                    </>
                        :
                        <>
                            <h3 className="text-[13px] font-semibold text-gray-800 whitespace-nowrap">Shipping address
                            </h3>
                        </>}

                    <h3 className="text-[10px] font-medium text-gray-900 bg-gray-300 p-1 rounded">Default</h3>
                </div>
                <div className="mt-3 ml-6">
                    <h3 className="text-[11px] font-medium text-gray-700">
                        321 Kabi Nazrul Soroi,Tejgaw
                    </h3>
                    <h3 className="text-[11px] font-medium text-gray-700">
                        Dhaka, Bangladesh
                    </h3>
                    <h3 className="text-[11px] font-medium text-gray-700 mt-1">
                        Mobile : 84320948734
                    </h3>
                </div>
            </div>
            <hr className="w-[50px] bg-slate-400 rotate-90" />
        </div>
    )
}

export default AddressCard