'use strict';


// array

//Задача №2
let users = ['Іван', 'Іштван',];
console.log(users);
users.push('Оля');
console.log(users);
let findUsersItem = users.indexOf('Іштван');
users.splice(findUsersItem, 1, 'Петро');
console.log(users);
console.log(users.splice(0, 1));
users.unshift('Маша', 'Паша');
console.log(users);

// Задача №3
let arr = ['Іван', 'Іштван', 'Оля',];
let deletesItem = arr.splice(1, 1);
console.log(deletesItem);

// Задача №4
let str = 'Іван,Іштван,Оля';
let arrStr = str.split(',');
console.log(arrStr);

// DOM

// Задача №1
let elementSetHi = document.querySelector('p[data-say-hi]');
console.log(elementSetHi.getAttribute('data-say-hi'));

// Задача №2
let ion = document.querySelector('ul li:last-child');
console.log(ion);

//Задача №3
let liked = document.querySelectorAll('.like');
console.log(liked);

// кординати та прокрутка

// Задача №1
const width = document.documentElement;
const mainWidth = width.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);





