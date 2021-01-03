import {GET_DOMAINS_URL} from './config';
import axios from 'axios'; 

export const fetchDomainsData = () => {
    console.log(GET_DOMAINS_URL);
  
  const your_token = "token here";
    return axios.get(GET_DOMAINS_URL , {
        headers: {
            'authorization': your_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            // handle success
            console.log("hello there")
            console.log(res);
            return res; 
        })
        .catch(err => {
            // handle error
            console.log(err);
        })
        .then(() => {
            // always executed
        });
}