/*Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, 
що містить елементи, які є в обох вихідних масивах.
*/
const array1 = ["I", "will", "force", "be", "back", "you"];
const array2 =["Fire", "I", "cat", "will", "thunder", "be", "back"];
const findCommonElements = (array1, array2) => {
    const set2 = new Set(array2);
    return array1.filter(element =>set2.has(element));
};
console.log(findCommonElements(array1, array2));