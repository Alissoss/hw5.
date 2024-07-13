/* Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві
*/
const numbers = [1, 2, 3, 4, 5];
const analyzeArray = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return{
        sum:sum,
        average: average,
        min: min,
        max: max
    };
};
console.log(analyzeArray(numbers));