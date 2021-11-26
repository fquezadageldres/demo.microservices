
const createElement = async (queue:string, data:object) => {
  
    let url = 'http://localhost:3031/create';

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers':'*' },
      mode: 'cors',
      body: JSON.stringify({queue:queue, data:data})
    });
    
    return response.json()
}

export default createElement;