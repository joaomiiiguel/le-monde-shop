import React from 'react'

type Props = {
    currentValue: React.ReactNode
}

const priceValue = ({currentValue}: Props) => {
  return (
    <div>{currentValue}</div>
  )
}

export default priceValue