"use client"
import { title } from "process"
import Cart from "../cart/cartObject"
export default function Button (props:any) {

return (
<button className='font-bold text-2xl bg-slate-500/50 p-3 rounded-lg'  onClick= {() => Cart.HandleClick(props.item)}  >Add to cart</button>
)}