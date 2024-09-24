"use client";
import ProductTable from "./components/ProductTable";
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
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
export default function Home() {
  const theme = useTheme();
  const {push} = useRouter()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box className="my-8 w-full overflow-x-hidden">
      <Box className="flex justify-between items-center px-3 py-1 mb-5">
        <Typography className="text-xl lg:text-4xl font-bold text-blue-500">
          ယနေ့ရောင်းရငွေ
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
        <Box className="lg:flex gap-3 items-center">
          <Typography className="text-xl text-end lg:text-3xl font-bold text-blue-500">
            0 MMK
          </Typography>
          <Button
            onClick={()=>push('/add-today-sale')}
            variant="outlined"
            size={
              useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"
            }
            className="flex items-center gap-2"
          >
            <AddIcon /> Add New
          </Button>
        </Box>
      </Box>
      <MobileDatePicker slotProps={{ textField: {size:'small'} }} className="my-1" defaultValue={dayjs(new Date())} />
      <ProductTable />
    </Box>
    </LocalizationProvider>
  );
}
