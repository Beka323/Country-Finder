import { useNavigate } from "react-router-dom";
import React from "react";
function CountryList({ country }) {
    const navigate = useNavigate();
    return (
        <div
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
                    <span className="text-sm text-grey-500">
                        {country.capital}
                    </span>
                </p>
                <p className="dark:text-white text-sm text-black font-bold">
                    Region:
                    <span className="text-sm text-white">{country.region}</span>
                </p>
                <p className="dark:text-white text-sm text-black font-bold">
                    Population:
                    <span className="text-sm text-white">
                        {country.population}
                    </span>
                </p>
            </div>
        </div>
    );
}
const MemoizedList = React.memo(CountryList);
export default MemoizedList;
