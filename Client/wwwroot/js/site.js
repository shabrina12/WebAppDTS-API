// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let two = document.querySelector(".two > div:first-child");
let content = document.querySelector(".content-1");

let price = document.querySelector(".price")
let hideBtn = document.querySelector(".hideBtn")
let btn1 = document.querySelector('#btn-1')
let btn2 = document.querySelector('#btn-2')
let btn3 = document.querySelector('#btn-3')

btn1.addEventListener('click', functionOne, false);
btn3.addEventListener('click', functionThree, false);

function functionOne() {
    //var btn = document.getElementById("btn-1");
    //btn.disabled = true;
    btn2.classList.replace('hideBtn', 'show');
    two.style.backgroundColor = "lightblue";
    content.innerHTML = '<strong>WE’RE IN THE BUSINESS OF TRANSFORMING ONLINE BUSINESS.</strong><br /> Taking what’s broken and humanizing, personalizing, and revolutionizing for our customers’ customers. Which means Drift is more than just a technology company.Drift is a connection company. Connecting buyers with sellers and empowering experiences everyone loves.'
}

function functionThree() {
    price.classList.toggle('show');
}

//const animals = [
//    { name: "fluffy", species: "cat", class: { name: "mamalia" } },
//    { name: "Carlo", species: "dog", class: { name: "vertebrata" } },
//    { name: "Ursa", species: "cat", class: { name: "mamalia" } },
//    { name: "Hamilton", species: "dog", class: { name: "vertebrata" } },
//    { name: "Dory", species: "cat", class: { name: "mamalia" } },
//]

//buat sebuah variable array bernama OnlyCat, dimana hasil looping dari animals
//jika species == cat, maka akan di ambil dan di masukkan ke onlyCat
//let onlyCat = [];

//for (var i = 0; i < animals.length; i++) {
//    if (animals[i].species === 'cat') {
//        onlyCat.push(animals[i]);
//    }
//    else if (animals[i].species === 'dog') {
//        animals[i].class.name = 'non-mamalia';
//    }
//}
//console.log(onlyCat);
//console.log(animals);