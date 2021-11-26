const getProducts = async () => {
  
    let url = 'http://localhost:3021/products';

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers':'*' },
      mode: 'cors',
    });
    
    return response.json()
}

export default getProducts;