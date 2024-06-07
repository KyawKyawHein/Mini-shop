"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const Debt = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [currentDate,setCurrentDate] = useState<Dayjs | null>(dayjs(Date.now()))
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const rows = [
    {
      id: 1,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
    {
      id: 2,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
    {
      id: 3,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
    {
      id: 4,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
    {
      id: 5,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
    {
      id: 6,
      name: "Frozen yoghurt",
      quantity: 159,
      price: 600,
      total: 30000,
    },
  ];
  return (
    <Box className="border  p-3 rounded flex flex-col items-center">
      <Typography className="text-3xl font-bold">hello</Typography>
      <Typography className="text-2xl mt-2 font-bold text-red-500">
        50000MMK
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
      {/* Dialog  */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Mg Mg</DialogTitle>
        <DialogContent>
          {/* need refactor code */}
          <Box id="alert-dialog-description">
            <Box className="text-2xl font-bold flex items-center gap-2">
              Total :{" "}
              <Typography className="text-red-500 text-2xl font-bold">
                20000 MMK
              </Typography>
            </Box>
            <Box className="w-full grid grid-cols-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="From" value={dayjs(currentDate)}  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="To" value={dayjs(currentDate)} />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <Box className="my-3">
              <TableContainer component={Paper} className="w-full">
                <Table className="w-full" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">နာမည်</TableCell>
                      <TableCell align="right">အရေအတွက်</TableCell>
                      <TableCell align="right">စျေးနှုန်း</TableCell>
                      <TableCell align="right">စုစုပေါင်း</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                        <TableCell align="right">
                          <input type="checkbox" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Debt;
