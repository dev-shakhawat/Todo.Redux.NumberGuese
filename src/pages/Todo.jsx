import React from "react";
import { useDispatch, useSelector } from "react-redux";




// icons
import { MdOutlinePlaylistAdd } from "react-icons/md";


// slices/reduces
import { inputval } from "../redux/slices/todoSlice";


export const Todo = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector((state)=> state.todo.value)

console.log(inputValue);



  return (
    <div className="fixed top-[50%] left-[50%] translate-[-50%] w-full   ">
      <div className="w-full flex items-center flex-col px-5   ">

        {/* input box */}
        <div className="flex w-full justify-center lg:w-1/4   ">
          <input onChange={(e)=> dispatch(inputval(e.target.value))} type="text" placeholder="Type here" className="input w-full " />
          <button className="btn border btn-outline ">
            Add
            <MdOutlinePlaylistAdd className="text-2xl"/>
          </button>
        </div>

        {/* list box */}
        <ul className="menu menu-md bg-base-200 rounded-box flex w-full justify-center lg:w-1/4">
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
