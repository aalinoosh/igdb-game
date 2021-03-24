import React  from 'react';
import axios from 'axios';
const corsUrl = "http://0.0.0.0:8080/";


const Api = (url,data) => {
    const blabla = axios({
    url: corsUrl+url,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
        'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
    },
    data: data

    });
    return blabla;
}

export default Api;
