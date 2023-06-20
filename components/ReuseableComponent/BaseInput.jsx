import React from 'react';

const InputField = ({
    type,
    value,
    onChange,
    onBlur,
    placeholder,
    error,
    label = "",
}) => {
    return (
        <div className='flex flex-col gap-[2px] mt-4'>
            <label className='text-[13px] opacity-90'>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className="py-3 text-xs border border-neutral-300 pl-4 focus:outline-[#f85606] inputOuteLine rounded-md
                w-full
                "
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default InputField;
