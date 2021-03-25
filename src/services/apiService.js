import Axios from "axios";
// import { method } from "lodash";
import { baseurl } from "./constant";
import { error } from './popup';
import { getTokenInToLocalStorage } from "../utils/intercepter";

import { Store } from "./store";

// const FileUpload = require('react-fileupload');
// want don't use so run 'npm uninstall --save react-fileupload'
// Add a request interceptor
Axios.interceptors.request.use(
    function(config) {
        if (config.progress) {
            // Popup.show({
            //     progressBar: true,
            // });
        }
        // Do something before request is sent

        return config;
    },
    function(error) {
        // Popup.hide();
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
Axios.interceptors.response.use(
    function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log("response interceptor");
        // Popup.hide();
        return response;
    },
    function(error) {
        // Popup.hide();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export const api = {
    // invoke: (method, url, data = {}, token = Store.getUserToken(null)) => {
    invoke: (method, url, data = {}, token = localStorage.getItem('ACCESS_TOKEN')) => {
        let progress = data && data.progress === false ? data.progress : true;
        // console.log("token => ", token);
        // console.log('progress',progress)
        let param = null;
        if (method.toLowerCase() == "get") {
            param = data;
            data = null;
        }
        return Axios({
            url: url,
            progress: progress,
            baseURL: baseurl,
            method: method,
            headers: {
                Authorization: "Bearer " + token,
            },
            params: param,
            data: data,
        }).catch((err) => {
            console.log("Error 123=> ", err);
            if (err && err.message && err.message === "Network Error") {
                error("No internet connection");
            } else {
                error(err?.data?.message);
            }
            // return error.response;
            return { data: err?.data };
        });
    },

    sendDeviceToken: async(method, url, token = Store.getUserToken(null)) => {
        // const deviceToken = await requestUserPermission();
        // return Axios({
        //     url: url,
        //     baseURL: baseurl,
        //     method: method,
        //     headers: {
        //         Authorization: 'Bearer ' + token,
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     data: { device_token: deviceToken },
        // }).catch((error) => {
        //     if (error && error.message && error.message === 'Network Error') {
        //         Popup.show({
        //             type: 'Danger',
        //             text: 'No internet connection!',
        //             autoClose: true,
        //         });
        //     }
        //     return error.response;
        // });
    },
};

// async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Authorization status:', authStatus);
//         await messaging().registerDeviceForRemoteMessages();
//         const token = await messaging().getToken();
//         return token;
//     }
// }