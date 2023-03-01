// import React from 'react'
// import axios from 'axios'

// export default function authHeader() {
//     // const user = localStorage.getItem('user')
//     // if(user){
//     //     return { Authorization: `Bearer ${localStorage.getItem("user")}`}
//     // } else {
//     //     return { }
//     // }

//     //Interceptar el jtw y guardarlo en el header
//         axios.interceptors.request.use(
//             (config) => {
//             const apiToken = localStorage.getItem("user");
//             if(apiToken){
//                 config.headers.Authorization = `Bearer ${localStorage.getItem("user")}`;
//             }
//             return config;
//             },
//             (error) => {
//             return Promise.reject(error);
//             }
//         )

//  }
