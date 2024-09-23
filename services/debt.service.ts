import { IDebt,ISingleDebt, removeDebtProductPayload } from "@/types/debt.types";
import { httpService } from "./httpService"

export const getDebts = async()=>{
    const res = await httpService.get<IDebt[]>('/debts');
    return res.data;
}

export const getDebtProductsById = async(id:number,from:null |string=null,to:null |string=null)=>{
    const res = await httpService.get<ISingleDebt>(`/debts/${id}?from=${from}&to=${to}`);
    return res.data;
}

export const removeDebtProduct = async(id:number,products:removeDebtProductPayload)=>{
    console.log(products);
    
    const res= await httpService.delete<string>(`/debts/${id}/remove-product`,{params:products});
    return res.data;
}