import { configureStore } from '@reduxjs/toolkit'


// slices
import  todoSlice  from './slices/todoSlice'





export default configureStore({
  reducer: {
    todo: todoSlice,
  }
})