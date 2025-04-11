import { configureStore } from '@reduxjs/toolkit'


// slices
import  todoSlice  from './slices/todoSlice'
import numberguessSlice from './slices/numberguessSlice'





export default configureStore({
  reducer: {
    todo: todoSlice,
    numberguess: numberguessSlice
  }
})