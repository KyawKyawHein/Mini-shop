"use client";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";   
import AddIcon from "@mui/icons-material/Add";
import Debt from "./components/Debt";
import SearchIcon from '@mui/icons-material/Search';
import { useGetDebts } from "@/queries/debt.api";

const Debts = () => {
    const theme = useTheme()
  const {data:debts,isLoading } = useGetDebts()
  return (
    <Box className="my-3 w-full overflow-x-hidden">
    <Box className="flex justify-between items-end px-3 py-1 mb-5">
      <Typography className="text-xl lg:text-4xl font-bold text-blue-500">
        All Debts
      </Typography>
      <Box className="hidden lg:flex">
          <TextField
            label="Search"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"><SearchIcon/></InputAdornment>
              ),
            }}
          />
        </Box>
      <Button
        variant="contained"
        size={
          useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"
        }
        className="flex items-center gap-2"
      >
        <AddIcon /> Add New
      </Button>
    </Box>
    {/* debt list  */}
    <Box className="grid grid-cols-3 md:grid-cols-5 gap-2 w-full">
      {
        debts?.map(debt=>(
          <Debt key={debt.id} {...debt}/>
        ))
      }
    </Box>
  </Box>
  )
}

export default Debts
