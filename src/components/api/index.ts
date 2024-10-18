'use server'
import axios from "axios"

export const Request = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    
    } catch (err: any) {
        console.error(url, err.message);
    }
}