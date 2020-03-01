let users;
const spinner = document.getElementById("spinner");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    users = json;
    json.forEach(user => {
      fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png")
        .then(res => res.json())
        .then(img => {
          let text = `
                <div class="card col-3">
                     <img class="card-img-top" src="${img[0].url}" alt="cat">
                     <div class="card-body">
                        <button class="btn-edit" id="${user.id}" onClick="editUser(this.id)"><i class="far fa-edit"></i></button>
                        <button class="btn-delete" value="${user.id}" onClick="deleteUser(this.value)"><i class="fas fa-trash"></i></button>
                        <h4 class="card-title">ID: ${user.id}</h4>
                        <p><strong>Name:</strong> ${user.name} <strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Address:</strong> ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><strong>Geo:</strong> lat: ${user.address.geo.lat} lng: ${user.address.geo.lng}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> ${user.website}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                     </div>
                </div>
             `;
          document.getElementById("users").innerHTML += text;
        });
    });
  });

function editUser(clicked) {
  let userDetails = document.getElementById(clicked).parentElement;
  let editForm = document.createElement("div");

  editForm.innerHTML = `
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Name:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].name
        }" value="${
    users[clicked - 1].name
  }" aria-label="name" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Email:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].email
        }" value="${
    users[clicked - 1].email
  }" aria-label="email" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Username:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].username
        }" value="${
    users[clicked - 1].username
  }" aria-label="username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Street:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].address.street
        }" value="${
    users[clicked - 1].address.street
  }" aria-label="street" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Suite:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].address.suite
        }" value="${
    users[clicked - 1].address.suite
  }" aria-label="suite" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">City:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].address.city
        }" value="${
    users[clicked - 1].address.city
  }" aria-label="city" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Zipcode:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].address.zipcode
        }" value="${
    users[clicked - 1].address.zipcode
  }" aria-label="zipcode" aria-describedby="basic-addon1">
    </div>
   <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Phone:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].phone
        }" value="${
    users[clicked - 1].phone
  }" aria-label="phone" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Website:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].website
        }" value="${
    users[clicked - 1].website
  }" aria-label="website" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Company:</span></div>
        <input type="text" class="form-control" id="${
          users[clicked - 1].company.name
        }" value="${
    users[clicked - 1].company.name
  }" aria-label="company" aria-describedby="basic-addon1">
    </div>
    <button class="save-btn" id="${clicked +
      `${users[clicked - 1].username}`}">Save</button>
  `;

  userDetails.appendChild(editForm);

  document
    .getElementById(clicked + users[clicked - 1].username)
    .addEventListener("click", function() {
      spinner.removeAttribute("hidden");
      fetch(
        `https://jsonplaceholder.typicode.com/users/${users[clicked - 1].id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: users[clicked - 1].id,
            name: document.getElementById(users[clicked - 1].name).value,
            username: document.getElementById(users[clicked - 1].username)
              .value,
            email: document.getElementById(users[clicked - 1].email).value,
            address: {
              street: document.getElementById(users[clicked - 1].address.street)
                .value,
              suite: document.getElementById(users[clicked - 1].address.suite)
                .value,
              city: document.getElementById(users[clicked - 1].address.city)
                .value,
              zipcode: document.getElementById(
                users[clicked - 1].address.zipcode
              ).value,
              geo: {
                lat: users[clicked - 1].address.geo.lat,
                lng: users[clicked - 1].address.geo.lng
              }
            },
            phone: document.getElementById(users[clicked - 1].phone).value,
            website: document.getElementById(users[clicked - 1].website).value,
            company: {
              name: document.getElementById(users[clicked - 1].company.name)
                .value,
              catchPhrase: users[clicked - 1].company.catchPhrase,
              bs: users[clicked - 1].company.bs
            }
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          spinner.setAttribute("hidden", "");
        });
      userDetails.removeChild(editForm);
    });
}

function deleteUser(clicked) {
  spinner.removeAttribute("hidden");
  fetch(`https://jsonplaceholder.typicode.com/users/${clicked}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(json => {
      spinner.setAttribute("hidden", "");
      console.log(json);
    });
}
