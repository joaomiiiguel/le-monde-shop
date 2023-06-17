import React from "react";

type Props = {
    totalPrice: number
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
};

export default function CountProduct({totalPrice, setTotalPrice}: Props) {

  return (
    <div className="flex flex-row justify-between items-center border border-gray border-opacity-30 rounded-full min-w-[100px] w-fit overflow-hidden">
      <button disabled={totalPrice <= 0}
        className="py-2 px-4 bg-gray bg-opacity-0 hover:bg-opacity-10 text-lg rounded-full"
        onClick={() => setTotalPrice(totalPrice - 1)}
      >
        -
      </button>
      <span className="py-2 px-4 text-xl font-semibold w-[50px] text-center">
        {totalPrice}
      </span>
      <button
        className="py-2 px-4 bg-gray bg-opacity-0 hover:bg-opacity-10 text-lg rounded-full"
        onClick={() => setTotalPrice(totalPrice + 1)}
      >
        +
      </button>
    </div>
  );
}
