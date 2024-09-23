"use client";

import { useGetDebtProductsById } from "@/queries/debt.api";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DebtTableRow from "./DebtTableRow";
import { useDebtItemStore } from "@/store/debtItem.store";

interface DebtDialogProps {
  id: number;
  name: string;
  open: boolean;
  handleClose: () => void;
  fromDate: null | string;
  toDate: null | string;
  setFromDate: (currentDate: null | string) => void;
  setToDate: (currentDate: null | string) => void;
}
const DebtDialog = ({
  id,
  name,
  open,
  handleClose,
  fromDate,
  toDate,
  setFromDate,
  setToDate
}: DebtDialogProps) => {
  
  const { data: debtProduct, isLoading } = useGetDebtProductsById(
    id,
    fromDate,toDate
  );

  return (
    <>
      {/* Dialog  */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isLoading ? (
          <Box className="w-[570px] h-[472px] flex justify-center items-center ">
            <AutorenewIcon className="text-5xl animate-spin text-blue-500" />
          </Box>
        ) : (
          <>
            <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
            <DialogContent>
              {/* need refactor code */}
              <Box id="alert-dialog-description">
                <Box className="text-2xl font-bold flex items-center gap-2">
                  Total :{" "}
                  <Typography className="text-red-500 text-2xl font-bold">
                    {debtProduct?.amount} MMK
                  </Typography>
                </Box>
                <Box className="w-full flex gap-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        maxDate={dayjs(new Date)}
                        label="From"
                        value={dayjs(fromDate)}
                        className="w-full"
                        onChange={(newValue) =>
                          setFromDate(
                            `${dayjs(newValue).get("year")}-${
                              dayjs(newValue).get("month") + 1
                            }-${dayjs(newValue).get("date")}`
                          )
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        maxDate={dayjs(new Date)}
                        label="To"
                        value={dayjs(toDate)}
                        className="w-full"
                        onChange={(newValue) =>
                          setToDate(
                            `${dayjs(newValue).get("year")}-${
                              dayjs(newValue).get("month") + 1
                            }-${dayjs(newValue).get("date")}`
                          )
                        }
                      />
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
                          <TableCell align="right">နေ့စွဲ</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {debtProduct?.products.map((row) => (
                          <DebtTableRow key={row.id} {...row}/>
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
          </>
        )}
      </Dialog>
    </>
  );
};

export default DebtDialog;
