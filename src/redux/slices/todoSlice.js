import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    inputVal: "",
    taskArr: [],
    isValidInput: true,
    edit: false,
    taskIndex: null,
  },
  reducers: {
    inputval: (state , action)=>{
        state.inputVal = action.payload;
        state.isValidInput = true;
    },
    addTask: (state , action)=>{
      state.taskArr.push(state.inputVal);
      state.inputVal = "";
    },
    isvalid: (state , action)=> {
      state.isValidInput = action.payload
    },
    isEdit: (state , action)=>{
      state.edit = true;
      state.taskIndex = action.payload;
      state.inputVal = state.taskArr[action.payload]
    },
    editDone: (state )=>{
      state.taskArr[state.taskIndex] = state.inputVal;
      state.inputVal = "";
      state.edit = false;
    },
    deleteTask: (state , action)=>{
      state.taskArr.splice(action.payload , 1)
    }
  }
})

// Action creators are generated for each case reducer function
export const { inputval , addTask , isvalid , isEdit , editDone , deleteTask} = todoSlice.actions

export default todoSlice.reducer