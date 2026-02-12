import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getRequest = (endpoint: string) => http.get(endpoint);

// ReturnType is defaulted to an array of the RequestType.
export const postRequest = <RequestType, ReturnType = RequestType[]>(endpoint: string, data: RequestType) => http.post<ReturnType>(endpoint, data);

export const putRequest = <RequestType, ReturnType = RequestType[]>(endpoint: string, data: RequestType) => http.put<ReturnType>(endpoint, data);

export const deleteRequest = (endpoint: string) => http.delete(endpoint);