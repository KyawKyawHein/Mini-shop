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

interface IProductBox {
  id: number;
  name: string;
  quantity: number;
  price: number;
  date: string;
}

const ProductsBox = ({ name, quantity, price, date }: IProductBox) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box className="w-full h-32 relative" onClick={handleClickOpen}>
        <Image
          fill
          src={"https://i.pravatar.cc/"}
          alt="product"
          className="rounded"
        />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-center">{name}</DialogTitle>
        <DialogContent>
          <Box className="flex justify-center mb-2">
            <Image
              width={200}
              height={150}
              src={"https://i.pravatar.cc/"}
              alt="product"
              className="rounded"
            />
          </Box>
          {/* Table  */}
          <TableContainer component={Paper} className="w-full rounded">
            <Table className="w-full" aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Quantity
                  </TableCell>
                  <TableCell align="right">{quantity}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Price
                  </TableCell>
                  <TableCell align="right">{price}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Register date
                  </TableCell>
                  <TableCell align="right">{date}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProductsBox;
