import axios from 'axios';

//To our backend

const BASE_URL = 'http://localhost:5000';
                  

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const axiosNocreadentials = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

//To get exchanges currency

export const axiosCurrencyRates = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD" ,
    headers: { 'Content-Type': 'application/json' },
});