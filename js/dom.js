// let boton = document.getElementById("btn");
// let titulo = document.getElementsByClassName("title");

let boton = document.querySelector("#btn");
let titulo = document.querySelector(".title");
let titulos = document.querySelectorAll(".title");
let mainTitle = document.querySelectorAll("#box-title .title");

console.log(boton);
console.log(titulo);
console.log(titulos);
console.log(mainTitle);

//RECORRER UN ARRAY DE VARIOS ELEMENTOS HTML
for (let i = 0; i < titulos.length; i++) {
  console.log(titulos[i].innerText);
}

//CREAR ELEMENTOS HTML CON JS

let buttonsContainer = document.getElementById("buttons");

boton.addEventListener("click", function() {
  let secondContainer = document.createElement("div");
  secondContainer.setAttribute("id", "second-container");
  buttonsContainer.appendChild(secondContainer);

  let text = "Me agregaron desde Js";

  let containerTitle = document.createElement("h3");
  containerTitle.innerText = text;
  secondContainer.appendChild(containerTitle);
});


var table = document.getElementById('users-table');
var head = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0];
var tBody = document.getElementById('users-table').getElementsByTagName('tbody')[1];

//Styles
table.style.fontFamily = 'Arial, Helvetica, sans-serif';
table.style.borderCollapse = 'collapse';
table.style.width = '100%';



head.style.border = '1px solid #ddd';
head.style.background = '#04AA6D';


for(let i = 0; i < users.length; i++){
    if(users[i].email.split('@')[1] === 'academlo.com'){

        var row = tBody.insertRow(0); 

        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var ageCell = row.insertCell(2);
        var genderCell = row.insertCell(3);
        var socialCell = row.insertCell(4);
        
        const name = document.createTextNode(users[i].name);
        const email = document.createTextNode(users[i].email);
        const age = document.createTextNode(users[i].age);
        const gender = document.createTextNode(users[i].gender);
         
        nameCell.appendChild(name);
        emailCell.appendChild(email);
        ageCell.appendChild(age);
        genderCell.appendChild(gender);

        
        users[i].social.forEach(element => {
            const socialElement = document.createElement("STRONG")
            socialElement.innerHTML = `<a href="${element.url}">${element.name}</a> `
            socialCell.appendChild(socialElement);
        });
        
    }
    
    
}
