import { useState } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
function FilterByRegion({region}) {
    const [dropdown, setDropDown] = useState(false);
    const toggle = () => {
      setDropDown(!dropdown)
    }
    return (
        <>
          <div className="inline-block relative m-4 w-44">
           <button onClick={toggle} className=" text-sm font-md dark:bg-slate-900 dark:shadow-slate-800 dark:text-gray-200 flex items-center justify-between text-start shadow bg-white rounded-md w-full p-2">
            {region} <span className="Hover:rotate-180 transition"><IoIosArrowDown className="dark:text-gray-200 text-black"/></span>
         </button>
         {dropdown && (
         <div className="w-full absolute top-12 dark:bg-slate-900">
          <Link className="rounded-t-md text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900 " to="/">All</Link>
          <Link className="text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900 shadow-inn" to="/africa">Africa</Link>
          <Link className="text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900 " to="/asia">Asia</Link>
          <Link className="text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900 " to="/americas">America</Link>
          <Link className="text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900 " to="/europe">Europe</Link>
         <Link className="rounded-b-md text-sm p-2 text-stone-950 block bg-white dark:text-gray-200 dark:bg-slate-900 Hover:bg-slate-900"  to="/oceania">Oceania</Link>
       </div> 
         )}
          </div>
        </>
    );
}
export default FilterByRegion;
