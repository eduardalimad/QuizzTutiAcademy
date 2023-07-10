import axios from "axios";

export const http = axios.create({
    baseURL: 'http://185.209.179.96:3100/',
    headers:{
        Accept: '*/*',
        'Content-Type': 'application/json'
    
        
    }
})