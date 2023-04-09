import axios from 'axios';
import { configuration } from '../utils';

const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

const isIsoDateString = (value: unknown): boolean => {
  return (
    value !== null && value !== undefined && typeof value === 'string' && isoDateFormat.test(value)
  );
};

const handleDates = (body: any): unknown => {
  if (body === null || body === undefined || typeof body !== 'object') {
    return body;
  }

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isIsoDateString(value)) {
      body[key] = new Date(value);
    } else if (typeof value === 'object') {
      handleDates(value);
    }
  }
};

const axiosPublic = axios.create({
  baseURL: configuration.serverUrl
});

axiosPublic.interceptors.response.use((originalResponse) => {
  handleDates(originalResponse.data);
  return originalResponse;
});

const axiosPrivate = axios.create({
  baseURL: configuration.serverUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosPrivate.interceptors.response.use((originalResponse) => {
  handleDates(originalResponse.data);
  return originalResponse;
});

export { axiosPublic, axiosPrivate };
