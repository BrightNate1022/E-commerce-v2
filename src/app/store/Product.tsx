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
export interface Productinfo {
        id: number
        title: string
        price: number
        description: string
        image: string
        category: string
        quantity: number
      }