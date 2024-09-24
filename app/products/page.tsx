"use client";
import {
  Box,
  Breadcrumbs,
  Fab,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import ProductsBox from "./components/ProductsBox";
import products from "@/lib/json/products";
import { backToHome } from "@/lib/utils";

const ProductsPage = () => {
  const {push} = useRouter();
  return (
    <Box className="my-8 w-full overflow-x-hidden h-full">
      <Breadcrumbs aria-label="breadcrumb" className="mb-3">
        <Link underline="hover" color="inherit" onClick={backToHome}>
          Home
        </Link>
        <Typography sx={{ color: "text.primary" }}>Add Product</Typography>
      </Breadcrumbs>
      <Box className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductsBox key={product.id} {...product} />
        ))}
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        className="absolute bottom-2 right-7 z-40"
        onClick={()=>push('/products/add')}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default ProductsPage;
