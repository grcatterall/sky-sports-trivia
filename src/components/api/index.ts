'use server'
import axios from "axios"

export const Request = async (url: string) => {
    const {data} = await axios.get(url);
    return data;
}