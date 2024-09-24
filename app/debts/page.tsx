"use client";
import {
  Box,
  Button,
  Fab,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";   
import AddIcon from "@mui/icons-material/Add";
import { useGetDebts } from "@/queries/debt.api";
import ProductsBox from "../products/components/ProductsBox";
import debts from "@/lib/json/debts";
import DebtBox from "./components/DebtBox";

const Debts = () => {
  // const {data:debts,isLoading } = useGetDebts()
  return (
    <Box className="my-8 w-full overflow-x-hidden h-full">
      <Box className="grid grid-cols-2 gap-2">
        {debts.map((debt) => (
          <DebtBox key={debt.id} {...debt} />
        ))}
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        className="absolute bottom-2 right-7 z-40"
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default Debts
