"use strict";

var lista1 = [2, 3, 5, 7];
lista1.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
