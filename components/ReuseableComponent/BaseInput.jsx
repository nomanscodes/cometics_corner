import React from 'react';

const InputField = ({
    name = "",
    type,
    value,
    onChange,
    onBlur,
    placeholder,
    error,
    label = "",
    border

}) => {
    return (
        <div className='flex flex-col gap-[2px] mt-2 '>
            <label className='text-[13px] md:text-[14px] opacity-90'>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`py-[10px] md:py-[10px] flex flex-1 w-[100%] text-[12px] md:text-[13px] pl-2 md:pl-4 rounded-md md:rounded-sm focus:outline-none ${border ? `border` : ``}`}
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default InputField;
