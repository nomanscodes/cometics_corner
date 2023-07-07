import React, { useState } from 'react'
import InputField from '../ReuseableComponent/BaseInput'


const Settings = () => {
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        mobile_number: '',
        country: 'Bangladesh',
        division: '',
        distric: '',
        sub_distric: '',
        union: '',
        zip_code: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        <div className="px-3 md:px-5">
            <div>
                <div className="w-full md:grid grid-cols-2 gap-7 mt-6">
                    <InputField
                        type="name"
                        name="name"
                        label="Full Name"
                        value={shippingAddress.name}
                        onChange={handleChange}
                        placeholder={"Full name*"}
                        border
                    />
                    <div className='col-span-1 w-full flex flex-col 
                    gap-[2px] mt-4 md:mt-2 relative'>
                        <span className="flex items-center absolute 
                                        mt-[30px]  md:mt-[32px] ml-1">
                            <picture>
                                <img src="/SVG/BdFlag.svg" className="w-6" alt="" />
                            </picture>
                            <h2 className="text-[12px] md:text-[13px]">+088</h2>
                        </span>
                        <label className='text-[13px] md:text-[14px] opacity-90'>Phone Number</label>
                        <input
                            type="tel"
                            name="mobile_number"
                            onChange={handleChange}
                            value={shippingAddress.mobile_number}
                            placeholder="Mobile No*"
                            className="py-[10px] md:py-[10px] w-[100%] flex flex-1 text-[12px] md:text-[13px] pl-[65px] inputOuteLine rounded-md md:rounded-sm border"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-7 mt-1 md:mt-4">
                    <div className='col-span-1 flex flex-col gap-[2px] mt-2 relative'>
                        <picture>
                            <img src="/SVG/BdFlag.svg" className="w-6 absolute 
                            mt-[31px]  
                            md:mt-[34px] ml-1" alt="" />
                        </picture>
                        <label className='text-[13px] md:text-[14px] opacity-90'>Country</label>
                        <input
                            value={shippingAddress.country}
                            disabled
                            className="py-[10px] md:py-[10px] w-[100%] text-[12px] md:text-[13px] pl-8 inputOuteLine rounded-md md:rounded-sm border"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center mt-[12px]">
                        <h1 className="text-[13px] md:text-[14px] opacity-90">Division</h1>
                        <select className="w-[100%] py-[10px] md:py-[9px] px-2 md:px-3 text-[12px] md:text-[13px] focus:outline-none rounded-md md:rounded-sm border"
                            name="division"
                            value={shippingAddress.division}
                            onChange={handleChange}

                        >
                            <option value="Dhaka ">Dhaka</option>
                            <option value="Barisl ">Barisal</option>
                            <option value="Khulna ">Khulna</option>
                        </select>
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-7 mt-3 md:mt-4">
                    <div className="col-span-1 flex flex-col justify-center mt-3 md:mt-[10px]">
                        <h1 className="text-[13px] md:text-[14px] opacity-90">Distric</h1>
                        <select className="w-[100%] py-[10px] md:py-[10px] px-2 md:px-3 text-[12px] md:text-[13px] focus:outline-none rounded-md  md:rounded-sm border"
                            name="distric"
                            value={shippingAddress.distric}
                            onChange={handleChange}>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Barisl">Barisal</option>
                            <option value="Khulna">Khulna</option>
                        </select>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center mt-3 md:mt-[10px]">
                        <h1 className="text-[13px] md:text-[14px] opacity-90 ">Sub Distric</h1>
                        <select className="w-[100%] py-[10px] md:py-[10px] px-2 md:px-3 text-[12px] md:text-[13px] focus:outline-none rounded-md  md:rounded-sm border"
                            name="sub_distric"
                            value={shippingAddress.sub_distric}
                            onChange={handleChange}
                        >
                            <option value="Dhaka ">Dhaka</option>
                            <option value="Barisl ">Barisal</option>
                            <option value="Khulna ">Khulna</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-7 mt-2 md:mt-4">
                    <div className="col-span-1 flex flex-col justify-center mt-[10px]">
                        <h1 className="text-[13px] md:text-[14px] opacity-90 ">Union</h1>
                        <select className="w-[100%] py-[10px] md:py-[10px] px-2 md:px-3 text-[12px] md:text-[13px] focus:outline-none rounded-md  md:rounded-sm border"
                            name="union"
                            value={shippingAddress.union}
                            onChange={handleChange}

                        >
                            <option value="Dhaka ">Dhaka</option>
                            <option value="Barisl ">Barisal</option>
                            <option value="Khulna ">Khulna</option>
                        </select>
                    </div>
                    <InputField
                        type="number"
                        name="zip_code"
                        label="Zip code"
                        value={shippingAddress.zip_code}
                        onChange={handleChange}
                        placeholder={"Zip Code*"}
                        border

                    />
                </div>
                <div className='flex flex-col mt-3 md:mt-4 '>
                    <label className='text-[13px] md:text-[14px] opacity-90 '>Address</label>
                    <input
                        placeholder="Address*"
                        name="address"
                        onChange={handleChange}
                        value={shippingAddress.address}
                        className="py-[10px] md:py-[10px] w-full text-[12px] md:text-[13px] pl-2 md:pl-4 inputOuteLine rounded-md md:rounded-sm border"
                    />
                </div>
            </div>
            <button className='text-[12px] font-medium text-white bg-bgColor py-2 px-4 mt-5 rounded-sm'>Update</button>
        </div>
    )
}

export default Settings