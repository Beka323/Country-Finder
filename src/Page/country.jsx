import { useGetAllCountries } from "../Api/query.js";
import MemoizedList from "../Components/countryList.jsx";
import FilterByRegion from "../Components/regions.jsx";
import SearchResult from "../Components/searchResult.jsx";
import { IoIosSearch } from "react-icons/io"; 
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
function Country() {
    const region = "Filter By Region";
    const { isPending, data, isError, error } = useGetAllCountries();
    const [isSearch, setIsSearch] = useState(false);
    
    const [search, setSearch] = useState("");
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
      function handleIsSearch(){
        if (search !== "") {
          setIsSearch(true);
        }
        else if (search === "") {
         setIsSearch(false);
        }
      }
      handleIsSearch()
    ,[search]})
    if (isPending)
        return (
            <div className="w-full h-screen grid place-content-center">
                <HashLoader
                    color="#9e9e9e"
                    cssOverride={{}}
                    loading={true}
                    size={40}
                    speedMultiplier={1}
                />
            </div>
        );
    if (isError) return <p>Error: {error}</p>;

    return (
        <>
            <div className="relative p-2">
             <IoIosSearch className="absolute top-1/3 w-14 text-2xl text-gray-500 align-center"/>
                <input
                    className=" shadow-lg rounded pl-10 py-3 bg-white outline-none w-full md:w-2/4 lg:w-1/4 dark:text-white dark:bg-gray-600 dark:shadow-slate-800 placeholder:text-gray-500 placeholder:pl-10 placeholder:absolute placeholder:top-1/3 placeholder:text-base"
                    type="text"
                    placeholder="Search your Country"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <FilterByRegion region={region} />
            {isSearch ? (
                <SearchResult
                    setIsSearch={setIsSearch}
                    isSearch={isSearch}
                    search={search}
                />
            ) : (
                <div className="p-4">
                    {data.map(country => (
                        <MemoizedList key={country.ccn3} country={country} />
                    ))}
                </div>
            )}
        </>
    );
}
export default Country;
