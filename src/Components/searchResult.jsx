import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { API } from "../Api/api.js";
function SearchResult({ isSearch, search, setIsSearch }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const URL = `https://restcountries.com/v3.1/name/${search}`;
    const [error, setError] = useState();
    async function getCountryByName() {
        setLoading(true);
        try {
            const req = await API.get(`/name/${search}`);
            setData(req.data);
            setLoading(false);
        } catch (err) {
            setError(err.data.status);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCountryByName();
    }, [search, isSearch]);
    if (loading)
        return (
            <div className="m-6">
                <ClipLoader
                    color="#9e9e9e"
                    cssOverride={{}}
                    loading={true}
                    size={35}
                    speedMultiplier={1}
                />
            </div>
        );
    if (error) return <p>Error:{error}</p>;
    return (
        <>
            <div className="p-4">
                {data.map(country => (
                    <div
                       key={country.ccn3}
                        onClick={() => navigate(`/${country.ccn3}`)}
                        className="my-6 rounded-md shadow-md m-auto w-72 lg:inline-block mx-4 md:inline-block mx-4 dark:bg-gray-900 bg-gray-100 dark:shadow-gray-900"
                    >
                        <img
                            src={country.flags.svg}
                            alt={country.flags.svg}
                            className="h-44 w-full mb-2 rounded-t-md"
                        />
                        <h5 className="text-black dark:text-white text-sm font-bold m-3">
                            {country.name.common}
                        </h5>
                        <div className="m-4 pb-6">
                            <p className="text-sm text-black font-bold dark:text-white">
                                Capitals:
                                    {country.capital}
                            </p>
                            <p className="dark:text-white text-sm text-black font-bold">
                                Region:
                              
                                    {country.region}
                              
                            </p>
                            <p className="dark:text-white text-sm text-black font-bold">
                                Population:
                                
                                    {country.population}
                            
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default SearchResult;
