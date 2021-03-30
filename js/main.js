// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// a) отримує текст з параграфа з id "content"


const textP = document.getElementById('content');
// console.log(textP);


//
// b) отримує текст з блоку з id "rules"

const textPar = document.getElementById('rules');
// console.log(textPar);


// c) замініть текст параграфа з id 'content' на будь-який інший


textP.innerText = 'Hello world!';


//
// d) замініть текст параграфа з id 'rules' на будь-який інший

textPar.innerText = 'Ab autem beatae commodi dolor ea eaque eveniet, ex excepturi expedita magnam nam obcaecati officiis pariatur porro quidem sunt totam velit voluptate?';



// e) змініть кожному елементу колір фону на червоний

textP.style.backgroundColor = 'red';

textPar.style.backgroundColor = 'red';




// f) змініть кожному елементу колір тексту на синій


textP.style.color = 'blue';
textPar.style.color = 'blue';


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesT = document.getElementById('rules');
// console.log(rulesT.className);





// h) отримати всі елементи з класом fc_rules

//
let rulesFc = document.getElementsByClassName('fc_rules');
// console.log(rulesFc);



// i) поміняти колір тексту у всіх елементів fc_rules на червоний


for (let i = 0; i < rulesFc.length; i++) {
    rulesFc[i].style.color = 'red';
}




// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку



let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
//
// for (let i = 0; i < users.length; i++) {
//     const userDiv = document.createElement('div');
//
//     userDiv.style.backgroundColor = 'black';
//     userDiv.style.color = 'yellow';
//     userDiv.style.margin = '20px';
//
//     userDiv.innerHTML = `
//     Hello my name is ${users[i].name} <br>
//     I am ${users[i].age} year old <br>
//     My status ${users[i].status} <br>
//     My address ${users[i].address.city}, ${users[i].address.country}, ${users[i].address.street}, ${users[i].address.houseNumber};`
//
//     document.body.appendChild(userDiv);
// }




// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості




for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');
    const usersDiv = document.createElement('div');

    userDiv.style.backgroundColor = 'black';
    userDiv.style.color = 'yellow';
    userDiv.style.margin = '20px';

    userDiv.innerHTML = `
    Hello my name is ${users[i].name} <br>
    I am ${users[i].age} year old <br>
    My status ${users[i].status}`;


    usersDiv.style.backgroundColor = 'red';
    usersDiv.style.color = 'white';
    usersDiv.style.margin = '20px';


    usersDiv.innerHTML = `
    ${users[i].address.city} <br>
    ${users[i].address.country} <br>
    ${users[i].address.street} <br>
    ${users[i].address.houseNumber}`;

    document.body.appendChild(userDiv);
    document.body.appendChild(usersDiv);
}




















