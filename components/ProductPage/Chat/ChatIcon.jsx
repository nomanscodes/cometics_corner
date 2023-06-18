import React, { useState } from 'react'

const ChatIcon = () => {

    const [showNotify, setShowNotify] = useState(false)

    const showMessage = (arg) => {

        if (arg == "ok") {
            setShowNotify(true)
        }
        if (arg == "bye") {
            setTimeout(() => {
                setShowNotify(false)
            }, 1000);
        }
    }

    return (
        <div className='fixed bottom-6 right-8 z-50'>
            <picture>
                <img src="/SVG/chat.svg"
                    onMouseOver={() => showMessage("ok")}
                    onMouseLeave={() => showMessage("bye")}
                    className='h-12 cursor-pointer z-40' alt=""
                />
            </picture>
            <h1 className={`text-white
            bg-[#f54d66] rounded-sm shadow p-1 whitespace-nowrap text-[12px] font-medium uppercase absolute -mt-8 -ml-[129px] ${showNotify ? ` w-fit transition-all ease-in-out duration-500` : `ml-20 transition-all ease-in-out duration-500`} `}>Chat With Vendor</h1>
        </div>
    )
}

export default ChatIcon