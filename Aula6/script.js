function helloFunc() {
  alert("Alô mundo!!");
}

function formValidation() {
  return true;
}

function testFunc() {
  let a = document.getElementById("name");
  a.value = a.value.toUpperCase();
}

function computerSquare() {
  let n = document.getElementById("integer").value;
  return alert(n * n);
}

function displayForm() {
  let data = "Username: <br> <input type='text' name='name'><br>Comment:";
  data += "<br><textarea rows='6' cols='45'></textarea><br>";
  data += "<input type='submit' value='Contact us'>";
  document.getElementById("area").innerHTML = data;
}


//Início de aula sobre objetos no JS ******************************
const emptyArray = [];
const valueArray = [1, 2, 3, 4, 5];

console.log(valueArray);

const emptyObject = {};
const valueObject = { nome: "Djan Gomes Tavares" };

console.log(valueObject.nome);

const valueObjectAux = {
  nome: "Djan",
  endereco: "Rua Magdeburgo",
  objectAux: { Idade: 43, Sexo: "Masculino" },
  fruta: ["melon", "papaya", "banana"],
  addNumbers: function (a, b) {
    return a + b;
  },
};

console.log(valueObjectAux.nome);
console.log(valueObjectAux.endereco);
console.log(valueObjectAux.objectAux);
console.log(valueObjectAux.fruta);
console.log(valueObjectAux.addNumbers(3, 7));

//Verificando se existe propriedade dentro do objeto
console.log('Existe a chave fruta:', valueObjectAux.hasOwnProperty('fruta'));

//Deletando chave do objeto
delete valueObjectAux.fruta;
console.log(valueObjectAux);

//Verificando se existe propriedade dentro do objeto
console.log('Existe a chave fruta:', valueObjectAux.hasOwnProperty('fruta'));

//Percorrendo um objeto
for (let key in valueObjectAux){
    console.log(key, valueObjectAux[key]);
}

//Arrow function
function addUpTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(addUpTwoNumbers(1,7));

//Reescrevendo a função 'addUpTwoNumbers' para deixa mais simples e transforma-la em função de seta 'arrow function'
const addUpTwoNumbersAux = (num1, num2) => {
    return num1 + num2;
};
console.log(addUpTwoNumbersAux(1,8));

//Reescrevendo para simplificar mais ainda
//   Esse exemplo é quando a função tem apenas uma linha
const addUpTwoNumbersAuxB = (num1, num2) => num1 + num2;
console.log(addUpTwoNumbersAux(1,9));

//Reescrevendo quando o retorno é um objeto
const addUpTwoNumbersObj = (num1, num2) => {
    return ({
                num1,
                num2}
            );
    }
console.log(addUpTwoNumbersObj(3, 4));

//Reescrevendo o código acima para uma linha
let obj = {num1 : 7, num2 : 8};
const addUpTwoNumbersObjAux = ({num1, num2}) => ({num1, num2});
console.log(addUpTwoNumbersObjAux(obj));


//Operador ternário
let nome = 'djan'
console.log(nome === 'djan' ? 'nome correto' : 'nome incorreto');


//Transformação de array - map()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arr.map((value) => value % 2 === 0 ? 'par' : 'ímpar');
console.log(newArr);

//Transformação de array - filter()
//   Filtrando número pares
const newArrPar = arr.filter((value) => value % 2 === 0);

console.log(newArrPar);
//   Filtrando número ímpares
const newArrImpar = arr.filter((value) => value % 2 === 1);
console.log(newArrImpar);

//Transformação de array - reduce
const sum = arr.reduce((total, valorCorrente) => total + valorCorrente, 0);
console.log(sum);

const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
    { id: '🥤', name: 'Big eat', price: 25 },
    { id: '🥤', name: 'Big rice', price: 25 },
    { id: '🥤', name: 'Big beens', price: 25 },
    { id: '🥤', name: 'Big milk', price: 25 },
    ];

    const reduced = items
        .filter(item => item.price > 50)
        .map(item => item.price)
        .reduce((prev, next) => prev + next);
    
    console.log(reduced);

//Desestruturação de array - Desctructuring Array
//   Jeito difícil
const numberOfMoons = [0, 2, 14];
let venus = numberOfMoons[0];
let mars = numberOfMoons[1];
let neptune = numberOfMoons[2];

console.log(venus, mars, neptune);

//   aplicando desestruturação
const [venusAux, marsAux, neptuneAux] = numberOfMoons;
console.log(venusAux, marsAux, neptuneAux);

const countries = [['Finland', 'Helsinki'], ['Sweden','Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries){
    console.log(country, city)
}
for (const [, city] of countries){
    console.log(city)
}
for (const [country,] of countries){
    console.log(country)
}

//Desestruturação de objeto - Desctructuring Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}
let {width, height, area, perimenter} = rectangle;
console.log(width, height, area, perimenter);

let {width:w, height:h, area:a, perimenter:p} = rectangle;
console.log(w, h, a, p);

//outro exemplo
const rect = {
    width: 20,
    height: 10,
};

//tipo antigo
const calculatePerimeter = (rectangle) => {
    return 2 * (rectangle.width, rectangle.height)
}
console.log(calculatePerimeter(rect))

//tipo novo
const calculatePerimeterAux = ({width, height}) => {
    return 2 * (width, height)
}
console.log(calculatePerimeterAux(rect));



//Final de aula sobre objetos no JS ******************************
