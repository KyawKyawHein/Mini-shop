"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductsTable from "./components/ProductsTable";

const ProductsPage = () => {
  const theme = useTheme();
  return (
    <Box className="my-3 w-full overflow-x-hidden">
      <Box className="flex justify-between items-center px-3 py-1 mb-5">
        <Typography className="text-xl lg:text-4xl font-bold text-blue-500">
          All Products
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
      <ProductsTable/>
    </Box>
  );
};

export default ProductsPage;
