import { createSlice } from '@reduxjs/toolkit'

export const numberguessSlice = createSlice({
  name: 'numberguess',
  initialState: {
    guessInput: "",
    player: 1,
    playerNumbers: [],
    err: true,
    winners: []
  },
  reducers: {
    inputval: (state , action)=>{
        state.guessInput = action.payload;

        if( 20 > action.payload  || 30 < action.payload ){
            state.err = true
        }
        else{
            state.err = false;
          }
    },
    addValue: (state)=>{
      state.playerNumbers.push(state.guessInput)
      state.guessInput = ""
      state.player++

      // winner choose
      if(state.playerNumbers.length == 4){
        state.player = "result"
        state.playerNumbers.map((item , index)=> {
          if(state.playerNumbers[0] == item && index !== 0){
            state.winners.push( index + 1 )
          }
        })
      }
    },
    resetGame: (state)=>{
      state.guessInput = "";
      state.player = 1 ;
      state.playerNumbers = [];
      state.err = true ;
      state.winners = []
    } 
  }
})

// Action creators are generated for each case reducer function
export const { inputval , addValue  , resetGame} = numberguessSlice.actions

export default numberguessSlice.reducer