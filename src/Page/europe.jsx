import FilterByRegion from "../Components/regions.jsx";
import { useGetCountryByRegion } from "../Api/query.js";
import RegionList from "../Components/regionList.jsx";
import ClipLoader from "react-spinners/ClipLoader";
function Europe() {
    const region = "Europe";
    const { isPending, data, isError, error } = useGetCountryByRegion(region);
    if (isPending)
        return (
            <div className="h-screen w-full grid place-content-center">
                <ClipLoader
                    color="#9e9e9e"
                    cssOverride={{}}
                    loading={true}
                    size={35}
                    speedMultiplier={1}
                />
            </div>
        );
    if (isError) return <p>Error {error}</p>;
    return (
        <>
            <FilterByRegion region={region} />
            <div className="p-4">
                {data.map(country => (
                    <RegionList country={country} />
                ))}
            </div>
        </>
    );
}
export default Europe;
