import TeaSets from "../common/imgSmallMenu/image 6 (14).png";


type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}
export type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any,
    type: string
}
export type initialStateType = {
    elementsForBasket: Array<{ product: ProductsType, count: number }>
    elements: Array<ProductsType>
}

export const addProductAC = (id: string) => ({type: 'ADD_PRODUCT', id} as const)
export type AddProductType = ReturnType<typeof addProductAC>
type ActionsType = AddProductType

export const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            // const copyState = {...state}
            return state.elements.filter(ps => ps.id !== action.id)
        }
        default:
            return state;
    }
}
const initialState: initialStateType = {
    elementsForBasket: [],
    elements: [
        {
            "id": "e859e78c-1309-40fd-92a0-efa37b9cd4ea",
            "name": "Super backpack",
            "price": {
                "amount": 4200,
                "priceFormatted": "$42.00"
            },
            "pricePromotial": {
                "amount": 2600,
                "priceFormatted": "$26.00"
            },
            "decimal": 2,
            "image": 'backpack1',
            "type": "DinnerSets"
        },
        {
            "id": "f0f58263-cd0f-4a25-8205-4a89706e203a",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png",
            "type": "DinnerSets"
        },
        {
            "id": "30d00737-5a93-4d59-9bea-201d30fb1d0a",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png",
            "type": "DinnerSets"
        },
        {
            "id": "184d2344-061b-405d-bf8c-aab2fa578d0b",
            "name": "Comfortable chair",
            "price": {
                "amount": 13900,
                "priceFormatted": "$139.00"
            },
            "decimal": 2,
            "image": "chair2.png",
            "type": "DinnerSets"
        },
        {
            "id": "1a14e6aa-b757-4c37-ac3e-c5f92a0adc54",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png",
            "type": "DinnerSets"
        },
        {
            "id": "5007aeb3-21ec-4052-9664-b97ece3807e8",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png",
            "type": "TeaSets"
        },
        {
            "id": "7f39a9a8-4f3d-44ef-bce6-4209688754e6",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png",
            "type": "TeaSets"
        },
        {
            "id": "de8d194a-7e5b-476a-8cb5-6b58b3405f4c",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png",
            "type": "TeaSets"
        },
        {
            "id": "74b607a0-a135-4852-8631-cea25df6ae72",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png",
            "type": "TeaSets"
        },
        {
            "id": "5431d5df-710a-48fc-b35e-13b7c3b9e538",
            "name": "Almost gaming headphones",
            "price": {
                "amount": 7900,
                "priceFormatted": "$79.00"
            },
            "decimal": 2,
            "image": "headphones2.png",
            "type": "TeaSets"
        },
        {
            "id": "37bca50a-4e40-4507-946a-c2d2f3a7ca77",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png",
            "type": "TeaSets"
        },
        {
            "id": "6302f1d2-ae70-45fd-b58b-2f6804d7b5a8",
            "name": "Red headphones",
            "price": {
                "amount": 23999,
                "priceFormatted": "$239.99"
            },
            "pricePromotial": {
                "amount": 22000,
                "priceFormatted": "$220.00"
            },
            "decimal": 2,
            "image": "headphones1.png",
            "type": "TeaSets"
        },
        {
            "id": "80ea4ce9-da33-4d24-b4db-45e37abb5bf5",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png",
            "type": "TeaSets"
        },
        {
            "id": "cd2de511-da5c-441f-9dc6-d991b3983553",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png",
            "type": "TeaSets"
        },
        {
            "id": "b1934f02-bd5b-487c-8b4a-45102d77ccf3",
            "name": "Chair for you",
            "price": {
                "amount": 18999,
                "priceFormatted": "$189.99"
            },
            "decimal": 2,
            "image": "chair4.png",
            "type": "TeaSets"
        },
        {
            "id": "2254c925-d39f-44f4-b565-b636c905e7a3",
            "name": "Cheap smartwatch",
            "price": {
                "amount": 14999,
                "priceFormatted": "$149.99"
            },
            "decimal": 2,
            "image": "smartwatch2.png",
            "type": "TeaSets"
        },
        {
            "id": "e8aa7dfb-4d85-4b88-85b4-a6c371b787ba",
            "name": "Incredible chair",
            "price": {
                "amount": 11999,
                "priceFormatted": "$119.00"
            },
            "decimal": 2,
            "image": "chair3.png",
            "type": "TeaSets"
        },
        {
            "id": "97fee1bc-0d4c-4f4a-9ed0-6bd2ed3090fb",
            "name": "Red headphones",
            "price": {
                "amount": 17999,
                "priceFormatted": "$179.99"
            },
            "pricePromotial": {
                "amount": 16000,
                "priceFormatted": "$160.00"
            },
            "decimal": 2,
            "image": "chair4.png",
            "type": "TeaSets"
        },
    ]
}