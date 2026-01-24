const { response } = require("express");

const baseUrl = "https://jsonplaceholder.typicode.com";
// const getUsers = () => {
//   // liaison avec l'api avec fetch
//   fetch(`${baseUrl}/users`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// getUsers();
// async : permet de déclarer une promesse et permet au promesses de s'executer asynchroniquement
const getUsers = async () => {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers();
