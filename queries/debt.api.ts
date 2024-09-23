import { getDebtProductsById, getDebts, removeDebtProduct } from "@/services/debt.service";
import { removeDebtProductPayload } from "@/types/debt.types";
import { useMutation, useQuery } from "react-query";

export const useGetDebts = () => {
    return useQuery({
        queryKey: ['get', 'debts'],
        queryFn: getDebts,
        cacheTime : 0
    });
}

export const useGetDebtProductsById = (id: number, from: string | null = null, to: string | null = null) => {
    return useQuery({
        queryKey: ['get', 'debts', id, from, to],
        queryFn: async () => {
            return await getDebtProductsById(id, from, to);
        },
        staleTime :0,
        cacheTime : 0,
    });
}

export const useRemoveDebtProduct = () => {
    return useMutation({
        mutationFn: async ({ id, productPayload }: { id: number, productPayload: removeDebtProductPayload }) => {
            let res = await removeDebtProduct(id, productPayload);
            return res;
        }
    })
}