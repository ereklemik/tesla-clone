import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model X", "Model S", "Model 3", "Cybertruck"],
  };
  
  const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
  })
  
  export const selectCars = state => state.car.cars;
  
  
  export default carSlice.reducer;
  