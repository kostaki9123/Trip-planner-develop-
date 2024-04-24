import axios from 'axios';

//To our backend

const BASE_URL = 'https://trip-planner-develop.vercel.app/';
                  

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
    baseURL: "https://v6.exchangerate-api.com/v6/87df55a74ead86ea7fcdf7bd/latest/USD" ,
    headers: { 'Content-Type': 'application/json' },
});