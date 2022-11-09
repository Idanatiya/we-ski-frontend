import { SearchQuery } from '../types';

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/hotels';

const searchHotels = async (query: SearchQuery) => {
  try {
    const response = await axios.post(API_URL, query);
    if (response.data?.message) {
      return [];
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

export const hotelService = {
  searchHotels,
};
