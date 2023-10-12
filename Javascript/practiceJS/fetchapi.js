


// fetch api :----method 1

//syntax:-

 fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));



//example:-

//fetch api using post ---create
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'far',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));







 // async and await method :- syntax 
  async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
  }
  getUsers().then(data => {
    data;  });                  // fetched data
  



// example of async and await with post:-

async function getUsers() {

  let options ={
    
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'far',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  let response = await fetch('https://jsonplaceholder.typicode.com/posts',options);
  let data = await response.json();
  return data;
 
}

getUsers().then(data => {
  data;  });                  // fetched data
  