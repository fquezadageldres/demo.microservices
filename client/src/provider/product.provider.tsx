const getProducts = async () => {
  
  let url = 'http://localhost:3021/products';

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      },
  });

  return response.json();
}

export default getProducts;