export async function loginUser(credentials: any) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(async data => await data.json())
    .catch(err => console.log('Error: ', err));
}

export async function registerUser(credentials: any) {
  return fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(async data => await data.json())
    .catch(err => console.log('Error: ', err));
}