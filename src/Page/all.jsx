import { useGetAllCountries } from "../Api/query.js";
import MemoizedList from "../Components/countryList.jsx";
import FilterByRegion from "../Components/regions.jsx";
function All() {
    const { isPending, data, isError, error } = useGetAllCountries();
    if (isPending) return <p>pending...</p>;
    if (isError) return <p>Error: {error}</p>;

    return (
        <div>
            {data.map(country => (
                <MemoizedList country={country} />
            ))}
        </div>
    );
}
export default All;
