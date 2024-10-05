"use client"
import Cart from "../cart/cartObject"
export default function Button (props:any) {
const {item} = props
return (
<button className='font-bold text-2xl bg-slate-500/50 p-3 rounded-lg'  onClick= {() => Cart.HandleClick(item)}  >Add to cart</button>
)}