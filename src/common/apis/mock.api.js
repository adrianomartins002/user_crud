require('dotenv/config')

/**
 *
 *
 */

export function newUser(userData) {
  
  return {
    url: `${process.env.REACT_APP_PUBLIC_URL}/user-crud/v1/users`,
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    data: userData
  };
}