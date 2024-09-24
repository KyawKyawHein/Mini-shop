"use client";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface IDebtBox {
  id: number;
  name: string;
  price: number;
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    date: string;
  }[];
}

const DebtBox = ({ name, price, products }: IDebtBox) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box
        className="w-full h-32 relative border p-3 flex flex-col justify-center items-center gap-3"
        onClick={handleClickOpen}
      >
        <Typography className="font-bold text-2xl">{name}</Typography>
        <Typography className="font-extrabold text-xl text-red-500">
          {price}
        </Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-center font-bold">
          {name}
        </DialogTitle>
        <DialogContent>
          {/* Table  */}
          <TableContainer component={Paper} className="w-full rounded">
            <Table className="w-full" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">အမည်</TableCell>
                  <TableCell align="center">အရေအတွက်</TableCell>
                  <TableCell align="center">စျေးနှုန်း</TableCell>
                  <TableCell align="right">ရက်စွဲ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {product.name}
                    </TableCell>
                    <TableCell align="center">
                      {product.quantity}
                    </TableCell>
                    <TableCell align="center">
                      {product.price}
                    </TableCell>
                    <TableCell align="right">
                      {product.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DebtBox;
