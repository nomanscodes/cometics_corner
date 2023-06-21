import React from 'react'
import QuestionAnswerCard from '../Card/Question&AnswerCard'
import { BiSearch } from 'react-icons/bi'
BiSearch

const QuestionAndAnswer = () => {
    return (
        <div className='px-6 mt-4'>
            <div className='question&answer mt-2 bg-white'>
                <h1 className='text-[18px] font-semibold opacity-95 mb-2 whitespace-nowrap'>QUESTIONS & ANSWERS</h1>
                <span className='flex items-center justify-between gap-12 relative'>
                    <input
                        type="text"
                        className="w-[400px] border rounded focus:outline-none text-sm py-[10px] pl-8"
                        placeholder="Search here"
                    />
                    <BiSearch size={22} className='absolute left-2 opacity-80' />
                </span>
                <div className='flex flex-col gap-3 mt-2'>
                    <QuestionAnswerCard />
                    <QuestionAnswerCard />
                </div>
            </div>

            <div className='mt-4'>
                <h1 className='text-[14px] font-semibold opacity-95 mb-2 whitespace-nowrap'>Ask your Qusetion :</h1>
                <span className='flex items-center gap-6'>
                    <input
                        type="text"
                        className="w-[400px] border rounded focus:outline-none text-sm py-[7px] pl-2"
                        placeholder="Enter your question"
                    />
                    <h1 className='text-[12px] font-semibold text-white  bg-bgColor py-[8px] px-4 rounded shadow-md cursor-pointer'>Send</h1>
                </span>
            </div>
        </div>
    )
}

export default QuestionAndAnswer