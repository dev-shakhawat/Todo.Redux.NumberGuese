import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


// icon
import { FcNext } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";



// slices/reducer
import { inputval } from '../redux/slices/numberguessSlice'
import { addValue } from '../redux/slices/numberguessSlice';
import { resetGame } from '../redux/slices/numberguessSlice';

export const NumberGuess = () => {


  const dispatch = useDispatch()
  const whichPlayer = useSelector((state)=> state.numberguess.player);
  const Arr = useSelector((state)=> state.numberguess.playerNumbers)
  const errSMS = useSelector((state)=> state.numberguess.err)
  const typed = useSelector((state)=> state.numberguess.guessInput)
  const winner = useSelector((state)=> state.numberguess.winners)
  
  console.log(winner);
  

  return (
    <div className='fixed top-[50%] left-[50%] translate-[-50%] w-full '>
      <div className="w-full flex  items-center flex-col px-5   ">

        <h2 className=' font-semibold capitalize  '> {whichPlayer == "result" ? whichPlayer : `Player ${whichPlayer}`}</h2>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          
          {/* input box */}
          {whichPlayer !== "result" && <input value={typed} onChange={(e)=> dispatch(inputval(e.target.value))} type="text" placeholder="Type your number between 20-30" className={`input  `} />}
          
          {/* result  */}
          {winner.length == 0 && whichPlayer == "result" && <h2  className=' py-1 ' >Player 1 WINNER  </h2> }
          {winner.length !== 0 && whichPlayer == "result" && <h2 className=' py-1 ' >Player {winner.map((item , index)=> <span key={index}> {item} , </span>)} WINNER </h2>}
          
          {/* buttons */}
          {!errSMS && whichPlayer !== "result" && <button onClick={()=> dispatch(addValue())}  className="btn px-20 mt-2   "><span>Next</span><FcNext/></button>}
          {!errSMS && whichPlayer == "result" && <button onClick={()=> dispatch(resetGame())}   className="btn px-20 mt-2   "><span>Play again</span><FcRefresh className='text-xl '/></button>}

        </div>
      </div>
    </div>
  )
}
