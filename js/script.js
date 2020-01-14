arrayNum = numArrayGen(1, 100);
randomArray = pickFromArray(arrayNum, 16);

function numArrayGen(min, max) {
  var arrayNum = [];
  for (var i = min; i <= max; i++) {
  arrayNum.push(i);
  }
  return arrayNum;
}
function pickFromArray(array, num) {
  var randomArray = [];
  for (var i = 1; i <= num; i++) {
    var randomNum = Math.floor(Math.random() * array.length);
    randomArray.push(array[randomNum]);
    array.splice(randomNum, 1);
  }
  return randomArray;
}
console.log(randomArray);


var trovato = false;
var y = 0;
do {
  var NumeroScelto = prompt('Scegli un numero da 1 a 100');
  var j = 0;
  do {
    if (NumeroScelto == randomArray[j] ) {
       trovato = true;
    }
    j++;
  } while (trovato == false && j < 16);
  y++;
} while (trovato == false && y < 84);

if (trovato == false) {
  alert('hai vinto');
}
