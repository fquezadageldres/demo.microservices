const getUsers = async () => {
  
    let url = 'http://localhost:3011/users';

    const response = await fetch(url, {
      method: 'GET',
    });
    
    return response.json()
}

export default getUsers;