//let arr = [
//  1,
//  2,
//  'dsfsd',
//  3,
//  4,
//  5,
//  'dfvtr',
//  'gfbda',
//  5.5,
//  4.8,
//  9,
//  1.5,
//  7.6,
//  8,
//  9,
//  'sdsdc',
//  'scdsc',
//];
//
//const addToArray = function (arr) {
//  let responseArr = [];
//  responseArr['int'] = [];
//  responseArr['float'] = [];
//  responseArr['string'] = [];
//
//  for (let item of arr) {
//    if (Number.isInteger(item)) {
//      responseArr['int'].push(item);
//    } else if (item % 1 !== 0 && typeof item === 'number') {
//      responseArr['float'].push(item);
//    } else if (typeof item === 'string') {
//      responseArr['string'].push(item);
//    }
//  }
//  return responseArr;
//};
//
//console.log(addToArray(arr));
////////////////////////////
//Семья из мамы, папы и 2 детей хотят попасть в будущее. Но машина времени есть только у соседа.
//  Сосед готов одолжить машину только если ему её вернут обратно. Так же в машину могут одновременно сесть только один взрослый или 2 детей.
//  Нужно вывести пошаговые действия в консоль и так же посчитать количество итераций.
//let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];
/////////// 17.12
//const usdBuy = 28.5;
//const usdSell = 27.5;
//const euroBuy = 32.5;
//const euroSell = 31.5;
//const rubBuy = 0.5;
//const rubSell = 0.3;
//
//const exBuy = (amaunt, currency) => amaunt / currency;
//const exSell = (amaunt, currency) => amaunt * currency;
//
//console.log('Результат обміну ' + exBuy(100, usdBuy));
//console.log('Результат обміну ' + exSell(100, euroSell));
/////////////////////////
//const randomArr = (amount, min, max) => {
//  let num = [];
//  for (let i = 0; i < amount; i++) {
//    num.push(Math.random() * (max - min) + min);
//  }
//  let sumItem = 0;
//  for (let item of num) {
//    sumItem += item;
//  }
//  return sumItem / num.length;
//};
//console.log(randomArr(10, 1, 100));
//randomArr(10, 1, 100);

/////////////////////////////
// <, -, < або >
//const strFn = amount => {
//  let str = '';
//  let randomNumber = 0;
//  for (let i = 0; i < amount; i++) {
//    randomNumber = parseInt(Math.random() * (3 - 1) + 1);
//
//    if (randomNumber === 1) {
//      str += '<';
//    } else if (randomNumber === 2) {
//      str += '>';
//    } else {
//      str += '-';
//    }
//  }
//  return str;
//};
//let randomString = strFn(250);
//const arrowsAmount = str => {
//  const arrowArr = ['<-', '->'];
//  for (let iten of arrowArr) {
//  }
//  str.indexOf('<-');
//};
//console.log(randomString);
//console.log(arrowAmount(randomString));
