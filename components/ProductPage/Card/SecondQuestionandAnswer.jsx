import React from 'react'
import { AiFillLike,AiFillDislike } from 'react-icons/ai'
import { FaUserShield } from 'react-icons/fa'


const SecondQuestionandAnswer = () => {
    return (
        <div>
            <div className='p-2'>
                <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                <h4 className='text-[11px] mt-[2px]'>A : This
                    brand is Uniliver</h4>
                <span className='flex items-center justify-between mt-1'>
                    <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                    <span className='flex items-center gap-2'>
                        <span className='flex items-center gap-1 opacity-80'>
                            <AiFillLike className='' size={12} />
                            <h4 className=' text-[11px] font-medium'>9</h4>
                        </span>
                        <span className='flex items-center gap-1 opacity-80'>
                            <AiFillDislike className='' size={12} />
                            <h4 className=' text-[11px] font-medium'>4</h4>
                        </span>
                    </span>
                </span>
                <span className='flex items-center gap-1 mt-[2px]'>
                    <FaUserShield size={12} className='opacity-75' />
                    <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                </span>
            </div>
            <hr />
        </div>
    )
}

export default SecondQuestionandAnswer