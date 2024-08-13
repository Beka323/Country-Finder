import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetDetails } from "../Api/query.js";
import ClipLoader from "react-spinners/ClipLoader";
import { FaArrowLeftLong } from "react-icons/fa6";
function Details() {
    const { id } = useParams();
    const { isPending, isError, error, data } = useGetDetails(id);
    const navigate = useNavigate();
    if (isPending)
        return (
            <div className="h-screen w-full grid place-content-center">
                <ClipLoader
                    color="#0b0000"
                    cssOverride={{}}
                    loading={true}
                    size={35}
                    speedMultiplier={1}
                />
            </div>
        );
    if (isError) return <p>Error:{error}</p>;
    return (
        <>
          <div className="m-4">
                <button
                className="text-slate-900 dark:bg-slate-800 dark:shadow-slate-800 dark:text-gray-200 text-sm font-bold rounded-md py-2 px-6 shadow-xl flex items-center"
                onClick={() => {
                    navigate(-1);
                }}
            >
              <FaArrowLeftLong/>
              <span className="px-4">
                Back
              </span>
            </button>  
          </div>
            <div className="m-4">
                {data.map(country => (
                    <div>
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            className="w-full rounded-md"
                        />
                        <h5 className="font-bold text-md italic my-2 text-stone-700 dark:text-gray-200 ">
                            {country.name.official}
                        </h5>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200 ">
                            Languages:&nbsp;&nbsp;
                            {
                                country.languages[
                                    Object.keys(country.languages)[0]
                                ]
                            }
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            Capital:&nbsp;&nbsp;{country.capital}
                        </p>
                        <p className="text-base text-stone-700 dark:text-gray-200">
                            Region:&nbsp;&nbsp;{country.region}
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200 ">
                            Sub-Region:&nbsp;&nbsp; {country.subregion}
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200 ">
                            Population:&nbsp;&nbsp;{country.population}
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200 ">
                            Currencies:&nbsp;&nbsp;
                            {
                                country.currencies[
                                    Object.keys(country.currencies)[0]
                                ].symbol
                            }
                            /&nbsp;&nbsp;
                            {
                                country.currencies[
                                    Object.keys(country.currencies)[0]
                                ].name
                            }
                        </p>
                        <p className="text-stone-700 text-base my-2 dark:text-gray-200 ">
                            StartOfWeek:&nbsp;&nbsp;{country.startOfWeek}
                        </p>
                        <div>
                            {country.borders ? (
                                <div className="w-full flex flex-row overflow-scroll">
                                    <p className="text-grey-200 dark:text-gray-200 m-2 text-base ">
                                        {" "}
                                        Border{" "}
                                    </p>
                                    {country.borders.map(border => (
                                        <>
                                            <Link
                                                className="text-black dark:text-white my-4 mx-4 px-4 py-2 rounded-2 rounded-md bg-white font-bold border-1 border-slate-500 dark:bg-slate-800 dark:border-gray-200"
                                                to={`/border/${border}`}
                                            >
                                                {" "}
                                                {border}{" "}
                                            </Link>
                                        </>
                                    ))}
                                </div>
                            ) : (
                                <p className="m-4 text-grey-400 dark:text-gray-200 ">
                                    No border found
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Details;
