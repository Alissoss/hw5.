/*Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
 у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
 */
 const inputStrings = ["hey", "thIs", "homeWOrk", "iS", "dONe"];
 const capitalizeStrings = (strings) => {
return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
 };
 console.log(capitalizeStrings(inputStrings));
