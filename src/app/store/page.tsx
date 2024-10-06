
import React, { Component, useEffect, useRef } from 'react'

import Image from 'next/image'

import Cart from '../cart/cartObject'
import {Product, Productinfo, productsToItems} from '../store/Product'
import { Products, getData } from '../backend/apiget'

import Button from './button'



export default function Storepage() {

getData()
productsToItems()

let transformeditem:any = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  quantity: 0
}; 
function itemtranform(item:any) {
return (
{
id :item.id,
title : item.title,
price : item.price,
description : item.description,
image : item.image,
category : item.category,
quantity : item.quantity
}
)
}
      
            return  (
              
              <>
              <h1 className='font-bold text-2xl mt-10 mb-2 pr-10 pl-10'>Store</h1>
            <div className='columns-1' style={{paddingTop:'3%', paddingLeft:'15%', paddingRight:'15%'}}> 
                {Products.map((item:any) => 
                <div key={item.id} className='container text-pretty text-center bg-gray-100/20 border-gray-600 border-4 m-5 pb-12'  >
                <Image  src={item.image} alt={item.title} width={250} height={250} style={{display:'block', marginRight:'auto', marginLeft:'auto', marginTop:"10%"}} />
               <h1 className='font-bold text-2xl mt-10 mb-2 pr-10 pl-10'>{item.title}</h1>
                <h2 className='font-bold text-xl mt-2 mb-2'>${item.price.toFixed(2)}</h2> 
                <h1 className='font-bold mt-2 mb-2'>{`${item.title.substr(0,50)} ...`} </h1>
                {/* <p>{`${item.description.substr(0,74)} ...`}</p> */}
                
                {/* <button className='font-bold text-2xl bg-slate-500/50 p-3 rounded-lg'  onClick={ () => Cart.HandleClick(item) }> */}
                    
                <Button item={itemtranform(item)}  />
             
              
                {/* </button> */}
                </div>
                )}
               
            </div>
            </>
        )


}