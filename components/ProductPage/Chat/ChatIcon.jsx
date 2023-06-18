import React, { useState } from "react";

const ChatIcon = () => {
  const [showMessageBar, setshowMessageBar] = useState(false);

  return (
    <div className="fixed bottom-16 right-1 md:bottom-4 md:right-6 z-50 ">
      <div
        onClick={() => setshowMessageBar(!showMessageBar)}
        className="bg-[#085e54] p-[9px] md:p-2 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center md:cursor-pointer z-40"
      >
        {showMessageBar ? (
          <>
            <picture>
              <img src="/SVG/cross.svg" className="h-6" alt="" />
            </picture>
          </>
        ) : (
          <>
            <picture>
              <img src="/SVG/chat.svg" className="h-7" alt="" />
            </picture>
          </>
        )}
      </div>
      <div
        className={`h-[400px]  bg-[#e4e1d7] absolute bottom-[44px] 
            md:bottom-[50px] rounded 
            ${
              showMessageBar
                ? `w-[280px] md:w-96 right-0 ease-in-out transition-all duration-300`
                : `left-20 w-0 transition-all ease-in-out duration-300`
            } `}
      >
        <div className="messageTop flex items-center gap-3 bg-[#085e54] p-2 rounded">
          <picture>
            <img src="/avatar.png" className="h-9 w-9 rounded-full" alt="" />
          </picture>
          <span>
            <h1 className="vendorname text-sm font-medium text-white">
              Blue Earth
            </h1>
            <h3 className="text-[10px] text-white">
              Typically replies instantly
            </h3>
          </span>
        </div>
        <div className="messageBody p-[8px] md:p-3 flex flex-col gap-4 h-[300px] md:h-[300px] overflow-y-auto">
          <div className="reciveMessage flex items-end gap-2">
            <picture>
              <img
                src="/avatar.png"
                className=" h-5 w-5 md:h-7 md:w-7 rounded-full shadow"
                alt=""
              />
            </picture>
            <div className="bg-white w-fit max-w-[220px] md:max-w-[250px] rounded-lg rounded-bl-none shadow">
              <div className="text-[11px] font-medium p-[6px] md:p-2">
                jdlfsdl dhfsdf sdfdns shfffs fggfgfd jkfjdsfei fsd kfsdlkf fdfds
                fkjsdlslsdfsd dflsd
              </div>
              <div className="flex items-center justify-end text-[8px] px-2">
                <h3> 12:43 AM</h3>
              </div>
            </div>
          </div>
          <div className="sendMessage flex items-center justify-end ">
            <div className="bg-white w-fit max-w-[209px] md:max-w-[250px] rounded-lg rounded-bl-none shadow">
              <div className="text-[11px] font-medium p-[6px] md:p-2">
                jdlfsdl dhfsdf sdfdns shfffs fggfgfd jkfjdsfei fsd kfsdlkf fdfds
                fkjsdlslsdfsd dflsd
              </div>
              <div className="flex items-center justify-end text-[8px] px-2">
                <h3> 12:43 AM</h3>
              </div>
            </div>
          </div>
          <div className="reciveMessage flex items-end gap-2">
            <picture>
              <img
                src="/avatar.png"
                className=" h-5 w-5 md:h-7 md:w-7 rounded-full shadow"
                alt=""
              />
            </picture>
            <div className="bg-white w-fit max-w-[220px] md:max-w-[250px] rounded-lg rounded-bl-none shadow">
              <div className="text-[11px] font-medium p-[6px] md:p-2">
                jdlfsdl dhfsdf sdfdns shfffs fggfgfd jkfjdsfei fsd kfsdlkf fdfds
                fkjsdlslsdfsd dflsd
              </div>
              <div className="flex items-center justify-end text-[8px] px-2">
                <h3> 12:43 AM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="radimateHrTag w-full bg-slate-400 h-[1px]"></div>
        <div className="messageTypeSection flex items-center md:gap-2 p-2">
          <input
            type="text"
            className="flex flex-1 focus:outline-none text-xs pl-4
                         py-[10px] bg-[#e4e1d7] "
            placeholder="Type your message"
          />
          <picture>
            <img
              src="/SVG/send.svg"
              className="w-5 md:w-5 h-full md:cursor-pointer"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ChatIcon;
