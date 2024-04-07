// Функция для проверки длины строки

/*
Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.
*/

const checkStringLength = (string, maxLenght) => string.length <= maxLenght;

checkStringLength('gate', 5);


// Функция для проверки, является ли строка палиндромом

const checkPalindrome = (string) => {

  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let newString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];

  }
  return newString === normalizedString;
};

checkPalindrome('анна');


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.

/*
Например:
имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN

Предусмотрите случай, когда вместо строки приходит число. Возвращать функция по-прежнему должна только целые положительные числа:
имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15

цикл — для перебора полученной строки,
функция parseInt() — для превращения в число отдельных символов и результирующей строки,
функция Number.isNaN() — чтобы проверить, получилось ли превратить символ в число,
метод toString() — на случай, если в качестве параметра пришло число.
*/

const getNumber = (string) => {

  string = string.toString();
  let newString = '';

  if (string === Number) {
    string = string.toString;
  }


  for (let i = 0; i <= string.length; i++) {
    const symbol = parseInt(string[i], 10);
    newString += symbol;

    return newString;
  }


};

getNumber('2023 год');
