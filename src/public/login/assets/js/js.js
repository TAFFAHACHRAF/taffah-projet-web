// function login(){
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
    
//     const url="http://localhost:4000/users/";
//     function show(data) {
//       data.users.forEach(e => {
//         if(e.email===email && e.password===password){
//           sessionStorage.setItem('id_user',e.id);
//           sessionStorage.setItem('role',e.role);
//           if(e.role == "ADMIN"){
//             window.location.href="index.html";
//           }
//           else if(e.role == "AUTHOR"){
//             window.location.href="author/index.html";
//           }
//           else {
//             window.location.href="login.html?authentification_feiled";
//           }
//         }
//         else{
//           alert("uygygzdyyu")
//         }
//       });
//       }
//       $.getJSON(url).then(show);
// }
// /*function getArticles(){
//   const url="http://localhost:4000/article/";

//   $articlesContainer = $("#first");
//   function show(data){
//         data.articles.forEach(e => {
//             const dataContent = `
//                     <tr>
//                     <td>${e.id}</td>
//                     <td>${e.titre}</td>
//                     <td>Web Development</td>
//                     <td>${e.createdAt}</td>
//                     <td>
//                       <a href="details.html" class="btn btn-secondary">
//                         <i class="fas fa-angle-double-right"></i> Details
//                       </a>
//                     </td>
//                   </tr>    
//             `
//             $articlesContainer.before(dataContent);
//         })
//   }
//   $.getJSON(url).then(show);
// }*/