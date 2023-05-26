// import axios from 'axios';
// const baseUrl = 'http://13.127.176.139:9000/';
// // const baseUrl = 'http://localhost:9000/';

// export function PublicPostUrl(url, data) {
//   console.log('URL::::::::::::::::::::::::: ', baseUrl + url);
//   console.log('DATA::::::::::::::::::::::::: ', JSON.stringify(data));
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'post',
//       url: `${baseUrl}${url}`,
//       timeout: 1000 * 5, // Wait for 5 seconds
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: data,
//     })
//       .then(function (response) {
//         resolve(response);
//       })
//       .catch(function (error) {
//         console.log('Here Error');
//         console.log(error);

//         if (error.response) {
//           resolve(error.response);
//         } else if (error.request) {
//           resolve(error.request);
//         } else {
//           console.log(error.message);
//           resolve(error.message);
//         }
//         reject('Error');
//       });
//   });
// }

// export function PublicGetUrl(url, token) {
//   console.log(baseUrl+url)
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'get',
//       url: `${baseUrl}${url}`,
//       timeout: 1000 * 5, // Wait for 5 seconds
//       headers: {
//         'Content-type': 'application/json',
//       },
//     })
//       .then(function (response) {
//         resolve(response);
//       })
//       .catch(function (error) {
//         if (error.response) {
//           // console.log(error.response)
//           // Request made and server responded
//           resolve(error.response);
//         } else if (error.request) {
//           // The request was made but no response was received
//           resolve(error.request);
//         } else {
//           console.log(error);
//           // Something happened in setting up the request that triggered an Error
//           resolve(error.message);
//         }
//         reject('Error');
//       });
//   });
// }
