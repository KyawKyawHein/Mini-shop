export interface IDebt {
    id :number;
    name : string;
    slug : string;
    amount : number;
}

export interface Product{
    id : number;
    name : string;
    slug : string;
    image : string;
    quantity :number;
    price : number;
    date : string;
}
export interface ISingleDebt {
    id : number;
    name : string;
    slug : string;
    amount : number;
    products : Product[];
}

export interface removeDebtProductPayload {
    products : {
        product_id : number;
        date : string;
    }[]
}