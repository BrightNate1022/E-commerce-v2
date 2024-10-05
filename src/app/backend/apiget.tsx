
import React, { Component, useEffect, useState } from 'react'
import Image from 'next/image'
import { json } from 'stream/consumers'
import { Productinfo, productsToItems } from '../store/Product'
// import { Products } from '../store/page'

export let ProductsList:Array<Productinfo> = []
export let Products:Array<Productinfo> = []
export async function getData(): Promise<Array<Object>> { 
   
     const res : Response = await fetch('https://fakestoreapi.com/products')
     if (!res.ok) {
          throw new Error('Network response was not ok')
     }
    return res.json()
     .then((data:any) => {
          ProductsList = (data)
          return data 
     })

  
}