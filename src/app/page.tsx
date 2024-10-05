
// import Storepage from "./store/page";
import Link from 'next/link'
import Image from 'next/image'
// import ApiGet from "./backend/apiget";
import { Component } from "react";
// Import the functions you need from the SDKs you need
import { Products, ProductsList, getData } from './backend/apiget';

 console.log( getData())
 console.log(Products)
export default function Home() {
let feturedproducts = []
function feturedloop() {
  for (let i = 0; i <= 2; i++) {
  feturedproducts.push(ProductsList[i])
  }
}
feturedloop()
  return (
    <main>
      <h1 className='font-bold text-2xl mt-10 mb-2 pr-10 text-center'>Home</h1>
      <h2 className='font-bold text-xl mt-10 ml-10'>Featured Products</h2>
      <div className='columns-3' style={{paddingTop:'3%', paddingLeft:'15%', paddingRight:'15%'}}> 
      {feturedproducts.map((item:any) => <div key={item.id} className='container mr-5 mt-5 mb-5 p-14' > 
        <Image src={item.image} alt={item.title} width={150} height={150} />
        <h1>{item.title} </h1>
        <h2>${item.price}</h2> 
        <p>{item.description}</p>
        <h2>{item.category}</h2>

         </div>
    )}
      </div>
    </main>
  );
}
