require('dotenv/config')

/**
 *
 *
 */

export function newUser(userData) {
  console.log("ënv:", process.env)
  return {
    url: `https://5f9cb5b56dc8300016d2d8f3.mockapi.io/user-crud/v1/users`,
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    data: userData
  };
}