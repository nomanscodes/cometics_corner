import Link from 'next/link'
import React from 'react'
import InputField from '../ReuseableComponent/BaseInput'

const AccountInformation = ({ setFormTab }) => {

    const submitHandeler = () => {
        setFormTab("webandapps_list")
        sessionStorage.setItem("affiliateTab", "webandapps_list")
    }

    return (
        <>
            <div className='bg-white border shadow-sm'>
                <h3 className='p-3 text-bgColor text-[14px] md:text-[15px] font-medium'>Your Account Information</h3>
                <hr />
                <div className='p-2 md:p-3'>
                    <span className='flex items-center gap-1 text-[13px] md:text-[15px] font-medium'>
                        <h4 className=' text-zinc-950 hidden md:block'>Important:</h4>
                        <h4 className='text-zinc-600'>Please read
                            <span className='text-green-700 px-1'>
                                <Link href={""}>
                                    these instraction
                                </Link>
                            </span>
                            before fill this form
                        </h4>
                    </span>
                    <h4 className='text-zinc-950 text-[13px] md:text-[15px] font-medium mt-3'>Fill the form with correct information</h4>
                    <div className='md:mt-6 md:w-3/5 flex flex-col gap-3'>
                        <InputField
                            border
                            label='Affiliate Name'
                            placeholder={"enter your affiliate name"}
                        />
                        <InputField
                            border
                            label='Address 1'
                            placeholder={"address1"}
                        />
                        <InputField
                            border
                            label='Address 2'
                            placeholder={"address2"}
                        />
                        <InputField
                            border
                            label='City'
                            placeholder={"city"}
                        />
                        <InputField
                            border
                            label='Division'
                            placeholder={"division"}
                        />
                        <InputField
                            border
                            label='Zip or Postal Code'
                            placeholder={"zip or postal code"}
                        />
                        <div className='col-span-1 flex flex-col gap-[2px] mt-2 relative'>
                            <picture>
                                <img src="/SVG/BdFlag.svg" className="w-7 absolute mt-[28px]  md:mt-[30px] ml-1" alt="" />
                            </picture>
                            <label className='text-[13px] md:text-[14px] opacity-90'>Country</label>
                            <input
                                placeholder='Bangladesh'
                                disabled
                                className="py-[10px] md:py-[10px] w-[100%] text-[12px] md:text-[13px] pl-10 inputOuteLine rounded-md md:rounded-sm bg-white border border-gray-400"
                            />
                        </div>
                        <div>
                            <span className="flex items-center gap-2">
                                <input
                                    id="red-checkbox"
                                    value=""
                                    type="checkbox"
                                    className="checked w-4 h-4 accent-bgColor"
                                />
                                <p className="text-base footerText3">
                                    I agree all terms and conditon
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 flex items-center justify-end'>
                <h1 onClick={() => submitHandeler()} className='md:px-6 px-4 py-[6px] md:py-2 text-white bg-bgColor'>Next</h1>
            </div>
        </>

    )
}

export default AccountInformation