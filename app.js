const getTodos = url => new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200;
        const isRequestNotOk = request.readyState === 4;

    if(isRequestOk) {
        const data = JSON.parse(request.responseText);
        resolve(data);
    }

    if(isRequestNotOk) {
        reject('Nao foi possivel obter os dados');
    }
  });

  request.open('GET', url);
  request.send();
});

getTodos('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokemon => {
        console.log(`Dados do pokemon: ${pokemon.name}`);
        return getTodos('https://pokeapi.co/api/v2/pokemon/4');
    })
    .then(chamander => {
        console.log(chamander);
        return getTodos('https://pokeapi.co/api/v2/pokemon/7');
    })
    .then(squirtle => console.log(squirtle))
    .catch(error => console.log(error));
