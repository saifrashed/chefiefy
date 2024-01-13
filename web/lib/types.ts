

export interface Order {
    id: number
    userID: string
    productID: number
    quantity: number
    status: string
    paymentID: string
    amount: number
    createdAt: Date
    updatedAt: Date
}


export interface Product {
    id: number
    name: string
    description: string
    image: string
    price: number
    isPopular: boolean
    amountOfImages: number
}

export interface Finetune {
    id: number
    name: string
    externalID: string
    orderID: number
    status: string
    downloaded: number
    createdAt: Date
    updatedAt: Date
}