import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProductsById } from "./productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/medicine");
    return response.data;
  }
);

//getting the single product data
export const fetchAllProductByIdAsync = createAsyncThunk(
  "products/fetchProductsById",
  async (id) => {
    const response = await fetchProductsById(id);
    return response.data;
  }
);

const initialState = {
  items: [], //products
  isLoading: false,
  isError: false,
  selectedProduct: [],
};

export const productSlice = createSlice({
  name: "products", //product
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isError = true;
    });
    //fetchProductsById
    builder.addCase(fetchAllProductByIdAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
  },
});

export const selectedProductById = (state) => state.products.selectedProduct;
export default productSlice.reducer;
