import React from 'react'

type ButtonProps = {
    children: React.ReactNode
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconButton = ({children, handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick} className='p-2 rounded-full hover:bg-gray hover:bg-opacity-10 transition delay-100 duration-200 ease-in-out active:bg-primary'>
        {children}
    </button>
  )
}