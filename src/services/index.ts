import { host } from "./host";
import axios from "axios";
/* export const sendMail = async (body:{email: string, message: string}) => {
    console.log(host)
    const rawResponse = await fetch(`${host}`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:  body.email,
            message: body.message
        })
    });
    console.log(rawResponse, rawResponse.json())
    const content = await rawResponse.json();
    return content
} */


export const sendMail = async (body:{email: string, message: string}) => {
    const { data } = await axios.post(`${host}`, {      
        email:  body.email,
        message: body.message
    }, 
    {
        headers: {
          'Content-Type': 'application/json'
        }
});
    const response = data
    return response
};
