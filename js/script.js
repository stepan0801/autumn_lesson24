

// let arr = ['Ваня', 'Іштван',];
// let arrOne = arr;
// arrOne.push('Оля');
// console.log(arr);
// let arrTwoo = arr;
// arrTwoo.splice(1, 1, 'Петро');
// console.log(arr);
// let arrThree = arr.splice(0, 1);
// console.log(arrThree);
// let arrFour = arr;
// arrFour.splice(0, 0, 'Марія', 'Павло');
// console.log(arr);
// let arr = ['Іван', 'Іштван', 'Олья',];
// console.log(arr);
// let newArr = arr.splice(1, 1);
// console.log(arr);
// console.log(newArr);
// let str = 'Ваня, Іштван, Оля';
// let arr = str.split(',');
// console.log(arr);
// let arr = [9, 2, 8,];
// let reduseValue = arr.reduce(function (previousValue, item, index, array) {
// 	console.log(previousValue);
// });
const element = document.querySelector('[data-say-hi="yes"]');
console.log(element);
const secondElement = document.querySelector('ul>li+li');
console.log(secondElement);
const thirdElement = document.getElementsByClassName('like');
console.log(thirdElement);

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);


function setScrollToOptions() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	})
}
setTimeout(setScrollToOptions, 100);


const itemOne = document.querySelector('.functions__task');
const getItemOneCords = itemOne.getBoundingClientRect();
console.log(getItemOneCords);

const itemTwoo = document.querySelector('.array__tittle');
const getItemTwooCords = itemTwoo.getBoundingClientRect();
console.log(getItemTwooCords);

const itemThree = document.querySelector('.dom__container');
const getItemThreeCords = itemThree.getBoundingClientRect();
console.log(getItemThreeCords);