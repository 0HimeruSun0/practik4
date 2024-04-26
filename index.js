let nam='Alina'
function n(na){
    return 'Привет,'+' '+na+'!'
}
console.log(n(nam));
function isEven(number) {
	let x
	if (number % 2 == 0) {
		x = true;
	} else {
		x = false;
	}
	return x;

}
isEven(10);
console.log(isEven(5));
let person={
	name:'lili',
	age: 12,
	city:'Novgorod'
}
function pers(x,y,z){
    return 'Меня зовут'+' '+x+' '+'мне'+' '+y+' '+'лет. Я живу в городе'+' '+z
}
console.log(pers(person.name,person.age,person.city));
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
sum += numbers[i];
}
console.log(sum);
function rev(str){
	return str.split("").reverse().join("")
}
console.log(rev("Hello"))