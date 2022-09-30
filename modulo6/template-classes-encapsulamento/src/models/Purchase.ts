export class Purchase { 
    public id: string,
    public userId: string,
    public productId: string,
    public quantity: number,
    public totalPrice: number

    constructor (id:string, userId:string, productId:string, quantity:number, totalPrice:number) 
    {
        this.id = id,
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }
}

