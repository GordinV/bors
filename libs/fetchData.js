'use strict';
const axios = require('axios');
let isOk = false;
axios.defaults.baseURL = '/';

module.exports = {
    fetchDataGet(url) {
        return axios.get(url)
            .then(res => res)
            .catch(error => {
                console.error('fetchData status, error', error.response.status, error);
                return ({result: 'error', status: error.response.status});
            })
    },
    fetchDataPost(url, params, fileType) {
        let headers = {
            'Content-Type': 'multipart/form-data'
        }

        return axios.post(url, params, headers).then((res, err) => {
            return res;
        })
            .catch(error => {
                console.error('fetchData error', error.response.status, error);
                return ({result: 'error', status: error.response.status});
            })
    },
    fetchDataPut(url, params) {
        return axios.put(url, params )
            .catch(error => {
                console.error('fetchData error', error.response.status, error);
                return ({result: 'error', status: error.response.status});
            })
    },

};
