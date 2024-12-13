// // import { isvalid } from "./function.js";

// let email = document.querySelector("#mail");
// let password = document.querySelector("#password");
// let btn = document.querySelector("#btn");
// let name = document.querySelector("#name");
// let resvalid=document.querySelector('#pasword')
// let random = Math.trunc(Math.random() * 25);
// let naruto = "naruto";
// let randomAnime = `https://api.jikan.moe/v4/random/anime`;
// let searchApi = `https://api.jikan.moe/v4/anime?q=${naruto}`;

// document.addEventListener("DOMContentLoaded", function () {
//   fetch(searchApi, {
//     method: "GET",
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       throw new Error("Failed to fetch data");
//     })
//     .then((data) => {
//       console.log(data);

//       //   document.body.style.backgroundImage = `url('${data.data[0].images.jpg.large_image_url}')`;
//       let style = document.createElement("style");
//       style.innerHTML = `
//           body::before {
           
//             background-image: url('${data.data[random].images.webp.large_image_url}');
//             background-size: cover;
//             background-position: center;
//           }
//         `;

//       document.body.appendChild(style);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function isvalid(data) {
//   if (data.username.trim().length < 2) {
//     alert("Ism kamida 2 ta belgidan iborat bo'lishi kerak.");
//     return false;
//   }
//   if (!data.email.includes("@") || data.email.trim().length < 5) {
//     alert("To'g'ri email kiriting.");
//     return false;
//   }
//   if (data.password.length < 8) {
//     alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
//     return false;
//   }
//   return true;
// }
// function valid() {
//   if (resvalid.length < 8) {
//     alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
//     return false;
//   }
// }
// async function sorov(users) {
//   try {
//     let response = await fetch(
//       `https://auth-rg69.onrender.com/api/auth/signup`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(users),
//       }
//     );
//     let data = await response.json();
//     if (
//       data.massage == "Failed! Username is already use!" ||
//       data.massage == "Failed! email is already use!" ||
//       data.massage == "Failed! Username is already use!"
//     ) {
//       alert(data.massage);
//       return;
//     }
//     // return response.json();
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }
// // let loginPageAsosyApi = `https://auth-rg69.orender.com/api/auth/signup`;
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();

//     let users = {
//       username: name.value.trim(),
//       email: email.value.trim(),
//       password: password.value,
//     };

//     if (!isvalid(users)) {
//       return;
//     }
//     if (!valid()) {
//       return;
//     }

//     sorov(users)
//       .then((data) => {
//         console.log("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi:", data);
//         alert("Ro'yxatdan o'tish muvaffaqiyatli!");
//       })
//       .catch((err) => {
//         alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
//       });
//   });





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
function valid() {
  if (resvalid.length < 8) {
    alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
    return false;
  }
}
async function sorov(users) {
  try {
    let response = await fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
    let data=await response.json()
    if (
      data.massage == "Failed! Username is already use!" ||
      data.massage == "Failed! email is already use!" ||
      data.massage == "Failed! Username is already use!"
    ) {
      alert(data.massage)
      return
    }
    // return response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let users = {
    username: name.value.trim(),
    email: email.value.trim(),
    password: password.value,
  };

  if (!isvalid(users)) {
    return;
  }
  if (!valid()) {
    return
  }

  sorov(users)
    .then((data) => {
      console.log("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi:");
      alert("Ro'yxatdan o'tish muvaffaqiyatli!");
      window.location.href='login.html'
    })
    .catch((err) => {
      alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
    });
});
