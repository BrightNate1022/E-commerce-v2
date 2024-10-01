
"use client"
import React, { Component, useEffect, useRef } from 'react'
// import ApiGet from '../backend/apiget'
// import { Cart } from '../backend/apiget'
import Image from 'next/image'
import { getData } from '../backend/apiget'
// import { Products } from '../backend/apiget'


export let Products:any = [] 
const placement:Function = () => {
 
// Products.push(data)
}
  // const dosomething = () => getData().then((data:any) => {
  //   Products = (data.map((item:any) => new Product(item.id, item.title, item.price, item.description, item.image, item.category, item.quantity)))
  // })




export let Cart: Array<object> = []






export class Product {
    id:any
    title:any
    price:any
    description:any
    image:any
    category:any
    quantity : number
    constructor(id:any , title:any, price:any, description:any, image:any, category:any, quantity:any) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.image = image
        this.category = category
        this.quantity = 0
    }
}
interface Productinfo {
        id: number
        title: string
        price: number
        description: string
        image: string
        category: string
        quantity: number
      }
    
//  let ProductsArray: Array<object> = []
//  const loading = () =>{ while (Products.length > 0) {
//     return (
//       <div>
//         hellow
//         </div>
//     )
//   }
// }  
const res : Promise<any> = fetch('https://fakestoreapi.com/products')
  res.then((data:any) => {
    // random = data.json()
    data.json().then((data:any) => {
      Products = data.map((item:any) => new Product(item.id, item.title, item.price, item.description, item.image, item.category, item.quantity))
    })
    console.log((Products))
  })
export default function Storepage() {
  function handleClick(item:any)   {
  handleClick2(item)
  item.quantity++
}

function handleClick2(item:any) {
  if(item.quantity < 1) {
  Cart.push(item) 
  console.log("hurray")
} 
}
  // useEffect(() => {
// dosomething()
  // Products = getData()
  let random = []

  // })


// let item  = new Products(0,0,0,0,0,0)
// export let Cart:any = []

// function handleClick() {
//     console.log(ProductsArray)
//     if (!ProductsArray.includes(item.id)) {
// }
// }
// export default  function ApiGet(this: any,) {
    
    // getData()
    // const data = getData
    
    // {data.map(
        //  function (item:Productinfo) {
        //    Products.push(new Product(item.id, item.title, item.price, item.description, item.image, item.category, item.quantity))
            

        //  }
    
    // )}
      
            return  (
              
              <>
              {/* {loading()} */}
            <div className='columns-2' style={{paddingTop:'3%', paddingLeft:'15%', paddingRight:'15%'}}> 
                {Products.map((item:any) => 
                <div key={item.id} className='container text-pretty text-center bg-gray-100/20 border-gray-600 border-4 m-5 pb-12'  >
                <Image  src={item.image} alt={item.title} width={250} height={250} style={{display:'block', marginRight:'auto', marginLeft:'auto', marginTop:"10%"}} />
               <h1 className='font-bold text-2xl mt-10 mb-2 pr-10 pl-10'>{item.title}</h1>
                <h2 className='font-bold text-xl mt-2 mb-2'>${item.price.toFixed(2)}</h2> 
                <h1 className='font-bold mt-2 mb-2'>{`${item.title.substr(0,50)} ...`} </h1>
                {/* <p>{`${item.description.substr(0,74)} ...`}</p> */}
                
                <button className='font-bold text-2xl bg-slate-500/50 p-3 rounded-lg'  onClick={ () => {
                     
                    console.log(item)
                    console.log(Cart)
                   handleClick(item)
                }}>
                Add to cart
                </button>
                </div>
                )}
               
            </div>
            </>
        )

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
 


  // return (
  //   <div>
  //     <ApiGet/>
  //   </div>
  // )
}


// export default class Storepage extends Component {
 
  // componentDidMount(): void {
  // ApiGet()
  //  console.log(Cart)
  // }
  
  // render() {
      
  //   // let products = Cart
  //   return (
  //     <div>
        
{/*         
<div className='columns-4'>
{products.map((item:any) => <div key={item.id} className='container mr-5 mt-5 mb-5 p-14' > 
<Image src={item.image} alt={item.title} width={150} height={150} />
<h1>{item.title} </h1>
<h2>${item.price}</h2> 
<p>{item.description}</p>
<h2>{item.category}</h2>
<button onClick={ function () {
 item.quantity++
 if (!ProductsArray.includes(item.id)) { 
 ProductsArray.push(item)
 }}}>
 Add to cart
 </button>
 </div>

)}
</div> */}
      // </div>
//     )
//   }
// }
