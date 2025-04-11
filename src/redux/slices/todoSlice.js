import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: 0
  },
  reducers: {
    inputval: (state , action)=>{
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { inputval } = todoSlice.actions

export default todoSlice.reducer