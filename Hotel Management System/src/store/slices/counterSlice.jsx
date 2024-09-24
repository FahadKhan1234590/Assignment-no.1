import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter : 0
}

const counterSlice = createSlice({
  name : 'counter',
  initialState,
  reducers : {
    add:(state)=>{
        state.counter += 1;
    },
    minus: (state)=>{
        state.counter > 0? state.counter -= 1
        :
        0 
    }
  }
})
export const {add,minus} = counterSlice.actions 
export default counterSlice.reducer;