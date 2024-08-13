import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../Api/api.js";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { FaArrowLeftLong } from "react-icons/fa6";
function Border() {
    const { bor } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function fetchData() {
        setLoading(true);
        try {
            const req = await API.get(`/alpha/${bor}`);
            if (req.data) {
                setLoading(false);
                setData(req.data);
            }
        } catch (err) {
            setError(err.req.status);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (bor) {
            fetchData();
        }
    }, [bor]);
    if (loading)
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
                    <div key={country.ccn3}>
                        <img
                            className="w-full rounded-md"
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            width="100"
                            height="100"
                        />
                        <h5 className="font-bold text-md italic my-2 text-stone-700 dark:text-gray-200">
                            {country.name.official}
                        </h5>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            {" "}
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
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            Sub Region:&nbsp;&nbsp; {country.subregion}
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            Population:&nbsp;&nbsp;{country.population}
                        </p>
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            {" "}
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
                        <p className="text-base text-stone-700 my-2 dark:text-gray-200">
                            StartOfWeek:&nbsp;&nbsp;{country.startOfWeek}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Border;
