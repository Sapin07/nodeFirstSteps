const { DateTime, Interval } = require('luxon');

const agora = DateTime.now();
console.log(agora);

const dataAniv = DateTime.fromFormat('01/02/1998', 'dd/MM/yyyy');
console.log(dataAniv);

const idade = Interval.fromDateTimes(dataAniv, agora).length('years');
console.log(Math.floor(idade));

const isoDate = '2020-11-19T21:22:00-0300';
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300';

console.log(DateTime.fromISO(isoDate).toLocaleString());
console.log(DateTime.fromISO(RFC).toLocaleString());