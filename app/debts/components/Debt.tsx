"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { IDebt } from "@/types/debt.types";
import DebtDialog from "./DebtDialog";
import { useDebtItemStore } from "@/store/debtItem.store";
import { useRemoveDebtProduct } from "@/queries/debt.api";
import { useQueryClient } from "react-query";

const Debt = ({ id, name, amount, slug }: IDebt) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { debtItem, setDebtItem } = useDebtItemStore();
  const queryClient = useQueryClient();
  const { mutate: removeDebtProduct, isLoading: removeDebtProductLoading } =
    useRemoveDebtProduct();
  const [fromDate, setFromDate] = useState<string | null>(
    `${dayjs().get("year")}-${dayjs().get("month") + 1}-${dayjs().get("date")}`
  );
  const [toDate, setToDate] = useState<string | null>(
    `${dayjs().get("year")}-${dayjs().get("month") + 1}-${dayjs().get("date")}`
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialog = () => {
    queryClient.prefetchQuery({queryKey:["get", "debts"]})
    removeDebtProduct(
      {
        id,
        productPayload: {
          products: debtItem,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["get", "debts"],
          });
          setOpen(false);
        },
      }
    );
  };
  return (
    <Box className="border  p-3 rounded flex flex-col items-center">
      <Typography className="text-3xl font-bold">{name}</Typography>
      <Typography className="text-2xl mt-2 font-bold text-red-500">
        {amount} MMK
      </Typography>
      <Button
        variant="contained"
        size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
        color="warning"
        onClick={handleClickOpen}
        className="flex items-center gap-2 my-2"
      >
        ကြည့်ရန်
      </Button>
      <DebtDialog
        id={id}
        name={name}
        open={open}
        handleClose={handleDialog}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
    </Box>
  );
};

export default Debt;
