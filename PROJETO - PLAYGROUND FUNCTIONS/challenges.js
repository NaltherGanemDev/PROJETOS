// Desafio 1 - Crie a função compareTrue

const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue (p1, p2) {
  let valor = true;
    if(p1===girafa && p2===elefante) {
      valor = true;
    } else {
      valor = false;
    }
  return valor;
}

compareTrue(macaco, girafa);
// Desafio 2 - Crie a função splitSentence

function splitSentence (string) {
  let valor2 = string.split(' ');
  return valor2;
}
splitSentence('foguete')

// Desafio 3 - Crie a função concatName

function concatName (array) {
  let primeiro = array[0];
  let ultimo = array[(array.length -1)];
  let valor3 = ultimo + ', ' + primeiro;
  
  return valor3;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 4 - Crie a função footballPoints

function footballPoints (p1, p2) {
  let wins = p1*3;
  let ties = p2;
  let total = wins + ties;

  return total;
}

footballPoints(14, 8);

// Desafio 5 - Crie a função highestCount

function maior (valor) {
  let numeroMaior = valor[0]
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] > numeroMaior) {
      numeroMaior = valor[index];
    }
  } return numeroMaior;
}

function highestCount(valor) {
  let numero = maior(valor);
  let repeticoes = 0;
  for (let index = 0; index < valor.length; index += 1) {
    if (numero === valor[index]) {
      repeticoes += 1;
    }
  } return repeticoes;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea (base, altura) {
  let areaTriangulo = (base * altura) / 2;

  return areaTriangulo;
}

calcTriangleArea(10, 50);

function calcRectangleArea (base, altura) {
  let areaRetangulo = base * altura;

  return areaRetangulo;
}

calcRectangleArea(10, 50);

function calcAllAreas(base, altura, form) {

  if (form === 'triângulo') {
    let triangulo = 'O valor da área do triângulo é de: ' + calcTriangleArea(base, altura);
    return triangulo;
  } else if (form === 'retângulo') {
    let retangulo = 'O valor da área do retângulo é de: ' + calcRectangleArea(base, altura);
    return retangulo;
  } else {
    let erro = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
    return erro;
  } 
}

calcAllAreas()

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {

  let c1 = Math.abs(mouse - cat1);
  let c2 = Math.abs(mouse - cat2);

  if (c1 < c2) {
    return 'cat1';
  } else if (c1 > c2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(8, 15, 10));

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz (numeros) {
  let num = [];
  
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      num.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      num.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      num.push('buzz');
    } else {
      num.push('bug!');
    }
  }
  return num;
}

// Desafio 9 - Crie a função encode e a função decode

function encode (code) {
  let cod = code;
  cod = cod.split('a').join('1')
  cod = cod.split('e').join('2')
  cod = cod.split('i').join('3')
  cod = cod.split('o').join('4')
  cod = cod.split('u').join('5')

  return cod;
}

function decode (code) {
 let cod = code;
 cod = cod.split('1').join('a')
 cod = cod.split('2').join('e')
 cod = cod.split('3').join('i')
 cod = cod.split('4').join('o')
 cod = cod.split('5').join('u')

 return cod;
}

// Desafio 10 - Crie a função techList

function techList (array, string) {
 if (array.length === 0) {
  return [];
}

const result = array.sort().map((value) => {
  return {array: value, string: string };
});
  return result;
}


// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
