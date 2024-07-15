import React from 'react';

/**
 * Alert component to display a message with a specific type.
 * 
 * @param {Object} props The properties object.
 * @param {string} props.type The type of the alert ('danger' or other).
 * @param {string} props.text The text message to display in the alert.
 * @returns {JSX.Element} The rendered alert component.
 */
const Alert = ({ type, text }) => {
    return (
        <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
            <div className={`${type === 'danger' ? "bg-red-800" : 'bg-blue-800'} 
            p-2 text-indigo-100 leading-none 
            lg:rounded-full flex lg:inline-flex items-center`}
                role='alert'>
                <p className={`${type === 'danger' ? "bg-red-500" : "bg-blue-500"} flex
                rounded-full uppercase px-2 py-1
                 font-semibold mr-3 text-sx `}>
                    {type === 'danger' ? 'Failed' : 'Success '}
                </p>
                <p className='mr-2 text-left'>{text}</p>
            </div>
        </div>
    )
}

export default Alert;
