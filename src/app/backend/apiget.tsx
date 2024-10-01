
import React, { Component, useEffect, useState } from 'react'
import Image from 'next/image'
import { json } from 'stream/consumers'
// import { Products } from '../store/page'

// let data:any = []
export let Products: Array<object> = []
export async function getData(): Promise<any> {
    const res : Response = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
   return res.json()
    .then((data:any) => {
        Products = (data)
    })
}
// export let ProductsArray: Array<object> = []
// let Products:any[] = []
// export class Product {
//     id:any
//     title:any
//     price:any
//     description:any
//     image:any
//     category:any
//     quantity : number
//     constructor(id:any , title:any, price:any, description:any, image:any, category:any, quantity:any) {
//         this.id = id
//         this.title = title
//         this.price = price
//         this.description = description
//         this.image = image
//         this.category = category
//         this.quantity = 0
//     }
// }
// let item  = new Products(0,0,0,0,0,0)
// export let Cart:any = []

// function handleClick() {
//     console.log(ProductsArray)
//     if (!ProductsArray.includes(item.id)) {
// }
// // }
// export default  function ApiGet(this: any,) {
    
//     getData()
//     // const data = getData
//     interface Productinfo {
//         id: number
//         title: string
//         price: number
//         description: string
//         image: string
//         category: string
//         quantity: number
//       }
    
    // {data.map(
        //  function (item:Productinfo) {
        //    Products.push(new Product(item.id, item.title, item.price, item.description, item.image, item.category, item.quantity))
            

        //  }
    
    // )}
    
//             return  (

//             <div className='columns-4'> 
//                 {data.map((item:any) => 
//                 <div key={item.id} className='container mr-5 mt-5 mb-5 p-14'>
//                 <Image src={item.image} alt={item.title} width={150} height={150} />
//                 <h1>{item.id} </h1>
//                 <h1>{item.title} </h1>
//                 <h2>${item.price}</h2> 
//                 <p>{item.description}</p>
//                 <h2>{item.category}</h2>
//                 <button onClick={ () => {
//                     item.quantity++
//                     if (ProductsArray.includes(item.id)) {
//                         ProductsArray.push(item)
//                     }
//                 }}>
//                 Add to cart
//                 </button>
//                 </div>
//                 )}
               
//             </div>

//         )
// }
//  const products = data.map((item:any) => new Products(item.key, item.title, item.price, item.description, item.image, item.category))
//  return (
//     <div>
      
// <div className='columns-4'>
    
{/* {data.map((item:any) => <div key={item.id} className='container mr-5 mt-5 mb-5 p-14' > 
<Image src={item.image} alt={item.title} width={150} height={150} />
<h1>{item.id} </h1>
<h1>{item.title} </h1>
<h2>${item.price}</h2> 
<p>{item.description}</p>
<h2>{item.category}</h2>
<button onClick={ () => ProductsArray.push(item) }>
Add to cart
</button>
</div>

)} */}
// </div>
//     </div>
//   )
// }
 

