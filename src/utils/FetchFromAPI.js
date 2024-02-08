import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
  
  params: {
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': 'b6bf86d9b1mshcc4601bef9e2af7p19253djsnbae3fb42e30b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}

