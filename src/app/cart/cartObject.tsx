import { Productinfo } from "../store/Product";

let items:Object[] = [];
let Cart = {
 items: items,

HandleClick:function handleClick(item:Productinfo)   {
    Cart.HandleClick2(item)
    item.quantity++
  },
  
HandleClick2 : function handleClick2(item:Productinfo) {
    if(item.quantity < 1) {
    Cart.items.push(item) 
    console.log("hurray")
  } 
  }
}

export default Cart