import axios from "axios";

// const axiosConfig=
const axiosInstance = axios.create()


axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('access_token');
        console.log(config.url)
        if (token && !config.url.includes('/api/token/')) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

