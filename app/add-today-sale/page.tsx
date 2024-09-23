"use client";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

const AddTodaySalePage = () => {
  const theme = useTheme();
  const { back } = useRouter();
  const rows = [
    {
      id: 1,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
    {
      id: 2,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
    {
      id: 3,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
    {
      id: 4,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
    {
      id: 5,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
    {
      id: 6,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 6,
      date: "2-2-2023",
    },
  ];
  return (
    <Box className="my-3 w-full overflow-x-hidden relative">
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
            Add Sale Products
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
      <Box className="md:grid md:grid-cols-3 gap-3">
        <Box className="col-span-2">
          <TableContainer component={Paper} className="w-full">
            <Table className="w-full" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">နာမည်</TableCell>
                  <TableCell align="center">ပုံ</TableCell>
                  <TableCell align="center">စျေးနှုန်း</TableCell>
                  <TableCell align="right">Take</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="right" component="th" scope="row">
                      <input type="checkbox" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography className="text-2xl text-blue-500 mb-3">
            Selected Products
          </Typography>
          <Box>
            {rows.map((row) => (
              <Box
                key={row.id}
                className="my-2 border p-2 flex justify-between items-center"
              >
                <Typography>{row.name}</Typography>
                <Box className="flex gap-3 items-center">
                  <Box className="border p-2 rounded">
                    <AddIcon />
                  </Box>
                  1
                  <Box className="border p-2 rounded">
                    <AddIcon />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
        className="absolute right-3 bottom-1"
      >
        Add Sale
      </Button>
    </Box>
  );
};

export default AddTodaySalePage;
