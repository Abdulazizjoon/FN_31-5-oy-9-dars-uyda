// let email = document.querySelector("#mail");
// let password = document.querySelector("#password");
// let btn = document.querySelector("#btn");
// let name = document.querySelector("#name");
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


// let loginPageAsosyApi = `https://auth-rg69.orender.com/api/auth/signup`;
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let users = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   };

//   fetch(loginPageAsosyApi, {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json",
//     },
//     body:JSON.stringify(users)
//   })
//     .then((response) => {
//       if (response.status == 200) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       console.log(data,true);
//     })
//     .catch((err) => {
//       console.log(err,false);
//     });
// });






document.addEventListener('DOMContentLoaded', function () {
  let token = localStorage.getItem('token')
  if (!token) {
    window.location.href='pages/login.html'
  }
  
})



