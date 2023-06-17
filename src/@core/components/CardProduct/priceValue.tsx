import React from "react";

type Props = {
  currentValue: React.ReactNode | number;
  currency: string
};

const PriceValue = ({ currentValue, currency }: Props) => {    
  return (
    <div className="flex flex-row">
      <p className="text-sm font-semibold ordinal">{currency === "EUR" ? '€' : 'U$'}</p>
      <p className="text-2xl font-semibold">{currentValue?.toString().slice(0, -2)}</p>
      <p className="text-sm ordinal font-semibold">{currentValue?.toString().slice(-2)}</p>
    </div>
  );
};

export default PriceValue;
