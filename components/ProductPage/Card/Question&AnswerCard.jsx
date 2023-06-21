import React from 'react'
import { AiOutlineLike,AiOutlineDislike } from 'react-icons/ai'
import { MdVerifiedUser } from 'react-icons/md'


const QuestionAnswerCard = () => {
  return (
    <div className='mt-1'>
      <h3 className='text-[12px] font-medium'>Q: It is shade 128</h3>
      <h4 className='text-[12px] mt-1'>A: 120</h4>
      <div className='flex items-center gap-5 mt-2'>
        <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
          <AiOutlineLike size={13} />
          <h5 className='text-[10px]'>Helpful for 43</h5>
        </span>
        <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
          <AiOutlineDislike size={13} />
          <h5 className='text-[10px]'>12</h5>
        </span>
      </div>
      <span className='flex items-center gap-1 mt-1'>
        <MdVerifiedUser size={12} />
        <h3 className='text-[11px] 
        font-medium'>Menom Seller</h3>
      </span>
    </div>
  )
}

export default QuestionAnswerCard