import { host } from "./host";

export const sendMail = async (body:{email: string, message: string}) => {
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
    const content = await rawResponse.json();
    return content
}

