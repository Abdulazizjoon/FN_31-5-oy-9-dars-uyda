let email = document.querySelector("#mail");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let name = document.querySelector("#name");
let signupform = document.querySelector("#signupform");

let random = Math.trunc(Math.random() * 25);
let naruto = "naruto";
let searchApi = `https://api.jikan.moe/v4/anime?q=${naruto}`;

document.addEventListener("DOMContentLoaded", function () {
  fetch(searchApi, { method: "GET" })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      let random = Math.trunc(Math.random() * data.data.length); 
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
  if (!data.email.includes("@") || data.email.trim().length < 5) {
    alert("To'g'ri email kiriting.");
    return false;
  }
  if (data.password.length < 8) {
    alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
    return false;
  }
  return true;
}

async function jonatish(user) {
  try {
    const response = await fetch(
      "https://auth-rg69.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (
      data.message === "Failed! Username is already in use!" ||
      data.message === "Failed! Email is already in use!"
    ) {
      alert(data.message);
      return;
    }
    if (response.ok && data.message === "User registered successfully!") {
      alert("Ro'yxatdan o'tish muvaffaqiyatli!");
      window.location.href = "login.html";
    } else {
      alert("Hatolik yuz berdi");
    }
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let users = {
    username: name.value,
    email: email.value,
    password: password.value,
  };

  if (!isvalid(users)) {
    return;
  }

  jonatish(users);
});





