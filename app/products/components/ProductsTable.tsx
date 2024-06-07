import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductsTable = () => {
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
            <TableCell>Id</TableCell>
            <TableCell align="right">နာမည်</TableCell>
            <TableCell align="right">ပုံ</TableCell>
            <TableCell align="right">အရေအတွက်</TableCell>
            <TableCell align="right">စျေးနှုန်း</TableCell>
            <TableCell align="right">ရက်စွဲ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
