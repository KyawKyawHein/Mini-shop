import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductTable = () => {
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
    <TableContainer component={Paper} className="w-full">
      <Table className="w-full" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">နာမည်</TableCell>
            <TableCell align="center">အရေအတွက်</TableCell>
            <TableCell align="center">စျေးနှုန်း</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
