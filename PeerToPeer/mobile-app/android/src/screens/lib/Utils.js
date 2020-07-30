const serverUrl = 'http://10.0.2.2:3000';

export const add = (item) => {

    console.log('inside add method');
    console.log(item);

    return fetch(`${serverUrl}/api/resource`, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || response.message || response.status);
      } else {
        return response.json();
      }
    });
  };

  export const search = (query) => {
    console.log('name',query.name);
    console.log('stclass',query.stclass);
    const name = query.name ? `name=${query.name}` : ''
    const stclass = query.stclass ? `stclass=${query.stclass}` : ''
 
    return fetch(`${serverUrl}/api/resource?${name}&${stclass}`, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || response.message || response.status);
      } else {
        return response.json();
      }
    });
  };


  export const searchaudio = (query) => {

    const name = query.name ? `name=${query.name}` : ''

     return fetch(`${serverUrl}/api/resource/audio?${name}`, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/html'
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText || response.message || response.status);
      } else {
        return response.text();
      }
    });
  };

