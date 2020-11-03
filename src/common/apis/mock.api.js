

/**
 *
 *
 */

export function newUser(userData) {
  return {
    url: `${process.env.PUBLIC_URL}/user-crud/v1/users`,
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    data: userData
  };
}