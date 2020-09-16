// const { default: Axios } = require('axios');

const baseURL = 'http://localhost:8080';

const registerBtn = document.getElementById('register');
const getUser = document.getElementById('user');

// async function getUserData() {
//   console.log('inside getUserData');
//   const response = await axios.get(`${baseURL}/users`);
//   console.log(response);
// }
const getUserData = () => {
  axios
    .get(`${baseURL}/users`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// private int id;
// private String name;
// private String gender;
// private String country;
// private String introduction;
// private String password;
// private String confirmPassword;

getUser.addEventListener('click', getUserData);

// *************************
// CREATE USER
// *************************

const registerUser = () => {
  console.log('inside registerUser');
  axios
    .post(
      `${baseURL}/user/new`,
      {
        name: name,
      },
      console.log(name)
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

registerBtn.addEventListener('click', registerUser);
