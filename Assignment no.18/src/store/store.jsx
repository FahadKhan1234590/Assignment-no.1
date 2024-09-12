import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/CounterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store