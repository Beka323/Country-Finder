import { useQuery } from "@tanstack/react-query";
import {
    getAllCountries,
    getDetailsCountry,
    getRegionCountry,
    getCountryByName
} from "./api.js";
export function useGetAllCountries() {
    return useQuery({
        queryKey: ["countries"],
        queryFn: getAllCountries
    });
}
export function useGetDetails(id) {
    return useQuery({
        queryKey: ["detail"],
        queryFn: () => getDetailsCountry(id)
    });
}
export function useGetCountryByRegion(region) {
    return useQuery({
        queryKey: ["Region"],
        queryFn: () => getRegionCountry(region)
    });
}
export function useGetCountryByName(search) {
    return useQuery({
        queryKey: ["name"],
        queryFn: () => getCountryByName(search)
    });
}
