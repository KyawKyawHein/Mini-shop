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
export default function Home() {
  const theme = useTheme();
  return (
    <Box className="my-3 w-full overflow-x-hidden">
      <Box className="flex justify-between items-end px-3 py-1 mb-5">
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
          <Typography className="text-xl lg:text-3xl font-bold text-blue-500">
            Total : 0 MMK
          </Typography>
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
      </Box>
      <ProductTable />
    </Box>
  );
}
