import axios, { InternalAxiosRequestConfig } from 'axios';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const authApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const setAuthHeader = async (config: InternalAxiosRequestConfig) => {
  const session = await getServerSession(authOptions);
  if (session?.user?.token?.access?.token) {
    config.headers.Authorization = `Bearer ${session.user.token.access.token}`;
  }
  return config;
};

authApiClient.interceptors.request.use(
  async (config) => {
    return await setAuthHeader(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient, authApiClient };
