const cardContainer = document.querySelector('.card-container');

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = `https://i.pravatar.cc/100?u=${user.email}`;
      card.appendChild(image);

      const name = document.createElement('h3');
      name.textContent = user.name;
      card.appendChild(name);

      const email = document.createElement('p');
      email.textContent = user.email;
      card.appendChild(email);

      cardContainer.appendChild(card);
    });
  });