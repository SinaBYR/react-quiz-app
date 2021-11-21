import axiosPackage from 'axios';

export const axios = axiosPackage.create({
    baseURL: 'https://opentdb.com/api.php'
})