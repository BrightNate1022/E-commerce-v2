import React from 'react'

export default function checkout(Cart:object[]) {
    let total:number = 0
    Cart.map((item:any) => total += (item.price * item.quantity)) 
  return (
    <div className='font-bold text-2xl pt-14 pb-5 ml-96'>
      Total: ${total.toFixed(2)}
    </div>
  )
}
