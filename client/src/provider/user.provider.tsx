const getUsers = async () => {
  
    let url = 'http://localhost:3011/users';

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        },
    });

    return response.json();
}

export default getUsers;