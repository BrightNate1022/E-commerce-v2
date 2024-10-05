import { ProductsList,Products } from "../backend/apiget"
export class Product {
    id:number
    title:string
    price:number
    description:string
    image:string
    category:string
    quantity : number
    constructor(id:number , title:string, price:number, description:string, image:string, category:string, quantity:number) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.image = image
        this.category = category
        this.quantity = 0
    }
}
export interface Productinfo extends Object {
        id: number
        title: string
        price: number
        description: string
        image: string
        category: string
        quantity: number
      }
      let item:Productinfo
        export function productsToItems() {
        for ( item of ProductsList) {
        if (Products.length < 10) {
        item = new Product(item.id, item.title, item.price, item.description, item.image, item.category, item.quantity)
        Products.push(item)
        }
    }
}