import React from 'react'

const AddressCard = () => {
    return (
        <div className="p-3 border border-gray-400 rounded flex items-center gap-2">
            <div>
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 p-[2px] rounded-full border border-gray-700 ">
                        <picture>
                            <img src="/SVG/correct.svg" alt="" />
                        </picture>
                    </span>
                    <h3 className="text-[13px] font-semibold text-gray-800">Home Address</h3>
                    <button className="text-[10px] font-medium text-gray-900 bg-gray-300 p-1 rounded">Default</button>
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
            <button className="text-[12px] font-medium text-gray-900 bg-gray-300 py-1 px-3 rounded">Edit</button>
        </div>
    )
}

export default AddressCard