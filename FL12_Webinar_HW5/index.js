fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
        json.forEach(user => {
            fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
            .then(res => res.json())
            .then(img => {
               let text = `
                <div class="card col-3" style="width: 18rem;">
                     <img class="card-img-top" src="${img[0].url}" alt="cat">
                     <div class="card-body">
                        <button class="btn"><i class="far fa-edit"></i></button>
                        <h4 class="card-title">ID: ${user.id}</h4>
                        <p class="card-text">Name: ${user.name}</p>
                        <p class="card-text">Email: ${user.email}</p>
                        <p class="card-text">Address: ${user.address.street} ${user.address.suite} ${user.address.city}</p>
                     </div>
                </div>
             `;
             document.getElementById('users').innerHTML += text;
            })
        });
    })

