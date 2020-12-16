let arr = [
  1,
  2,
  'dsfsd',
  3,
  4,
  5,
  'dfvtr',
  'gfbda',
  5.5,
  4.8,
  9,
  1.5,
  7.6,
  8,
  9,
  'sdsdc',
  'scdsc',
];

const addToArray = function (arr) {
  let responseArr = [];
  responseArr['int'] = [];
  responseArr['float'] = [];
  responseArr['string'] = [];

  for (let item of arr) {
    if (Number.isInteger(item)) {
      responseArr['int'].push(item);
    } else if (item % 1 !== 0 && typeof item === 'number') {
      responseArr['float'].push(item);
    } else if (typeof item === 'string') {
      responseArr['string'].push(item);
    }
  }
  return responseArr;
};

console.log(addToArray(arr));
////////////////////////////
//Семья из мамы, папы и 2 детей хотят попасть в будущее. Но машина времени есть только у соседа.
//  Сосед готов одолжить машину только если ему её вернут обратно. Так же в машину могут одновременно сесть только один взрослый или 2 детей.
//  Нужно вывести пошаговые действия в консоль и так же посчитать количество итераций.
//let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];
