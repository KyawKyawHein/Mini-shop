"use client";
import { Product } from "@/types/debt.types";
import { Box, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useDebtItemStore } from "@/store/debtItem.store";

const DebtTableRow = ({ id, name, quantity, price, date }: Product) => {
  const [removeProduct, setRemoveProduct] = useState(false);
  const { debtItem, setDebtItem } = useDebtItemStore();
  const handleRemoveProduct = (id: number) => {
    setRemoveProduct(!removeProduct);
    const newDebtProduct = { date, product_id: id };
    const debtItemArr = debtItem.filter(
      (item) => item.product_id == newDebtProduct.product_id
    );
    if (debtItemArr.length <= 0) {
      setDebtItem([...debtItem, newDebtProduct]);
    } else {
      setDebtItem(debtItem.filter(item=>item.product_id!=newDebtProduct.product_id))
    }

    // removeDebtProduct(
    //   {
    //     id: debtId,
    //     productPayload: {
    //       date,
    //       product_id: id,
    //     },
    //   },
    //   {
    //     onSuccess: () => {
    //       queryClient.invalidateQueries({queryKey : ["get", "debts", debtId, fromDate, toDate]});
    //     },
    //   }
    // );
  };
  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
      >
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{quantity}</TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">{date}</TableCell>
        <TableCell align="right">
          <input
            onChange={() => handleRemoveProduct(id)}
            defaultChecked={removeProduct}
            type="checkbox"
          />
        </TableCell>
      </TableRow>
    </>
  );
};

export default DebtTableRow;
