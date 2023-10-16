import { useState,useContext, createContext } from "react";
import {BiSolidChevronLeftCircle, BiHomeAlt} from 'react-icons/bi'
import logo from '../assets/logo.png'
const SidebarContext = createContext();

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
            className={` ${
            open ? "w-56" : "w-20 "
            } bg-white h-screen p-5  pt-8 relative duration-300`}
        >
            <BiSolidChevronLeftCircle className={`absolute cursor-pointer -right-3 top-9 text-3xl text-primaryColor border-primaryColor
            border-[1px] rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            {/* <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            /> */}

            <div className="flex gap-x-4 items-center w-14">
                <img
                    src={logo}
                    className={`cursor-pointer duration-500 -mt-4 -ml-3 w-14 ${
                    open && "rotate-[360deg] w-14 "
                    }` } onClick={() => setOpen(!open)}
                />
                <span
                className={`text-textColor origin-left  duration-200 ${
                !open && "scale-0"
                }`}
                > 
                    <h2 className="font-medium text-xl">ParkSmart</h2>
                    <h3 className="font-normal text-base">Maxaquene</h3>           
                </span>
            </div>

            <SidebarContext.Provider value={{open}} >
                <ul className="flex-1 w-[110%] -ml-1  mt-10 ">{children} </ul>
            </SidebarContext.Provider>

            {/* <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-textColor text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                        index === 0 && "bg-light-white"
                    } `}
                >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                </span>
                </li>
            ))}
            </ul> */}
        </div>
        <div className="h-screen flex-1 p-7 bg-slate-200" >
            <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
    </div>
  );
}
export default Sidebar;



export function SidebarItem({ icon, text, active, alert }) {
    const { open } = useContext(SidebarContext)
    
    return (
            <li className={` flex items-center py-1 px-2 my-1.5
            font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-slate-700 to-primaryColor  text-white" 
        : "hover:bg-gradient-to-tr from-slate-100 to-slate-300 hover:transition-none text-textColor"}`}>
                {icon}

                <span className={`overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>
                    {text}
                </span>

                {!open && (
                    <div className={`absolute left-full px-2 py-1 ml-2 rounded-md bg-white text-primaryColor text-sm
                    invisible opacity-20 -translate-x-3 transition-all
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}>
                        {text}
                    </div>
                )}
            </li>




    //   <li
    //     className={`
    //       relative flex items-center py-2 px-3 my-1
    //       font-medium rounded-md cursor-pointer
    //       transition-colors group text-textColor
    //       ${
    //         active
    //           ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
    //           : "hover:bg-indigo-50 text-gray-600"
    //       }
    //   `}
    //   >
    //     {icon}
    //     <span
    //       className={`overflow-hidden transition-all ${
    //         open ? "w-52 ml-3" : "w-0"
    //       }`}
    //     >
    //       {text}
    //     </span>
    //     {alert && (
    //       <div
    //         className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
    //             open ? "" : "top-2"
    //         }`}
    //       />
    //     )}
  
    //     {!open && (
    //       <div
    //         className={`
    //         absolute left-full rounded-md px-2 py-1 ml-6
    //         bg-indigo-100 text-indigo-800 text-sm
    //         invisible opacity-20 -translate-x-3 transition-all
    //         group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    //     `}
    //       > 
    //         {text}
    //       </div>
    //     )}
    //   </li>
    )
  }