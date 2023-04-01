import axios from 'axios';
import { configuration } from '../utils';

export const axiosPublic = axios.create({
  baseURL: configuration.serverUrl
});

export const axiosPrivate = axios.create({
  baseURL: configuration.serverUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
