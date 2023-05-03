import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f185783673msha2aadb3373a9bf8p1ac836jsnbad789af09df',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })



    return data;
}

