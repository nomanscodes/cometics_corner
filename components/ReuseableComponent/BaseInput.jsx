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
}) => {
    return (
        <div className='flex flex-col gap-[2px] mt-2 md:mt-6'>
            <label className='text-[12px] md:text-[14px] opacity-90'>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className="py-[6px] md:py-[8px] md:w-[400px] text-xs border border-neutral-300 pl-4 focus:outline-[#f85606] inputOuteLine rounded
               "
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default InputField;
