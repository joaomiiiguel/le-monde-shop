import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: Boolean;
  blackColor?: Boolean
};

export const IconButton = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-gray hover:bg-opacity-10 transition delay-100 duration-200 ease-in-out active:bg-primary"
    >
      {children}
    </button>
  );
};

export const Button = ({ children, handleClick, fullWidth, blackColor }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-10 
      ${fullWidth && "w-full"}
      ${blackColor ? 'bg-gray-dark  active:bg-primary' : 'bg-gradient-to-l from-primary-light to-primary' } 
      rounded-full text-gray-light hover:bg-opacity-80 transition delay-100 duration-200 ease-in-out `}
    >
      {children}
    </button>
  );
};

export const ButtonOutline = ({children, handleClick, fullWidth}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-10 ${
        fullWidth && "w-full"
      } rounded-full bg-transparent border border-gray-dark hover:border-primary hover:text-primary text-gray-dark hover:bg-opacity-10 hover:bg-primary transition delay-100 duration-200 ease-in-out active:bg-primary z-10`}
    >
      {children}
    </button>
  );
};
