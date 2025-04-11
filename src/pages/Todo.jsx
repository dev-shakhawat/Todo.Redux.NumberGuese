import React from "react";
import { useDispatch, useSelector } from "react-redux";




// icons
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";


// slices/reduces
import { inputval } from "../redux/slices/todoSlice";
import { addTask } from "../redux/slices/todoSlice";
import { isvalid } from "../redux/slices/todoSlice";
import { isEdit } from "../redux/slices/todoSlice";
import { editDone } from "../redux/slices/todoSlice";
import { deleteTask } from "../redux/slices/todoSlice";



export const Todo = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector((state)=> state.todo.inputVal)
    const taskArr = useSelector((state)=> state.todo.taskArr)
    const isValidInput = useSelector((state)=> state.todo.isValidInput )
    const isedit = useSelector((state)=> state.todo.edit);
 

    const handelAdd = ()=> {
      if(inputValue){
        dispatch(isvalid(true))
        dispatch(addTask())
      }
      else{
        dispatch(isvalid(false))
      }
    }


  return (
    <div className="fixed top-[50%] left-[50%] translate-[-50%] w-full   ">
      <div className="w-full flex items-center flex-col px-5   ">

        {/* input box */}
        <div className="flex w-full justify-center lg:w-1/4   ">
          <input value={inputValue} onChange={(e)=> dispatch(inputval(e.target.value))} type="text" placeholder="Type here" className={`input w-full      ${!isValidInput && " border border-red-500"}  `} />
          
          {!isedit && <button onClick={()=> handelAdd()} className="btn border btn-outline "> Add <MdOutlinePlaylistAdd className="text-2xl"/> </button>}
          {isedit && <button onClick={()=> dispatch(editDone())} className="btn border btn-outline "> Done <MdDone className="text-2xl"/> </button>}
        </div>

        {/* list box */}
        {taskArr.length > 0 ? 
        <ul className="menu menu-md bg-base-200 rounded-box flex w-full justify-center lg:w-1/4">
          {taskArr.map((task , index)=> (
            <li className="flex-row items-center justify-between  " key={index}>
              <p><span>{index+1}.</span>{task}</p>
              <div className="flex ">
                <button onClick={()=> dispatch(isEdit(index))} ><CiEdit className="text-2xl"/></button>
                <button onClick={()=> dispatch(deleteTask(index))}  className="ml-5 "><RiDeleteBin4Line className="text-xl"/></button>
              </div>  
            </li>
            ))}
        </ul>
        :
        <h3 className="mt-10">There is no task you have added , Please add some tasks.</h3>
        }
      </div>
    </div>
  );
};
