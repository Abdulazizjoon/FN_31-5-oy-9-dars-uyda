let email = document.querySelector("#mail");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let name = document.querySelector("#name");
let resvalid = document.querySelector("#pasword");

let random = Math.trunc(Math.random() * 25);
let naruto = "naruto";
let searchApi = `https://api.jikan.moe/v4/anime?q=${naruto}`;

document.addEventListener("DOMContentLoaded", function () {
  fetch(searchApi, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      console.log(data);

      let style = document.createElement("style");
      style.innerHTML = `
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('${data.data[random].images.webp.large_image_url}');
            background-size: cover;
            background-position: center;
            z-index: -1;
          }
        `;
      document.head.appendChild(style);
    })
    .catch((err) => {
      console.log(err);
    });
});

function isvalid(data) {
  if (data.username.trim().length < 2) {
    alert("Ism kamida 2 ta belgidan iborat bo'lishi kerak.");
    return false;
  }
  if (data.password.length < 8) {
    alert("Bunday paro`l mavju emas");
    return false;
  }
  return true;
}

async function sorov(user) {
  try {
    let response = await fetch(
      `https://auth-rg69.onrender.com/api/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      }
    );
    let data = await response.json();
    if (
      data.message == "User Not found." ||
      data.message == "Invalid Password!"
    ) {
      alert(data.message);
      return;
    }
    if (data.id && data.accessToken) {
    localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.accessToken);
        window.location.href='../index.html'

    }
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let users = {
    username: name.value.trim(),
    password: password.value,
  };

  if (!isvalid(users)) {
    return;
  }

  sorov(users);
});
