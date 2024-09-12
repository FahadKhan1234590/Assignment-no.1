import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value == 0? state.value = 0 : state.value -= 1
    },
    clearCounter: (state) => {
        state.value = 0
      }
  },
})

//all functions export
export const { increment, decrement,clearCounter} = counterSlice.actions

//reducer export
export default counterSlice.reducer