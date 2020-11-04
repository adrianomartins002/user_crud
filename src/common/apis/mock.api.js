require('dotenv/config')

/**
 *
 *
 */

export function newUser(userData) {
  console.log("ënv:", process.env)
  return {
    url: `${process.env.REACT_APP_PUBLIC_URL}/user-crud/v1/users`,
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    data: userData
  };
}