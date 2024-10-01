"use client"
import React, { Component } from 'react'
import { Cart } from '../store/page'
import Image from 'next/image'
import checkout from './checkout'



export default function CartPage() {
  console.log(Cart)
  return (
    <div className='pt-5 ml-5 '>
      {Cart.map((item:any) => <div key={item.id} className='container w-1/2 mr-5 mb-5 p-14 border-2 border-rounded-lg border-gray-400 bg-gray-100/20' > 
       <Image src={item.image} alt={item.title} width={150} height={150} />
       <h1 className='font-bold text-2xl mt-10 mb-2 pr-10'>Product: {item.title} </h1>
       <h2 className='font-bold text-xl mt-2 mb-2'>Price: ${item.price.toFixed(2)}</h2> 
       <p className='font-bold mt-2 mb-2'>Description: {item.description}</p>
       <h2 className='font-bold text-lg mt-2 mb-2'>Quantity: {item.quantity}</h2>
        </div>
    )}
    {checkout(Cart)}
    </div>
  )
}

// export default class Cart extends Component  {
//     ProductsArray: any

//     constructor(props: any,push:any ) {
//         super(props)
        
//     }

//     componentDidMount(): void {
//         console.log(ProductsArray)
//     }

//   render() {
   
//     return (
        
//       <div>
        
//        {ProductsArray.map((item:any) => <div key={item.id} className='container mr-5 mt-5 mb-5 p-14' > 
//        <Image src={item.image} alt={item.title} width={150} height={150} />
//        <h1>{item.id} </h1>
//        <h1>{item.title} </h1>
//        <h2>${item.price}</h2> 
//        <p>{item.description}</p>
//        <h2>{item.category}</h2>
//        <h2>{item.quantity}</h2>
//         </div>
//     )}

//       </div>
//     )
//   }
// }
