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
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

const ProductAddPage = () => {
  const theme = useTheme();
  const { back } = useRouter();
  return (
    <Box className="my-3 w-full overflow-x-hidden">
      <Box className="flex justify-between items-center px-3 py-1 mb-5">
        <Box className="flex gap-3">
          <Button
            onClick={back}
            variant="contained"
            size={
              useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"
            }
            className="flex items-center gap-2"
          >
            Back
          </Button>
          <Typography className="text-xl lg:text-4xl font-bold text-blue-500">
            Add Products
          </Typography>
        </Box>

        <Box className="hidden lg:flex">
          <TextField
            label="Search"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
      </Box>
    </Box>
  );
};
export default ProductAddPage;
