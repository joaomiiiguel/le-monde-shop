import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: Boolean;
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

export const Button = ({ children, handleClick, fullWidth }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-10 ${
        fullWidth && "w-full"
      } rounded-full bg-gray-dark text-gray-light hover:bg-opacity-80 transition delay-100 duration-200 ease-in-out active:bg-primary`}
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
      } rounded-full bg-transparent border border-gray-dark hover:border-primary hover:text-primary text-gray-dark hover:bg-opacity-10 hover:bg-primary transition delay-100 duration-200 ease-in-out active:bg-primary`}
    >
      {children}
    </button>
  );
};
