import axios from "axios";

export const API = axios.create({
    baseURL: "https://restcountries.com/v3.1/"
});

export async function getAllCountries() {
    const req = await API.get("/all");
    return req.data;
}
export async function getDetailsCountry(id) {
    const req = await API.get(`/alpha?codes=${id}`);
    return req.data;
}
export async function getRegionCountry(region) {
    const req = await API.get(`/region/${region}`);
    return req.data;
}

export async function getCountryByName(search) {
    const req = await API.get(`/name/${search}`);
    return req.data;
}

// https://restcountries.com/v3.1/region/{region

//https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
// https://restcountries.com/v3.1/alpha?codes=170,no,est,pe
