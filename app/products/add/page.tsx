"use client";
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { backToHome, backToProduct } from "@/lib/utils";


const ProductAddPage = () => {
  const imgRef = useRef<HTMLInputElement | null>(null);  
  const handleImage = (e)=>{
    const files = e.target.files[0];
    try {
      
    } catch (error) {
      
    }
    alert('aa');
  }
  return (
    <Box className="my-8 w-full h-full overflow-x-hidden">
      <Breadcrumbs aria-label="breadcrumb" className="mb-3">
        <Link underline="hover" color="inherit" onClick={backToHome}>
          Home
        </Link>
        <Link underline="hover" color="inherit" onClick={backToProduct}>
          Products
        </Link>
        <Typography sx={{ color: "text.primary" }}>Add Product</Typography>
      </Breadcrumbs>
      <Box>
        <Typography className="text-blue-500 text-2xl font-bold mb-3">
          Add Product
        </Typography>
        <TextField
          id="outlined-basic"
          className="w-full my-3"
          label="Name"
          variant="outlined"
        />
        <Autocomplete
          disablePortal
          options={['a','cb','c']}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
          className="w-full my-3"
        />
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          className="my-3 w-full"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Price"
          type="number"
          className="my-3 w-full"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Button onClick={()=>{
          if(imgRef.current) imgRef.current.click()
        }} variant="outlined" className="w-full">Add Image</Button>

        {/* Image input  */}
        <input type="file" ref={imgRef} accept="image/*" style={{display: "none"}} onChange={handleImage} />

        <Button variant="contained" className="w-full fixed bottom-3 left-0">Add Product</Button>
      </Box>
    </Box>
  );
};
export default ProductAddPage;
