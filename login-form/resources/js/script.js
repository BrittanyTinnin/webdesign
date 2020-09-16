const axios = require('axios');

// Send a POST request
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
// GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });
const baseURL = 'http://localhost:8080';

// axios({
//   method: 'post',
//   url: `${baseURL}/user/new`,
//   data: {
//     name: this.name.value,
//     gender: '',
//     country: '',
//     introduction: '',
//     password: '',
//     confirmPassword: '',
//   },
// }).then((response) => {
//   console.log(response);
// });

// private int id;
// private String name;
// private String gender;
// private String country;
// private String introduction;
// private String password;
// private String confirmPassword;

$(document).ready(function () {
  $('#register-user').submit(function (event) {
    //stop submit the form, we will post it manually.
    event.preventDefault();

    fire_ajax_submit();
  });
});

function fire_ajax_submit() {
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: `${baseURL}/user/new`,
    data: JSON.stringify(search),
    dataType: 'json',
    cache: false,
    timeout: 600000,
    success: function (data) {
      console.log('Data: ' + data);
    },
    error: function (e) {
      console.log('Error: ' + e);
    },
  });
}
