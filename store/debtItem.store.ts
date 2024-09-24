import { create } from "zustand";
import zukeeper from 'zukeeper';
interface DebtSingleItem {
    product_id: number;
    date: string;
}
interface IDebtItem {
    // dialogState : boolean;
    debtItem: DebtSingleItem[];
}
interface IDebtItemStore extends IDebtItem {
    // setDialogState :(dialogState:boolean)=>void;
    setDebtItem: (debtItem: DebtSingleItem[]) => void;
}

const useDebtItemStore = create<IDebtItemStore>(zukeeper((set:any) => ({
    // dialogState: false,
    debtItem: [],
    setDebtItem: (debtItem: DebtSingleItem[]) => set({ debtItem }),
    // setDialogState:(dialogState:boolean)=>set({dialogState}),
})))

export { useDebtItemStore }